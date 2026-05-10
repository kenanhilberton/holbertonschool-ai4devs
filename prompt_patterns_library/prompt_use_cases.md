# Prompt Use Cases Library

This document outlines the primary use cases for AI-assisted software development, categorized by their role in the development lifecycle. Each use case is designed to be a reusable pattern for improving productivity and code quality.

## 1. Code Quality & Maintenance
- **Code Refactoring**
  - **Purpose**: To improve readability, reduce complexity, and optimize performance without changing external behavior.
  - **Input**: Source code in [LANGUAGE].
  - **Output**: Refactored code block with a summary of changes.
  
- **Style Enforcement**
  - **Purpose**: To ensure code adheres to specific naming conventions (e.g., PEP8, Airbnb Style Guide) and project-specific formatting.
  - **Input**: Unformatted or inconsistent code block.
  - **Output**: Reformatted code consistent with the specified style guide.

- **Legacy Code Explanation**
  - **Purpose**: To understand old or undocumented codebases by breaking down logic into plain English.
  - **Input**: Complex legacy function or module.
  - **Output**: Step-by-step logical breakdown and high-level summary.

## 2. Debugging & Error Handling
- **Root Cause Analysis**
  - **Purpose**: To identify why an error is occurring based on stack traces or unexpected behavior.
  - **Input**: Error logs, stack traces, and the relevant code snippet.
  - **Output**: Identification of the bug and a detailed explanation of the fix.

- **Security Vulnerability Scanning**
  - **Purpose**: To detect common security flaws like SQL Injection, XSS, or improper memory handling.
  - **Input**: Sensitive code segments (e.g., API endpoints, database queries).
  - **Output**: Report of potential vulnerabilities and secure code alternatives.

## 3. Documentation & Knowledge Sharing
- **API Documentation Generation**
  - **Purpose**: To automatically create Swagger/OpenAPI or Javadoc/Doxygen style comments.
  - **Input**: Function signatures and implementation.
  - **Output**: Standardized documentation blocks (docstrings).

- **README Generation**
  - **Purpose**: To create structured project overviews for GitHub repositories.
  - **Input**: Project structure, main features, and installation steps.
  - **Output**: A professionally formatted `README.md` file.

## 4. Testing & Validation
- **Unit Test Generation**
  - **Purpose**: To increase code coverage by generating test cases for various input scenarios.
  - **Input**: A standalone function or class.
  - **Output**: Test suite using [TESTING_FRAMEWORK] (e.g., PyTest, Jest).

- **Edge Case Identification**
  - **Purpose**: To find boundary conditions that might break the application.
  - **Input**: Function requirements or logic.
  - **Output**: List of potential edge cases and suggested test inputs.

- **Mock Data Generation**
  - **Purpose**: To create realistic datasets for database seeding or UI testing.
  - **Input**: Data schema or JSON structure requirements.
  - **Output**: Array of mock data objects.

## 5. Learning & Research
- **Technology Comparison**
  - **Purpose**: To compare two frameworks, libraries, or languages for a specific use case.
  - **Input**: Two technologies (e.g., [TECH_A] vs [TECH_B]) and project constraints.
  - **Output**: A pros/cons list and a recommendation based on requirements.