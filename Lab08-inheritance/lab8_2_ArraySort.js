array=[];
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
function bubbleSort(array) {
    for(var i = 0; i < array.length; i++) {
        for(var j = 1; j < array.length; j++) {
            if(array[j - 1] > array[j]) {
                swap(array, j - 1, j);
            }
        }
    }
    return array;
}
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(bubbleSort(array.slice()));