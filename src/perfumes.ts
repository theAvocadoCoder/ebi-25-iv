import "./style.css"

const types = ["💎 Designer ✨", "🪙 Budget ✨"]

const perfumes = [
  "Tom Ford - Métallique", "Versace; Bright Crystal", "Elizabeth Arden; Mediterranean",
  "Agent Provocateur; Eau De Parfum for Women (pink)", "Zara Gold",
  "Dear Body; On A Sunday", "Hanna's Secret - Annis Annis",
  "Hanna's Secret - Ruddy Ruddy", "Ophelia; Pink", "Mousuf; Wardi"
]

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
  <section class="text-primary py-4 px-2.5">
    <h1 class="text-2xl mb-4 font-bold">My Favourite Scents</h1>

    ${types.map((type, idx) => (`
    <h2 class="text-xl font-semibold">${type}</h2>
    <ol class="list-none ml-5 *:p-1"
    >
      ${(idx == 0 ? perfumes.slice(0,5) : perfumes.slice(5,)).map(perfume => (`
      <li index="${String(perfumes.indexOf(perfume)+1).padStart(2,'0')}"
        class="before:content-[attr(index)] before:bg-primary before:text-white
        before:inline-flex before:items-center before:justify-center 
        before:w-10 before:aspect-square before:rounded-full before:z-10 
        *:text-center *:inline-flex *:w-6/7
        flex justify-start items-center gap-2.5"
      >
        <span>${perfume}</span>
      </li>
      `)).join("")}
    </ol>
    `)).join("")}
  </section>

  <a class="text-white bg-primary text-4xl fixed top-2.5 right-2.5 h-13 aspect-square flex items-center justify-center rounded-full" href="/">
    <span>&larr;</span>
  </a>
  `  
}