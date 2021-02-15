const school = {
 teachers: [
 {
 id: 1,
 name: "Pinchas",
 subjects: ["chemistry", "biology", "physics"],
 students: [],
 capacityLeft: 3,
 },
 {
 id: 2,
 name: "Williams",
 subjects: ["history", "ethics"],
 students: [],
 capacityLeft: 2,
 },
 ],
 students: [
 {
 id: 10,
 name: "Jennifer",
 age: 20,
 },
 {
 id: 11,
 name: "Howard",
 age: 23,
 },
 {
 id: 12,
 name: "Old-Timmy",
 age: 86,
 },
 {
 id:13,
 name: "Houston",
 age: 21,
 },
 ],
findPerson : function (type,id) {
    let person = school[type].find((el) => el.id === id)
    return person;
},
assignStudent(id, subject) {
    const student = this.findPerson('students', id);
    const teacher = this.teachers.find((el) =>
      el.subjects.includes(subject)
    );
    if (teacher && teacher.capacityLeft) {
      teacher.students.push(student);
      teacher.capacityLeft -= 1;
    } else {
      console.log('Sorry, no available teachers left');
    }
  },
assignTeachersSubject(id,subject){
    const teacher = this.findPerson('teachers',id);
    teacher.subjects.push(subject);
},
assignNewStudent(id,name,age) {
    this.students.push({
        id,
        name,
        age,
    })
}
}
//! 1
console.log(school.findPerson('teachers',1));
//! 2
school.assignStudent(10,'chemistry');
console.log(school);
//! 3
school.assignTeachersSubject(1,'math')
console.log(school.teachers);
//!4
school.assignNewStudent(7,'Adi',27)
console.log(school.students);
