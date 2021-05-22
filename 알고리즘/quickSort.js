// 퀵정렬 
// pivot값보다 큰 혹은 작은 값을 바꾸어주는 연산
// 결과적으로 피벗 값보다 작은 건 왼쪽에 있고, 큰 것은 오른쪽에 있도록 함.
// 평균 시간복잡도 O(N * logN)

const number = 10;
const data = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

const quickSort = (data, start, end) => {
    if(start>=end){ // 원소가 1개인 경우
      return;
    }

    let key = start; // 키는 첫번쨰 원소
    let i = start + 1; // i는 왼쪽 출발
    let j = end; // j는 오른쪽 출발

    while (i<=j) { // 엇갈릴 때까지 반복
       while(data[i] <= data[key]){ // 키 값보다 큰 값을 만날 때까지
         i++;
       }
       while(data[j] >= data[key] && j>start){ // 키 값보다 작은 값을 만날 때까지
         j--;
       }
       if(i>j){
         [data[j], data[key]] = [data[key], data[j]];
       }else{
         [data[i], data[j]] = [data[j], data[i]];
       }
    }
    quickSort(data, start, j-1);
    quickSort(data, j+1, end);
}

quickSort(data, 0, number-1);

console.log(data);