function isPolindrome(string){
    let left = 0;
    let right = string.length -1;
    while (right > left){
        if (string[left] != string[right]){
            return false
        }
        left++;
        right--;
    }
    return true;
}
let st = prompt('Nhập dãy số vào : ');
let polindrome = isPolindrome(st);
let text;
if (polindrome === false){
    text = st + ' không phải dãy Polindrome';
}
else {
    text = st +  ' là dãy Polindrome';
}
document.write(text);