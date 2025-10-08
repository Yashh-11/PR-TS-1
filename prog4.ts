
let productName: string = "Laptop";
let price: number = 100;         
let qty: number = 5;        
let disc: number = 10;


let totalAmount: number = price * qty;
let discountAmount: number = (totalAmount * disc) / 100;
let nettotal: number = totalAmount - discountAmount;

console.log(" --- BILL DETAILS ---");
console.log("Product Name:", productName);
console.log("Price : " + price);
console.log("Quantity:", qty);
console.log("Total Amount: " + totalAmount);
console.log("Discount (" + disc + "%): " + discountAmount);
console.log("Final Bill Amount: ₹" + nettotal);
console.log("------------------------");