function openMainPage() {
    document.querySelectorAll(".shown").forEach((i) => {
        i.classList.remove("shown");
        i.classList.add("hidden");
    });
    let mainPageDiv = document.getElementById("main-page-div");
    mainPageDiv.classList.remove("hidden");
    mainPageDiv.classList.add("shown");
}

function openCookieClicker() {
    document.querySelectorAll(".shown").forEach((i) => {
        i.classList.remove("shown");
        i.classList.add("hidden");
    });
    let cookieClickerDiv = document.getElementById("cookie-clicker-div");
    cookieClickerDiv.classList.remove("hidden");
    cookieClickerDiv.classList.add("shown");
}

function openOtherPage() {
    document.querySelectorAll(".shown").forEach((i) => {
        i.classList.remove("shown");
        i.classList.add("hidden");
    });
    let otherPageDiv = document.getElementById("other-page-div");
    otherPageDiv.classList.remove("hidden");
    otherPageDiv.classList.add("shown");
}

function openMinecraftMods() {
    document.querySelectorAll(".shown").forEach((i) => {
        i.classList.remove("shown");
        i.classList.add("hidden");
    });
    let mcModsDiv = document.getElementById("mc-mods-div");
    mcModsDiv.classList.remove("hidden");
    mcModsDiv.classList.add("shown");
}

async function createModElement(slug, callback) {
    function modrinthApiResponse() {
        let apiResponse = JSON.parse(this.response);
        
        let mainElem = document.createElement("div");
        mainElem.classList.add("page-element");
        mainElem.classList.add("mc-mod");

        let iconElem = document.createElement("img");
        iconElem.classList.add("mc-mod-icon");
        iconElem.src = `img/mc_mods/${slug}.png`;

        let iconLinkElem = document.createElement("a");
        iconLinkElem.href = `https://modrinth.com/mod/${slug}`
        iconLinkElem.appendChild(iconElem);
        mainElem.appendChild(iconLinkElem);

        let titleElem = document.createElement("p");
        titleElem.classList.add("mc-mod-title");
        titleElem.innerHTML = apiResponse.title;
        mainElem.appendChild(titleElem);

        let descElem = document.createElement("p");
        descElem.classList.add("mc-mod-desc");
        descElem.innerHTML = apiResponse.description;
        mainElem.appendChild(descElem);

        let downloadIconElem = document.createElement("img");
        downloadIconElem.classList.add("mc-mod-download-icon");
        downloadIconElem.src = "img/lucide/download.svg";
        mainElem.appendChild(downloadIconElem);

        let downloadCountElem = document.createElement("p");
        downloadCountElem.classList.add("mc-mod-download-count");
        downloadCountElem.innerHTML = apiResponse.downloads;
        mainElem.appendChild(downloadCountElem);
    
        document.getElementById("mc-mods-div").appendChild(mainElem);
        callback()
    }
    let xhttp = new XMLHttpRequest();
    xhttp.addEventListener("load", modrinthApiResponse)
    xhttp.open("GET", `https://api.modrinth.com/v2/project/${slug}`);
    xhttp.send();
}

function scrollHeaderLeft() {
    let scrollTarget = document.getElementById("icon");
    scrollTarget.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
}

function scrollHeaderRight() {
    let buttons = document.querySelectorAll(".header-button");
    let scrollTarget = buttons[buttons.length - 1];
    scrollTarget.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
}

function lightMode() {
    let root = document.querySelector(":root");
    root.style.setProperty("--bg-color", "#dddfe2");
    root.style.setProperty("--elem-color", "#ffffff");
    root.style.setProperty("--button-color", "#dddfe1");
    root.style.setProperty("--button-active-color", "#f6f6f9");
    root.style.setProperty("--text-color", "#000000");
    root.style.setProperty("--mc-mod-desc-color", "#333330");
    document.querySelectorAll(".header-button-icon").forEach((element) => {
        element.classList.add("dark-icon");
    });
    document.querySelectorAll(".mc-mod-download-icon").forEach((element) => {
        element.classList.add("dark-icon");
    });
    document.getElementById("dark-mode-button").classList.remove("hidden");
    document.getElementById("light-mode-button").classList.add("hidden");
}

function darkMode() {
    let root = document.querySelector(":root");
    root.style.setProperty("--bg-color", "#161618");
    root.style.setProperty("--elem-color", "#222225");
    root.style.setProperty("--button-color", "#28282e");
    root.style.setProperty("--button-active-color", "#242428");
    root.style.setProperty("--text-color", "#ffffff");
    root.style.setProperty("--mc-mod-desc-color", "#cccccf");
    document.querySelectorAll(".dark-icon").forEach((element) => {
        element.classList.remove("dark-icon");
    });
    document.getElementById("light-mode-button").classList.remove("hidden");
    document.getElementById("dark-mode-button").classList.add("hidden");
}

createModElement("quickarmorswap", () => {
    createModElement("armorhud-fabric", () => {
        createModElement("platformprecision", () => {
            createModElement("configlib148", () => {
                createModElement("supers-test-mod", () => {});
            });
        });
    });
});