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
HighScore = 0
Dead2 = false

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

function Dead() {
    Cactusx = canvas.width, button1.disabled = false, Dead = true, buttonPause.disabled = true, y = canvas.height - 100, document.getElementById("LoseText").innerHTML = "You Lose!", update()
}

function Start() {
    document.getElementById("LoseText").innerHTML = ""
    Dead = false
    Dead2 = false
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
    if (Score >= HighScore) HighScore = Score
    document.getElementById("HighScore").innerHTML = HighScore
    if (Cactusx <= x) if (x <= Cactusx + 50) if (Cactusy <= y + 50) if (y + 50 <= Cactusy + 50) Cactusx = canvas.width, button1.disabled = false, Dead = true, buttonPause.disabled = true, y = canvas.height - 100, document.getElementById("LoseText").innerHTML = "You Lose!", update()
    if (Cactusx <= x + 50) if (x + 50 <= Cactusx + 50) if (Cactusy <= y + 100) if (y + 50 <= Cactusy + 100) Cactusx = canvas.width, button1.disabled = false, Dead = true, buttonPause.disabled = true, y = canvas.height - 100, document.getElementById("LoseText").innerHTML = "You Lose!", update()
    if (Cactusx <= x + 50) if (x + 50 <= Cactusx + 50) if (Cactusy <= y + 50) if (y + 50 <= Cactusy + 50) Cactusx = canvas.width, button1.disabled = false, Dead = true, buttonPause.disabled = true, y = canvas.height - 100, document.getElementById("LoseText").innerHTML = "You Lose!", update()
    if (Cactusx <= x) if (x <= Cactusx + 50) if (Cactusy <= y + 100) if (y + 50 <= Cactusy + 100) Cactusx = canvas.width, button1.disabled = false, Dead = true, buttonPause.disabled = true, y = canvas.height - 100, document.getElementById("LoseText").innerHTML = "You Lose!", update()
    Cactusx -= CactusSpeed
    ScoreString = Score.toString()
    if (Score  <= 99) if (Score >= 10) if (ScoreString.charAt(1) == 0) CactusSpeed = parseInt(ScoreString.charAt(0)) + 4
    if (Score >= 100) if (ScoreString.charAt(2) == 0) CactusSpeed = parseInt(ScoreString.charAt(1)) + 14
    if (Dead == true) if (Dead2 == false) Dead2 = true, requestAnimationFrame(update)
    if (Dead == false) if (Paused == false) {
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