const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector(".result");
const sound = document.querySelector(".sound");
const button = document.querySelector("#searchbtn");

button.addEventListener("click", () => {
	let inputwrd = document.querySelector("#inputword").value;
	fetch(`${url}${inputwrd}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			result.innerHTML = `<div class="word">
					<h3>${inputwrd}</h3>
					<button onclick="playsound()" ><i class="ri-volume-up-fill"></i></button>
				</div>
				<div class="details">
					<p>${data[0].meanings[0].partOfSpeech}</p>
					<p>${data[0].phonetic}</p>
				</div>
				<p class="wordmeaning">
					${data[0].meanings[0].definitions[0].definition}
				</p>
				<p class="wordex">
					${data[0].meanings[0].definitions[0].example || ""}
	
                    </p>`;

			sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
			console.log(sound);
		})
		.catch(()=> {
			result.innerHTML = `<h3 class="error">Couldnt't Find the Word</h3>`
		})
});
function playsound() {
	sound.play();
}
