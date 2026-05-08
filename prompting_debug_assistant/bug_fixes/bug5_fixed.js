/**
 * FIX: Used Number.EPSILON to handle floating-point precision errors.
 * 0.1 + 0.2 does not exactly equal 0.3 in binary floating-point math.
 */
function processTransaction(balance, itemPrice, taxRate) {
    const totalCost = itemPrice + (itemPrice * taxRate);
    
    // Check if the difference is smaller than the smallest possible float precision
    if (balance >= (totalCost - Number.EPSILON)) {
        let remaining = Math.round((balance - totalCost) * 100) / 100;
        return "Transaction successful. Remaining: " + remaining;
    } else {
        return "Insufficient funds.";
    }
}

console.log(processTransaction(0.3, 0.1, 2.0));