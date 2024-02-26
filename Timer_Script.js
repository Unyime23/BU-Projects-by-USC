const endDate = new Date("2024-03-04T23:59:59");
const timer = document.querySelector(".expired-message");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const updateCountdown = () => {
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    resetCountdown();
  } else {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
  }
};

const resetCountdown = () => {
  const now = new Date();
  const resetDate = new Date(now.getTime() + 9 * 24 * 60 * 60 * 1000); // 9 days from now
  endDate.setTime(resetDate.getTime());
};

// Reset the countdown to 9 days every time the website is opened
resetCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000)
