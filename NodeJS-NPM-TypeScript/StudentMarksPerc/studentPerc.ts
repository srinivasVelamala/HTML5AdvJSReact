type Student = {
    name: string;
    sub1: number;
    sub2: number;
    sub3: number;
  };
  function getTotalMarks(stud: Student): number {
    let total : number;
    total = stud.sub1 + stud.sub2 + stud.sub3;
    return total;
  }
  
  function getPercentage(stud: Student): number {
   let percentage : number;
   let totalMarks: number = getTotalMarks(stud);
   percentage = (totalMarks/300) * 100;
   return percentage;
  }
  
  const nick: Student = {
    name: 'Nick Watkins',
    sub1: 80,
    sub2: 88,
    sub3:98
  };
 console.log('Student1 Details----');
  console.log('Student Name- ' + nick.name);
  console.log('Student total Marks-' + getTotalMarks(nick));
  console.log('Student Percentage-' + getPercentage(nick).toFixed(2) + '%');

  const Lana: Student = {
      name: 'Marry Lana',
      sub1: 60,
      sub2: 81,
      sub3:91
    };
console.log('*****************************************************');
   console.log('Student2 Details----');
    console.log('Student Name- ' + Lana.name);
    console.log('Student total Marks-' + getTotalMarks(Lana));
     console.log('Student Percentage-' + getPercentage(Lana).toFixed(2) + '%');