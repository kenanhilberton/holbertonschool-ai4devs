# Microservices Architecture Description

The EcoRide Connect application is decomposed into independent, decoupled microservices, each responsible for a specific business domain. This allows for independent scaling and maintenance.

### Core Services:

1. **API Gateway**: The single entry point for all client requests. It handles request routing, load balancing, and rate limiting.
2. **Auth Service**: Manages user authentication, authorization, and issues JWT tokens. It has its own dedicated database for security.
3. **Ride Matching Service**: Handles the core logic of finding and pairing drivers with passengers. It interacts with the User Service to verify profiles.
4. **Payment Service**: Processes all financial transactions and manages the digital wallet system. It communicates with external payment providers.
5. **Eco-Impact Service**: Specialized service that calculates and tracks CO2 savings. It operates independently to process environmental data.
6. **Notification Service**: An event-driven service that sends push notifications, SMS, and emails based on triggers from other services.
7. **User Management Service**: Manages detailed user profiles, driver documentation, and vehicle verification.
8. **Reporting & Analytics Service**: Collects data from various services to generate business insights and performance reports without affecting live traffic.

### Interactions:
- Services communicate primarily through **REST APIs** or **gRPC**.
- For asynchronous tasks (like notifications), an event bus (e.g., RabbitMQ or Kafka) is used to ensure system resilience.