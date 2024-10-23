import { useState, useEffect } from "react";
import { groupBy } from "@/utils/groupBy"; // Object.groupBy
import {
    getFilterByCategory,
    getFilterByTag,
    getFilterByAuthor,
} from "@/utils/filterBy";

export default function useDocFilterHook(docs, pathName) {
    const [rootNodes, setRootNodes] = useState([]);
    const [nonRootNodesGrouped, setNonRootNodesGrouped] = useState({});

    useEffect(() => {
        let matchedDocs = docs;

        // Filter documents based on the current pathname
        if (pathName.includes("/tags")) {
            const tag = pathName.split("/")[2];
            matchedDocs = getFilterByTag(docs, tag);
        } else if (pathName.includes("/authors")) {
            const author = pathName.split("/")[2];
            matchedDocs = getFilterByAuthor(docs, author);
        } else if (pathName.includes("/categories")) {
            const category = pathName.split("/")[2];
            matchedDocs = getFilterByCategory(docs, category);
        }

        // Separate root and non-root nodes
        const roots = matchedDocs.filter((post) => !post.parent);
        const nonRoots = groupBy(
            matchedDocs.filter((post) => post.parent),
            ({ parent }) => parent
        );

        // Ensure all non-root parents are present in the root nodes
        const nonRootsKeys = Reflect.ownKeys(nonRoots);
        nonRootsKeys.forEach((key) => {
            const foundInRoots = roots.find((root) => root.id === key);
            if (!foundInRoots) {
                const foundInDocs = docs.find((doc) => doc.id === key);
                if (foundInDocs) roots.push(foundInDocs);
            }
        });

        // Sort roots by order
        roots.sort((a, b) => a.order - b.order);

        // Update state
        setRootNodes([...roots]);
        setNonRootNodesGrouped({ ...nonRoots });
    }, [pathName, docs]);

    return [rootNodes, nonRootNodesGrouped];
}
