import Image from "next/image";

export default function HeadBar() {
    return (
        <div class="container flex h-14 items-center justify-between gap-12">
            <div class="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>
            <div class="relative hidden lg:block lg:max-w-md lg:flex-auto">
                <button
                    type="button"
                    class="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
                >
                    <Image
                        src="/assets/icons/search.svg"
                        alt="Search"
                        class="h-5 w-5"
                        width={32}
                        height={32}
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        class="flex-1 focus:border-none focus:outline-none"
                    />
                    <kbd class="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
                        <kbd class="font-sans">Ctrl </kbd>
                        <kbd class="font-sans">K</kbd>
                    </kbd>
                </button>
            </div>
        </div>
    );
}
