/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
const moodInputs = document.querySelectorAll('input[name="mood"]');

moodInputs.forEach((input) => {
  input.addEventListener("change", () => {
    document.documentElement.dataset.mood = input.value;
  });
});