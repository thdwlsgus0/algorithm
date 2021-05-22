
// 내림차순 구현

const number = 10;
const data = [1, 10, 5, 8, 7, 6, 4, 3, 2, 9];

const quickSort = (data, start, end) => {
   if(start>=end){
     return;
   }
   let key = start;
   let left = start + 1;
   let right = end;

   while(left <= right) {
     while(data[left] >= data[key]){
        left++;
     }
     while(data[right] <= data[key]){
        right--;
     }
     if(left>right){
       [data[key], data[right]] = [data[right], data[key]];
     }else{
       [data[left], data[right]] = [data[right], data[left]];
     }
   }

   quickSort(data, start, right-1);
   quickSort(data, right+1, end);
}

quickSort(data, 0, number-1);

console.log(data);
