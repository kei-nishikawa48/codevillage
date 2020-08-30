const intro =document.getElementById("intro")
console.log(intro.textContent)

const list =document.querySelector(".list")
console.log(list.children.length)

const items = document.querySelectorAll(".list li")

items.forEach((item)=>{
  console.log(item.textContent)
})


const elem =document.querySelector(".list")

console.log(elem.textContent)
console.log(elem.innerHTML)
for(let i=0;i<elem.children.length;i++){
  console.log(elem.children[i])
}

console.log(elem.firstElementChild)
console.log(elem.lastElementChild)
console.log(elem.parentElement)

const elem2 =document.querySelector("img")

console.log(elem2.getAttribute("src"))
elem2.setAttribute("src","https://placehold.it/400x200")


const newItem =document.createElement("li")
newItem.textContent="新しいアイテム"

list.appendChild(newItem)
list.removeChild(list.firstElementChild)



const addbutton =document.getElementById("add")
const removebutton=document.getElementById("remove")

addbutton.addEventListener("click",(event)=>{
  const newItem =document.createElement("li")
  newItem.textContent="新しいアイテム"
  list.appendChild(newItem)
})

removebutton.addEventListener("click",(event)=>{
  list.removeChild(list.lastElementChild)
})


