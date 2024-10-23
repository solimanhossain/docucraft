import PageContent from "@/components/PageContent";
import { getDocContent, getDocs } from "@/lib/docs";
import { getFilterByCategory } from "@/utils/filterBy";

export default function CategoryPage({ params: { name } }) {
    const allDocs = getDocs();
    const categoryDocs = getFilterByCategory(allDocs, name);
    const docContents = getDocContent(categoryDocs[0].id);
    if (!docContents) {
        notFound();
    }

    return <PageContent docContents={docContents} />;
}
