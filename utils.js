/**
According to the spec (https://www.w3.org/TR/html52/sec-forms.html#element-attrdef-input-pattern)
"the pattern attribute is matched against the entire value, not just any subset
(somewhat as if it implied a ^(?: at the start of the pattern and a )$ at the end)"

So, in essence, given the pattern [a-zA-Z0-9]+, the input version would test it like ^(?:[a-zA-Z0-9]+)$. For more on regexes see:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_parentheses
https://flaviocopes.com/javascript-regular-expressions/
*/

function createRegexFromSpec(regex) {
  const firstPart = "^(?:";
  const lastPart = ")$";
  const newRegex = new RegExp(`${firstPart}${regex}${lastPart}`);
  return newRegex;
}

module.exports = { createRegexFromSpec };