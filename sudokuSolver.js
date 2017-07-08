function sudoku(matrix) {

	return sudokuSolver(matrix, 0, 0)
}

function sudokuSolver(matrix, r, c) {

	//base case
	if(r > 8 || c > 8){
		return false;
	}
	if(c === 8) {
		r += 1;
		c = 0;
	}

	//get empty square(have this function finish first so that iterations aren't nested)

	let getFirstEmptyBox = getEmptyIndex(matrix)
	if(getFirstEmptyBox === undefined) {
		//if no additional empty boxes are found, that means that we completed the sudoku solver
		//return the finished sudoku
		var newArray = matrix.map((arr) => arr.slice())
		return newArray;
	}
	let currRow = getFirstEmptyBox[0];
	let currCol = getFirstEmptyBox[1];

	//get a number that is not contained in it's row, col, nor 3 by 3 subMatrix
	let getNums = getPossibleNumber(matrix, currRow, currCol)


	//set the firstEmptyBox to the possible number;
	for(let i = 0; i < getNums.length; i++ ){
		matrix[currRow][currCol] = getNums[i]
		var newArray = matrix.map((arr) => arr.slice())
		let solved = sudokuSolver(newArray, r, c+1)
		//put a checker to return the solved sodoku if the solved returns true;
		if(solved) {
			return solved;
		}
	}
}

//returns the first instance of empty box
function getEmptyIndex(matrix){
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			if(matrix[row][col] === 0) {
				return [row, col]
			}
		}
	}
}

function getPossibleNumber(matrix, currRow, currCol) {
	let possibleSolutions = [];
	//create 3 different sets for rows, columns, and 3 x 3 matrix;
	let rowSet = new Set();
	let colSet = new Set();
	let subMatrix = checkBox(matrix, currRow, currCol)
	for(let row = 0; row < matrix.length; row++) {
		for(let col = 0; col < matrix[row].length; col++) {
			if(matrix[currRow][col] !== 0 && matrix[row][currCol] !== 0) {
				rowSet.add(matrix[currRow][col]);
				colSet.add(matrix[row][currCol]);
			}
		}
	}

	//find unique set of numbers that we pull from based on cross referencing row, col, 3 x 3 sets
	for(var i = 1; i <= 9; i++) {
		if(!rowSet.has(i) && !colSet.has(i) && !subMatrix.has(i)) {
			possibleSolutions.push(i);
		}
	}
	return possibleSolutions;
}

//checks the 3 x 3 matrix
function checkBox(matrix, r, c) {
	if(0 <= r && r <= 2) {
		row = [0, 2]
	} else if(3 <= r && r <= 5) {
		row = [3, 5]
	} else if(6 <= r && r <= 8) {
		row = [6, 8]
	}

	if(0 <= c && c <= 2) {
		col = [0, 2]
	} else if(3 <= c && c <= 5) {
		col = [3, 5]
	} else if(6 <= c && c <= 8) {
		col = [6, 8]
	}
	var subMatrix = new Set();
	for(var i = row[0]; i <= row[1]; i++) {
		for(var j = col[0]; j <= col[1]; j++) {
			if(matrix[i][j] !== 0) {
				subMatrix.add(matrix[i][j])
			}
		}
	}
	return subMatrix;
}




////////////////////////////////////////////////////////////////////////
//TESTS
/////////////////////////////////////////////////////////////////////////

var arr2 = [
	[ 5, 6, 7, 0, 1, 0, 0, 0, 0],
	[ 3, 0, 0, 0, 0, 0, 0, 7, 0],
	[ 9, 0, 0, 0, 0, 0, 0, 0, 5],
	[ 0, 0, 0, 0, 0, 2, 0, 5, 0],
	[ 0, 0, 2, 0, 0, 1, 9, 0, 0],
	[ 7, 9, 6, 5, 3, 0, 0, 0, 4],
	[ 0, 1, 0, 7, 0, 0, 0, 0, 0],
	[ 6, 0, 0, 0, 2, 0, 1, 3, 0],
	[ 2, 0, 0, 0, 0, 0, 0, 0, 9],
]


var arr1 = [
	[ 0, 0, 8, 0, 0, 6, 1, 3, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[ 4, 0, 0, 0, 3, 0, 0, 7, 0],
	[ 1, 0, 0, 3, 0, 0, 6, 0, 0],
	[ 0, 2, 0, 4, 0, 0, 0, 8, 0],
	[ 0, 0, 0, 6, 0, 1, 0, 5, 0],
	[ 5, 7, 0, 8, 0, 0, 0, 0, 0],
	[ 0, 0, 3, 0, 0, 0, 0, 4, 0],
	[ 6, 8, 1, 0, 0, 0, 0, 0, 0],
]

var arr1Solution = [
	[ 9, 5, 8, 2, 7, 6, 1, 3, 4 ],
  [ 3, 1, 7, 5, 9, 4, 2, 6, 8 ],
  [ 4, 6, 2, 1, 3, 8, 5, 7, 9 ],
  [ 1, 4, 5, 3, 8, 7, 6, 9, 2 ],
  [ 7, 2, 6, 4, 5, 9, 3, 8, 1 ],
  [ 8, 3, 9, 6, 2, 1, 4, 5, 7 ],
  [ 5, 7, 4, 8, 6, 2, 9, 1, 3 ],
  [ 2, 9, 3, 7, 1, 5, 8, 4, 6 ],
  [ 6, 8, 1, 9, 4, 3, 7, 2, 5 ] ]


var arr2Solution = [
	[ 5, 6, 7, 2, 1, 4, 3, 9, 8 ],
  [ 3, 2, 4, 9, 8, 5, 6, 7, 1 ],
  [ 9, 8, 1, 3, 6, 7, 4, 2, 5 ],
  [ 1, 3, 8, 4, 9, 2, 7, 5, 6 ],
  [ 4, 5, 2, 6, 7, 1, 9, 8, 3 ],
  [ 7, 9, 6, 5, 3, 8, 2, 1, 4 ],
  [ 8, 1, 9, 7, 4, 3, 5, 6, 2 ],
  [ 6, 4, 5, 8, 2, 9, 1, 3, 7 ],
  [ 2, 7, 3, 1, 5, 6, 8, 4, 9 ] ]


console.log('test1: ', solutionChecker(sudoku(arr1), arr1Solution))
console.log('test2: ', solutionChecker(sudoku(arr2), arr2Solution))



////////////////////////////////////////////////////////////////
//solution Checker//
////////////////////////////////////////////////////////////////

function solutionChecker(matrix1, matrix2){
	for(var i = 0; i < matrix1.length; i++) {
		for(var j = 0; j < matrix1.length; j++) {
			if(matrix1[i][j] !== matrix2[i][j]) {
				return false;
			}
		}
	}
	return true;
}

////////////////////////////////////////////////////////////////
