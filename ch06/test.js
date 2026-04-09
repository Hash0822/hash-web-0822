function solution(number, n, m) {
    if (number%n == 0 && number%m == 0) {
        return 1;
    } else {
        return 0;
    }
}

let b = solution(16, 2,4);
console.log(b);

b = solution(34, 3,5);
console.log(b);