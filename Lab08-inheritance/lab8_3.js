//Using function constructor
function Person() {
    this.name='John';
    this.course='MWA';

}
Person.prototype.teach=function () {
    return this.name+ ' teaches '+ this.course;

}
const teacher= new Person('Teacher');
console.log(teacher);
console.log(teacher.teach());

//Using Object.create
const person = {
    personname:'default',
    subject:'default',
    teach:function () {
        return this.personname+ ' teaches '+ this.subject;
    }
}

const  teacher=Object.create(person);
teacher.subject='MWA';
teacher.personname='John';
console.log(teacher);
