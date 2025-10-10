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
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
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

  return (
    <header ref={headerRef} className="container" style={headerStyle}>
      <div className="right-col">
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
          <SearchIcon className="icon-search" />
        </Link>
        {phoneNumber && (
          <a href={`tel:${phoneNumber}`} className="icon-btn" aria-label="تماس">
            <PhoneIcon className="icon-call" />
          </a>
        )}
      </div>
    </header>
  );
}
