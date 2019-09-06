
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
  var result = function2test();

  if(Array.isArray(expected)){
    expected = expected.toString();
  }
  if(Array.isArray(result)){
    result = result.toString();
  }
  if (expected === result) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + function2test();
  }
}
a = [1,3,5,3,3];
/* 2 maxOfTwoNumber() ----------
* ----------------------------  */
function maxOfTwoNumber(n1, n2){
  return n1>n2?n1:n2;
}
/* 3 maxOfThreeNumber() -----
* --------------------------  */
function maxOfThreenumber(n1, n2, n3){
  return (n3>maxOfTwoNumber(n1, n2)?n3:maxOfTwoNumber(n1,n2));
}
/* 4 isVowel()---------------
* -------------------------- */
function isVowel(char){
  vowel=['a','e','i','o','u',];
  for(var i=0; i<vowel.length;i++){
    if (char===vowel[i]||char==vowel[i].toLocaleUpperCase())
      return true;
    else{
      return  false;
    }
  }
}
/*5 sum() and multiply()---
* ----------------------  */
 arrayOfNumber=[1,2,3,4];
function sum(){
  var sum=0;
  for (var i=0; i<arrayOfNumber.length;i++){
    sum+=arrayOfNumber[i];
  }
  return sum;
}
function product(){
  var product=1;
  for (var i=0; i<arrayOfNumber.length;i++){
    product*=arrayOfNumber[i];
  }
  return product;
}
/* 6 String reverse  -----
* ----------------------  */
function stringReverse(str){
  var newStr="";
  for(var i= str.length-1; i>=0; i--){
    newStr+=str[i];
  }
  return newStr;
}
/* 7 findLongestWord()  ----
* ----------------------  */
wordArray=['apple','orange','strawberry'];
function findLongestWord(array) {
  var leng=0;
  for(var i= 0; i<array.length; i++){
    if(array[i].length>leng){
      leng=array[i].length;
    }
  }
  return leng;
}

/* 8 filterLongWords() ---------
* ------------------------------*/
function filterLongWords (wordArray, num) {
  var longWordArray=[];
  var index=longWordArray.length;
  //longWordArray[i]='';
  for(var i=0; i<wordArray.length; i++){
    if(wordArray[i].length>num){
      longWordArray[index]=wordArray[i];
    }
    index++;
  }
  return  longWordArray;
}
/* 9 map/filter/reduce---------
* ------------------------------*/
a = [1,3,5,3,3];
multiplyBy10=a.map(function (value) {
  return value*10;
})
all3Elements=a.filter(function (value) {
  return value===3;
})
productOfElements=a.reduce(function (previousValue, currentValue) {
  return previousValue*currentValue;
})


/*maxOfTwoNumber()  test */
console.log("Expected output of maxOfTwoNumber()   is 40  " + myFunctionTest(80, function () {
  return maxOfTwoNumber(34, 80);
}));
/*maxOfThreenumber()  test */
console.log("Expected output of maxOfThreenumbers()  is 90  " + myFunctionTest(90, function () {
  return maxOfThreenumber(34, 80, 90);
}));

/*isVowel() test */
console.log("Expected output of isVowel()  is true  " + myFunctionTest(true, function () {
  return isVowel('a');
}));

/*sum() test */
console.log("Expected output of sum is 10  " + myFunctionTest(10, function () {
  return sum(arrayOfNumber);
}));
/*product() test */
console.log("Expected output of product is 24  " + myFunctionTest(24, function () {
  return product(arrayOfNumber);
}));


/*findLongestWord() test */
console.log("Expected output of stringReverse  is USIDDA  " + myFunctionTest('USIDDA', function () {
  return stringReverse('ADDISU');
}));

/*stringReverse() test */
console.log("Expected output of longest String is 10  " + myFunctionTest(10, function () {
  return findLongestWord(wordArray);
}));

/*filterLongWords() test */
console.log("Expected output of filterLongWords is: ['apple','orange','strawberry']    " + myFunctionTest(['apple','orange','strawberry'], function () {
  return filterLongWords(wordArray,4);
}));
console.log(multiplyBy10);
console.log(all3Elements);
console.log(productOfElements);
