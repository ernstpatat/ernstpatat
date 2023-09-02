console.log("app.js loaded")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let x = 0
let y = 0
let vx = 0
let vy = 0

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x += vx
    y += vy
    ctx.fillRect(x, y, 50, 50)
    collision()
    requestAnimationFrame(update)
}

function collision() {
    if (y>= canvas.height - 100){
        y = canvas.height - 100
    }
}

update()

setInterval(function Gravity() {
    vy += 0.05
})