const person = {
    name: 'Alex',
    walk() {
      console.log(this);
    }
};

person.walk();

const walk = person.walk;
walk();
