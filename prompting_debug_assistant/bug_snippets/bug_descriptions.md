## Bug 1 – bug1.py
**Intended Behavior**: Return the last n items of a list.
**Issue Type**: Off-by-one error.
**Root Cause**: The slice `items[start_index + 1:]` skips the first element of the intended range because of the unnecessary `+ 1`.
**Fix**: Change the return statement to `return items[start_index:]`.

---

## Bug 2 – bug2.js
**Intended Behavior**: Each function in the array should return its own index value.
**Issue Type**: Logical / Scope Error (Var Hoisting).
**Root Cause**: Using `var` in a loop creates a function scope. All closures point to the same variable `i`, which equals 4 (or 5) after the loop finishes.
**Fix**: Use `let` instead of `var` to create block-level scope for each iteration.

---

## Bug 3 – bug3.c
**Intended Behavior**: Concatenate "Welcome back" with the username and return the string.
**Issue Type**: Runtime / Memory Corruption (Dangling Pointer).
**Root Cause**: Returning the address of a local stack-allocated array (`buffer`). The memory is invalidated once the function returns.
**Fix**: Use `malloc` to allocate memory on the heap or pass a destination buffer as an argument.

---

## Bug 4 – bug4.py
**Intended Behavior**: Add an item to a list, starting with a fresh list if none is provided.
**Issue Type**: Mutable Default Argument.
**Root Cause**: In Python, default arguments are evaluated once at definition time, not at call time. The same list object is reused across all calls.
**Fix**: Use `my_list=None` and initialize `if my_list is None: my_list = []` inside the function.

---

## Bug 5 – bug5.js
**Intended Behavior**: Check if the sum of three prices equals the total balance (0.6).
**Issue Type**: Floating Point Precision Error.
**Root Cause**: Binary representation of decimal fractions (0.1, 0.2) leads to precision issues (e.g., 0.1 + 0.2 = 0.30000000000000004).
**Fix**: Use `Math.round()`, `toFixed()`, or compare using a small epsilon value: `Math.abs(total - (p1+p2+p3)) < Number.EPSILON`.