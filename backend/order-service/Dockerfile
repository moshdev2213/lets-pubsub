# Use Node.js image
FROM node:20-alpine

# Define build arguments for environment variables
ARG TOPIC_NAME
ARG SVR_PORT

# Set environment variables during the build process
ENV TOPIC_NAME=$TOPIC_NAME
ENV SVR_PORT=$SVR_PORT

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port
EXPOSE 3000

# Start the server
CMD [ "node", "src/index.js" ]
