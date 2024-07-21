function isAdult(user) {
    return user.age >= 18;
}
function getUserName(user) {
    return user.name;
}
var justine = {
    name: 'Justine',
    age: 'Secret!',
};
var isJustineAnAdult = isAdult(justine, "I shouldn't be here!");
var username = getUserName(justine);
console.log('My new User name- ' + username);
