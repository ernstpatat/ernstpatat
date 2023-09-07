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
Paused = false
buttonPause.disabled = true
buttonUnPause.disabled = true
CactusSpeed = 4

function Pause() {
    buttonPause.disabled = true
    buttonUnPause.disabled = false
    Paused = true
}

function UnPause() {
    buttonPause.disabled = false
    buttonUnPause.disabled = true
    Paused = false
    if (Dead == false) update()
}

function Start() {
    Dead = false
    Score = 0
    button1.disabled = true
    buttonPause.disabled = false
    CactusSpeed = 4
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
    if (Cactusx <= x) if (x <= Cactusx + 50) if (Cactusy <= y + 50) if (y + 50 <= Cactusy + 50) Cactusx = canvas.width, button1.disabled = false, Dead = true, buttonPause.disabled = true
    if (Cactusx <= x + 50) if (x + 50 <= Cactusx + 50) if (Cactusy <= y + 100) if (y + 50 <= Cactusy + 100) Cactusx = canvas.width, button1.disabled = false, Dead = true, buttonPause.disabled = true
    if (Cactusx <= x + 50) if (x + 50 <= Cactusx + 50) if (Cactusy <= y + 50) if (y + 50 <= Cactusy + 50) Cactusx = canvas.width, button1.disabled = false, Dead = true, buttonPause.disabled = true
    if (Cactusx <= x) if (x <= Cactusx + 50) if (Cactusy <= y + 100) if (y + 50 <= Cactusy + 100) Cactusx = canvas.width, button1.disabled = false, Dead = true, buttonPause.disabled = true
    Cactusx -= CactusSpeed
    ScoreString = Score.toString()
    if (Score >= 10) if (ScoreString.charAt(1) == 0) CactusSpeed = ScoreString.charAt(0) - ScoreString.charAt(1) / 10 + 4
    if (Dead != true) if (Paused == false) {
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