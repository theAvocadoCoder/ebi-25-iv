import "./style.css"
import collageDsktp from "./assets/collageDsktp.png"
import collageTab from "./assets/collageTab.png"
import collageMob from "./assets/collageMob.png"
import { setupCountdown } from "./countdown.ts"

const needToKnow = [
  "It is a <bold>Potlock</bold>. That means bring food or snacks or drinks.",
  "The dress code is Denim [you're welcome] with a touch of <bold>Pink</bold>",
  "I'm wearing pink adire pants and my twin is wearing a pink adire top. We don't want to blend in 🙏🏽",
  "Please <bold>do not</bold> bring a friend without asking. The <bold>less</bold> the merrier fr!",
  "It's going to be at <bold>My House</bold> on the <bold>31st</bold> of <bold>October</bold> by <bold>12pm</bold>"
]

const guestList = [
  "Kelz", "Choom Choom", "Mara", "Jimmy", "Snuggles",
  "Laraba + 1", "Jera", "Val", "Sapphie", "Shadrach",
  "Charity", "Esosa", "Jed", "Frosties", "Monk", "Fife"
]

const wishList = [
  "Singer 4452", "Money; 1101522389 Kuda MFB", "iPhone 15 [pink]",
  "Powerbeats Fit", "26&quot; pixie curls", "Perfumes",
  "Crocs", "Lujo: My First Kit", "Chunky / Earthy Jewellery",
  "Viccabel; Deluxe Pro Brush Set", "Crepe Adire Cotton Ankara Asooke", "Oraimo spacebox/pro"
]

const wishListBg = [
  "before:bg-[url(./assets/singer4452.jpg)]", "before:bg-[url(./assets/money.png)]", "before:bg-[url(./assets/iphone.png)]",
  "before:bg-[url(./assets/powerbeatsFit.jpg)]", "before:bg-[url(./assets/pixieCurls.png)]", "before:bg-[url(./assets/perfume.jpg)]",
  "before:bg-[url(./assets/crocs.jpg)]", "before:bg-[url(./assets/lujoKit.png)]", "before:bg-[url(./assets/jewelry.jpg)]",
  "before:bg-[url(./assets/brushSet.png)]", "before:bg-[url(./assets/fabric.png)]", "before:bg-[url(./assets/oraimoSpacebox.jpg)]"
]

const wishListURL = [
  "https://www.singer.com/products/singer-heavy-duty-4452-rosewater-pink-sewing-machine?variant=52510617665906", "#", "https://www.instagram.com/p/DdgxXnhim80/?mdxt=OGZ3ZHMybGw5MWJ5",
  "https://www.instagram.com/p/DZ7RbrjNfMR/?srtk=MTYyeDllcHVqbWV3Ng==", "https://www.instagram.com/reel/DewybsrARP8/?obrf=MTIxMnp0NHhleGk5dw==", "/perfumes/",
  "https://www.instagram.com/p/Dcb8CTLkYuk/?xtok=cHFxNWppdnp1MzV4", "", "https://www.instagram.com/twinklesgems?dlrf=MWJlYmI2Ymh0MzJ6dQ==",
  "https://www.instagram.com/p/DXJolVeiKTg/?dlrf=dGt4aXB0Ymttb25s", "https://www.instagram.com/remefabrics?cplk=dWZkZGluemJza2Nm", "https://ng.oraimo.com/product/fm-and-customizable-lights-and-eq-speaker-spacebox-obs-382?ean=4894947066702"
]

let showRSVP = false;
let isUnsure = JSON.parse(localStorage.getItem("isUnsure") ?? JSON.stringify(null)) ?? false;
let hasConfirmed = JSON.parse(localStorage.getItem("hasConfirmed") ?? JSON.stringify(null)) ?? false;

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.classList.add("text-primary", "p-2.5","*:my-4")
  app.innerHTML = `
  <section class="w-full flex justify-center">
    <div>
      <img class=""
        srcset="${collageMob}, ${collageTab} 1.5x, ${collageDsktp} 3x"
        src="${collageTab}"
        alt="Ebi through the years"
      />
    </div>
  </section>
  <section class="bg-[url(./assets/pinkSwirl.png)]">
    <div class="flex justify-between items-center p-4 bg-white/40">
  ${
    ["Days", "Hours", "Minutes", "Seconds"].map(unit => (`
      <div class="flex flex-col items-center bg-white/50 w-1/5 p-2">
        <p id="${unit.toLowerCase()}Counter" class="font-medium text-4xl md:text-5xl lg:text-6xl"></p>
        <p class="text-xs">${unit}</p>
      </div>  
    `)).join("")
  }
    </div>
  </section>
  <section class="bg-linear-to-b from-pink-100/20 to-pink-100 p-3 *:text-center">
    <h2 class="font-bold text-xl md:text-2xl lg:text-3xl uppercase mb-2">Congratulations!</h2>
    <p>You have been chosen to be a part of the celebration of my 25th birthday! Yayyy!!!</p>
    <p>I have looked forward to turning 25 since I was a child, always hearing that I may not turn 25.</p>
    <p>This age is one of many that I was told I'd die before.</p>
    <p>So please come and celebrate proving the haters wrong with me 💖</p>
  </section>
  <section>
    <h2 class="font-bold text-center text-xl md:text-2xl lg:text-3xl mb-3">✨Here's What You Need to Know✨</h2>
    <div class="flex flex-col items-center gap-1.5">
  ${
    needToKnow.map((item, idx) => (`
      <div class="flex items-stretch justify-between w-3/4 gap-1 *:text-center ${idx%2==0 ? "flex" : "flex-row-reverse"}">
        <p class="text-4xl p-2 flex items-center justify-center bg-primary-light text-white rounded-full h-fit">0${idx+1}</p>
        <p class="w-4/5">${item}</p>
      </div>
    `)).join("")
  }
    </div>
  </section>
  <section class="bg-[url(./assets/pinkSwirl.png)] bg-cover">
    <div class="text-white bg-linear-to-b from-primary/50 to-transparent flex flex-col items-center py-4">
      <h2 id="rsvpH2" class="uppercase font-black [-webkit-text-stroke:1px_primary] text-white ${hasConfirmed ? "hidden" : ""}">${isUnsure ? "Wrong button, baby" : "Are you coming?"}</h2>
      <button id="rsvpBtn" class="px-10 py-4 ${hasConfirmed ? "w-fit max-w-9/10 h-fit" : "w-62.5 h-16.25"} rounded-lg border border-white bg-primary font-bold">${hasConfirmed ? "House 10, Khalid B. Isah. Marcus Poli Estate. 6th Avenue, Gwarinpa" : "RSVP"}</button>
    </div>
  </section>
  <section id="rsvpDlgOvl" class="z-30 fixed w-screen h-screen -top-4 left-0 ${showRSVP ? "" : "hidden"} bg-indigo-900/50">
    <div id="rsvpDlg" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-7 py-5 bg-primary-light border border-primary text-white rounded-md">
      <select id="nameInput" name="guest" class="border-primary bg-[#fffff9]/75 text-primary outline-0 rounded-sm w-[clamp(13rem,70dvw,17.5rem)] [appearance:base-select] *:[::picker(select)]:[appearance:base-select] px-2.5 py-2 mb-2.5">
        <option disabled selected value="">Who goes you~~</option>
      ${guestList.map(guest => (`
        <option value="${guest}" class="p-2.5">${guest}</option>
      `)).join("")}
      </select>
      <p class="font-medium">Are You Coming?</p>
      <div class="flex justify-between gap-2.5 *:px-12 *:py-2.5 *:rounded-sm">
        <button id="yesBtn" class="bg-primary ${isUnsure ? "w-[clamp(13rem,70dvw,17.5rem)]" : ""}">Yes</button>
        <button id="noBtn" class="bg-[#fffff9]/40 text-primary ${isUnsure ? "hidden" : ""}">No</button>
      </div>
    </div>
  </section>
  <section>
    <div class="bg-linear-to-b from-pink-100/20 to-pink-100 p-2 *:text-center">
      <h2 class="uppercase font-bold text-center">Gifts</h2>
      <p>So I have a <em>wishlist</em>, but you are more than welcome to gift me anything. The list is mostly for the elders in my life.</p>
      <p>HOWEVER, if you want to get me anything on this very expensive list, feel free to 😘</p>
    </div>
  </section>
  <section class="bg-primary p-4 text-white text-center">
    <h2 class="font-bold font-serif text-4xl md:text-5xl lg:text-6xl uppercase -mb-2">wish list</h2>
    <p class="font-display text-2xl md:text-3xl lg:text-4xl">halfway to fifty</p>
    <div class="p-2.5 lg:p-5 bg-white max-w-240 mx-auto">
      <div class="grid grid-cols-3 justify-items-stretch gap-0.5 bg-primary p-0.5 min-w-67.5 max-w-240">
      ${wishList.map((wish, idx) => (`
          <a href="${idx == 2 ? '#' : wishListURL[idx]}" ${[2,4].includes(idx) ? '' : 'target="_blank"'} after="${wish}" class="flex aspect-square items-center justify-center text-center max-md:text-sm md:text-xl lg:text-3xl font-bold ${idx%2==0 ? "bg-primary text-white" : "bg-white text-primary"} relative before:absolute before:opacity-20 ${wishListBg[idx]} before:bg-cover before:bg-center before:w-full before:h-full after:absolute after:w-full after:h-full after:content-[attr(after)] after:flex after:items-center after:justify-center"></a>
        `)).join("")
      }
      </div>
    </div>
  </section>
  `

  setupCountdown(
    {
      days: document.querySelector<HTMLParagraphElement>("#daysCounter")!,
      hours: document.querySelector<HTMLParagraphElement>("#hoursCounter")!,
      minutes: document.querySelector<HTMLParagraphElement>("#minutesCounter")!,
      seconds: document.querySelector<HTMLParagraphElement>("#secondsCounter")!,
    }
  )

  const toggleRSVP = () => {
    showRSVP = !showRSVP; 
    rsvpDlgOvl.classList.toggle("hidden")
  }

  const toggleUnsure = () => {
    isUnsure = !isUnsure;
    localStorage.setItem("isUnsure", JSON.stringify(isUnsure))
    rsvpH2.textContent = "Wrong button, baby";
    yesBtn.classList.add("w-[clamp(13rem,70dvw,17.5rem)]")
    noBtn.classList.add("hidden")
  }

  const toggleConfirmed = () => {
    hasConfirmed = !hasConfirmed;
    localStorage.setItem("hasConfirmed", JSON.stringify(hasConfirmed))
    rsvpH2.classList.toggle("hidden")
    rsvpBtn.classList.add("w-full", "max-w-9/10", "h-fit")
    rsvpBtn.textContent = "House 10, Khalid B. Isah. Marcus Poli Estate. 6th Avenue, Gwarinpa";
  }

  const rsvpBtn = document.querySelector<HTMLButtonElement>("#rsvpBtn")!
  const rsvpDlgOvl = document.querySelector<HTMLElement>("#rsvpDlgOvl")!
  const rsvpDlg = document.querySelector<HTMLDivElement>("#rsvpDlg")!
  const rsvpH2 = document.querySelector<HTMLHeadingElement>("#rsvpH2")!
  const nameInput = document.querySelector<HTMLSelectElement>("#nameInput")!
  const yesBtn = document.querySelector<HTMLButtonElement>("#yesBtn")!
  const noBtn = document.querySelector<HTMLButtonElement>("#noBtn")!

  rsvpBtn.addEventListener("click", () => {
    if (hasConfirmed) window.open("https://maps.app.goo.gl/zWfnkMgAWWXhCaG28", "_blank");
    else toggleRSVP()
  })

  rsvpDlgOvl.addEventListener("click", (e) => {
    if (!rsvpDlg.contains(e.target as HTMLElement)) toggleRSVP()
  })

  rsvpDlg.addEventListener("click", (e) => {
    const t = e.target as HTMLButtonElement
    if (t.tagName === "button") {
      if (nameInput.value) {
        console.log(nameInput.value)
      }
    }
  })

  yesBtn.addEventListener("click", async () => {
    if (!nameInput.value) return;

    const url = "/set"

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ name: nameInput.value, isAttending: "yes" })        
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    toggleConfirmed()
    toggleRSVP()
  })
  
  noBtn.addEventListener("click", () => {
    if (!nameInput.value) return;
    toggleUnsure()
    toggleRSVP()
  })
}

