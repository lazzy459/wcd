// 5. Cek apakah string adalah palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(`'madam' → palindrome: ${isPalindrome("madam")}`);
console.log(`'hello' → palindrome: ${isPalindrome("hello")}`);