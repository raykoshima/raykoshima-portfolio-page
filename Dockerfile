# Use the official Bun image as base
FROM oven/bun:latest AS builder

# Set working directory
WORKDIR /app

# Copy package files first for efficient caching
COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# Copy the rest of the application files
COPY /web-portfolio .

# Build the Vite project
RUN bun run build

# Use a lightweight image for running the app
FROM oven/bun:latest AS runner

# Set working directory
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app .

# Expose the port Vite runs on
EXPOSE 5173

# Start the Vite server
CMD ["bun", "run", "dev", "--host"]
