function numOrMAt() {
    let input1 = document.getElementById('in1').value;
    let input2 = document.getElementById('in2').value;
    let output = document.getElementById('out');
    let num, matrix1, matrix2;

    if (!isNaN(+input1)) {
        num = +input1;
    } else {
        matrix1 = takeMatrix(input1);
        let chek = isSquare(matrix1)
        if (typeof chek === 'string') {
            return output.value = chek + 1;
        }
    }

    if (!isNaN(+input2)) {
        num = +input2;
    } else {
        matrix2 = takeMatrix(input2);
        let chek = isSquare(matrix2)
        if (typeof chek === 'string') {
            return output.value = chek + 2;
        }
    }

    if (document.getElementById('multMatrixNumber').checked) {
        let mMatrixN = multMatrixNumber(num, matrix1 ? matrix1 : matrix2);
        return output.value = result(mMatrixN);
    }
    if (document.getElementById('MultiplyMatrix').checked) {
        let mMatrix = MultiplyMatrix(matrix1, matrix2);
        return output.value = result(mMatrix);
    }
    if (document.getElementById('SumMatrix').checked) {
        let sMatrix = SumMatrix(matrix1, matrix2);
        if (typeof sMatrix === 'string') {
            return output.value = sMatrix;
        }
        return output.value = result(sMatrix);
    }
    if (document.getElementById('TransMatrix').checked) {
        let tMatrix = TransMatrix(matrix1 ? matrix1 : matrix2);
        return output.value = result(tMatrix);
    }
}

function result(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].join(" ");
    }
    matrix = matrix.join("\n");
    return matrix;
}

function takeMatrix(str) {
    let arr = str.split("\n");
    let matrix = arr.map(value => value.split(" "));
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].map(Number);
    }
    return matrix;
}

function isSquare(matrix) {
    let len;
    for (const matrix1 of matrix) {
        if (len !== undefined && matrix1.length !== len) {
            console.log(len);
            console.log(matrix1.length);
            return "Не вірно задана Матриця ";
        }
        len = matrix1.length;
        if (matrix.length !== matrix1.length) {
            return "Не є квадратною Матриця ";
        }
    }
    return matrix;
}

function multMatrixNumber(a, A) {
    let m = A.length, n = A[0].length, B = [];
    for (let i = 0; i < m; i++) {
        B[i] = [];
        for (let j = 0; j < n; j++) B[i][j] = a * A[i][j];
    }
    return B;
}

function MultiplyMatrix(A, B) {
    let rowsA = A.length, colsA = A[0].length,
        rowsB = B.length, colsB = B[0].length,
        C = [];
    if (colsA !== rowsB) return false;
    for (let i = 0; i < rowsA; i++) C[i] = [];
    for (let k = 0; k < colsB; k++) {
        for (let i = 0; i < rowsA; i++) {
            let t = 0;
            for (let j = 0; j < rowsB; j++) t += A[i][j] * B[j][k];
            C[i][k] = t;
        }
    }
    return C;
}

function SumMatrix(A, B) {      //На входе двумерные массивы одинаковой размерности
    let m = A.length, n = A[0].length, C = [];
    for (let i = 0; i < m; i++) {
        C[i] = [];
        for (let j = 0; j < n; j++) C[i][j] = A[i][j] + B[i][j];
    }
    if (A.length !== B.length) {
        return "Матриці різної розміроності";
    }
    return C;
}

function TransMatrix(A) {
    let m = A.length, n = A[0].length, AT = [];
    for (let i = 0; i < n; i++) {
        AT[i] = [];
        for (let j = 0; j < m; j++) AT[i][j] = A[j][i];
    }
    return AT;
}