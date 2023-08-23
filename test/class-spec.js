const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word;
  beforeEach(() => {
    word = new Word("hello");
  });

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(word).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("hello");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let vowels = ['a','e','i','o','u','A','E','I','O','U'];
      expect(vowels).to.not.include(word.removeVowels());
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let vowels = ['a','e','i','o','u','A','E','I','O','U'];
      expect(vowels).to.include(word.removeConsonants(word.word));
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let vowels = ['a','e','i','o','u','A','E','I','O','U'];
      let newWord = "ellohay";
      let otherNewWord = "helloyay";
      let sliced = word.word + "yay";
      let otherSliced = word.word.slice(1, word.length) + word.word.slice(0, 1) + "ay";
      if (vowels.includes(word.word[0])) {
        expect(sliced).to.equal(word.pigLatin());
      } else {
        expect(otherSliced).to.equal(word.pigLatin());
      }

    });
  });
});
