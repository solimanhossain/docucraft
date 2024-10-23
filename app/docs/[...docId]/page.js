import { getDocContent } from "@/lib/docs";
import { notFound } from "next/navigation";
import PageContent from "@/components/PageContent";

export default function DocPage({ params: { docId } }) {
    const id = docId[1] ?? docId[0];
    const docContents = getDocContent(id);
    if (!docContents) {
        notFound();
    }

    return <PageContent docContents={docContents} />;
}
