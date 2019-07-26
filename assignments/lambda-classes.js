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
//-------------------------------------------------------------------------
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
    console.log(`${this.newName} receives a perfect score on ${subject}.`);
    }
}
//------------------------------------------------------------------------
class Student extends Person {
    constructor (child){
        super(child);
        this.newPreviousBackground = child.previousBackground;
        this.newClassName = child.className;
        this.newFaveSubjects = child.faveSubjects;
    }
    listsSubjects() {
        for (let i = 0; i < faveSubjects.length; i++){
            return (this.faveSubjects[i]);
    }
}
    prAssignment(subject){ 
    console.log(`${this.newName} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
    console.log(`${this.newName} has begun sprint challenge on ${subject}`);
    }
}
//---------------------------------------------------------------------------
class ProjectManager extends Student {
    constructor (greatGrandChild){
        super(greatGrandChild);
        this.newGradClassName = greatGrandChild.gradClassName;
        this.newFaveInstructor = greatGrandChild.faveInstructor;
    }
    standUp(slack) {
        console.log(`${this.newName} announces to ${slack}, @channel: Standy Times!`);
    }
    debugsCode(subject) {
        console.log(`${this.newName} debugs ${this.newName}'s code ${subject}.`);
    }
}
//-------------------------------------------------------------------------
    const fred = new Person ({
        name: "Fred",
        age: 32,
        location: "Bedrock",
        specialty: "teaching",
        faveLanguage: "Spanish",
        catchPhrase: "I'm awesome!",
        previousBackground: "Swimming",
        className: "Web22",
        gradClassName: "Wd1",
        faveInstructor: "Sean",
    });
//---------------------------------------
    const kaija = new Instructor ({
        name: "Kaija",
        age: 25,
        location: "Hawaii",
        specialty: "hotels",
        faveLanguage: "Italian",
        catchPhrase: "Yo, I'm the Teach",
        previousBackground: "Jail",
        className: "Web23",
        gradClassName: "Wd2",
        faveInstructor: "Paul",
    });
    const jane = new Instructor ({
        name: "Jane",
        age: 46,
        location: "Iceland",
        specialty: "front-end development",
        faveLanguage: "Greek",
        catchPhrase: "Howdy! I'm your Professor",
        previousBackground: "Chef",
        className: "Web24",
        gradClassName: "Wd3",
        faveInstructor: "Nicky",
    });
//----------------------------------------
    const nick = new Student ({
        name: "Nick",
        age: 76,
        location: "Berlin",
        specialty: "pizza making",
        faveLanguage: "Swedish",
        catchPhrase: "Get outta here",
        previousBackground: "Hobo",
        className: "Web25",
        faveSubjects: [
            "CSS",
            "Java",
            "C++",
            "HTML",
            "Python",
        ],
        gradClassName: "Wd4",
        faveInstructor: "Joey",
    });
    const lisa = new Student ({
        name: "Lisa",
        age: "",
        location: "",
        specialty: "",
        faveLanguage: "",
        catchPhrase: "",
        previousBackground: "Dancer",
        className: "Web21",
        faveSubjects: [
            "Algorithms",
            "Javascript",
            "C#",
            "PHP",
            "Ruby",
        ],
        gradClassName: "",
        faveInstructor: "",
    });
//-----------------------------------------
    const bob = new ProjectManager ({
        name: "Jeffrey",
        age: 88,
        location: "Jamaica",
        specialty: "React",
        faveLanguage: "Java",
        catchPhrase: "Yo, I'm the Teach",
        previousBackground: "",
        className: "",
        faveSubjects: "",
        gradClassName: "WD1",
        faveInstructor: "Paco",
    });
    const devin = new ProjectManager ({
        name: "Devin",
        age: "",
        location: "",
        specialty: "",
        faveLanguage: "",
        catchPhrase: "",
        previousBackground: "",
        className: "",
        faveSubjects: "",
        gradClassName: "WD2",
        faveInstructor: "Hector",
    });
//-----------------------------------------
    fred.speak();
    kaija.demo("baking");
    jane.grade("reading");
    console.log(nick.newFaveSubjects);
    lisa.prAssignment("bread");
    nick.sprintChallenge("JS");
    bob.standUp("Slack");
    devin.debugsCode("node");