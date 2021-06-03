const searchReplace = require("./index-START");

test("searchReplace is a function", () => {
  expect(typeof searchReplace).toEqual("function");
});

test("searchReplace a str of text", () => {
  expect(searchReplace("str")).toEqual("string");
});

test("searchReplace a string containing numbs", () => {
  expect(searchReplace("numbs")).toEqual("number");
});

test("searchReplace a string containing standard case characters", () => {
  expect(searchReplace("standard")).toEqual("mixed");
});
