var a=[1,2,3,4,99,101,100,102,103];
var b=[];
function evenorodd(){
	for(let i=0;i<a.length;i++){
		if(isNaN(a[i])){}
		else{
			let x=a[i]
			if(x%2 !== 0){
				//console.log(x);
				b.push(x);
			}
			else{
				
			}
		}
	}
	return b;
}
b=evenorodd(a);
console.log(b);