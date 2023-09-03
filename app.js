console.log("app.js loaded")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
let x = 850
let y = canvas.height - 100
let vx = 0
let vy = 0
let grounded = false
let Cactusx = canvas.width
let Cactusy = canvas.height - 50
const button1 = document.getElementById("button")
Dead = false
let Score = 0

function Start() {
    Dead = false
    Score = 0
    button1.disabled = true
    update()
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    y += vy
    collision()
    ctx.fillRect(x, y, 50, 100)
    ctx.fillRect(Cactusx, Cactusy, 50, 50)
    if (Cactusx <= -50) Cactusx = canvas.width, Score += 1
    document.getElementById("score").innerHTML = Score
    if (Cactusx <= x) if (x <= Cactusx + 50) if (Cactusy <= y + 50) if (y + 50 <= Cactusy + 50) Cactusx = canvas.width, button1.disabled = false, Dead = True
    if (Cactusx <= x + 50) if (x + 50 <= Cactusx + 50) if (Cactusy <= y + 100) if (y + 50 <= Cactusy + 100) Cactusx = canvas.width, button1.disabled = false, Dead = True
    if (Cactusx <= x + 50) if (x + 50 <= Cactusx + 50) if (Cactusy <= y + 50) if (y + 50 <= Cactusy + 50) Cactusx = canvas.width, button1.disabled = false, Dead = True
    if (Cactusx <= x) if (x <= Cactusx + 50) if (Cactusy <= y + 100) if (y + 50 <= Cactusy + 100) Cactusx = canvas.width, button1.disabled = false, Dead = True
    Cactusx -= 5
    if (Dead != true) {
    requestAnimationFrame(update)
    }
}

function collision() {
    if (y >= canvas.height - 100){
    y = canvas.height - 100
    grounded = true
    }
}

setInterval(function Gravity() {
    if (grounded == false){
    vy += 0.05
    }
})