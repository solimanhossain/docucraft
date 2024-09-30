import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = path.join(process.cwd(), "docs");

export function getDoc() {
    const fileNames = fs.readdirSync(postDir);

    const allDocs = fileNames
        .filter((docFile) => docFile.endsWith(".md"))
        .map((docFile) => {
            const id = docFile.replace(/\.md$/, "");
            const fullPath = path.join(postDir, docFile);
            const docContents = fs.readFileSync(fullPath, "utf8");

            const matterResults = matter(docContents);
            return {
                id,
                ...matterResults.data,
                content: matterResults.content,
            };
        });

    // console.log(allDocs);
    return allDocs;
}
