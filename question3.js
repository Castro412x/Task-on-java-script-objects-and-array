
let bank = {
  accountHolder: "Ngozi Adeyemi",
  accountNumber: "0123456789",
  balance: 250000,
  transactions: [5000, -12000, 30000, -8500, 15000]
};
console.log(bank.accountHolder)
for(let i = 0; i < bank.transactions.length; i++){
  bank.balance += bank.transactions[i];
}
console.log(`Final balance is ${bank.balance}`)