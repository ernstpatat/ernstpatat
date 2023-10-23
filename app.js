const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
let x = canvas.width/2
let y = canvas.height - 100
let vx = 0
let vy = 0
let h2 = 0
let Bucked = false
let grounded = false
let Cactusx = canvas.width
let Cactusy = canvas.height - 50
const button1 = document.getElementById("button")
let h = 100
let w = 50
let Cactush = 50
let Cactusw = 50
Dead = false
let Score = 0
let ShouldBeh = canvas.height - 100
Paused = false
buttonPause.disabled = true
buttonUnPause.disabled = true
CactusSpeed = 4
HighScore = 0
Dead2 = false
let EnemyNr = Math.floor(Math.random() * 2)
let CactusyTemp = 0
var Meneer = document.getElementById('Meneer')
Meneer.style.position = "relative"
Meneer.style.width = '50px'
Meneer.style.left = Cactusx-293+"px"
Meneer.style.top = Cactusy-405+"px"
var gsm = document.getElementById('gsm')
gsm.style.position = "relative"
gsm.style.width = '90px'
gsm.style.height = "100px"
gsm.style.left = x-368+"px"
gsm.style.top = y-405+"px"
Niets.style.position = "relative"
Niets.style.width = '90px'
Niets.style.height = "100px"
Niets.style.left = x-368+"px"
Niets.style.top = y-405+"px"


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
    document.getElementById("LoseText").innerHTML = ""
    Dead = false
    Dead2 = false
    Score = 0
    button1.disabled = true
    buttonPause.disabled = false
    CactusSpeed = 4
    update()
    let EnemyNr = 0
    h = 100
    y = canvas.height - 100
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    y += vy
    collision()
    //ctx.fillRect(Cactusx, Cactusy, 50, 50)
    Meneer.style.left = Cactusx-293+"px"
    Meneer.style.top = Cactusy-455+"px"
    gsm.style.height = h+"px"
    gsm.style.top = y-405+"px"
    EnemyNr = Math.floor(Math.random() * 2)
    if (Cactusx <= -50) Cactusx = canvas.width, Score += 1, CactusyTemp = EnemyNr * 75, console.log(CactusyTemp)
    Cactusy = canvas.height - 50 - CactusyTemp
    document.getElementById("score").innerHTML = Score
    if (Score >= HighScore) HighScore = Score
    document.getElementById("HighScore").innerHTML = HighScore
    console.log(x)
    console.log(y)
    console.log(w)
    console.log(h)
    console.log(Cactusx)
    console.log(Cactusy)
    console.log(Cactusw)
    console.log(Cactush)
    if (x >= Cactusx) if (x <= Cactusx + Cactusw) if (y + h2 >= Cactusy) if (y + h2 <= Cactusy + Cactush) Cactusx = canvas.width, button1.disabled = false, Dead = true, buttonPause.disabled = true, y = canvas.height - 100, document.getElementById("LoseText").innerHTML = "You Lose!", update()
    if (x + w >= Cactusx) if (x + w <= Cactusx + Cactusw) if (y + h2 >= Cactusy) if (y + h2 <= Cactusy + Cactush) Cactusx = canvas.width, button1.disabled = false, Dead = true, buttonPause.disabled = true, y = canvas.height - 100, document.getElementById("LoseText").innerHTML = "You Lose!", update()
    if (x >= Cactusx) if (x <= Cactusx + Cactusw) if (y + h + h2 >= Cactusy) if (y + h + h2 <= Cactusy + Cactush) Cactusx = canvas.width, button1.disabled = false, Dead = true, buttonPause.disabled = true, y = canvas.height - 100, document.getElementById("LoseText").innerHTML = "You Lose!", update()
    if (x + w >= Cactusx) if (x + w <= Cactusx + Cactusw) if (y + h + h2 >= Cactusy) if (y + h + h2 <= Cactusy + Cactush) Cactusx = canvas.width, button1.disabled = false, Dead = true, buttonPause.disabled = true, y = canvas.height - 100, document.getElementById("LoseText").innerHTML = "You Lose!", update()
    Cactusx -= CactusSpeed
    ScoreString = Score.toString()
    if (Score  <= 99) if (Score >= 10) if (ScoreString.charAt(1) == 0) CactusSpeed = parseInt(ScoreString.charAt(0)) + 4
    if (Score >= 100) if (ScoreString.charAt(2) == 0) CactusSpeed = parseInt(ScoreString.charAt(1)) + 4 + parseInt(ScoreString.charAt(0))*10
    if (Dead == true) if (Dead2 == false) Dead2 = true, requestAnimationFrame(update)
    if (Dead == false) if (Paused == false) requestAnimationFrame(update)
}

function collision() {
    if (y >= ShouldBeh){
    y = ShouldBeh
    grounded = true
    }
}

setInterval(function Gravity() {
    if (grounded == false){
    vy += 0.05
    }
})