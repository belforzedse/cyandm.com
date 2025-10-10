"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import type { NavigationItem } from "../data/types";
import { contact, navigation } from "../data/global";
import { useModal } from "./ModalProvider";

const DEFAULT_START_COLOR = "#15EDED";
const DEFAULT_END_COLOR = "#04B2E9";

type HeaderProps = {
  startColor?: string;
  endColor?: string;
};

type NavigationTree = NavigationItem & {
  normalizedHref: string;
  children?: NavigationTree[];
};

type MobileExpandedState = Record<string, boolean>;

function normalizePath(value?: string | null) {
  if (!value) return "/";
  const base = value.split(/[?#]/)[0] ?? "/";
  if (base === "/") return "/";
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

function buildTree(items: NavigationItem[]): NavigationTree[] {
  return items.map((item) => ({
    ...item,
    normalizedHref: normalizePath(item.href),
    children: item.children ? buildTree(item.children) : undefined,
  }));
}

function Logo() {
  return (
    <div className="logo" aria-hidden>
      <svg viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.023 11.8318V0C22.4035 0 25.3614 3.16923 25.3614 5.07077V11.1979C25.3614 13.522 24.1054 15.4236 22.1922 15.4236C20.0794 15.4236 19.023 13.0995 19.023 11.8318ZM25.784 12.0431V0.211269C29.1645 0.211269 32.1225 3.3805 32.1225 5.28203V11.4092C32.1225 13.7333 30.8665 15.6348 28.9532 15.6348C26.8404 15.6348 25.784 13.3107 25.784 12.0431ZM9.30395 9.93026C9.13492 2.49314 15.9946 0.140867 19.023 0C17.5531 1.24845e-05 14.9251 0.0575342 12.4116 0.112551C10.1078 0.162975 7.90025 0.211295 6.76859 0.211294C3.81071 0.211292 0.233279 2.75057 0.00762559 9.29642C-0.203595 15.4236 4.02066 17.959 6.76859 17.959C8.22591 17.959 12.1542 18.0986 15.4949 18.2173C16.6549 18.2585 17.7441 18.2973 18.6343 18.3267C19.1544 18.3665 19.6422 18.3815 20.0793 18.3815H20.7056C21.4405 18.3815 21.9557 19.1389 22.5794 20.0561C23.5697 21.5121 24.8337 23.3706 27.6855 23.241C31.4041 23.072 32.052 19.9309 31.9111 18.3815H20.7056C20.3926 18.3815 19.6406 18.36 18.6343 18.3267C14.8816 18.0395 9.4524 16.4622 9.30395 9.93026Z"
          fill="url(#gradientSection)"
        />
        <defs>
          <linearGradient
            id="gradientSection"
            x1="13.4148"
            y1="-6.60438"
            x2="19.1224"
            y2="42.7868"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0634354" stopColor="var(--start-color)" />
            <stop offset="1" stopColor="var(--end-color)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-2.6-2.6" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.32-6.32A19.79 19.79 0 0 1 2 5.18 2 2 0 0 1 4 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.89 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.19-1.19a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.89.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      width="44"
      height="44"
      rx="22"
      fill="url(#mobileMenuToggleGradient)"
      fillOpacity="0.1"
    />
    <rect
      x="0.5"
      y="0.5"
      width="43"
      height="43"
      rx="21.5"
      stroke="#FBFBFB"
      strokeOpacity="0.16"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5385 16.7789C13.5385 15.2212 14.8012 13.9584 16.359 13.9584C17.9167 13.9584 19.1795 15.2212 19.1795 16.7789C19.1795 18.3366 17.9167 19.5994 16.359 19.5994C14.8012 19.5994 13.5385 18.3366 13.5385 16.7789ZM16.359 12.4199C13.9516 12.4199 12 14.3715 12 16.7789C12 19.1863 13.9516 21.1379 16.359 21.1379C18.7664 21.1379 20.7179 19.1863 20.7179 16.7789C20.7179 14.3715 18.7664 12.4199 16.359 12.4199ZM24.8205 16.7789C24.8205 15.2212 26.0833 13.9584 27.641 13.9584C29.1988 13.9584 30.4615 15.2212 30.4615 16.7789C30.4615 18.3366 29.1988 19.5994 27.641 19.5994C26.0833 19.5994 24.8205 18.3366 24.8205 16.7789ZM27.641 12.4199C25.2336 12.4199 23.2821 14.3715 23.2821 16.7789C23.2821 19.1863 25.2336 21.1379 27.641 21.1379C30.0484 21.1379 32 19.1863 32 16.7789C32 14.3715 30.0484 12.4199 27.641 12.4199ZM16.359 25.2404C14.8012 25.2404 13.5385 26.5032 13.5385 28.0609C13.5385 29.6187 14.8012 30.8815 16.359 30.8815C17.9167 30.8815 19.1795 29.6187 19.1795 28.0609C19.1795 26.5032 17.9167 25.2404 16.359 25.2404ZM12 28.0609C12 25.6535 13.9516 23.702 16.359 23.702C18.7664 23.702 20.7179 25.6535 20.7179 28.0609C20.7179 30.4683 18.7664 32.4199 16.359 32.4199C13.9516 32.4199 12 30.4683 12 28.0609ZM27.641 23.702C25.2336 23.702 23.2821 25.6535 23.2821 28.0609C23.2821 30.4683 25.2336 32.4199 27.641 32.4199C30.0484 32.4199 32 30.4683 32 28.0609C32 25.6535 30.0484 23.702 27.641 23.702ZM24.8205 28.0609C24.8205 26.5032 26.0833 25.2404 27.641 25.2404C29.1988 25.2404 30.4615 26.5032 30.4615 28.0609C30.4615 29.6187 29.1988 30.8815 27.641 30.8815C26.0833 30.8815 24.8205 29.6187 24.8205 28.0609Z"
      fill="#A6B2B9"
    />
    <defs>
      <linearGradient
        id="mobileMenuToggleGradient"
        x1="22"
        y1="0"
        x2="22"
        y2="44"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0.22" />
        <stop offset="1" stopColor="white" stopOpacity="0.25" />
      </linearGradient>
    </defs>
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

function DesktopMenu({
  tree,
  pathname,
}: {
  tree: NavigationTree[];
  pathname: string;
}) {
  return (
    <nav className="header-menu desktop-menu" aria-label="منوی اصلی">
      <ul className="menu">
        {tree.map((item) => {
          const hasChildren = Boolean(item.children?.length);
          const isExact = pathname === item.normalizedHref;
          const isParent =
            !isExact &&
            item.children?.some((child) =>
              child.normalizedHref === "/"
                ? pathname === child.normalizedHref
                : pathname.startsWith(child.normalizedHref)
            );

          const itemClassName = clsx("menu-item", {
            "menu-item-has-children": hasChildren,
            "current-menu-item": isExact,
            "current-menu-parent": isParent,
          });

          return (
            <li key={item.href} className={itemClassName}>
              <Link href={item.href} className="menu-link">
                <span>{item.label}</span>
                {hasChildren && (
                  <span className="submenu-indicator" aria-hidden="true">
                    <ChevronIcon />
                  </span>
                )}
              </Link>
              {hasChildren && (
                <ul className="sub-menu">
                  {item.children!.map((child) => (
                    <li key={child.href} className="menu-item">
                      <Link href={child.href}>{child.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function Header({
  startColor = DEFAULT_START_COLOR,
  endColor = DEFAULT_END_COLOR,
}: HeaderProps) {
  const pathname = normalizePath(usePathname());
  const tree = useMemo(() => buildTree(navigation), []);
  const { open } = useModal();
  const phoneNumber = contact.phoneNumbers?.[0] ?? "";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<MobileExpandedState>({});
  const headerRef = useRef<HTMLElement | null>(null);

  const headerStyle = useMemo(
    () =>
      ({
        "--start-color": startColor,
        "--end-color": endColor,
      } as CSSProperties),
    [startColor, endColor]
  );

  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "fa";
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const headerElement = headerRef.current;
    if (!headerElement) return;

    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerElement.offsetHeight}px`
      );
    };

    updateHeight();

    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(updateHeight);
      observer.observe(headerElement);
      return () => {
        observer.disconnect();
      };
    }

    const interval = window.setInterval(updateHeight, 500);
    return () => {
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded({});
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      setMobileExpanded({});
    }
  }, [mobileOpen]);

  const toggleMobileItem = (key: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleMobileNavigate = () => {
    setMobileOpen(false);
  };

  const renderMobileTree = (items: NavigationTree[]) =>
    items.map((item) => {
      const hasChildren = Boolean(item.children?.length);
      const isExact = pathname === item.normalizedHref;
      const isParent =
        !isExact &&
        item.children?.some((child) =>
          child.normalizedHref === "/"
            ? pathname === child.normalizedHref
            : pathname.startsWith(child.normalizedHref)
        );
      const itemKey = item.normalizedHref || item.href;
      const isExpanded = mobileExpanded[itemKey] ?? false;

      const itemClassName = clsx("menu-item", {
        "menu-item-has-children": hasChildren,
        "current-menu-item": isExact,
        "current-menu-parent": isParent,
      });

      return (
        <li
          key={item.href}
          className={itemClassName}
          data-active={hasChildren && isExpanded ? "true" : undefined}
        >
          {hasChildren ? (
            <button
              type="button"
              className="menu-link"
              onClick={() => toggleMobileItem(itemKey)}
            >
              <span>{item.label}</span>
              <span className="submenu-indicator" aria-hidden="true">
                <ChevronIcon />
              </span>
            </button>
          ) : (
            <Link
              href={item.href}
              className="menu-link"
              onClick={handleMobileNavigate}
            >
              {item.label}
            </Link>
          )}
          {hasChildren && (
            <div className="grid-wrapper">
              <ul className="sub-menu">
                {item.children!.map((child) => (
                  <li key={child.href} className="menu-item">
                    <Link href={child.href} onClick={handleMobileNavigate}>
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      );
    });

  const mobileToggleLabel = mobileOpen
    ? "بستن منوی موبایل"
    : "باز کردن منوی موبایل";

  return (
    <header ref={headerRef} className="container" style={headerStyle}>
      <div className="right-col">
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          <span className="sr-only">{mobileToggleLabel}</span>
        </button>
        <Link href="/" aria-label="لوگو">
          <Logo />
        </Link>
        <DesktopMenu tree={tree} pathname={pathname} />
      </div>

      <div className="left-col">
        <button
          type="button"
          className="primary-btn"
          onClick={() => open("make-project")}
        >
          یه پروژه بساز
        </button>
        <Link href="/search" className="search-link" aria-label="جستجو">
          <i className="icon-search"></i>
        </Link>
        {phoneNumber && (
          <a href={`tel:${phoneNumber}`} className="icon-btn" aria-label="تماس">
            <i className="icon-call"></i>
          </a>
        )}
      </div>
      <div
        className="mobile-menu"
        id="mobile-menu"
        data-active={mobileOpen ? "true" : undefined}
      >
        <div className="mobile-menu-actions">
          <button
            type="button"
            className="primary-btn"
            onClick={() => {
              open("make-project");
              setMobileOpen(false);
            }}
          >
            یه پروژه بساز
          </button>
          {phoneNumber && (
            <a href={`tel:${phoneNumber}`} className="phone-link">
              <PhoneIcon className="icon-call" />
              <span>{phoneNumber}</span>
            </a>
          )}
        </div>
        <nav className="mobile-menu-nav" aria-label="منوی اصلی موبایل">
          <ul className="menu">{renderMobileTree(tree)}</ul>
        </nav>
      </div>
    </header>
  );
}
