const collection1 = [
  {
    img: "images/13.webp",
    heading: "Punjab Kurta & Pyjama",
  },
  {
    img: "images/14.webp",
    heading: "Salwar Suit",
  },
  {
    img: "images/15.webp",
    heading: "Sharara Suit",
  },
  {
    img: "images/16.webp",
    heading: "BandhGala Suit",
  },
];
const collectionContainer = document.querySelector(".collectionContainer");

collection1.map((item) => {
  const div = document.createElement("div");
  div.classList.add("grid-item");
  div.innerHTML = `   
            <img src=${item.img} class="gridImage" alt="" />
            <div class="btnContainer">
              <h1 class="gridImageHeading">${item.heading}</h1>
              <button class="btn btn-3 hover-slide-right">
                <span>VIEW MORE</span>
              </button>
            </div>
        `;
  collectionContainer.appendChild(div);
});
