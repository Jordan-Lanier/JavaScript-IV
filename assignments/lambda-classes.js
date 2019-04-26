class Person {
	constructor(personAttributes) {
		this.name = personAttributes.name;
		this.age = personAttributes.age;
		this.location = personAttributes.location;
		this.gender = personAttributes.gender;
	}
	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}`;
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
		return `Today we are learning about ${subject}.`;
	}
	grade(student, subject) {
		return `${student} receives a perfect score on ${subject}!`;
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
	PRAssignment(studentname, subject) {
		`${studentname} has submitted a PR for ${subject}`;
	}

	sprintChallenge(studentname, subject) {
		`${studentname} has begun sprint challenge on ${subject}`;
	}
}

class ProjectManager extends Instructor {
	constructor(ProjectManagerAttributes) {
		super(ProjectManagerAttributes);
		this.gradClassName = ProjectManagerAttributes.gradClassName;
		this.favInstructor = ProjectManagerAttributes.favInstructor;
    }
    standUp(name,channel){
        return `{name} announces to {channel}, @channel standy times!​​​​​`
    }
    debugsCode(name,subjet){
        return `{name} debugs {student.name}'s code on {subject}`;
    }
}
