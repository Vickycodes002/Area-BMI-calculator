// Triangle Area Calculation
function calculateTriangleArea() {
    var base = document.getElementById('triangle-base').value;
    var height = document.getElementById('triangle-height').value;
    var area = (base * height) / 2;
    document.getElementById('triangle-result').innerHTML = 'Area: ' + area + ' m²';
}

// Square Area Calculation
function calculateSquareArea() {
    var side = document.getElementById('square-side').value;
    var area = side * side;
    document.getElementById('square-result').innerHTML = 'Area: ' + area + ' m²';
}

// Circle Area Calculation
function calculateCircleArea() {
    var radius = document.getElementById('circle-radius').value;
    var area = 3.14 * radius * radius;
    document.getElementById('circle-result').innerHTML = 'Area: ' + area + ' m²';
}

// Quadrilateral Area Calculation
function calculateQuadrilateralArea() {
    var side1 = document.getElementById('quad-side1').value;
    var side2 = document.getElementById('quad-side2').value;
    var area = side1 * side2;
    document.getElementById('quad-result').innerHTML = 'Area: ' + area + ' m²';
}

// Rhombus Area Calculation
function calculateRhombusArea() {
    var diagonal1 = document.getElementById('rhombus-d1').value;
    var diagonal2 = document.getElementById('rhombus-d2').value;
    var area = (diagonal1 * diagonal2) / 2;
    document.getElementById('rhombus-result').innerHTML = 'Area: ' + area + ' m²';
}

// Trapezium Area Calculation
function calculateTrapeziumArea() {
    var base1 = document.getElementById('trapezium-base1').value;
    var base2 = document.getElementById('trapezium-base2').value;
    var height = document.getElementById('trapezium-height').value;
    var area = ((parseFloat(base1) + parseFloat(base2)) * height) / 2;
    document.getElementById('trapezium-result').innerHTML = 'Area: ' + area + ' m²';
}

// Parallelogram Area Calculation
function calculateParallelogramArea() {
    var base = document.getElementById('parallelogram-base').value;
    var height = document.getElementById('parallelogram-height').value;
    var area = base * height;
    document.getElementById('parallelogram-result').innerHTML = 'Area: ' + area + ' m²';
}

// BMI Calculation
function calculateBMI() {
    var weight = document.getElementById('bmi-weight').value;
    var height = document.getElementById('bmi-height').value;
    var bmi = weight / (height * height);
    document.getElementById('bmi-result').innerHTML = 'BMI: ' + bmi;
}
