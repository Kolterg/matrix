function numOrMAt() {
    let input1 = document.getElementById("in1").value;
    let input2 = document.getElementById("in2").value;
    let output = document.getElementById("out");
    let num, matrix1, matrix2;

    if (typeof input1 === "number") {
        num = input1;
    } else {
        matrix1 = takeMatrix(input1);
    }

    if (typeof input2 === "number") {
        num = input2;
    } else {
        matrix2 = takeMatrix(input1);
    }

    matrix1[0][1] = Number(matrix1[0][1]);
    console.log(matrix1);
    console.log(typeof matrix1[0][1]);
    console.log(matrix1[0][1])

    if (document.getElementById("multMatrixNumber").checked) {
        console.log(multMatrixNumber(num, matrix1 ? matrix1 : matrix2));
    }
    if (document.getElementById("MultiplyMatrix")) {
        MultiplyMatrix(matrix1, matrix2);
    }
    if (document.getElementById("SumMatrix")) {
        SumMatrix(matrix1, matrix2)
    }
    if (document.getElementById("TransMatrix")) {
        TransMatrix(matrix1 ? matrix1 : matrix2);
    }
}

function takeMatrix(str) {
    let arr = str.split("\n");
    return arr.map(value => value.split(" "));
}

let a = 2;
let A = [[1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
    [3, 4, 5, 6]];

console.log(multMatrixNumber(a, A));

function multMatrixNumber(a, A)  // a - число, A - матрица (двумерный массив)
{
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
    if (colsA != rowsB) return false;
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

function SumMatrix(A, B)       //На входе двумерные массивы одинаковой размерности
{
    let m = A.length, n = A[0].length, C = [];
    for (let i = 0; i < m; i++) {
        C[i] = [];
        for (let j = 0; j < n; j++) C[i][j] = A[i][j] + B[i][j];
    }
    return C;
}

function TransMatrix(A)       //На входе двумерный массив
{
    let m = A.length, n = A[0].length, AT = [];
    for (let i = 0; i < n; i++) {
        AT[i] = [];
        for (let j = 0; j < m; j++) AT[i][j] = A[j][i];
    }
    return AT;
}