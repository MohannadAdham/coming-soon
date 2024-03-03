// Set the date we're counting down to
var countDownDate = new Date("March 17, 2024 12:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();
  
  // Calculate the remaining time
  var distance = countDownDate - now;
  
  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the countdown
  var d = document.querySelector(".days"),
  h = document.querySelector(".hours"),
  m = document.querySelector(".minutes"),
  s = document.querySelector(".seconds");

  d.innerText = days.toString();
  h.innerText = hours.toString();
  m.innerText = minutes.toString();
  s.innerHTML = seconds.toString();
  
  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);