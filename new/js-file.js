 // selects the #container div (don't worry about the syntax, we'll get there)
 const container = document.querySelector("#container");
 const content = document.createElement("div");
 content.classList.add("content");
 content.textContent = "This is how the magic works";
 container.appendChild(content);

 const p = document.createElement("P");
 p.style.color = "red";
 p.textContent = "Hey I'm red";
 container.append(p);

 const h3 = document.createElement("H3");
 h3.style.color = "blue";
 h3.textContent = "I'm a blue h3!";
 container.append(h3);

 const div = document.createElement("DIV");
 div.style.border = "1px solid black";
 div.style.background = "pink";

 const h1 = document.createElement("H1");
 h1.textContent = "I am in a div";

 const p1 = document.createElement("P")
 p1.textContent  = "Me Too"

 div.append(h1);
 div.append(p1);
 container.append(div);
 const btn = document.querySelector("#btn");
 //btn.onclick = () => alert("Hello World");

 function alertFunction() {
    alert("Listeners using named functions");
    console.log("after the alert");
  }
 
  btn.addEventListener("click", alertFunction);
  btn.addEventListener("click", function (e) {
    console.log(e.target);
    console.log("We get this too on every click");
  });
  btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
  
//  btn.addEventListener("click", () => {
//     alert("Using Event Listener");
//   });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
