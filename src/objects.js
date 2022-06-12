const createPerson = (name, age) => {
  return {
    name,
    age
  }
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) {
    return true;
  } else {
    return false;
  }
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  const manufacCheck = cars.filter(manufac => {
    return manufac.manufacturer === 'Honda';
  });
  return manufacCheck
};

const averageAge = people => {
  const average = people.reduce((acc, person) => person.age + acc, 0) / people.length;
  return average;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce: newPerson => {
      return `Hi ${newPerson}, my name is ${name} and I am ${age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
