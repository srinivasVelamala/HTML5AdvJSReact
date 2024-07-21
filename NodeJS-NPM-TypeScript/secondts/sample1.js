function isAdult(user) {
    return user.age >= 18;
}
var justine = {
    name: 'Justine',
    age: 12,
};
var isJustineAnAdult = isAdult(justine);
console.log("name=" + justine.name);
console.log("age=" + justine.age);
console.log("Is he Adult? - " + isJustineAnAdult);
