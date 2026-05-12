# Architecture Comparison

| Metric | Monolithic | Microservices |
| :--- | :--- | :--- |
| **Scalability** | Vertical Scaling | Horizontal Scaling per Service |
| **Complexity** | Low | High (Network/DevOps) |
| **Deployment** | Single Release | Independent CI/CD |
| **Data Model** | Shared Database | Database per Service |

**Conclusion**: Use Monolith for rapid prototyping and Microservices for scaling to 200K users.