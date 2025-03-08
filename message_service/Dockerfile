# service1/Dockerfile
FROM node:14

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 8080
CMD ["node", "app.js"]