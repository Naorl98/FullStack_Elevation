const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer);
    });
  });
}

let balance = 100; 

async function bankingSystem() {
  console.log("=== Welcome to the Banking System ===");

  while (true) {
    console.log("\n1) Check Balance");
    console.log("2) Deposit Money");
    console.log("3) Withdraw Money");
    console.log("4) Exit");

    let choice = await askQuestion("Choose option (1-4): ");

    switch (choice) {
      case "1":
        console.log(`Your current balance is: $${balance}`);
        break;

      case "2":
        let depositAmount = await askQuestion("Enter amount to deposit: $");
        depositAmount = parseFloat(depositAmount);
        if (depositAmount > 0) {
          balance += depositAmount;
          console.log(`Deposit successful. New balance: $${balance}`);
        } else {
          console.log("❌ Invalid amount. Please enter a positive number.");
        }
        break;

      case "3":
        let withdrawAmount = await askQuestion("Enter amount to withdraw: $");
        withdrawAmount = parseFloat(withdrawAmount);
        if (withdrawAmount > 0 && withdrawAmount <= balance) {
          balance -= withdrawAmount;
          console.log(`Withdrawal successful. New balance: $${balance}`);
        } else if (withdrawAmount > balance) {
          console.log("❌ Insufficient funds.");
        } else {
          console.log("❌ Invalid amount. Please enter a positive number.");
        }
        break;

      case "4":
        console.log("👋 Thank you for using our banking system.");
        rl.close(); 
        return;

      default:
        console.log("❌ Invalid choice. Please select a number between 1–4.");
        break;
    }
  }
}

bankingSystem();
