import "./style.css"

const app = document.querySelector<HTMLDivElement>("#app");

const pass = window.prompt("Hi, my love. Put in the password");

if (app && pass == "Nachineke") {
  let confirmed;
  const url = "/list"
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    confirmed = await response.json();
  } catch (error) {
    console.error(error);
  }

  app.innerHTML = `
  <section class="flex flex-col items-center py-4">
    <h2 class="font-bold text-primary">Confirmed Guests</h2>
    <ol class="text-primary">
    ${(confirmed as string[]).map(guest => (`
      <li class="">- ${guest}</li>
    `)).join("")}
    </ol>
  </section>
  `
}

