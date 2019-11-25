// import {
//   exportDefaultSpecifier
// } from "@babel/types";

var john = {
  fullName: 'John Atherton',
  mass: '80',
  height: '5.0',
  calcBMI: function () {
    return this.bmi = this.mass / (this.height * this.height)
  }
}
var mark = {
  fullName: 'Mark Miller',
  mass: '70',
  height: '5.0',
  calcBMI: function () {
    return this.bmi = this.mass / (this.height * this.height)
  }
}
console.log(john.calcBMI());
console.log(mark.calcBMI());
if (john.bmi > mark.bmi) {
  console.log(john.fullName + 'has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + ' has a higher BMI of' + mark.bmi);
} else {
  console.log("they have the same BMI");
}