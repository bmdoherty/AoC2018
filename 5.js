const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const volitile = (a, b) => {
    if (a === undefined || b === undefined) {
        return false;
    }

    return a !== b && a.toUpperCase() === b.toUpperCase();
};

const regexGenerator = () => {
    let regexArray = [];

    for (let i = 0; i < alphabet.length; i++) {
        let regex = new RegExp(`${alphabet[i]}${alphabet[i].toUpperCase()}`, "g");
        regexArray.push(regex);

        regex = new RegExp(`${alphabet[i].toUpperCase()}${alphabet[i]}`, "g");
        regexArray.push(regex);
    }

    return regexArray;
};

const react = (polymer) => {
    let regexArray = regexGenerator();

    for (let regex of regexArray) {
        polymer = polymer.replace(regex, "");
    }

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
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < alphabet.length; i++) {
        let polymer = removeLetter(str, alphabet[i]);
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

module.exports = { f1, f2, react };
