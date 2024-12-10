# Step 1: Build the React app using Node.js
FROM node:16 AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install -f

# Copy all the source code
COPY . .

# Build the app for production
RUN npm run build

# Step 2: Serve the built app with Nginx
FROM nginx:stable-alpine

# Copy the build output from the previous stage to the nginx public folder
COPY --from=build /app/build /usr/share/nginx/html

COPY deployment/nginx.default.conf /etc/nginx/conf.d/default.conf

# # Expose port 80 to access the app from the host
# EXPOSE 80

# # Start Nginx server
# CMD ["nginx", "-g", "daemon off;"]