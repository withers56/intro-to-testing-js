// Unit tests for the helloWorld function
describe('helloWorld', function() {

    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });

    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });

    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });

    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });

});

describe('sayHello', function() {

    it ('Should be defined as a function.', function () {
        expect(typeof sayHello).toBe('function');
    })

    it ('Should return a string when called.', function() {
        expect(typeof sayHello()).toBe('string');
    });

    it('Should return the string "Hello, Jane!" when called', function () {
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    });

    it ('should return the string "Hello, Alex!" when called.', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });

    it ('should return the string "Hello, Pat!" when called.', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });

    it ('should return the string "Hello, World!" when called.', function () {
        expect(sayHello()).toBe("Hello, World!");
    });

    it ('should return the string "Hello, World!" when called with true.', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });

    it ('should return the string "Hello, World!" when called with false.', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });


});

describe("isFive", function () {

    it("Should be defined as a function.", function () {
        expect(typeof isFive).toBe("function");
    });

    it("Should return a boolean eveytime.", function () {
        expect(typeof isFive()).toBe("boolean");
    });

    it("Should return true when passed 5", function () {
        expect(isFive(5)).toBe(true);
    });

    it("Should Work with the strimng 5", function () {
        expect(isFive("5")).toBe(true);
    });
});

describe("isEven", function (){

     it ("Should be defined as a function", function (){
         expect(typeof isEven).toBe("function");
     });

     it ("should return boolean no matter what", function (){
         expect(typeof isEven()).toBe("boolean");
     });

     it ("should return true when executed with 2", function (){
         expect(isEven(2)).toBe(true);
     });

    it ("should return true when executed with -4", function (){
        expect(isEven(-4)).toBe(true);
    });

    it ("should return false when executed with 3", function (){
        expect(isEven(3)).toBe(false);
    });

    it ("should return false when executed with 'banana", function (){
        expect(isEven('banana')).toBe(false);
    });

    it ("should return true when executed with 8", function (){
        expect(isEven(8)).toBe(true);
    });

    it ("should return false when executed with infinity", function (){
        expect(isEven(Infinity)).toBe(false);
    });

    it ("should return false when executed with boolean", function (){
        expect(isEven(true)).toBe(false);
    });

    it ("should return false when executed without argument", function (){
        expect(isEven()).toBe(false);
    });
});

describe("isVowel", function (){

    it ("Should be defined as a function", function (){
        expect(typeof isVowel).toBe('function');
    });

    it ("Should always return a boolean", function (){
        expect(typeof isVowel()).toBe('boolean');
    });

    it ("Should return true with input 'a'", function (){
        expect(isVowel('a')).toBe(true);
    });

    it ("Should return true with input 'A'", function (){
        expect(isVowel('A')).toBe(true);
    });

    it ("Should return false with input 'y'", function (){
        expect(isVowel('y')).toBe(false);
    });

    it ("Should return true with input 4", function (){
        expect(isVowel(4)).toBe(false);
    });

    it ("Should return false with boolean inpur", function (){
        expect(isVowel(true) || isVowel(false)).toBe(false);
    });

    it ("Should return false with input 'banana'", function (){
        expect(isVowel('banana')).toBe(false);
    });

    it ("Should return false with no input", function (){
        expect(isVowel()).toBe(false);
    });
});













