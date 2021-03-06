const students = [];

const houses = [
  {
    name: 'Gryffindor',
    colors: {
      primary: '#ff2400',
      secondary: 'gold',
    },
  },
  {
    name: 'Hufflepuff',
    colors: {
      primary: 'yellow',
      secondary: 'black',
    },
  },
  {
    name: 'Ravenclaw',
    colors: {
      primary: 'blue',
      secondary: '#cd7f32',
    },
  },
  {
    name: 'Slytherin',
    colors: {
      primary: '#50c878',
      secondary: 'silver',
    },
  },
];

const printToDom = (selector, text) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = text;
};

const buildForm = () => {
  let domString = '';

  domString += `<form class="w-50 mx-auto my-3 p-3 border border-dark rounded" id="form">
                  <div class="mb-3">
                    <label for="student" class="form-label">Student Name</label>
                    <input type="text" class="form-control" id="student" name="student" required>
                  </div>
                  <button type="submit" class="btn btn-primary">Sort</button>
                </form>`;

  printToDom('#form', domString);
};

const getRandomHouse = () => {
  return houses[Math.floor(Math.random() * 4)];
};

const buildStudentCards = () => {
  let domString = '';

  for (const [i, student] of students.entries()) {
    domString += `<div class="card m-3 border-dark" style="width: 15rem;" id="student${i}">
                    <div class="card-body">
                      <h2 class="card-title">${student.name}</h2>
                      <h4 class="card-subtitle my-3">${student.house.name}</h4>
                      <button class="btn btn-danger" id="${i}">Expel Student</button>
                    </div>
                  </div>`;
  }

  printToDom('#studentContainer', domString);
};

const sortStudent = (e) => {
  e.preventDefault();

  const studentName = document.querySelector('#student').value;
  document.querySelector('#form').reset;

  const student = {
    name: studentName,
    house: getRandomHouse(),
  };

  students.push(student);
  buildStudentCards();
};

const deleteStudent = (e) => {
  if (e.target.type === 'submit') {
    const studentIndex = Number(e.target.id);

    students.splice(studentIndex, 1);
    document.querySelector(`#student${studentIndex}`).remove();
  }
};

const eventListeners = () => {
  document.querySelector('#formButton').addEventListener('click', buildForm);
  document.querySelector('#form').addEventListener('submit', sortStudent);
  document
    .querySelector('#studentContainer')
    .addEventListener('click', deleteStudent);
};

const init = () => {
  eventListeners();
};

init();
