const first = { name: "Alex" };
const second = { job: "Instructor"};

const combined = { ...first, ...second, location: "Italy" };
console.log(combined);

//cloning

const first = { name: "Alex" };
const second = { job: "Instructor"};

const clone = { ...first };