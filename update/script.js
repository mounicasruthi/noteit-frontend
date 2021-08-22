const urlParams = new URLSearchParams(window.location.search);
const noteId = urlParams.get("noteId");

console.log(noteId);

const updateNoteButton = document.querySelector(".create-note-button");

const apiUrl = "https://noteitappbackend.herokuapp.com";

const token = localStorage.getItem("jwt");

updateNoteButton.addEventListener("click", () => {
  const content = document.querySelector(".create-note-input").value;
  const heading = document.querySelector(".create-note-heading").value;

  if (token) {
    fetch(`${apiUrl}/note/update/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ content, heading }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          location.href = "/notes/index.html";
        }
      })
      .catch((err) => {
        alert("Could not create note, please try again.");
        console.log(err);
      });
  }
});