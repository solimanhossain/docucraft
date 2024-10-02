import { getDocs } from "@/lib/docs";

export default function DocPage({ params: { docId } }) {
    const docs = getDocs();
    const id = docId[1] ?? docId[0];
    const docPageContents = docs.filter((doc) => doc.id === id);

    return (
        <main className="relative px-4 pt-14 sm:px-6 lg:px-8">
            <div className="flex-auto py-16">
                <div className="m-8 p-4 border">
                    <h1 className="capitalize text-2xl p-2">{id}</h1>
                    <p className="m-4">{docPageContents[0].content}</p>
                </div>
            </div>
        </main>
    );
}
