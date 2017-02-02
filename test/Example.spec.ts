// Example spec file

import { Example } from "../src/Example";

describe("Example", () => {
    it("Should be constructable", () => {
        expect(typeof new Example("Hello!")).toBe("object");
    });

    it("Should return correct name", () => {
        let name: string = "Hello!";
        let example: Example = new Example(name);
        expect(example.getName()).toEqual(name);
    });
});
