import Link from "next/link";

export default function NotFound() {
    return (
        <div className="prose dark:prose-invert">
            <h1 className="text-3xl font-bold text-red-700">Not Found!</h1>
            <p>Could not find requested page.</p>
            <Link
                className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-100  transition duration-500 no-underline"
                href="/"
            >
                ↩ Return Home
            </Link>
        </div>
    );
}
