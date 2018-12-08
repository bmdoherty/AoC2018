const { f1, f2 } = require("./8");
const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);

async function readfile() {
    example = await readFileAsync("./8.example.data.txt", "utf8");
    data1 = await readFileAsync("./8.1.data.txt", "utf8");
}

describe("Day 4", () => {
    beforeAll(async () => {
        await readfile();
    });

    it("part 1 example A", async () => {
        expect(f1(example)).toEqual(35);
    });

    // it("part 1", async () => {
    //     expect(f1(data1)).toEqual(1);
    // });

    // it("part 2", async () => {
    //     expect(f2(data1)).toEqual(1);
    // });
});
