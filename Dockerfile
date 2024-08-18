# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Angular application
RUN npm run build --configuration=production --output-path=docs --base-href /jenus-front-end/

# Install an HTTP server to serve the application
RUN npm install -g http-server

# Expose the port the application will run on
EXPOSE 8080

# Start the HTTP server and serve the built application
CMD ["http-server", "docs"]