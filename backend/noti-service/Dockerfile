# Use OpenJDK 21 image
FROM openjdk:21-jdk-slim

ARG JAR_FILE=target/*.jar

# Add the compiled jar to the container
COPY ${JAR_FILE} app.jar

# Expose port 8080
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
