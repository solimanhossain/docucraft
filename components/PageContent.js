import Link from "next/link";

export default function PageContent({ docContents }) {
    return (
        <article className="prose dark:prose-invert">
            <h1>{docContents.title}</h1>

            <div>
                <span>Published On: {docContents.date}</span>
                {" by "}
                <Link href={`/authors/${docContents.author}`}>
                    {docContents.author}
                </Link>
                {" under the "}
                <Link href={`/categories/${docContents.category}`}>
                    {docContents.category}
                </Link>
                {" category."}
            </div>

            <div>
                {docContents.tags.map((tag) => (
                    <Link
                        key={tag}
                        href={`/tags/${tag}`}
                        className="bg-emerald-100 dark:bg-emerald-600 p-1 rounded-sm mr-2 text-xs"
                    >
                        {tag}
                    </Link>
                ))}
            </div>

            <div
                className=" lead"
                dangerouslySetInnerHTML={{
                    __html: docContents.content,
                }}
            />
        </article>
    );
}
