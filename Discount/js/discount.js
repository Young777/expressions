
//Shaylen Young - 06 - 12 - Finding out Discounted Price

var originalprice = 120
var discount = 20
//Cost of 1 USB harddrive with company discount
var salestax = (.0625)
//Price with sales tax
var discountamt = 24
var discountapplied = 120 - discountamt
var total = discountapplied * salestax
var results = total + discountapplied
// Sales tax adds another $6
console.log(results)
