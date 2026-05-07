function processTransaction(balance, itemPrice, taxRate) {
    const totalCost = itemPrice + (itemPrice * taxRate);
    console.log("Current Balance:", balance);
    console.log("Total Cost (with tax):", totalCost);

    // If balance is 0.3 and totalCost is exactly 0.3, it should pass
    if (balance >= totalCost) {
        let remaining = balance - totalCost;
        return "Transaction successful. Remaining: " + remaining;
    } else {
        return "Insufficient funds. You need " + (totalCost - balance) + " more.";
    }
}

// Scenario: Balance is 0.3, Item is 0.1, Tax is 200% (0.2)
// Total cost should be 0.1 + 0.2 = 0.3
const result = processTransaction(0.3, 0.1, 2.0);
console.log(result); 
// BUG: Due to floating point precision, 0.1 + 0.2 might be 0.30000000000000004