type User = {
  name: string;
  age: number;
};
function isAdult(user: User): boolean {
  return user.age >= 18;
}

function getUserName(user: User): string {
  return user.name;
}

const justine: User = {
  name: 'Justine',
  age: 'Secret!',
};
const isJustineAnAdult: string = isAdult(justine, "I shouldn't be here!");

const username: string = getUserName(justine);
console.log('My new User name- ' + username);