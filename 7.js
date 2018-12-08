const processInput = (str) => {
    let dependancies = {};
    let steps = new Set();

    let input = str
        .trim()
        .split(/\n/)
        .map((x) =>
            x
                .replace("Step ", "")
                .replace("must be finished before step ", "")
                .replace(" can begin.", "")
        )
        .map((x) => x.split(" "))
        .map((x) => {
            return {
                step: x[1],
                dependancy: x[0]
            };
        });

    for (let i = 0; i < input.length; i++) {
        let item = input[i];

        steps.add(item.dependancy);
        steps.add(item.step);

        dependancies[item.step] = dependancies[item.step]
            ? dependancies[item.step].concat(item.dependancy)
            : [item.dependancy];
    }

    return { dependancies, steps };
};

const getNextStep = (steps, dependancies) => {
    let possibleSteps = [];

    for (step of steps) {
        if (!dependancies[step]) {
            // not dependant
            possibleSteps.push(step);
        }

        if (dependancies[step] && dependancies[step].length === 0) {
            // not dependant
            possibleSteps.push(step);
        }
    }

    return possibleSteps.sort();
};

const removeDependancy = (step, steps, dependancies) => {
    for (s of steps) {
        if (dependancies && dependancies[s]) {
            dependancies[s] = dependancies[s].filter((x) => x !== step);
        }
    }

    return dependancies;
};

const f1 = (str) => {
    let { steps, dependancies } = processInput(str);
    let path = [];

    while (steps.size) {
        let nextStep = getNextStep(steps, dependancies)[0];
        steps.delete(nextStep);
        delete dependancies[nextStep];
        dependancies = removeDependancy(nextStep, steps, dependancies);
        path.push(nextStep);
        //console.log(path);
    }

    return path.join("");
};

const f2 = (str) => {
    let { steps, dependancies } = processInput(str);
    let path = [];
    let workers = [];
    while (steps.size) {
        let nextStep = getNextStep(steps, dependancies)[0];
        steps.delete(nextStep);
        delete dependancies[nextStep];
        dependancies = removeDependancy(nextStep, steps, dependancies);
        path.push(nextStep);
        //console.log(path);
    }

    return path.join("");
};

module.exports = { f1, f2 };
