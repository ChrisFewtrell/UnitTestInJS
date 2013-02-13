// Resharper recognizes QUnit (and Jasmine tests) and will run them using test runner.
// This is fine for testing logic ... but what about testing interactions with the DOM?

module("My first module");

// Tests are defined using the test function
test("Description", function () { });

test("If this fails then all bets are off.", function () {
    ok(true, "Passed!");
});

test("hello test", function () {
    ok(1 == "1", "1 == '1'");
});


