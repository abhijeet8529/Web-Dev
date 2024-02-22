const nums = document.querySelectorAll(".number");
let resultfield = document.querySelector(".result");
let equal = document.querySelector(".equal");

nums.forEach((num) => {
	num.addEventListener("click", () => {
		resultfield.value += num.value;
	});
});

const clear = document.querySelector(".AC");
clear.addEventListener("click", function () {
	resultfield.value = "";
});
const deleteButton = document.querySelector(".DE");
deleteButton.addEventListener("click", function () {
	resultfield.value = resultfield.value.slice(0, -1);
});

equal.addEventListener("click", function () {
	try {
		resultfield.value = eval(resultfield.value);
	} catch (error) {
		resultfield.value = "Error";
	}
});
