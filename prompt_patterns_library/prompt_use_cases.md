# Prompt Use Cases

## Code Quality
- **Refactoring**
  - **Goal**: Improve readability and performance
  - **Input**: Source function in [LANGUAGE]
  - **Expected Output**: Optimized code with a summary of improvements
- **Style Enforcement**
  - **Goal**: Enforce consistent naming and formatting
  - **Input**: Unformatted code block
  - **Expected Output**: Rewritten code following specific style guides
- **Code Review**
  - **Goal**: Identify logical flaws or anti-patterns
  - **Input**: Code snippet or Pull Request
  - **Expected Output**: List of potential issues and optimization suggestions
- **Complexity Analysis**
  - **Goal**: Evaluate the cyclomatic complexity of a function
  - **Input**: Source code in [LANGUAGE]
  - **Expected Output**: Complexity score and suggestions to simplify logic

## Debugging
- **Root Cause Analysis**
  - **Goal**: Identify why an error occurs based on logs
  - **Input**: Error stack trace and relevant code snippet
  - **Expected Output**: Detailed explanation of the bug and a working fix
- **Security Audit**
  - **Goal**: Detect common vulnerabilities like SQLi or XSS
  - **Input**: Code handling user inputs or database queries
  - **Expected Output**: Vulnerability report and patched secure code
- **Performance Profiling**
  - **Goal**: Identify execution bottlenecks in the code
  - **Input**: Algorithm implementation or nested loops
  - **Expected Output**: Time/space complexity analysis and optimized version
- **Error Handling Enhancement**
  - **Goal**: Improve the robustness of a function's error management
  - **Input**: Code lacking try-catch blocks or error checks
  - **Expected Output**: Updated code with comprehensive error handling

## Documentation
- **Docstring Generation**
  - **Goal**: Generate standardized API documentation
  - **Input**: Function signature and implementation
  - **Expected Output**: Standardized docstrings (e.g., Javadoc or Python Google Style)
- **README Authoring**
  - **Goal**: Create a project overview for a repository
  - **Input**: Project structure, features, and installation steps
  - **Expected Output**: A fully structured and formatted README.md file
- **Commit Message Formatting**
  - **Goal**: Create clear and descriptive git commit messages
  - **Input**: Summary of code changes
  - **Expected Output**: Conventional commit message (e.g., feat: add login logic)
- **Technical Tutorial Generation**
  - **Goal**: Create a guide for a specific code module
  - **Input**: Complex function or library code
  - **Expected Output**: Step-by-step technical tutorial for developers

## Testing
- **Unit Test Generation**
  - **Goal**: Generate test cases for a specific function
  - **Input**: Source code in [LANGUAGE]
  - **Expected Output**: Complete test suite using [FRAMEWORK]
- **Edge Case Discovery**
  - **Goal**: Find boundary conditions that might break logic
  - **Input**: Function requirements or core logic
  - **Expected Output**: List of potential edge cases and corresponding test inputs
- **Mock Data Creation**
  - **Goal**: Generate realistic fake data for testing
  - **Input**: JSON schema or data requirements
  - **Expected Output**: Array of mock data objects for database seeding
- **Integration Test Planning**
  - **Goal**: Define how different modules should be tested together
  - **Input**: List of interconnected components and APIs
  - **Expected Output**: A structured integration test plan and sample test cases