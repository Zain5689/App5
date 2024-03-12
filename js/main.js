let slide = Array.from(document.querySelectorAll(".slide img"));

//Get number of slide
let slideCount = slide.length;

// set Current slide
let currentSlide = 1;

// slide number element
let slideNumber = document.getElementById("slide-num");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.onclick = prevSlide;
next.onclick = nextSlide;

// Create ul
let ul = document.createElement("ul");
ul.setAttribute("id", "ul");

// Create num of li
for (let i = 1; i <= slideCount; i++) {
  let li = document.createElement("li");
  li.setAttribute("data-index", i);
  li.appendChild(document.createTextNode(i));
  ul.appendChild(li);
}
document.getElementById("indicator").appendChild(ul);

// Get The New ul
let paginUl = document.getElementById("ul");

// Get new Pagitem
let slidebullets = Array.from(document.querySelectorAll("#ul li"));

// Loop through the slidebullets and attach the click event
slidebullets.forEach(function (bullet) {
  bullet.onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    TheChecker();
  };
});
//trigger checker function
TheChecker();

function nextSlide() {
  if (next.classList.contains("disable")) {
    return false;
  } else {
    currentSlide++;
  }
  TheChecker();
}
function prevSlide() {
  if (prev.classList.contains("disable")) {
    return false;
  } else {
    currentSlide--;
  }
  TheChecker();
}

// Function Checker

function TheChecker() {
  //set slide num
  slideNumber.textContent = "slide #" + currentSlide;
  +" of " + slideCount;

  //remove active class
  RemoveAll();

  //set active class
  slide[currentSlide - 1].classList.add("active");

  // set Active class on current ul
  paginUl.children[currentSlide - 1].classList.add("active");

  // check prev
  if (currentSlide == 1) {
    prev.classList.add("disable");
  } else {
    prev.classList.remove("disable");
  }

  // check next
  if (currentSlide == slideCount) {
    next.classList.add("disable");
  } else {
    next.classList.remove("disable");
  }
}
// Remove all active classes
function RemoveAll() {
  // Loop through slidebullets
  slidebullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });

  // Loop through slides
  slide.forEach(function (img) {
    img.classList.remove("active");
  });
}
