const volitile = (a, b) => {
    if (a === undefined || b === undefined) {
        return false;
    }
    return a !== b && a.toUpperCase() === b.toUpperCase();
};

const react = (polymer) => {
    let changed = null;

    for (let a = polymer.length - 1; a > 0; a--) {
        let b = a - 1;
        let moleculeA = polymer[a];
        let moleculeB = polymer[b];

        if (volitile(moleculeA, moleculeB)) {
            polymer = polymer.slice(0, a) + polymer.slice(a + 1);
            polymer = polymer.slice(0, b) + polymer.slice(b + 1);
        }
    }

    return polymer;
};

const f = (str, part = 1) => {
    let aphabet = "abcdefghijklmnopqrstuvwxy".split("");
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < aphabet.length; i++) {
        let polymer = str
            .trim()
            .split(aphabet[i])
            .join("")
            .split(aphabet[i].toUpperCase())
            .join("");
        let newPolymer = null;

        while (polymer !== newPolymer) {
            newPolymer = react(polymer);

            if (polymer !== newPolymer) {
                polymer = newPolymer;
            }
        }

        if (polymer.length < min) {
            min = polymer.length;
        }
    }

    return min;
};

module.exports = { f };
