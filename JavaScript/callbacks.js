// function sum(a,b){
//     console.log(a + b);
// }

// function calculator(a,b,sumcall){
//     sumcall(a,b);
// }

// calculator(2,2, sum);

//nested
// for (let i = 0; i<5; i++){
//     let str = "";
//     for(let j = 0; j<5 ; j++){
//         str = str + j;
//     }
//     console.log(i,str);
// }

function get(getdata, getdata2) {
	setTimeout(() => {
		console.log("data :", getdata);
		if (getdata2) {
			getdata2();
		}
	}, 2000);
}
get(1, () => {
	get(2, () => {
		get(3, () => {
			get(4);
		});
	});
});
