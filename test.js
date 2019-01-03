import test from 'ava';
import inputPatterns from '.';
import { createRegexFromSpec } from "./utils";

test('it tests for alpha-numeric characters', t => {
  const regex = createRegexFromSpec(inputPatterns.alphaNumeric)
  t.notRegex("Us3rN@m3", regex); 
  t.regex("Us3rNm3", regex); 
});


test('it ensures the password contain 8 or more characters that are of at least one number, and one uppercase and lowercase letter', t => {
  const regex = new RegExp(inputPatterns.password());
  t.notRegex("P@ssword", regex); 
  t.regex("P@ssw0rd", regex); 
});