addEventListener("keydown", function(e){
    if (grounded == true) if (e.code == "Space") {
        if (Bucked == true) vy = -5, grounded = false
        if (Bucked == false) vy = -7, grounded = false
    }
})

  document.addEventListener('keydown', logKey)
    function logKey(e) {
      if (`${e.code}` == "KeyS") h = 50, Bucked = true
    }

addEventListener("keyup", function(e){
    if (grounded == true) if (e.code == "KeyS") h = 100, Bucked = false
})