const showForm = document.getElementById("comm-btn");
const form = document.getElementById("form");

const showComments = document.getElementById("show-btn");

form.classList.add("hidden");

showForm.addEventListener("click", () => {
  form.classList.remove("hidden");
});


