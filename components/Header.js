import Image from "next/image";
import Logo from "./Logo";
import HeadBar from "./HeadBar";

export default function Header() {
    return (
        <header className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
            <Logo />
            <div
                className="fixed inset-x-0 top-0 z-50 bg-white bg-white/[var(--bg-opacity-light)] px-4 backdrop-blur-sm transition dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80"
                style={{ "--bg-opacity-light": 0.5, "--bg-opacity-dark": 0.2 }}
            >
                <HeadBar />
            </div>
        </header>
    );
}
