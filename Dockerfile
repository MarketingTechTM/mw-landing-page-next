FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install dependencies
RUN npm install --legacy-peer-deps

# Build for production
RUN npm run build

# Expose the Next.js port
EXPOSE 3000

# Run production server
CMD ["npm", "start"]
