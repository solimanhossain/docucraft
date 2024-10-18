import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { remark } from "remark";
import html from "remark-html";

const postDir = path.join(process.cwd(), "docs");

function getDocs() {
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
                // content: matterResults.content,
            };
        });

    return allDocs.sort((a, b) => {
        if (a.order < b.order) {
            return -1;
        }
        if (a.order > b.order) {
            return 1;
        }
        return 0;
    });
}

function getDocContent(id) {
    const fullPath = path.join(postDir, `${id}.md`);
    if (fs.existsSync(fullPath) === false) {
        return null;
    }
    const docContents = fs.readFileSync(fullPath, "utf8");
    const matterResults = matter(docContents);

    const processedContent = remark()
        .use(html)
        .processSync(matterResults.content);
    const htmlContent = processedContent.toString();

    return {
        id,
        content: htmlContent,
        ...matterResults.data,
    };
}

export { getDocs, getDocContent };
