"use client";

import Image from "next/image";
import { useState } from "react";
import SearchList from "./SearchList";
import useDebounce from "@/hooks/useDebounce";

export default function SearchButton({ docs }) {
    const [searchResults, setSearchResults] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const doSearch = useDebounce((query) => {
        if (!query) {
            setSearchResults(null);
            return;
        }
        const results = docs.filter(
            (doc) =>
                doc.title.toLowerCase().includes(query) ??
                doc.category.toLowerCase().includes(query) ??
                doc.author.toLowerCase().includes(query)
            // ?? doc.tags.map((tag) => tag.toLowerCase()).includes(query)
            //?? doc.content.toLowerCase().includes(query)
        );
        setSearchResults(results);
    }, 300);

    return (
        <div className="relative hidden lg:block lg:max-w-md lg:flex-auto">
            <button
                type="button"
                className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
            >
                <Image
                    src="/assets/icons/search.svg"
                    alt="Search"
                    className="h-5 w-5"
                    width={32}
                    height={32}
                />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) => {
                        setSearchQuery(event.target.value);
                        doSearch(event.target.value.toLowerCase());
                    }}
                    placeholder="Search..."
                    className="flex-1 focus:border-none focus:outline-none"
                />
                <kbd className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
                    <kbd className="font-sans">Ctrl </kbd>
                    <kbd className="font-sans">F</kbd>
                </kbd>
            </button>

            {searchResults && (
                <SearchList
                    query={searchQuery}
                    results={searchResults}
                    querySet={setSearchQuery}
                    resultsSet={setSearchResults}
                />
            )}
        </div>
    );
}
