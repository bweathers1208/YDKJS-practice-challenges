//taxes
const taxRate = 0.07;
var phoneTax = phonePrice * taxRate;
var accessoryTax = accessoryPrice * taxRate;
var totalTax = (phoneTax) + (accessoryTax);

//base prices
const phonePrice = 749.99;
const accessoryPrice = 49.99;
var totalPhone = phonePrice + phoneTax;
var totalAccessory = accessoryPrice + accessoryTax;


//compare to
const monthlySpend = 200;

//how to calculate whether you can buy it outright
function buyOutright = () => {
  var totalCost = totalPhone + totalAccessory;
  if (totalCost < monthlySpend) {
    return "Buy the phone!";
  } else if (totalCost > monthlySpend) {
    return "You cannot afford to buy this outright!";
};
  
console.log(buyOutright());
  
//how to calculate whether you can finance it
function finance = () => {
  var totalCost = totalPhone + totalAccessory;
  var monthlyCost = totalCost / 12;
  if (monthlyCost < monthlySpend) {
    return "Finance the phone!";
  } else if (monthlyCost > monthlySpend) {
    return "You cannot afford to finance the phone!";
  };
  
  console.log(finance());
  
  //still in the beginning stages of answering this one. Feel like I'm 80% there.



