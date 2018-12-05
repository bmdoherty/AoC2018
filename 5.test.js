const { f1, f2 } = require("./5");
const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);

async function readfile() {
    data1 = await readFileAsync("./5.1.data.txt", "utf8");
}

describe("Day 1", () => {
    beforeAll(async () => {
        await readfile();
    });

    it("part 1 example A", async () => {
        expect(f1("dabAcCaCBAcCcaDA")).toEqual(10);
    });

    it("part 1", async () => {
        expect(f1(data1)).toEqual(10180);
    });

    it("part 2", async () => {
        expect(f2(data1)).toEqual(5668);
    });
});
