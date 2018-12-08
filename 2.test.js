const { f, hasDoubles, hasTriples } = require("./2");
const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);

async function readfile() {
    data1 = await readFileAsync("./2.1.data.txt", "utf8");
}

describe("Day 2", () => {
    beforeAll(async () => {
        await readfile();
    });

    it("part 1 example A", async () => {
        expect(hasDoubles("abcdef")).toEqual(false);
    });

    it("part 1 example B", async () => {
        expect(hasTriples("abcdef")).toEqual(false);
    });

    it("part 1 example C", async () => {
        expect(hasDoubles("bababc")).toEqual(true);
    });

    it("part 1 example D", async () => {
        expect(hasTriples("bababc")).toEqual(true);
    });

    it("part 1 example E", async () => {
        expect(hasDoubles("abbcde")).toEqual(true);
    });

    it("part 1 example F", async () => {
        expect(hasTriples("abbcde")).toEqual(false);
    });

    it("part 1 example G", async () => {
        expect(hasDoubles("abcccd")).toEqual(false);
    });

    it("part 1 example H", async () => {
        expect(hasTriples("abcccd")).toEqual(true);
    });

    it("part 1 example I", async () => {
        expect(hasDoubles("aabcdd")).toEqual(true);
    });

    it("part 1 example J", async () => {
        expect(hasTriples("aabcdd")).toEqual(false);
    });

    it("part 1 example K", async () => {
        expect(hasDoubles("abcdee")).toEqual(true);
    });

    it("part 1 example L", async () => {
        expect(hasTriples("abcdee")).toEqual(false);
    });

    it("part 1 example M", async () => {
        expect(hasDoubles("ababab")).toEqual(false);
    });

    it("part 1 example N", async () => {
        expect(hasTriples("ababab")).toEqual(true);
    });

    it("part 1 example O", async () => {
        expect(f("abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab")).toEqual(12);
    });

    it("part 1", async () => {
        expect(f(data1)).toEqual(5976);
    });

    it("part 2 example A", async () => {
        expect(f("abcde\nfghij\nklmno\npqrst\nfguij\naxcye\nwvxyz", 2)).toEqual("fgij");
    });

    it("part 2", async () => {
        expect(f(data1, 2)).toEqual("xretqmmonskvzupalfiwhcfdb");
    });
});
