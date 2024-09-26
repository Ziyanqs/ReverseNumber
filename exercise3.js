document.addEventListener('DOMContentLoaded', function () {
    const checkButton = document.getElementById('checkButton');
    const numberInput = document.getElementById('numberInput');
    const result = document.getElementById('result');

    // Set the "Check" button's click event listener
    checkButton.addEventListener('click', function () {
        const number = numberInput.value;
         // Check if the positive number added is same as reverse
        if (isPalindromic(number)) {
             // If yes then display "Yes, Equal"
            result.textContent = 'Yes, Equal';
        } else {
            // If not then display "No, Not Equal"
            result.textContent = 'No, Not Equal';
        }
    });
    // Function check whether the number is equal when reverse
    function isPalindromic(number) {

        // Remove the leading zeros if any
        number = number.replace(/^0+/, '');

        // Reverse the number, divide it into an array, flip the array, and then reassemble the array into a string
        const reversedNumber = number.split('').reverse().join('');

        //Checking if both numbers are equal
        return number === reversedNumber;
    }
});