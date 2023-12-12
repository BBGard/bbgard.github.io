console.log("loaded");
  export default function shakeElement(element) {
    console.log("click");
		element.classList.add("shake");
		setTimeout(() => {
			element.classList.remove("shake");
		}, 1000);
	}
