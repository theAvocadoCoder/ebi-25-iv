type DisplayUnits = "days" | "hours" | "minutes" | "seconds";

export function setupCountdown(display: Record<DisplayUnits, HTMLParagraphElement>) {
  const countDownDate = new Date("Oct 31, 2026 12:00:00").getTime();
  const x = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = countDownDate - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    display.days.innerHTML = `${days}`;
    display.hours.innerHTML = `${hours}`;
    display.minutes.innerHTML = `${minutes}`;
    display.seconds.innerHTML = `${seconds}`;

    if (timeLeft < 0) {
      clearInterval(x);

      display.days.innerHTML = "-";
      display.hours.innerHTML = "-";
      display.minutes.innerHTML = "-";
      display.seconds.innerHTML = "-";
    }
  }, 1000)
}
