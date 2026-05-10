# Prompt Use Cases

## Code Quality
- **Refactoring**
  - **Goal**: Improve readability and performance
  - **Input**: Source function in [LANGUAGE]
  - **Output**: Optimized code + explanation
- **Style Enforcement**
  - **Goal**: Enforce consistent naming and formatting
  - **Input**: Code block
  - **Output**: Rewritten code with consistent style
- **Code Review**
  - **Goal**: Identify logical flaws or anti-patterns
  - **Input**: Pull Request or code snippet
  - **Output**: List of potential issues and suggestions

## Debugging
- **Root Cause Analysis**
  - **Goal**: Identify why an error occurs from logs
  - **Input**: Error stack trace and relevant code
  - **Output**: Explanation of the bug and a fix
- **Security Audit**
  - **Goal**: Detect common vulnerabilities (SQLi, XSS)
  - **Input**: Code handling user inputs or DB queries
  - **Output**: Security report and patched code
- **Performance Profiling**
  - **Goal**: Identify bottlenecks in execution time
  - **Input**: Complex algorithm or nested loops
  - **Output**: Time complexity analysis and optimized version

## Documentation
- **Docstring Generation**
  - **Goal**: Generate standardized API documentation
  - **Input**: Function signature and body
  - **Output**: Docstrings in [FORMAT] (e.g., Javadoc, Google Style)
- **README Authoring**
  - **Goal**: Create a project overview for GitHub
  - **Input**: Project structure and feature list
  - **Output**: Structured README.md file

## Testing
- **Unit Test Generation**
  - **Goal**: Generate test cases for a specific function
  - **Input**: Source code in [LANGUAGE]
  - **Output**: Test suite using [FRAMEWORK]
- **Edge Case Discovery**
  - **Goal**: Find boundary conditions that break logic
  - **Input**: Function requirements or logic
  - **Output**: List of edge cases and test inputs
- **Mock Data Creation**
  - **Goal**: Generate fake data for testing
  - **Input**: JSON schema or data requirements
  - **Output**: Array of mock data objects

## Learning & Research
- **Technology Comparison**
  - **Goal**: Compare two tools for a specific project
  - **Input**: [TECH_A] and [TECH_B] requirements
  - **Output**: Pros/Cons comparison and recommendation