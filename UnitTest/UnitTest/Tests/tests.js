// Resharper recognizes QUnit (and Jasmine tests) and will run them using test runner.
// This is fine for testing logic ... but what about testing interactions with the DOM?
test("hello test", function () {
    ok(1 == "1", "Passed!");
});