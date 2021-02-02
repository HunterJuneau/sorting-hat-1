const students = [];

const houses = [
  {
    name: 'Gryffindor',
    crest:
      'https://static.wikia.nocookie.net/harrypotter/images/e/ee/Gryffindor_Crest-0.jpg/revision/latest/scale-to-width-down/182?cb=20160729145529',
    colors: {
      primary: '#ff2400',
      secondary: 'gold',
    },
  },
  {
    name: 'Hufflepuff',
    crest:
      'https://static.wikia.nocookie.net/harrypotter/images/d/da/Hufflepuff_House_Crest_old.jpg/revision/latest/scale-to-width-down/160?cb=20160729145653',
    colors: {
      primary: 'yellow',
      secondary: 'black',
    },
  },
  {
    name: 'Ravenclaw',
    crest:
      'https://static.wikia.nocookie.net/harrypotter/images/7/77/Ravenclaw_House_Crest.jpg/revision/latest/scale-to-width-down/160?cb=20160729145945',
    colors: {
      primary: 'blue',
      secondary: '#cd7f32',
    },
  },
  {
    name: 'Slytherin',
    crest:
      'https://static.wikia.nocookie.net/harrypotter/images/7/71/Slytherin_crest_old.jpg/revision/latest/scale-to-width-down/160?cb=20160729150848',
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
                    <input type="text" class="form-control" id="student" name="student">
                  </div>
                  <button type="submit" class="btn btn-primary">Sort</button>
                </form>`;

  printToDom('#form', domString);
};

const getRandomHouse = () => {
  return houses[Math.floor(Math.random() * 4)];
};

const sortStudent = (e) => {
  e.preventDefault();

  const studentName = document.querySelector('#student').value;

  const student = {
    name: studentName,
    house: getRandomHouse(),
  };

  students.push(student);
};

const eventListeners = () => {
  document.querySelector('#formButton').addEventListener('click', buildForm);
  document.querySelector('#form').addEventListener('submit', sortStudent);
};

const init = () => {
  eventListeners();
};

init();
