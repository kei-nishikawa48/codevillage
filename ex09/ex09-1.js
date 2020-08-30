const list = document.getElementById("list")
const add=document.getElementById("add")
const remove=document.getElementById("remove")

add.addEventListener("click",(event)=>{
  const newItem=document.createElement("li")
  const childno=list.children.length
  newItem.textContent=`アイテム${childno+1}`
  list.appendChild(newItem)

})

remove.addEventListener("click",(event)=>{
  list.removeChild(list.lastChild)
})

