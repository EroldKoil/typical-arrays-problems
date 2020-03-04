
exports.min = function min (array) {
	if(array == undefined || array.length == 0 ){
		return 0;
	}
	let minimum = array[0];;
	array.forEach(function(el){
		if(el < minimum){
			minimum = el;
		}
	});
  return minimum;
}

exports.max = function max (array) {
	if(array == undefined || array.length == 0 ){
		return 0;
	}
	let maximum = array[0];
	array.forEach(function(el){
		if(el > maximum){
			maximum = el;
		}
	});
  return maximum;
}

exports.avg = function avg (array) {
	let summ = 0;
	if(array != undefined && array.length != 0){
		array.forEach(function(el){
			summ += el;
		});
		summ /= array.length
	}
	return summ;
}
