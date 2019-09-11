//add function filter to prototype of all String objects:
String.prototype.filter=function () {
   // return "filter function is under construction!";
    const str='';
    const temp1=str.split('not');
    const stripped=temp1.join('');
    return  stripped;
   // return str.slice(0, index)+str.slice(index+3);

    }

x="Brazil is not in Europe";
console.log(x.filter());

