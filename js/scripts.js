var sentence = prompt("Enter a sentence:");

alert(sentence);

var firstLetter = sentence.charAt(0);

var lastLetter = sentence.charAt(sentence.length-1);

alert(firstLetter);
alert(lastLetter);

function reverseString(sentence){
    var reverseArray = sentence.split("").reverse().join("");
    alert(reverseArray);
    var reverseSentence = reverseArray.reverse();
    alert(reverseSentence);
    var joinArray = reverseSentence.join("!");
    alert(joinArray);
};

reverseString(sentence);
/*
var firstLetter = sentence.charAt(0);

var lastLetter = sentence.charAt(sentence.length-1);

alert(firstLetter);
alert(lastLetter);*/