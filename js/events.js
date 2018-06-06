//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    this.addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which === 67) {
      alert('You have pressed the G key')
    }
  })
}

function submitIt() {
  $
}

$(document).ready(function() {
});
