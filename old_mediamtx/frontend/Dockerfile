# Stage 1: Build the app
FROM node:20 AS builder

WORKDIR /app

# Only copy package.json and lock file first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the build output to Nginx's web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: expose port (Docker Compose handles this too)
EXPOSE 80

# Default Nginx command
CMD ["nginx", "-g", "daemon off;"]
