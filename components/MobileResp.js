"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SideBar from "./SideBar";
import SearchButton from "./SearchButton";

export default function MobileResp({ docs }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex items-center gap-5 lg:hidden">
            <button
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                aria-label="Toggle navigation"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <Image
                    src="/assets/icons/hamburger.svg"
                    className="w-auto h-auto py-2"
                    alt="Menu"
                    width={10}
                    height={32}
                />
            </button>
            <Link aria-label="Home" href="/">
                <Image
                    src="/assets/icons/logo.svg"
                    alt="Protocol"
                    className="h-6 w-auto"
                    width={32}
                    height={32}
                />
            </Link>

            {menuOpen && (
                <nav className="absolute top-14 left-0 z-50 w-full bg-white dark:bg-[#17181C] shadow-lg">
                    <ul className="flex flex-col p-4">
                        <li>
                            <SideBar docs={docs} />
                        </li>
                        <li>
                            <SearchButton docs={docs} />
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
}
