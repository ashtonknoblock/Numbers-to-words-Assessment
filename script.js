const ones = ["","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const tens = ["", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const teens = ["", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const hundreds = ("hundred and");

for (i = 1; i <= 100; i++) {
    if (i > 0 && i < 10) {
        var num1 = ones[i];
        console.log(num1);
    } 
    else if (i > 9 && i < 20) {
        var num2 = teens[(i+1)-10];
        console.log(num2)
    }
    else if (i > 20 && i < 100) {
        var num3 = tens[1];
        console.log(num3);
    }
}


