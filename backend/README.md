# 📦 Google Pub/Sub Project

<img width="1761" alt="gcp_pub_sub" src="https://github.com/user-attachments/assets/468b4a3c-f4a9-40c7-b980-8c20811460d4">

This project demonstrates a **Google Pub/Sub** integration using a small microservices architecture (note : may not include best-practices, built in order to learn googel-pub/sub service). It includes multiple services written in different languages—**Node.js (Express)**, **FastAPI**, and **Spring Boot**—all containerized and stored in **Google Artifact Registry (GAR)**. Continuous integration and deployment (CI/CD) are handled via **GitHub Actions**.

---

## 📜 Overview

The project contains the following services:

1. **Client Application (React)**
2. **Order Service (Node.js - Express)**
3. **Notification Service (Spring Boot)**
4. **Billing Service (FastAPI)**

### 🌐 Pub/Sub Architecture Flow:

1. The **Client App** triggers a message to be published by invoking an endpoint in the **Order Service**.
2. The **Order Service** (Node.js - Express) publishes the message to a Google Pub/Sub topic.
3. Two services are subscribed to this topic:
   - **Notification Service** (Spring Boot)
   - **Billing Service** (FastAPI)

The two subscribers handle the messages by performing different actions based on the published data.

---

## 🛠️ Services Details

| Service             | Technology            | Description                                                                                | Deployed URL                                                                                                                   |
|---------------------|-----------------------|--------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| **Client App**       | React                 | Frontend application that triggers messages to be published.                               | [Client App](https://pubsub-client-850033850526.us-central1.run.app)                                                          |
| **Order Service**    | Node.js (Express)     | Handles requests from the client and publishes messages to Google Pub/Sub.                 | [Order Service](https://pubsub-order-service-850033850526.us-central1.run.app)                                                |
| **Notification Service** | Spring Boot         | Subscribes to the Google Pub/Sub topic and processes notification events.                   | [Notification Service](https://pubsub-noti-service-850033850526.us-central1.run.app)                                          |
| **Billing Service**  | FastAPI               | Subscribes to the Google Pub/Sub topic and handles billing-related events.                  | [Billing Service](https://pubsub-billing-service-850033850526.us-central1.run.app)                                             |

---

## ⚙️ Technologies Used

- **Google Cloud Pub/Sub**: Message broker used to decouple services.
- **Google Artifact Registry (GAR)**: Container registry to store and manage Docker images.
- **Cloud Run**: To deploy services in a serverless environment.
- **GitHub Actions**: For CI/CD automation to deploy services.
- **Docker**: To containerize the services.
- **React**: Client-side user interface.
- **Node.js (Express)**: Backend for the order service.
- **Spring Boot**: For the notification service.
- **FastAPI**: For the billing service.

---

## 📝 Project Flow

1. **Client App**: User interacts with the client app to trigger an event.
   - Endpoint: `/publish`  (Express app)
   
2. **Order Service**: Receives the event and publishes the message to a **Google Pub/Sub** topic.

3. **Google Pub/Sub**: Distributes the message to two subscribers:
   - **Notification Service** (Spring Boot)
   - **Billing Service** (FastAPI)

4. **Notification Service**: Processes notification messages and logs to **Google Cloud Logger**.
   
5. **Billing Service**: Handles billing-related messages and logs to **Google Cloud Logger**.

---

## 🚀 Deployment Details

The project is fully containerized using Docker, and CI/CD pipelines are set up using GitHub Actions to automate deployment to **Google Cloud Run**. Here's a brief outline of the steps:

1. **Commit Changes**: Push your local commits to GitHub.
2. **GitHub Actions**: Detects changes and triggers the pipeline.
3. **Containerization**: Each service is containerized using Docker.
4. **Artifact Registry**: Docker images are pushed to **Google Artifact Registry**.
5. **Cloud Run**: Services are deployed to **Google Cloud Run**.
6. **IAM & Permissions**: Managed via **Google Cloud IAM** for secure access and deployments.

---

## 🛠️ How to Run Locally

To run the services locally, make sure you have the following tools installed:

1. **Docker**
2. **Node.js** (for the Order Service)
3. **Python** (for the Billing Service)
4. **Java** (for the Notification Service)
5. **React** (for the Client App)

Steps:

1. Clone the repository.
2. Build the Docker images for each service (includes build--args):
    ```bash
    docker build -t client-app ./client
    docker build -t order-service ./order
    docker build -t notification-service ./notification
    docker build -t billing-service ./billing
    ```
3. Run the services
---

## 📊 Logs & Monitoring

All services are integrated with **Google Cloud Logger** for logging and monitoring. You can view logs by navigating to the **Google Cloud Console** under the **Cloud Logger** section.

---

## 📋 Pub/Sub Topic & Subscription

| Topic            | Subscribers                                                |
|------------------|-------------------------------------------------------------|
| `order-topic`    | Notification Service (Spring Boot), Billing Service (FastAPI) |

Make sure the topic and subscriptions are correctly set up in **Google Cloud Pub/Sub**.

---

## 🌍 External Links

| Service                 | URL                                                                                     |
|-------------------------|-----------------------------------------------------------------------------------------|
| **Client App**           | [https://pubsub-client-850033850526.us-central1.run.app](https://pubsub-client-850033850526.us-central1.run.app) |
| **Order Service**        | [https://pubsub-order-service-850033850526.us-central1.run.app](https://pubsub-order-service-850033850526.us-central1.run.app) |
| **Notification Service** | [https://pubsub-noti-service-850033850526.us-central1.run.app](https://pubsub-noti-service-850033850526.us-central1.run.app) |
| **Billing Service**      | [https://pubsub-billing-service-850033850526.us-central1.run.app](https://pubsub-billing-service-850033850526.us-central1.run.app) |

---

## 🎯 Conclusion

This project successfully demonstrates the power of **Google Pub/Sub** in a microservices architecture. Each service is built using a different technology stack and deployed serverlessly using **Google Cloud Run**. CI/CD pipelines with **GitHub Actions** ensure that the system remains robust and easily maintainable.
