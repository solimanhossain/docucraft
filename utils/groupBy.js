// https://stackoverflow.com/a/49357139/20263994

export const groupBy = (collection, iteratee = (x) => x) => {
    const it =
        typeof iteratee === "function"
            ? iteratee
            : ({ [iteratee]: prop }) => prop;

    const array = Array.isArray(collection)
        ? collection
        : Object.values(collection);

    return array.reduce((r, e) => {
        const k = it(e);
        r[k] = r[k] || [];
        r[k].push(e);

        return r;
    }, {});
};
