const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  onKeyDownHandler(e);
  function onKeyDownHandler(e) {
    const key = e.key;

    if (key === codes[index]) {
      index++;

      if (index === codes.length) {
        alert('Congrats!!!');

        index = 0;
      }
    } else {
      alert('Keep trying ;(');

      index = 0;
    }
  }
}
