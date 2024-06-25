var color = "white"

function pintar(color) {
    let key = document.getElementById("key")
    key.style.backgroundColor = color
}

function agregarElemento(color) {
    let body = document.querySelector("body")
    let div = document.createElement("div")
    div.style.height = "200px"
    div.style.width = "200px"
    div.style.backgroundColor = color
    div.style.border = "2px solid black"
    body.appendChild(div)
    console.log(div)

}

document.addEventListener("keydown", function (event) {
    if (event.key === 'a' || event.key === 'A') {
        color = "pink"
        pintar(color)
    } else if (event.key === 's' || event.key === 'S') {
        color = "orange"
        pintar(color)
    } else if (event.key === 'd' || event.key === 'D') {
        color = "skyblue"
        pintar(color)
    } else if (event.key === 'q' || event.key === 'Q') {
        color = "purple"
        agregarElemento(color)
    } else if (event.key === 'w' || event.key === 'W') {
        color = "gray"
        agregarElemento(color)
    } else if (event.key === 'e' || event.key === 'E') {
        color = "brown"
        agregarElemento(color)
    }
  })