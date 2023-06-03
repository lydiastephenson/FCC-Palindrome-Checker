function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let palindrome = str.split('').reverse().join('');
    return palindrome == str ? true : false;
}