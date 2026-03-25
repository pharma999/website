# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build TypeScript
RUN npm run build

# Expose port (change if needed)
EXPOSE 3000

# Run the app
CMD ["node", "dist/index.js"]
