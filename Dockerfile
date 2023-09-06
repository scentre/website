FROM node:latest

# Set working directory
WORKDIR /usr/app
# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package*.json .

# Install PM2 globally
RUN npm install --global pm2

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all files
COPY . .

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

RUN chown -R node:node /usr/app

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]