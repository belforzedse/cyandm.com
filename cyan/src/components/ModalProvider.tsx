"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";
import { MakeProjectModal } from "./MakeProject";
import { PopupModal } from "./Popup";
import type { PopupPayload } from "./Popup";

type ModalId = "make-project" | "popup";

type ModalState = {
  id: ModalId | null;
  payload?: PopupPayload;
};

type ModalContextValue = {
  open: (id: ModalId, payload?: PopupPayload) => void;
  close: () => void;
  id: ModalId | null;
  isOpen: boolean;
  payload?: PopupPayload;
};

const ModalContext = createContext<ModalContextValue | null>(null);

function ModalViewport({ modal, close }: { modal: ModalState; close: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!modal.id || typeof document === "undefined") {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [modal.id]);

  if (!mounted || !modal.id) {
    return null;
  }

  const renderContent = (): ReactNode => {
    switch (modal.id) {
      case "make-project":
        return <MakeProjectModal onClose={close} />;
      case "popup":
        return <PopupModal onClose={close} payload={modal.payload} />;
      default:
        return null;
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" onClick={close} />
      <div className="relative z-10 w-full max-w-2xl px-6">
        {renderContent()}
      </div>
    </div>,
    document.body
  );
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalState>({ id: null });

  const close = useCallback(() => setModal({ id: null }), []);
  const open = useCallback<ModalContextValue["open"]>((id, payload) => {
    setModal({ id, payload });
  }, []);

  const value = useMemo<ModalContextValue>(
    () => ({
      open,
      close,
      id: modal.id,
      isOpen: modal.id !== null,
      payload: modal.payload,
    }),
    [close, modal.id, modal.payload, open]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <ModalViewport modal={modal} close={close} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }

  return context;
}
