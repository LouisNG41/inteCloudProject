# service2/Dockerfile
FROM node:14

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 8081
CMD ["node", "app.js"]