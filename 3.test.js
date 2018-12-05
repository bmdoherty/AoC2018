const { f } = require("./3");
const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);

async function readfile() {
    data1 = await readFileAsync("./3.1.data.txt", "utf8");
}

describe("Day 1", () => {
    beforeAll(async () => {
        await readfile();
    });

    // it("part 1 example A", async () => {
    //     expect(f("dabAcCaCBAcCcaDA")).toEqual(10);
    // });

    it("part 1", async () => {
        expect(f(data1)).toEqual(5668);
    });
});
