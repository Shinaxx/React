
const person = {
    name: 'Alex',
    walk() {},
    talk() {}
};

person.talk();
person.name = '';

const targetMember = 'name';
person[targetMember.value] = 'john';