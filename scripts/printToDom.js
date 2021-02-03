const printToDom = (selector, text) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = text;
};

export default printToDom;
