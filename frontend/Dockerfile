# Stage 1: build the Angular app
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies (uses package-lock if present)
COPY package*.json ./
RUN npm install -g npm@11.6.2
RUN npm install -D @angular/cli@20.3.6
RUN npm i --force --legacy-peer-deps

# Copy source and build
COPY . .
# Use local CLI if available, otherwise npx will install the proper version
RUN npx @angular/cli@20.3.6 build --configuration production --output-path=dist --output-hashing=all

# Stage 2: serve with nginx
FROM nginx:stable-alpine AS production
# Copy built files
COPY --from=builder /app/dist/ /usr/share/nginx/html/

# Minimal nginx config to support SPA fallback to index.html
RUN printf 'server {\n  listen 80;\n  root /usr/share/nginx/html;\n  index index.html;\n  location / {\n    try_files $uri $uri/ /index.html;\n  }\n}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]