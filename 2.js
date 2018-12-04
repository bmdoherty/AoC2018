const hasLetterCount = (count) => {
    return (str) => {
        let boxID = str.trim().split("");
        let seen = {};

        for (let i = 0; i < boxID.length; i++) {
            let letter = boxID[i];

            seen[letter] = seen[letter] ? seen[letter] + 1 : 1;
        }

        return Object.values(seen).includes(count);
    };
};

const hasDoubles = hasLetterCount(2);
const hasTriples = hasLetterCount(3);

const f = (str, part = 1) => {
    if (part === 1) {
        let boxIds = str.trim().split(/\n/);

        let doubles = boxIds
            .map((x) => hasDoubles(x))
            .map((x) => (x === true ? 1 : 0))
            .reduce((sum, x) => sum + x);

        let triples = boxIds
            .map((x) => hasTriples(x))
            .map((x) => (x === true ? 1 : 0))
            .reduce((sum, x) => sum + x);

        return doubles * triples;
    }

    let boxIDs = str.trim().split(/\n/);
    let targetLength = boxIDs[0].length - 1;

    for (let i = 0; i < boxIDs.length; i++) {
        for (let j = i + 1; j < boxIDs.length; j = j + 1) {
            let a = boxIDs[i].split("");
            let b = boxIDs[j].split("");

            let filtered = a.filter((x, i, a) => b[i] === x);

            if (filtered.length === targetLength) {
                return filtered.join("");
            }
        }
    }
};

module.exports = { f, hasDoubles, hasTriples };
