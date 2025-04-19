function firstNonRepeatedChar(str) {
	for(int i=0 ; i <  str.length ;i++){
		if(str[i]!str[i+1]){
			return i;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
