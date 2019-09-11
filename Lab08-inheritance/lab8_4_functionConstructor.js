function Person(){
    this.name='default';
    this.age=0;
    greeting=function (){
        return 'Greetings my name is '+ this.name + 'I am '+ this.age+'years old';
    };
    salut=function (){
        return 'Good morning!, and in case I dont see you,\n' +
            'good afternoon, good evening and good night!'
    }
}

//Creating the Student Object using new Person()
const student= new Person();
student.name='John';
student.age='20';
student.major='Biology';
student.salut=function (){
    return 'Hi my name is'+this.name+ ' and I am studying'+this.major;
};
console.log(student.salut());

//Creating the Student Object using new Person():
const professor= new Person();
professor.name='Mark';
professor.age=50;
professor.deparment='Engineering';
professor.salut=function () {
    return 'Good day, my name is '+ this.name+  ' and I am in the' + this.deparment + 'department';
}
console.log(professor.salut());