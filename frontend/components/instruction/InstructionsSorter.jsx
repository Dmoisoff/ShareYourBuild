// will come back to redo sorting, placeholder sorter
const bubbleSort = (arr) => {
   const len = arr.length;
   for (let i = len-1; i>=0; i--){
     for(let j = 1; j<=i; j++){
       if(arr[j-1].instructionStep>arr[j].instructionStep){
           let temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
};

export default bubbleSort;
