import houses from './houseData.js';
import printToDom from './printToDom.js';

const getRandomHouse = () => {
  return houses[Math.floor(Math.random() * 4)];
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

export default {getRandomHouse, buildForm};
