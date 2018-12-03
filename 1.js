const processInput = (str) => {
    return str
        .trim()
        .split(/\n/)
        .map((v) => v.trim())
        .map((v) => Number(v));
};

const adder = (sum, x) => sum + x;

const f = (str, part = 1) => {
    let changes = processInput(str);

    if (part === 1) {
        return changes.reduce(adder, 0);
    }

    let frequency = 0;
    let seen = { [frequency]: 1 };
    let i = 0;

    while (true) {
        frequency = frequency + changes[i % changes.length];
        seen[frequency] = seen[frequency] ? seen[frequency] + 1 : 1;

        if (seen[frequency] === 2) {
            return frequency;
        }

        i++;
    }
};

module.exports = f;
