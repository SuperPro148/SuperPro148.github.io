function openMinecraftMods() {
    document.querySelectorAll(".shown").forEach((i) => {
        i.classList.remove("shown");
        i.classList.add("hidden");
    });
    let mcModsDiv = document.getElementById("mc-mods-div");
    if (mcModsDiv.hasChildNodes()) {
        while (mcModsDiv.hasChildNodes()) {
            mcModsDiv.removeChild(mcModsDiv.lastChild);
        }
    }
    createModElement("quickarmorswap", () => {
        createModElement("armorhud-fabric", () => {
            createModElement("platformprecision", () => {
                createModElement("configlib148", () => {
                    createModElement("supers-test-mod", () => {
                        mcModsDiv.classList.remove("hidden");
                        mcModsDiv.classList.add("shown");
                    });
                });
            });
        });
    });
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
        downloadIconElem.src = "img/feather_icons/download.svg";
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