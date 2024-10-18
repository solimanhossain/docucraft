import Link from "next/link";
import { getDocContent } from "@/lib/docs";
import { notFound } from "next/navigation";
import Gradient from "@/components/Gradient";

export default function DocPage({ params: { docId } }) {
    const id = docId[1] ?? docId[0];
    const docContents = getDocContent(id);
    if (!docContents) {
        notFound();
    }

    return (
        <article className="prose dark:prose-invert">
            <Gradient />

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
