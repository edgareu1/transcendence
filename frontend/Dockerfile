# Use Node.js 14 LTS version
FROM node:16

# Set working directory
WORKDIR /Users/tiago/rep/transcendence

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]
