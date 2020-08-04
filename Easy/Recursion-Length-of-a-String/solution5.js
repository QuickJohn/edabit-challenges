function length(str) {
	if(str === "") return 0;
	return length(str.substr(1)) + 1;
}