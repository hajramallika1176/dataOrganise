const people = [
  {
    name: "rahul",
    age: 99,
    city: "Pune",
    job: "software engineer",
    studied: ["computer science"],
    hobbies: [
      {
        activity: "playing",
        activityDetails: ["chess"],
      },
      {
        activity: "gardening",
        activityDetails: [],
      },
    ],

    petsDetails: [
      {
        type: "golden retriever",
        name: "Max",
        age: 4,
        vaccinated: true,
        favoriteActivity: ["playing fetch in the park"],
      },
    ],
    employed: true,
    vehicle: ["car"],
  },

  {
    name: "Ananya",
    age: 30,
    city: "Bangalore",
    job: null,
    studied: ["graphic design", "computer science"],
    hobbies: [
      {
        activity: "cooking",
        activityDetails: ["experiments with Italian recipes"],
      },
    ],

    petsDetails: [
      {
        type: "parror",
        name: "Kiwi",
        vaccinated: true,
        age: 2,
        favoriteActivity: ["mimics her voice"]
      },
    ],
    employed: false,
    vehicle: [],
  },

  {
    name: "Ramesh",
    age: 45,
    city: "Jaipur",
    job: "business owner",
    studied: "Ns",
    hobbies: [
      {
        activity: "gardening",
        activityDetails: ["rose gardening"],
      },
      { activity: "reading", activityDetails: ["historical fiction"] },
    ],

    petsDetails: [
      {
        type: "Persian cats",
        name: "Bella",
        vaccinated: true,
        age: 3,
        favoriteActivity: ["lounging in the sun"]
      },
      {
        type: "Persian cats",
        name: "Leo",
        vaccinated: true,
        age: 3,
        favoriteActivity: ["lounging in the sun"],
      },
    ],
    employed: true,
    vehicle: [],
  },

  {
    name: "Kavya",
    age: 28,
    job: "professional dancer",
    city: "Chennai",
    studied: "NS",
    hobbies: [
      { activity: "reading", activityDetails: ["modern fantasy novels"] },
      {
        activity: "binge-watching",
        activityDetails: ["watching sci-fi shows"],
      },
    ],
    petsDetails: [
      {
        type: "rabbit",
        name: "Snowy",
        vaccinated: true,
        age: 2,
        favoriteActivity: ["hopping around backyard", "nibbling on carrot"],
      },
    ],
    employed: false,
    vehicle: [],
  }
];

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
//* start Slove Question *
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/

// 1. How many individuals are currently employed?
// people.reduce((count, person) => (person.employed ? count + 1 : count), 0);

const getEmployedName = () =>
  people.filter(({ employed }) => employed).length;

console.log(getEmployedName());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 2. How many people own a car?
const CAR = "car";

const countOfCarOwner = () =>
  people.filter(({ vehicle }) => vehicle.includes(CAR)).length;

console.log(countOfCarOwner());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 3. How many pets are fully vaccinated?

const getVaccinatedPets = () =>
  people.filter((person) =>
    person.petsDetails.filter(({ vaccinated }) => vaccinated)
  ).length;

console.log(getVaccinatedPets());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 4. How many pets are fully vaccinated?pet name and pet name

// const getString = function (pet) {
//   return "type is: " + pet.type + " name is : " + pet.name;
// };

// const getPetsNameAndtype = function (person) {
//   return person.petsDetails.map((pet) => getString(pet)).join("");
// };

const getPetsNamesAndTypes = () =>
  people.flatMap((person) =>
    person.petsDetails.map(({ type, name }) => ({ type, name }))
  );

console.table(getPetsNamesAndTypes());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 5. Which cities do the individuals live in?

const getNameAndAddress = () => people.map(({ name, city }) => ({ name, city }));

console.table(getNameAndAddress());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 6. How many hobbies are shared across the group? What are they?

const getAllHobbies = () => {
  const listOfHobbies = people.flatMap((person) =>
    person.hobbies.map((hobby) => hobby.activity)
  );

  return [listOfHobbies, listOfHobbies.length];
};

console.table(getAllHobbies());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 7. How many pets belong to people who are currently unemployed?

const getTotalPets = (people) =>
  people.reduce((count, person) => count + person.petsDetails.length, 0);

const numberofPetsBelongToUnemployed = function () {
  const listOfUnemployed = people.filter((person) => !person.employed);

  return getTotalPets(listOfUnemployed);
};

console.log(numberofPetsBelongToUnemployed(people));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 8. What is the average age of the individuals mentioned in the passage?

const averageOfPeopleAge = () =>
  people.reduce((sumOfAge, person) => sumOfAge + person.age, 0) / people.length;

console.log(averageOfPeopleAge());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 9. How many individuals have studied computer science, and how many of them have pets?
const CS = "computer science";

const getEducationDetails = () => {
  const listOfCSPeople = people.filter((person) => person.studied.includes(CS));
  const totalPetOfThem = getTotalPets(listOfCSPeople);

  return [listOfCSPeople.length, totalPetOfThem];
};

console.table(getEducationDetails());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 10. How many individuals own more than one pet?

const getPeopleHaveManyPets = () =>
  people.filter((person) => person.petsDetails.length > 1).length;

console.log(getPeopleHaveManyPets());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 11. Which pets are associated with specific favorite activities?

const getPetsInfo = () =>
  people.flatMap((person) =>
    person.petsDetails.map(({ type, favoriteActivity }) => ({
      type,
      favoriteActivity,
    }))
  );

console.table(getPetsInfo());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai?

const citys = ["Bangalore", "Chennai"];

const getPetsNames = (person) => person.petsDetails.map(({ name }) => name);

const getAnimalsByBLRAndChennai = () => {
  const peopleInBLRAndChennai = people.filter(({ city }) =>
    citys.includes(city)
  );

  return peopleInBLRAndChennai.flatMap(getPetsNames);
};

console.table(getAnimalsByBLRAndChennai());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 13. How many vaccinated pets belong to people who do not own a car?

const getVaccinatedPetsOfPeopleWhoDontHaveCar = () => {
  const peopleWhoDontHaveCAr = people.filter(({ vehicle }) =>
    vehicle.includes(CAR)
  );

  return getVaccinatedPets(peopleWhoDontHaveCAr);
};

console.log(getVaccinatedPetsOfPeopleWhoDontHaveCar());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 14. What is the most common type of pet among the group?

const getPetsType = (people) => people.petsDetails.map(({ type }) => type);

const getPetsOccurance = (occurenceTable, targetPet) => {
  const existingOcc = occurenceTable.find((occT) => occT[0] === targetPet);

  !existingOcc ? occurenceTable.push([targetPet, 1]) : existingOcc[1]++;

  return occurenceTable;
};

const getmostOccurancePet = (max, pet) => {
  if (pet[1] > max.number) {
    max.petName = pet[0];
    max.number = pet[1];
  }

  return max;
};

const getCommonTypePet = () => {
  const listOfPetsTypes = people.flatMap(getPetsType);
  const petsOccuranceDetails = listOfPetsTypes.reduce(getPetsOccurance, []);

  return petsOccuranceDetails.reduce(getmostOccurancePet, {
    petName: "",
    number: -Infinity,
  });
};

console.table(getCommonTypePet());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 15. How many individuals have more than two hobbies?

const getPeopleWhoHAveManyHobbies = () =>
  people.filter(({ hobbies }) => hobbies.length > 2).length;

console.log(getPeopleWhoHAveManyHobbies());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
//16. How many individuals share at least one hobby with Ramesh?
const RAMESH = "Ramesh";

const isHobbySame = function (rameshHobbies) {
  return function (person) {
    return person.hobbies.some(({ activity }) =>
      rameshHobbies.includes(activity)
    );
  };
};

const getPeopleWhoHaveSameHobbyWithRamesh = () => {
  const rameshHobbies = people
    .filter(({ name }) => name === RAMESH)
    .flatMap((person) => person.hobbies.map((hobby) => hobby.activity));

  const peopleWithOutRamesh = people.filter((person) => person.name !== RAMESH);

  return peopleWithOutRamesh.filter(isHobbySame(rameshHobbies)).length;
};

console.log(getPeopleWhoHaveSameHobbyWithRamesh());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 17. Which pet is the youngest, and what is its name?

const getYoungestPet = (youngestPet, pet) => {
  if (pet.age < youngestPet.age) {
    youngestPet.youngestPet = pet.type;
    youngestPet.name = pet.name;
    youngestPet.age = pet.age;
  }

  return youngestPet;
};

const getYoungestPetName = () => {
  const listofPetsDetails = people
    .flatMap((person) => person.petsDetails)
    .map(({ type, age, name }) => ({ type, age, name }));

  return listofPetsDetails.reduce(getYoungestPet, {
    youngestPet: "",
    name: "",
    age: Infinity,
  });
};

console.table(getYoungestPetName());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 18. What types of books are mentioned as interests, and who reads them?
const READING = "reading";

const isHobbyReading = (hobby) => hobby === READING;

const isPersonReader = (person) =>
  person.hobbies.some((hobby) => isHobbyReading(hobby.activity));

const getBooksName = (books, hobby) => {
  if (isHobbyReading(hobby.activity)) {
    books.push(hobby.activityDetails);
  }
  return books;
};

const getReaderAndBook = (person) => {
  const booksName = person.hobbies.reduce(getBooksName, []).flat();

  return { reader: person.name, bookName: booksName };
};

const getBooksNameAndReaders = () => {
  const readingPerson = people
    .filter(isPersonReader)
    .flatMap(({ name, hobbies }) => ({ name, hobbies }));

  console.log(readingPerson);
  return readingPerson.map(getReaderAndBook);
};

console.table(getBooksNameAndReaders());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 19. How many individuals live in cities starting with the letter "B"?

const getPeopleWhoLivesInCItyWithStartB = () =>
  people.filter((person) => person.city.at(0) === "B").length;

console.log(getPeopleWhoLivesInCItyWithStartB());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
// 20. Which individuals do not own any pets?

const getPeopleWhoHaveNoPets = () =>
  people
    .filter((person) => person.petsDetails.length < 1)
    .map((person) => person.name);

console.table(getPeopleWhoHaveNoPets());

//~~~~~~~~~~~~~~~~~~~~~~     END      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~/
