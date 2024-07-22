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
//   const isJustineAnAdult: string = isAdult(justine, "I shouldn't be here!");
  
//   const username: string = getUserName(justine);
  console.log('Student Name- ' + nick.name);
  console.log('Student total Marks-' + getTotalMarks(nick));
  console.log('Student Percentage' + getPercentage(nick));