function range (start, end, step) {
	var arr=[];
	if (arguments.length < 3) {
		for (var i = start; i <= end; i++) {
			arr.push(i);	
		};
	} else {
		if (step>0) {
			for (var i = start; i <= end; i) {
				arr.push(i);	
		}
		}  else	{
			for (var i = start; i >= end; i--) {
				arr.push(i);
				}
	};
	};
	return arr;

};

document.write(range(1, 10));

function sum (array) {
	var summ = 0;
	for (var i = array.length - 1; i >= 0; i--) {
		summ += array[i]; 
	};
	return summ;
};
document.write(sum(range(1, 10)));
document.write(range(5, 2, -1));