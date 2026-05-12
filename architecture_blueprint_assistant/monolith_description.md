# Monolithic Architecture Description

The EcoRide Connect application follows a monolithic architecture where all business logic is contained within a single deployable unit. This simplifies deployment and initial development.

### Core Components:

1.  **Frontend App**: A unified responsive interface for both drivers and passengers, built with a mobile-first approach.
2.  **Central Monolith Backend**: The core server-side application that processes all requests and coordinates internal modules.
3.  **Authentication Module**: Manages user registration, login, JWT token generation, and secure session management.
4.  **Route Matching Module**: Contains the heavy AI logic to pair drivers and passengers based on location and destination.
5.  **Payment Module**: Integrates with third-party providers to handle cost-sharing transactions and digital wallets.
6.  **Eco-Impact Tracker**: Calculates and stores CO2 savings for every successful carpool session.
7.  **Notification Module**: Sends real-time push notifications and emails to users about ride status.
8.  **Central Database**: A single relational database (e.g., PostgreSQL) that stores user profiles, ride history, and system logs.