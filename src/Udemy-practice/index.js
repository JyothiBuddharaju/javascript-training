const bills = [124, 48, 268];
const billCalculator = function (bills) {
  const newBills = bills.map((bill) => {
    if (bill < 50) {
      return bill * 0.20;
    } else if (bill > 50 && bill < 200) {
      return bill * 0.15;
    } else {
      return bill * 0.10;
    }
  })
  const tips = function (bills) {
    const finalBills = bills.map((bill, index) => {
      return bill + newBills[index];
    })
    console.log(finalBills)
  }
  console.log(newBills)
  tips(bills);
}
billCalculator(bills);