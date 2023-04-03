// Form Modal
const showFormBtn = document.getElementById("comm-btn");
const form = document.getElementById("form-container");

form.classList.add("hidden");

showFormBtn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  } else {
    form.classList.add("hidden");
  }
});

// List of Comments
const showCommentsBtn = document.getElementById("show-btn");
const commentContainer = document.getElementById("comment-container");

commentContainer.classList.add("hidden");

showCommentsBtn.addEventListener("click", () => {
  if (commentContainer.classList.contains("hidden")) {
    commentContainer.classList.remove("hidden");
    showFormBtn.classList.add("hidden");
    form.classList.add("hidden");
  } else {
    commentContainer.classList.add("hidden");
    showFormBtn.classList.remove("hidden");
  }
});
