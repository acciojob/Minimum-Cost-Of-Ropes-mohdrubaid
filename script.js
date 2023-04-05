function calculateMinCost() {
  //your code here
  
  var inputValue=document.querySelector("#rope-lengths").value;
	var arr=inputValue.split(',').map(Number);
	while(arr.lenght>1){
		arr=arr.sort(function (a,b){return a-b});
			
			let sum=arr[0]+arr[1];
		arr.splice(0,2,sum);
	 
	document.querySelector("#result").innerHTML=arr;
}  
}