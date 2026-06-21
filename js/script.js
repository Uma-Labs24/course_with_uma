// DARK MODE

const themeBtn =
document.getElementById("themeBtn");

themeBtn?.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark-mode"
);

if(
document.body.classList.contains(
"dark-mode"
)
){

themeBtn.innerHTML = "☀️";

localStorage.setItem(
"theme",
"dark"
);

}else{

themeBtn.innerHTML = "🌙";

localStorage.setItem(
"theme",
"light"
);

}

}
);

if(
localStorage.getItem("theme")
=== "dark"
){

document.body.classList.add(
"dark-mode"
);

if(themeBtn){

themeBtn.innerHTML = "☀️";

}

}

// HOME PAGE SEARCH

const searchInput =
document.getElementById(
"searchInput"
);

searchInput?.addEventListener(
"keyup",
()=>{

let value =
searchInput.value.toLowerCase();

let cards =
document.querySelectorAll(
".card"
);

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

card.style.display =
text.includes(value)
? "block"
: "none";

});

}
);

// COURSE SEARCH

const courseSearch =
document.getElementById(
"courseSearch"
);

courseSearch?.addEventListener(
"keyup",
()=>{

let value =
courseSearch.value.toLowerCase();

let cards =
document.querySelectorAll(
".card"
);

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

card.style.display =
text.includes(value)
? "block"
: "none";

});

}
);





document.body.classList.toggle("dark");
document.body.classList.toggle("light");