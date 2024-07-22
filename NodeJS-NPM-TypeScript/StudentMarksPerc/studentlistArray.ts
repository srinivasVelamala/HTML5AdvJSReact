class Student = {
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
   let studentList: Student[] = [
        {name: 'Nick Watkins',
             sub1: 80, sub2: 88, sub3:98  }
      ];


      for(let stud in studentList)
      {
 console.log('Student1 Details----');
  console.log('Student Name- ' + stud.name);
  console.log('Student total Marks-' + getTotalMarks(stud));
  console.log('Student Percentage-' + getPercentage(stud).toFixed(2) + '%');
  }

