var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left - 10}px`
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left + 10}px`
  }
}

function moveDodgerUp() {
  var upNumbers = dodger.style.up.replace('px', '');
  var up = parseInt(upNumbers, 10)
  if (up > 0) {
    dodger.style.up = `${up - 10}px`
  }
}
document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowUp") {
    moveDodgerUp()
  }
})


document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})
