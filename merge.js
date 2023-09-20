


function merge (arr1, arr2) {
	const mergedArray = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			mergedArray.push(arr1[i]);
			i++;
		}
		else {
			mergedArray.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		mergedArray.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		mergedArray.push(arr2[j]);
		j++;
	}

	return mergedArray;
}

function mergeSort (arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const mid = Math.floor(arr.length / 2);
	const leftHalf = mergeSort(arr.slice(0, mid));
	const rightHalf = mergeSort(arr.slice(mid));

	return merge(leftHalf, rightHalf);
}

console.log(mergeSort([ 4, 20, 12, 10, 7, 9 ])); // [4, 7, 9, 10, 12, 20]
console.log(mergeSort([ 0, -10, 7, 4 ])); // [-10, 0, 4, 7]
console.log(mergeSort([ 1, 2, 3 ])); // [1, 2, 3]
console.log(mergeSort([])); // []

const nums = [ 4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32 ];

console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

module.exports = { merge, mergeSort };
