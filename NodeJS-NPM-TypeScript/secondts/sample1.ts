type User = {
  name: string;
  age: number;
};
function isAdult(user: User): boolean {
  return user.age >= 18;
}
const justine: User = {
  name: 'Justine',
  age: 12,
};
const isJustineAnAdult: boolean = isAdult(justine);
console.log("name=" + justine.name)
console.log("age=" + justine.age)
console.log("Is he Adult? - " + isJustineAnAdult)
