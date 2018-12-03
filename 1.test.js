const f = require("./1");
const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);

async function readfile() {
    data1 = await readFileAsync("./1.1.data.txt", "utf8");
}

describe("Day 1", () => {
    beforeAll(async () => {
        await readfile();
    });

    it("part 1 example A", async () => {
        expect(f("+1\n-2\n+3\n+1")).toEqual(3);
    });

    it("part 1 example B", async () => {
        expect(f("+1\n+1\n+1")).toEqual(3);
    });

    it("part 1 example C", async () => {
        expect(f("+1\n+1\n-2")).toEqual(0);
    });

    it("part 1 example D", async () => {
        expect(f("-1\n-2\n-3")).toEqual(-6);
    });

    it("part 1", async () => {
        expect(f(data1)).toEqual(547);
    });

    it("part 2 example A", async () => {
        expect(f("+1\n-1", 2)).toEqual(0);
    });

    it("part 2 example B", async () => {
        expect(f("+3\n+3\n+4\n-2\n-4", 2)).toEqual(10);
    });

    it("part 2 example C", async () => {
        expect(f("-6\n+3\n+8\n+5\n-6", 2)).toEqual(5);
    });

    it("part 2 example D", async () => {
        expect(f("+7\n+7\n-2\n-7\n-4", 2)).toEqual(14);
    });

    it("part 2", async () => {
        expect(f(data1, 2)).toEqual(76414);
    });
});
