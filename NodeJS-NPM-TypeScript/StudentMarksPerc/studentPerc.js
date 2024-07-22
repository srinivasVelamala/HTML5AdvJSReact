function getTotalMarks(stud) {
    var total;
    total = stud.sub1 + stud.sub2 + stud.sub3;
    return total;
}
function getPercentage(stud) {
    var percentage;
    var totalMarks = getTotalMarks(stud);
    percentage = (totalMarks / 300) * 100;
    return percentage;
}
var nick = {
    name: 'Nick Watkins',
    sub1: 80,
    sub2: 88,
    sub3: 98
};
//   const isJustineAnAdult: string = isAdult(justine, "I shouldn't be here!");
//   const username: string = getUserName(justine);
console.log('Student1 Details----');
console.log('Student Name- ' + nick.name);
console.log('Student total Marks-' + getTotalMarks(nick));
console.log('Student Percentage-' + getPercentage(nick).toFixed(2) + '%');
var Lana = {
    name: 'Marry Lana',
    sub1: 60,
    sub2: 81,
    sub3: 91
};
console.log('*****************************************************');
console.log('Student2 Details----');
console.log('Student Name- ' + Lana.name);
console.log('Student total Marks-' + getTotalMarks(Lana));
console.log('Student Percentage-' + getPercentage(Lana).toFixed(2) + '%');
