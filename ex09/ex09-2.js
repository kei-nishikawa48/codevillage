const list = document.getElementById("list")
const add = document.getElementById("add")
const remove = document.getElementById("remove")

add.addEventListener("click", (event) => {
  const newItem = document.createElement("li")
  const childno = list.children.length
  const newimg = document.createElement("img")
  const newspan = document.createElement("span")
  newimg.setAttribute("alt", `アイテム${childno + 1}`)
  newimg.setAttribute("src", "http://placehold.it/64x64")
  newspan.textContent = `アイテム${childno + 1}`
  list.appendChild(newItem)
  newItem.appendChild(newimg)
  newItem.appendChild(newspan)
})

remove.addEventListener("click", (event) => {
  list.removeChild(list.lastChild)
})

