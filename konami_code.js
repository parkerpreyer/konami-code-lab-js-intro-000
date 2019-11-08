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

function init() {
  let index = 0;
  document.body.addEventListener("keydown", (e) => {
    const key = e.key;

    if (key === codes[index]) {
      index++;

    } else {
        alert('Keep trying ;(');

        index = 0;
    }

    if (index === codes.length - 1) {
      alert('Congrats!!!');

      index = 0;
    }
  });
}
