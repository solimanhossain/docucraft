function getFilterByCategory(docs, category) {
    return docs.filter((doc) => doc.category === category);
}

function getFilterByAuthor(docs, author) {
    return docs.filter((doc) => encodeURI(doc.author) === author);
}

function getFilterByTag(docs, tag) {
    return docs.filter((doc) => doc.tags.some((inputTag) => inputTag === tag));
}

export { getFilterByCategory, getFilterByAuthor, getFilterByTag };
