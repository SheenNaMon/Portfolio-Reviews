// local reviews data
const reviews = [
  {
    id: 1,
    name: "Siranoush Monfared",
    job: "web developer",
    img:
      "https://scontent-mia3-2.xx.fbcdn.net/v/t1.18169-9/16684193_1286909704713161_7777626560673979047_n.jpg?stp=c0.139.539.539a_dst-jpg_s851x315&_nc_cat=105&ccb=1-7&_nc_sid=da31f3&_nc_ohc=aHxEPEg6GPYAX9Yw-X_&_nc_ht=scontent-mia3-2.xx&oh=00_AfAhsXn9_hHZHPS0tq_RE6KGFRjtAP0bT8pWia3eabl6QQ&oe=6411FEE1",
    text:
      " Web developers create and maintain websites. They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. In addition, web developers may create content for the site",
  },
  {
    id: 2,
    name: "Soushiyans Monfared",
    job: "web designer",
    img:
      "https://i.pinimg.com/736x/66/86/4f/66864ff3069a01cd2b780d30dd3a465e.jpg",
    text:
      "Web developers usually fall under one of three categories: back-end developers, front-end developers, and full-stack developers. Some web developers also work as webmasters. Let's take a closer look at each of these roles. Back-end web developers create the website's structure, write code, and verify the code works.",
  },
  {
    id: 3,
    name: "Soren Monfared",
    job: "intern",
    img:
      "https://scontent-mia3-2.xx.fbcdn.net/v/t1.18169-9/148219_576281102442695_1958862344_n.jpg?stp=c95.0.425.425a_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=hvHAu-5KqocAX_4NMvT&tn=e16edTJPYtFPysZx&_nc_ht=scontent-mia3-2.xx&oh=00_AfD4TykLnzeE-qs9djR7yl0TEbmpMiHFG1EXa_uy44oIHQ&oe=6411F58F",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Xyryn Monfared",
    job: "The Boss",
    img:
      "https://scontent-mia3-2.xx.fbcdn.net/v/t31.18172-8/10273280_635403766530428_695135389565043944_o.jpg?stp=c0.139.843.843a_dst-jpg_p843x403&_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=oRTOLLPsm3oAX8J5cvF&_nc_ht=scontent-mia3-2.xx&oh=00_AfAf2Yhb3n1_d6-NGrB1eubICAw80Hp9vdRqNhe_Yjt0JQ&oe=6411DEEE",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

//show person based on item

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text; 
}
// show next person

nextBtn.addEventListener('click', function (){
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson(currentItem);
});

//show previous person

prevBtn.addEventListener("click", function () {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
   showPerson(currentItem);
  });

  // show random person

  randomBtn.addEventListener('click', function (){
    console.log('yes');

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });
