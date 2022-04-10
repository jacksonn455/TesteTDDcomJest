test("Devo conhecer as principais assertivas do jest", () => {
let number = null;
expect(number).toBeNull();
number = 10
expect(number).not.toBeNull();
expect(number).toBe(10);
expect(number).toEqual(10);
expect(number).toBeGreaterThan(9);
expect(number).toBeLessThan(11);
});

test("Devo saber trabalhar com objetos", () => {
const obj = {
    name: "Diego",
    email: "diego@global@hotmail.com"
}

expect(obj).toHaveProperty("name", "Diego");
expect(obj.name).toBe("Diego");
expect(obj).toHaveProperty("email");
})
