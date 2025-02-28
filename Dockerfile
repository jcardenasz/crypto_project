# Use the official Node.js image as the base image
FROM oven/bun:latest

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN bun install

# Set environment variables
ENV SECRET='SUPER_SECRET_KEY_HUNGARO_SUEGRO_PALOMO'
ENV PORT = 14990

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 14990

# Define the command to run the application
CMD ["bun", "start"]