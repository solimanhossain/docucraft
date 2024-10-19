import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SearchList({ results, query, querySet, resultsSet }) {
    const router = useRouter();

    function handleClick(e, id) {
        e.preventDefault();
        querySet("");
        resultsSet(null);
        router.push(`/docs/${id}`);
    }

    return (
        <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
            <div className=" border border-gray-100 rounded-sm">
                <p className="!text-xs bg-gray-100 p-2 rounded-t-sm">
                    Showing results for
                    <span className="mx-2 text-base font-semibold">
                        {query}
                    </span>
                    :
                </p>
                <ul role="list" className="divide-y divide-gray-100">
                    {results.map((result) => (
                        <li
                            key={result.id}
                            onClick={(e) => handleClick(e, result.id)}
                            className="p-2 hover:text-emerald-600 hover:bg-emerald-50 cursor-pointer rounded-sm"
                        >
                            <Link
                                href={`/docs/${result.id}`}
                                className="transition-all duration-300 font-medium"
                            >
                                {result.title}
                                <span className="text-xs capitalize pl-1 font-extralight">
                                    | Author: {result.author}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
