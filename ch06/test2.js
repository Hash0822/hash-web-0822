function solution(num_list) {
    var answer = 0;
    
    var gob = 1;
    var plus = 0;
    for (var i = 0; i < num_list.length; i++) {
        gob *= num_list[i]
        plus += num_list[i]
    }
    var zegob = plus ** 2;
    
    if (gob < zegob) {
        answer = 1;
    } else {
        answer = 0;
    }
        
    return answer;
}
let b = solution([3,4,5,1,2]);
console.log(b);