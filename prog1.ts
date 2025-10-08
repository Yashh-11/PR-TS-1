let stud_name = "Yash";
let sub1 = 93;
let sub2 = 94;
let sub3 = 89;
let total = sub1 + sub2 + sub3;
let avg = total / 3;

console.log("Name is : ", stud_name);
console.log("Total Marks : ", total);
console.log("Average is : ", avg);

if (avg > 80) {
    console.log("A grade");
}
else if (avg > 60) {
    console.log("B grade");
}
else if (avg > 40) {
    console.log("C grade");
}
else {
    console.log("Fail");
}
