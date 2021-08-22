function realtimeClock() {
    
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var amPm = ( hours < 12) ? "AM" : "PM";

    hours - (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML =
     hours + "  :  " + minutes + "  :  " + seconds;
     var t = setTimeout(realtimeClock, 500);

}

const cardContainer = document.querySelector(".card-container");
const logout = document.querySelector(".logout");
const createNoteButton = document.querySelector(".new-note");

const apiUrl = "https://noteitappbackend.herokuapp.com/";

const token = localStorage.getItem("jwt");

logout.addEventListener("click", () => {
  localStorage.removeItem("jwt");
  location.href = "/";
});

let cardData = [];

createNoteButton.addEventListener("click", () => {
  location.href = "/create/index.html";
});

const createNotes = (array) => {
  cardContainer.innerHTML = "";

  array.forEach((cardObj) => {
    const { heading, content } = cardObj;
    const id = cardObj.noteId;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;

    const insideHtml = `<div class="card-header"><div class="card-heading">${heading}</div><a href="../updateNotes/updateNotes.html?noteId=${id}"><div class="edit-note"><img src="../../assets/edit-note.svg" alt="" /></div></a></div><div class="card-content">${content}</div>`;

    card.innerHTML = insideHtml;

    cardContainer.appendChild(card);
  });
};

const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("visible");

  if (token) {
    fetch(`${apiUrl}/note/getallnotes`, {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        cardData = data.data;
        createNotes(data.data);
      })
      .catch((err) => {
        alert("Error Fetching data");
        console.log(err);
      });
  }
});
