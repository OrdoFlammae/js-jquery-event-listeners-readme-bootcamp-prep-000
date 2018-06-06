//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').bind('load', function() {
    this.addClass('tasty');
  })
}

function pressIt() {
  
}

$(document).ready(function() {
});
