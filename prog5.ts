let empName: string = "Dhaval";
let basicSalary: number = 2000;

let hra = 0.2 * basicSalary; 
let da = 0.1 * basicSalary;   
let pf = 0.12 * basicSalary; 

let grossSalary = basicSalary + hra + da;
let netSalary = grossSalary - pf;

console.log("Employee Name:", empName);
console.log("Basic Salary:", basicSalary);
console.log("HRA:", hra);
console.log("DA:", da);
console.log("PF Deduction:", pf);
console.log("Gross Salary:", grossSalary);
console.log("Net Salary:", netSalary);