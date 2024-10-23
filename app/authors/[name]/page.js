import PageContent from "@/components/PageContent";
import { getDocContent, getDocs } from "@/lib/docs";
import { getFilterByAuthor } from "@/utils/filterBy";

export default function AuthorPage({ params: { name } }) {
    const allDocs = getDocs();
    const authorDocs = getFilterByAuthor(allDocs, name);
    const docContents = getDocContent(authorDocs[0].id);
    if (!docContents) {
        notFound();
    }

    return <PageContent docContents={docContents} />;
}
