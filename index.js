const reviews = [
  {
    id: 1,
    name: "susan smith",
    occupation: "web developer",
    img: "./images/model2-modified.png",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    occupation: "web designer",
    img: "./images/model3-modified.png",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    occupation: "intern",
    img: "./images/model4-modified.png",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    occupation: "the boss",
    img: "./images/model5-modified.png",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let currentItem = 0;

const img = document.querySelector(".img-container img");
const author = document.querySelector("#name");
const occupation = document.querySelector("#occupation");
const review = document.querySelector(".review p");
const nextBtn = document.querySelector(".right i");
const prevBtn = document.querySelector(".left i");

nextBtn.addEventListener("click", () => {
  if (currentItem < 3) {
    currentItem++;
    setCurrentItem();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentItem > 0) {
    currentItem--;
    setCurrentItem();
  }
});

function setCurrentItem() {
  img.src = `${reviews[currentItem].img}`;
  author.innerText = `${reviews[currentItem].name}`;
  occupation.innerText = `${reviews[currentItem].occupation}`;
  review.innerText = `${reviews[currentItem].text}`;
}

setCurrentItem();
