const body=document.body;
body.classList.add("body")

const container=document.createElement("div")
container.classList.add("container")

const counter=document.createElement("p")
counter.classList.add("counter")

const plus=document.createElement("button")
plus.classList.add("button")

const reset=document.createElement("button")
reset.classList.add("button")

const minus=document.createElement("button")
minus.classList.add("button")

counter.textContent="0"
plus.textContent="+"
reset.textContent="Reset"
minus.textContent="-"

// const container=document.getElementById("div")
// const counter=document.getElementById("number")
// const plus=document.getElementById("b1")
// const reset=document.getElementById("b2")
// const minus=document.getElementById("b3")

container.appendChild(counter)
container.appendChild(plus)
container.appendChild(reset)
container.appendChild(minus)
body.appendChild(container)

let number =0;

plus.addEventListener("click",function(){
    // counter.textContent = Number(counter.textContent)+ 1;
    number=number+1;
    counter.textContent=number;
    counter.appendChild(container)
})
reset.addEventListener("click",function(){
    // counter.textContent = "0";
    counter.textContent=0;
})

minus.addEventListener("click",function(){
    if(counter.textContent==0)
        counter.textContent=0
    else
        counter.textContent -= 1;
})
