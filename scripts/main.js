import printToDom from './printToDom.js';
import randomHouse from './randomHouse.js';

const students = [];

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
    house: randomHouse.getRandomHouse(),
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
  document.querySelector('#formButton').addEventListener('click', randomHouse.buildForm);
  document.querySelector('#form').addEventListener('submit', sortStudent);
  document
    .querySelector('#studentContainer')
    .addEventListener('click', deleteStudent);
};

const init = () => {
  eventListeners();
};

init();
