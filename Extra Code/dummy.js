"use strict";
//✅ - DONE
// ❌ - NOT DONE
const enterTodo = document.querySelector(".enterTodo");
const add = document.querySelector(".add");
const clearAll = document.querySelector(".clearAll");
// const inpBtn = document.querySelector(".inpBtn");
console.log("Simple TO-DO by Rudransh Aggarwal 😊");

//Enter Logic ✅
let cnt = 1;
let userInput;
enterTodo.onkeyup = (e) => {
  if (e.key === "Enter" && enterTodo.value != " ") {
    userInput = enterTodo.value;
    console.log(userInput);
    let html = ` <li class="inp"> <button class='inpBtn'onclick=inpBtnfunc()> ${userInput}</button></li>`;
    add.insertAdjacentHTML("afterbegin", html);
    localStorage.setItem(cnt++, userInput);
    enterTodo.value = "";
  }
};
// console.log(localStorage);

//Fetch data from localStorage(That's why only we are storing in it😂😂😂) ✅
window.addEventListener("load", () => {
  for (let i = 1; i <= localStorage.length; i++) {
    let localUserInput;
    localUserInput = localStorage.getItem(i);
    console.log(localUserInput);
    let html = ` <li  class="inp" ><button class='inpBtn'onclick=inpBtnfunc()> ${localUserInput}</button></li>`;
    add.insertAdjacentHTML("afterbegin", html);
  }
});

// Delete per todo ❌
// if clicked on dustbin button delete it
// function inpBtnfunc(){
//     // document.querySelectorAll(".inpBtn").forEach(element,ind,){
//         document.querySelector(".inpBtn").style.textDecoration="line-through"
//     // }
// }
// console.log(inpBtn)
// if(inpBtn == null) console.log( ) ;
// else
// inpBtn.addEventListener("click",()=>{
//     inpBtn.classList.add("cross")
// })

//Delete full list ✅
function another() {
  console.log("clicked");
  window.location.reload();
}

//Can I implement login logic in it.


//it is storing only 3 todo's at a time ,if we will add the new todo's the old ones will be deleted












//--------------Extra Code-----------------
// console.log(localStorage.getItem("rudra"))
// console.log(e.keyCode)
// console.log(e.key==="Enter")
// console.log(e.key===" ")//for space keyboard event
// console.log(KeyboardEvent.key)
// onkeydown = (e) => {
//   // console.log(e.keyCode)
//   // console.log(e.key==="Enter")
//   // console.log(e.key===" ")//for space keyboard event
//   // console.log(KeyboardEvent.key)
//   console.log(e.key);
// };
