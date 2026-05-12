# Microservices Architecture Description

The EcoRide Connect application is decomposed into 8 specialized microservices to ensure modularity and independent scalability.

### Core Services:

1. **API Gateway**: The central entry point that handles request routing, SSL termination, and client authentication layers.
2. **Authentication Service**: Strictly manages security credentials, password hashing, and OAuth2/JWT token lifecycle. 
3. **Passenger Profile Service**: Manages passenger-specific data such as trip preferences, emergency contacts, and loyalty points.
4. **Driver & Vehicle Service**: A high-compliance service dedicated to vetting driver licenses, vehicle registration documents, and insurance validity.
5. **Ride Matching Service**: Executes the geospatial algorithms required to match active drivers with pending ride requests in real-time.
6. **Payment & Wallet Service**: Handles secure financial transactions, split-fare logic between users, and virtual wallet balance management.
7. **Sustainability Tracker**: An independent engine that calculates CO2 savings and environmental impact metrics for marketing and gamification.
8. **Notification Engine**: A robust messaging service that triggers push notifications, SMS, and emails via an asynchronous message broker.

### Service Interactions:
- **Internal Communication**: Microservices exchange data using **gRPC** for low-latency, strongly-typed contracts.
- **Event-Driven Workflows**: Asynchronous events (like a completed ride) are published to **RabbitMQ**, allowing services like Sustainability and Notifications to react without blocking the main flow.