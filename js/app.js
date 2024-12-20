//////////////////////////////////////////////////  1  M  /////
function findLongestAndShortestWords(sentence) {
    const words = sentence.split(" ");
    let longest = words[0];
    let shortest = words[0];

    words.forEach(word => {
        if (word.length > longest.length) longest = word;
        if (word.length < shortest.length) shortest = word;
    });

    return { longest, shortest };
}

console.log(findLongestAndShortestWords("Hello amazing world of JavaScript!"));




//////////////////////////////////////////////////  2  M  /////
function reverseWord(word) {
    return word.split("").reverse().join("");
}

console.log(reverseWord("Hello")); // "olleH"




//////////////////////////////////////////////////  3  M  /////
function reverseWordsInSentence(sentence) {
    return sentence
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseWordsInSentence("Hello amazing world"));




//////////////////////////////////////////////////  4  M  /////
function lengthOfLastWord(sentence) {
    const words = sentence.trim().split(" ");
    return words[words.length - 1].length;
}

console.log(lengthOfLastWord("Hello amazing world ")); // 5




//////////////////////////////////////////////////  5  M  /////
function findDuplicates(arr) {
    const counts = {};
    const duplicates = [];

    arr.forEach(item => {
        counts[item] = (counts[item] || 0) + 1;
    });

    for (const key in counts) {
        if (counts[key] > 1) {
            duplicates.push(key);
        }
    }

    return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 5, 2, 3, 6]));




//////////////////////////////////////////////////  6  M  /////
function removeSpaces(str) {
    return str.replace(/\s+/g, "");
}

console.log(removeSpaces("Hello World! How are you?"));





//////////////////////////////////////////////////  7  M  /////
function sumOfDigits(str) {
    return str
        .split("")
        .filter(char => !isNaN(char) && char !== " ")
        .reduce((sum, num) => sum + parseInt(num), 0);
}

console.log(sumOfDigits("abc123def45"));
