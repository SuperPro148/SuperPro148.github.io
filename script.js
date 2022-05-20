function openInfo(id) {
	let elementsArray = document.getElementById("main-info-area").children
	for (i=0;i<elementsArray.length;i++) {
		if (elementsArray[i].classList.contains("shown")) {
			elementsArray[i].classList.remove("shown")
			elementsArray[i].classList.add("hidden")
		}
	}
	document.getElementById(id).classList.remove("hidden")
	document.getElementById(id).classList.add("shown")
}