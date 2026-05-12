# Microservices Architecture Description

The EcoRide Connect application is built using a decentralized microservices architecture. Each service manages its own data and scale independently.

### Core Services:

1. **API Gateway**: Acts as the entry point for all mobile and web traffic, handling authentication routing and request rate limiting.
2. **Identity & Auth Service**: Solely responsible for security, JWT issuing, and login credentials. It does not handle user profile details.
3. **User Profile Service**: Manages personal data, user preferences, and rating history. It is distinct from the authentication service.
4. **Vehicle Verification Service**: Handles the complex logic of checking driver licenses, vehicle documents, and insurance status.
5. **Ride Matching Service**: Executes the real-time algorithm to connect drivers and passengers based on GPS coordinates.
6. **Payment Service**: A PCI-compliant service that handles the split-payment logic and digital wallet balances.
7. **Sustainability Service**: Dedicated to calculating CO2 savings and managing environmental impact badges for gamification.
8. **Messaging Service**: An event-driven component that sends real-time push notifications and transactional emails via message brokers.

### Service Interactions:
- **Synchronous**: Critical data exchange happens via **gRPC** for high-speed internal communication.
- **Asynchronous**: Non-blocking tasks like notifications or analytics processing use **RabbitMQ** to maintain system decoupling.