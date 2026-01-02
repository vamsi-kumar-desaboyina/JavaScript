class Student
{
    // constructor()
    // {
    //     console.log("ss")
    // }
    constructor(a)
    {
        console.log(a);
        this.a=a;
    }
    
    method1()
    {
        console.log("method1",this.a);
    }
}

let s1=new Student(10);
s1.method1();
// let s=new Student();