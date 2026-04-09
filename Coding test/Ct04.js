function solution(arr, delete_list) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        let flag = true; // arr[i] 원소가 살아남았는가

        for (let j = 0; j < delete_list.length; j++) {
            if (arr[i] === delete_list[j]) {
                flag = false;
            }
        }
        if (flag) {
            // i번째 원소는 살아남았기 때문에, 결과 배열에 추가한다.
            answer.push(arr[i])
        }
    }
    return answer;
}