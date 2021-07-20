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

const cardData = [
  {
    heading: "heading 1",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure sequi culpa officiis quae, quod aperiam temporibus pariatur, est laboriosam corporis similique laudantium repellat quas expedita possimus tempora provident doloremque illum exercitationem, architecto deserunt. Fuga repellat incidunt assumenda dolore cumque nihil facilis repudiandae? Explicabo aspernatur earum nostrum amet aperiam, ab distinctio!",
    id: 1,
  },
  { heading: "heading 2", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", id: 2 },
  { heading: "heading 3", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", id: 3 },
  { heading: "heading 4", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", id: 4 },
  { heading: "heading 5", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", id: 5 },
  { heading: "heading 6", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", id: 6 },
  { heading: "heading 7", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", id: 7 },
];

const createNotes = (array) => {
  array.forEach((cardObj) => {
    const { heading, content, id } = cardObj;

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;

    const insideHtml = `<div class="card-header"><div class="card-heading">${heading}</div><a href="https://updatenote.netlify.app/?noteId=${id}"><div class="edit-note"><img src="../assets/Images/editIcon.svg" alt="" /></div></a></div><div class="card-content">${content}</div>`;

    card.innerHTML = insideHtml;

    cardContainer.appendChild(card);
  });
};

createNotes(cardData);



