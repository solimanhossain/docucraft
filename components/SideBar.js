import { groupBy } from "@/lib/groupBy";
import Link from "next/link";

export default function SideBar({ docs }) {
    const parentsDocs = docs.filter((doc) => !doc.parent);

    const childDocs = groupBy(
        docs.filter((doc) => doc.parent),
        ({ parent }) => parent
    ); //  Object.groupBy

    return (
        <nav className="hidden lg:mt-10 lg:block">
            <ul role="list" className="border-l border-transparent">
                <div className="relative mt-3 pl-2">
                    <div className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"></div>
                    <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                    <div className="absolute left-2 h-6 w-px bg-emerald-500"></div>
                    {parentsDocs.map((parentList) => (
                        <li key={parentList.id} className="relative">
                            <Link
                                aria-current="page"
                                className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                                href={`/docs/${parentList.id}`}
                            >
                                <span className="truncate">
                                    {parentList.title}
                                </span>
                            </Link>
                            {childDocs[parentList.id] && (
                                <ul
                                    role="list"
                                    className="border-l border-transparent"
                                >
                                    {childDocs[parentList.id].map(
                                        (chilList) => (
                                            <li key={chilList.id}>
                                                <Link
                                                    className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                    href={`/docs/${parentList.id}/${chilList.id}`}
                                                >
                                                    <span className="truncate">
                                                        ‣ {chilList.title}
                                                    </span>
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </li>
                    ))}
                </div>
            </ul>
        </nav>
    );
}
