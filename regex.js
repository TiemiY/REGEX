// youtube academind REGEX DEMYSTIFIED 
const text = "Hello there!";
// REGEX is a pattern of characters that you can use to check a string

// const regex = new RegExp("ll");
const regex = /ll/;

// console.log(regex.test(text)); return true or false if the string contains the regex
// console.log(regex.exec(text)); return an array with the hit we found
// console.log(text.match(regex)); return an array with the hit 
// console.log(text.search(regex)); return the start index of the expression 

// writting patterns: https://regex101.com/ helps you with regex and strings

// sensitive or insensitive -consider or not capital and lower cases 
// ^+regex starts with
// $+regex ends with
// ? zero or 1 match {0,1}
// * zero or more matches {0,∞}
// + 1 or more matches{1,∞}
// {} number of times
// [^] negação
// () group
// [] you can put the values you search in an expression
// shortcuts:
    //[a-z] all lower case alphabet
    //[A-Z] all capital case alphabet
    //[0-9] all numbers
    // [a-zA-Z0-9] combination
    // [a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+ (example of e-mail validation without special characters) 
    // . any character
    // \escape
    // (?:)
    // for password pattern: (?=)  means at least 1 character
    // (?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%*&]{,])[a-zA-Z0-9!@#$%*&]{,}
    // \b border delimita a pesquisa
    // aaa

    // What's the difference between “&nbsp;” and “ ”?
//     <!-- Both -->
// <p>Word1          Word2</p>
// <!-- and -->
// <p>Word1 Word2</p>
// <!-- will render the same on any browser -->
// <!-- While the below one will keep the spaces when rendered. -->
// <p>Word1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Word2</p>
// Word1 Word2
// Word1 Word2
// Word1      Word2