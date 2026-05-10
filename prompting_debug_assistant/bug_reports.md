Bug Reports
Bug Report – bug1.py
Summary: Off-by-one error in list slicing.

Root Cause: The slice data_list[start_index + 1:] incorrectly skipped the first intended element because Python slicing is inclusive of the start index.

Resolution: Removed the + 1 from the slicing logic. (AI-generated fix).

Lesson Learned: Always verify if a slice index should be inclusive or exclusive in the specific language being used.

Bug Report – bug2.js
Summary: JavaScript closure/scoping issue in a loop.

Root Cause: Using var created a function-scoped variable, causing all event handlers to reference the final value of i (4) after the loop finished.

Resolution: Changed var to let to provide block-level scoping for each iteration. (AI-generated fix).

Lesson Learned: Prefer let and const over var in modern JavaScript to avoid scope-related bugs.

Bug Report – bug3.c
Summary: Dangling pointer (Memory safety error).

Root Cause: The function returned the address of a local stack-allocated array, which becomes invalid once the function's stack frame is destroyed.

Resolution: Implemented heap allocation using malloc and ensured the memory is free()'d in the main function. (AI-generated fix + manual memory management).

Lesson Learned: Never return pointers to local stack variables; use dynamic allocation for data that must persist.

Bug Report – bug4.py
Summary: Mutable default argument bug.

Root Cause: A list defined as a default argument (history=[]) is created once at definition time and shared across all subsequent function calls.

Resolution: Changed the default value to None and initialized the list inside the function. (AI-generated fix).

Lesson Learned: Use None as a default value for mutable objects (lists, dictionaries) in Python.

Bug Report – bug5.js
Summary: Floating-point precision error in financial calculations.

Root Cause: Binary representation of decimals (IEEE 754) caused 0.1 + 0.2 to not exactly equal 0.3, breaking strict equality checks.

Resolution: Replaced strict equality with an epsilon-based comparison (Number.EPSILON). (AI-generated fix).

Lesson Learned: Never use strict equality (===) for floating-point numbers; always compare within a small tolerance.