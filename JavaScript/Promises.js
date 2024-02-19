const promise1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log("async promise");
		resolve();
	}, 1000);
}); //with variable

promise1.then(function () {
	console.log("resolved");
});

new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("2 asyn promise"); //without variable
		resolve();
	}, 1000);
}).then(() => {
	console.log("resolved 2");
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ username: "chai", email: "chai@gmail.com" });
	}, 1000);
});

promise3.then((user) => {
	console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		let error = false;
		if (!error) {
			resolve({ username: "chai", password: "1234" });
		} else {
			reject("Error: something went wrong");
		}
	}, 1000);
});

promise4
	.then((user) => {
		console.log(user);
		return user.username;
	})
	.then((username) => {
		console.log(username);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log("logged in, Promise resolved/rejected");
	});

const promise5 = new Promise((resolve, reject) => {
	setTimeout(function () {
		let error = true;
		if (!error) {
			resolve({ username: "chai", password: "1234" });
		} else {
			reject("Error: something went wrong");
		}
	}, 1000);
});

async function consumePromise5() {
	try {
		const response = await promise5;
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}
consumePromise5();
