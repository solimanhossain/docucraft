import PageContent from "@/components/PageContent";
import { getDocContent, getDocs } from "@/lib/docs";
import { getFilterByTag } from "@/utils/filterBy";

export default function TagPage({ params: { name } }) {
    const allDocs = getDocs();
    const tagDocs = getFilterByTag(allDocs, name);
    const docContents = getDocContent(tagDocs[0].id);
    if (!docContents) {
        notFound();
    }

    return <PageContent docContents={docContents} />;
}
