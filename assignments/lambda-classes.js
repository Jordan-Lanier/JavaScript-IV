class Person {
	constructor(personAttributes) {
		this.name = personAttributes.name;
		this.age = personAttributes.age;
		this.location = personAttributes.location;
		this.gender = personAttributes.gender;
	}
	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
	}
}

class Instructor extends Person {
	constructor(instructorAttributes) {
		super(instructorAttributes);
		this.specialty = instructorAttributes.specialty;
		this.favLanguage = instructorAttributes.favLanguage;
		this.catchPhrase = instructorAttributes.catchPhrase;
	}
	demo(subject) {
		console.log(`Today we are learning about ${subject}.`);
	}
	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}!`);
	}
}

class Student extends Person {
	constructor(studentAttributes) {
		super(studentAttributes);
		this.previousBackground = studentAttributes.previousBackground;
		this.className = studentAttributes.className;
		this.favSubjects = studentAttributes.favSubjects;
	}
	listsSubjects() {
		for (let i = 0; i < this.favSubjects.length; i++) {
			console.log(this.favSubjects[i]);
		}
	}
	PRAssignment(student, subject) {
		console.log(`${student.name} has submitted a PR for ${subject}`);
	}

	sprintChallenge(student, subject) {
		console.log(`${student.name} has begun sprint challenge on ${subject}`);
	}
}

class ProjectManager extends Instructor {
	constructor(ProjectManagerAttributes) {
		super(ProjectManagerAttributes);
		this.gradClassName = ProjectManagerAttributes.gradClassName;
		this.favInstructor = ProjectManagerAttributes.favInstructor;
	}
	standUp(name, channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
	}
	debugsCode(name, student, subject) {
		console.log(`${name.name} debugs ${student.name}'s code on ${subject}`);
	}
}

const Fred = new Instructor({
	name: 'Fred',
	location: 'Bedrock',
	age: 37,
	gender: 'male',
	favLanguage: 'JavaScript',
	specialty: 'Front-end',
	catchPhrase: `Don't forget the homies`
});

const Kyle = new Student({
	name: 'Kyle',
	location: 'Florida',
	age: 22,
	gender: 'male',
	previousBackground: `Driver`,
	className: `Webpt6`,
	favSubjects: [ `HTML`, ` CSS`, ` JavaScript` ]
});

const Dan = new ProjectManager({
	name: `Dan`,
	location: 'Georgia',
	age: 45,
	gender: 'male',
	gradClassName: `Webft1`,
	favInstructor: `Josh`,
	favLanguage: 'Python',
	specialty: 'Back-end',
	catchPhrase: `What does the Fox say?`
});

Dan.speak();
Fred.speak();
Kyle.speak();
Fred.demo(`python`);
Fred.grade(Kyle,`JS`);
Kyle.listsSubjects();
Kyle.PRAssignment(Kyle,`Javascript`);
Kyle.sprintChallenge(Kyle,`Python`);
Dan.standUp(Dan,`Webpt6`);
Dan.debugsCode(Dan,Kyle,`CSS`);