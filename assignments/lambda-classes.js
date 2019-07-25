// CODE here for your Lambda Classes

class Person {
    constructor (parent) {
        this.newName = parent.name; 
        this.newAge = parent.age;
        this.newLocation = parent.location;
    }
    speak() {
    console.log(`Hello, my name is ${this.newName}, I am from ${this.newLocation}!`);
    }
}


//BE SURE TO VERIFY SUBJECT ARGUMENT WITHIN CONSTRUCTOR FUNCTION!!!!!
class Instructor extends Person {
    constructor (child){
        super(child);
        this.newSpecialty = child.specialty;
        this.newFaveLanguage = child.faveLanguage;
        this.newCatchPhrase = child.catchPhrase;
    }
    demo(subject) {
    console.log(`Today, we are learning about ${subject}`);
    }
    grade(subject) {
    console.log(`${Student.newName} receives a perfect score on ${subject}.`);
    }
}

class Student extends Instructor {
    constructor (grandChild){
        super(grandChild);
        this.newPreviousBackground = grandChild.previousBackground;
        this.newClassName = grandChild.className;
        this.newFaveSubjects = grandChild.faveSubjects;
    }
    listsSubjects() {
        for(var i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
    }
    PRAssignment() 
        console.log(`${Student.newName} has submitted a PR for ${this.subject}`);
    }
    sprintChallenge() {
        console.log(`${Student.newName} has begun sprint challenge on ${this.subject}.`);
    }
}

class ProjectManager extends Student {
    constructor (greatGrandChild){
        super(greatGrandChild);
        this.newGradClassName = greatGrandChild.gradClassName;
        this.newFaveInstructor = greatGrandChild.faveInstructor;
    }
    standUp(slack) {
        console.log(`${this.newName} announces to ${slack}, @channel: Standy Times!`);
    }
    debugsCode() {
        console.log(`${this.newName} debugs ${Student.newName}'s code ${subject}.`);
    }
}

    const fred = new Instructor ({
        name: "Fred",
        age: 32,
        location: "Bedrock",
    });

    const jane = new Instructor ({
        name: "Jane",
        age: 39,
        location: "Tampa",
    });

    const nick = new Student ({
        name: "Nick",
        age: 98,
        location: "Manassas",
    });

    const lisa = new Student ({
        name: "Lisa",
        age: 76,
        location: "San Diego",
    });

    const bob = new ProjectManager ({
        name: "Bob",
        age: 26,
        location: "Houston",
    });

    const devin = new ProjectManager ({
        name: "Devin",
        age: 34,
        location: "Seattle",
    });

    