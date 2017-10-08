// Exercise 1
const stars = function(nStars) {
	if(nStars === 0) {
		return "";
	}
	return "*" + stars(nStars-1);
};
  
const space = function(nSpaces) {
	if (nSpaces === 0){ 	
		return "";
	}
	return " " + space(nSpaces-1);
};

const comb = function(sps, str) {
	if(str <= 0)
		return "";
console.log(space(sps) + stars(str) );
	return comb(sps + 1, str - 2);
}

const triangleStars = function(a) {
	comb(0, 2 * a-1);
};	
triangleStars(6);



// Exercise 2
const pow = function (base, n) {
	if (n === 0)
		return 1;
    else
		return base * pow(base, n - 1);
};
const test1 = pow(3,3);
console.log(test1);
  
  
  
// Exercise 3
const reverse = function (string) {	
const ind = function(string, index) {
	if (index < 0)
		return "";
	
		return string[index]+ind(string, index - 1)

	};
	return ind(string, string.length - 1);
};
const test2 = reverse("Hayk");
console.log(test2)



// Exercise 4
const checkerboard = function(n, stars) {
	const lines = n;
	const comb = function(n, stars) {
		if(n <= 0)
			return "";
		if(stars)
			return " " + comb(n-1, !stars);
		else
			return "*" + comb(n-1, !stars);
};

const a = function(n) {
	if(n <= 0)
		return;
	if(n%2 === 0)
		console.log(" " + comb(2 * lines));
	else
		console.log(comb(2 * lines));
	a(n-1);
};

return a(n);
};
checkerboard(6);