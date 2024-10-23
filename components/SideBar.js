"use client";

import useDocFilterHook from "@/hooks/useDocFilter";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideBar({ docs }) {
    const pathName = usePathname();
    const path = pathName.split("/");

    const [parentsDocs, childDocs] = useDocFilterHook(docs, pathName);

    return (
        <ul role="list" className="border-l relative mt-3">
            {parentsDocs.map((parentList) => (
                <li key={parentList.id} className="relative">
                    {path[1].toLowerCase() === "docs" &&
                        path[2].toLocaleLowerCase() === parentList.id && (
                            <div className="absolute h-full w-px bg-emerald-500"></div>
                        )}
                    <Link
                        aria-current="page"
                        className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                        href={`/docs/${parentList.id}`}
                    >
                        <span className="truncate">{parentList.title}</span>
                    </Link>
                    {childDocs[parentList.id] && (
                        <ul role="list" className="border-l border-transparent">
                            {childDocs[parentList.id].map((chilList) => (
                                <li key={chilList.id}>
                                    <Link
                                        className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                        href={`/docs/${parentList.id}/${chilList.id}`}
                                    >
                                        <span className="truncate">
                                            ▪ {chilList.title}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}
