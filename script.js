//your JS code here. If required.
const ip = document.getElementById("ip");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click",()=>{
	transformData();
});

async function transformData(){	
	const ipValue = parseInt(ip.value, 10); 
	new Promise((resolve)=>{ //step 2
		setTimeout(()=>{
			output.innerHTML= "Result: " + ipValue;
			resolve(ipValue);
		},2000);
	});
	new Promise((resolve)=>{ //step 3
		setTimeout(()=>{
			output.innerHTML= "Result: " + ipValue;
			resolve(ipValue);
		},2000);
	})
	.then((number)=>{ //step 4
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const newNumber = number*2;
				output.innerHTML= "Result: " + newNumber;
				resolve(newNumber);
			},1000);
		})
	})
	.then((number)=>{ //stepp 5
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const newNumber = number-3;
				output.innerHTML= "Result: " + newNumber;
				resolve(newNumber);
			},1000);
		})
	})
	.then((number)=>{ //stepp 6
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				if(number/2){
					const newNumber = number-3;
					output.innerHTML= "Result: " + newNumber;
					resolve(newNumber);
					
				} else {
					reject();
				}
			},1000);
		})
	})
	.then((number)=>{ //step 7
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const newNumber = number+10;
				output.innerHTML= "Result: " + newNumber;
				resolve(newNumber);
			},1000);
		})
	})
	.then((number)=>{ //step 8
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const newNumber = number;
				output.innerHTML= "Final Result: " + newNumber;
				resolve();
			},1000);
		})
	})
	.catch((error)=>{
		alert(error);
	});

}