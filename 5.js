const volitile = (a, b) => {
    if (a === undefined || b === undefined) {
        return false;
    }

    return a !== b && a.toUpperCase() === b.toUpperCase();
};

const react = (polymer) => {
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

const removeLetter = (str, letter) => {
    let regex = new RegExp(letter, "ig");

    return str.trim().replace(regex, "");
};

const f1 = (polymer) => {
    let newPolymer = null;

    while (polymer !== newPolymer) {
        newPolymer = react(polymer);

        if (polymer !== newPolymer) {
            polymer = newPolymer;
        }
    }

    return polymer.length;
};

const f2 = (str) => {
    let aphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < aphabet.length; i++) {
        let polymer = removeLetter(str, aphabet[i]);
        let newPolymer = null;

        while (newPolymer != polymer) {
            newPolymer = react(polymer);

            if (newPolymer != polymer) {
                polymer = newPolymer;
            }
        }

        if (polymer.length < min) {
            min = polymer.length;
        }
    }

    return min;
};

module.exports = { f1, f2 };
