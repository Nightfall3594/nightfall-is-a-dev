
# Compile the application
FROM node:22.21.1-alpine3.21
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Store in an Nginx container
FROM nginx:latest
COPY --from=0 nginx.conf /etc/nginx/
COPY --from=0 dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]