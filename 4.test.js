const { f1, f2 } = require("./4");
const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);

async function readfile() {
    data1 = await readFileAsync("./4.1.data.txt", "utf8");
}

describe("Day 4", () => {
    beforeAll(async () => {
        await readfile();
    });

    it("part 1 example A", async () => {
        expect(f1("dabAcCaCBAcCcaDA")).toEqual(16);
    });

    // it("part 1", async () => {
    //     expect(f1(data1)).toEqual(1);
    // });

    // it("part 2", async () => {
    //     expect(f2(data1)).toEqual(1);
    // });
});
