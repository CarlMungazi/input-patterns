import test from 'ava';
import inputPatterns from '.';

test('it tests for alpha-numeric characters', t => {
  const pattern = new RegExp(inputPatterns.name.alphaNumeric, 'u');
  t.false(pattern.test("!"));
  // this should fail. Need to investigate how the input element executes regex checks. See https://www.w3.org/TR/html52/sec-forms.html#element-attrdef-input-pattern
  // Key question is: how are they checked?
  t.true(pattern.test("Us3rN@m3")); 
});