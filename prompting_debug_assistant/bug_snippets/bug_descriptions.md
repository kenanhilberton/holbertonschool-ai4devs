# Project: AI-Assisted Debugging - Bug Descriptions

This file documents the initial state of the buggy snippets and their intended behavior for the automated evaluation system.

## Bug 1 – bug1.py
**Intended Behavior**: The function should return the last `n` items of a list using Python's slicing mechanism.
**Issue Type**: Off-by-one error.
**Notes**: The current implementation incorrectly offsets the start index by adding 1.

---

## Bug 2 – bug2.js
**Intended Behavior**: Each function stored in the `handlers` array should return its own index value when called.
**Issue Type**: Logical / Scope Error (Closure).
**Notes**: Using `var` in the loop causes all functions to point to the same final value of `i`.

---

## Bug 3 – bug3.c
**Intended Behavior**: The function should format a string with the username and return a valid pointer for printing in `main`.
**Issue Type**: Runtime / Memory Corruption (Dangling Pointer).
**Notes**: Returning the address of a local stack-allocated buffer leads to undefined behavior.

---

## Bug 4 – bug4.py
**Intended Behavior**: Add items to a shopping cart list, ensuring that each function call starts with a fresh list if one isn't provided.
**Issue Type**: Mutable Default Argument.
**Notes**: Python's default argument evaluation causes the same list to be shared across all function calls.

---

## Bug 5 – bug5.js
**Intended Behavior**: Compare the sum of three decimal prices with a total balance to check for sufficient funds.
**Issue Type**: Floating Point Precision.
**Notes**: Strict equality fails because `0.1 + 0.2` does not equal exactly `0.3` in binary floating-point representation.