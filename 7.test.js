const { f1, f2 } = require("./7");
const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);

async function readfile() {
    example = await readFileAsync("./7.example.data.txt", "utf8");
    data1 = await readFileAsync("./7.1.data.txt", "utf8");
}

describe("Day 7", () => {
    beforeAll(async () => {
        await readfile();
    });

    it("part 1 example A", async () => {
        expect(f1(example)).toEqual("CABDFE");
    });

    it("part 1", async () => {
        expect(f1(data1)).toEqual("BGJCNLQUYIFMOEZTADKSPVXRHW");
    });

    // it("part 2 example A", async () => {
    //     expect(f2(example)).toEqual(15);
    // });

    // it("part 2", async () => {
    //     expect(f2(data1)).toEqual(1);
    // });
});
