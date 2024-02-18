const endDate = new Date("2024-02-29T23:59:59");
const timer = document.querySelector(".expired-message");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const updateCountdown = () => {
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    timer.innerHTML = "Time's Up!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
};

// Update the countdown every second
setInterval(updateCountdown, 1000);