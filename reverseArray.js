arr = ["A", "B", "C"]
function reverseArray (array) {
	var newArr = [];
	for (var i = array.length - 1; i >= 0; i--) {
		newArr.push(array[i]);
	};
	return newArr;
};

function reverseArrayInPlace () {
	var array = [];
	for (var i = arr.length-1; i >= 0; i--) {
		array.push(arr[i]);
	};
	for (var i = arr.length-1; i >= 0; i--) {
		arr.unshift(array[i]);
		arr.pop();
		
	};
	return array
};


//document.write(reverseArray(["A", "B", "C"]));
document.write(reverseArrayInPlace(arr));
document.write(arr);
