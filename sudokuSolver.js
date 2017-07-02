function sudokuSolver(matrix, r, c) {
	//completed
	// console.log(matrix)
	if(c > 8) {
		r = r + 1
		c = 0;
	}
	if(!checkRow(matrix, r)) {
		return;
	} else if(!checkCol(matrix, c)) {

		return;
	} else if(!checkBox(matrix, r, c)) {

		return;
	}

	// console.log(' r ' + r + ' c' + c )

	if(r > 8) {
		return
	}


	if(r === 8 && c ===8) {
		console.log(matrix)
		return matrix;
	}



	if(matrix[r][c] === 0) {
		for(var i = 1; i <= 9; i++) {
			matrix[r][c] = i
			var newArray = matrix.map((arr) => arr.slice())
			sudokuSolver(Array.from(newArray), r, c+1)
		}
	} else {
		var newArray = matrix.map((arr) => arr.slice())
		sudokuSolver(Array.from(newArray), r, c+1)
	}
}

function checkRow(matrix, r) {
	var obj = {};
	for(var i = 0; i < matrix.length; i++) {
		var matrixVal = matrix[r][i]
		if(matrix[r][i] !== 0) {
			if(!obj[matrixVal]) {
				obj[matrixVal] = 1;
			} else {
				return false;
			}
		}
	}
	// console.log('obj', obj)
	return true;
}

function checkCol(matrix, c) {
	var obj = {};
	for(var i = 0; i < matrix.length; i++) {
		var matrixVal = matrix[i][c]
		if(matrix[i][c] !== 0) {
			if(!obj[matrixVal]) {
				obj[matrixVal] = 1;
			} else {
				return false;
			}
		}
	}
	// console.log(obj)
	return true;
}

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
	// console.log(row + " " + col)
	var obj = {};
	for(var i = row[0]; i <= row[1]; i++) {
		for(var j = col[0]; j <= col[1]; j++) {
			var matrixVal = matrix[i][j]
			if(matrix[i][j] !== 0) {
				if(!obj[matrixVal]) {
					obj[matrixVal] = 1;
				} else {
					return false;
				}
			}
		}
	}
	// console.log('obj', obj)
	return true;
}

// var arr = [
// 	[ 5,  3,  0,  0,  7,  0,  0,  0,  0],
// 	[ 6,  0,  0,  1,  9,  5,  0,  0,  0],
// 	[ 0,  9,  8,  0,  0,  0,  0,  6,  0],
// 	[ 8,  0,  0,  0,  6,  0,  0,  0,  3],
// 	[ 4,  0,  0,  8,  0,  3,  0,  0,  1],
// 	[ 7,  0,  0,  0,  2,  0,  0,  0,  6],
// 	[ 0,  6,  0,  0,  0,  0,  2,  8,  0],
// 	[ 0,  0,  0,  4,  1,  9,  0,  0,  5],
// 	[ 0,  0,  0,  0,  8,  0,  0,  7,  9]
// ]

// var arr = [
// 	[ 6,  1,  0,  0,  2,  0,  0,  3,  7],
// 	[ 0,  3,  5,  0,  0,  6,  8,  0,  1],
// 	[ 0,  0,  0,  0,  4,  0,  6,  0,  2],
// 	[ 8,  0,  9,  0,  1,  3,  2,  7,  4],
// 	[ 0,  7,  0,  9,  0,  0,  0,  8,  0],
// 	[ 0,  6,  0,  0,  7,  4,  1,  9,  5],
// 	[ 1,  0,  3,  4,  0,  7,  5,  2,  9],
// 	[ 5,  2,  0,  1,  8,  0,  0,  0,  3],
// 	[ 9,  4,  6,  2,  3,  5,  0,  0,  8]
// ]
// var arr = [
// 	[ 0,  0,  0,  0,  0,  0,  0,  0,  0],
// 	[ 0,  0,  0,  0,  0,  0,  0,  0,  0],
// 	[ 0,  0,  0,  0,  0,  0,  0,  0,  0],
// 	[ 0,  0,  0,  0,  0,  0,  0,  0,  0],
// 	[ 0,  0,  0,  0,  0,  0,  0,  0,  0],
// 	[ 0,  0,  0,  0,  0,  0,  0,  0,  0],
// 	[ 0,  0,  0,  0,  0,  0,  0,  0,  0],
// 	[ 0,  0,  0,  0,  0,  0,  0,  0,  0],
// 	[ 0,  0,  0,  0,  0,  0,  0,  0,  0],
// ]

var arr = [
	[ 7,  0,  0,  0,  0,  0,  5,  8,  0],
	[ 0,  0,  0,  0,  2,  0,  0,  0,  9],
	[ 0,  0,  0,  0,  0,  8,  3,  0,  1],
	[ 0,  5,  2,  0,  6,  9,  7,  0,  4],
	[ 1,  9,  7,  0,  0,  0,  0,  0,  0],
	[ 0,  0,  0,  5,  0,  0,  0,  0,  8],
	[ 0,  0,  8,  0,  0,  0,  0,  9,  3],
	[ 0,  6,  0,  0,  0,  0,  0,  2,  0],
	[ 0,  7,  0,  0,  0,  0,  6,  0,  5],
]

console.log(sudokuSolver(arr, 0, 0))

/*
	[ 5,  3,  0,  0,  7,  0,  0,  0,  0],
	[ 6,  0,  0,  1,  9,  5,  0,  0,  0],
	[-1,  9,  8,  0,  0,  0,  0,  6,  0],
	[ 8,  0,  0,  0,  6,  0,  0,  0,  3],
	[ 4,  0,  0,  8,  0,  3,  0,  0,  1],
	[ 7,  0,  0,  0,  2,  0,  0,  0,  6],
	[ 0,  6,  0,  0,  0,  0,  2,  8,  0],
	[ 0,  0,  0,  4,  1,  9,  0,  0,  5],
	[ 0,  0,  0,  0,  8,  0,  0,  7,  9],
*/
