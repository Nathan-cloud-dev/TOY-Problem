let basicSalary = parseInt(prompt("Enter your basic salary:"));
let benefits = parseInt(prompt("Enter the value of benefits:"));


let taxRate;
if (basicSalary <= 20000) {
  taxRate = 10;
} else if (basicSalary <= 35000) {
  taxRate = 15;
} else if (basicSalary <= 40000) {
  taxRate = 20;
} else if (basicSalary <= 75000) {
  taxRate = 25;
} else {
  taxRate = 30;
}
let payee = (basicSalary + benefits) * (taxRate / 100);


let nhifDeductions;
if (basicSalary <= 7500) {
  nhifDeductions = 250;
} else if (basicSalary <= 9999) {
  nhifDeductions = 200;
} else if (basicSalary <= 12999) {
  nhifDeductions = 400;
} else if (basicSalary <= 14999) {
  nhifDeductions = 500;
} else if (basicSalary <= 19999) {
  nhifDeductions = 600;
} else if (basicSalary <= 24999) {
  nhifDeductions = 750;
} else if (basicSalary <= 29999) {
  nhifDeductions = 850;
} else if (basicSalary <= 34999) {
  nhifDeductions = 900;
} else if (basicSalary <= 39999) {
  nhifDeductions = 950;
} else if (basicSalary <= 44999) {
  nhifDeductions = 1000;
} else if (basicSalary <= 49999) {
  nhifDeductions = 1100;
} else if (basicSalary <= 59999) {
  nhifDeductions = 1200;
} else if (basicSalary <= 69999) {
  nhifDeductions = 1300;
} else if (basicSalary <= 79999) {
  nhifDeductions = 1400;
} else if (basicSalary <= 89999) {
  nhifDeductions = 1500;
} else if (basicSalary <= 99999) {
  nhifDeductions = 1600;
} else if (basicSalary <= 109999) {
  nhifDeductions = 1700;
}