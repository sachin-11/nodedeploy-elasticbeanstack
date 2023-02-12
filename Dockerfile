FROM node:18-alpine
WORKDIR /app
COPY package.json  ./
RUN npm install --production
COPY . .
CMD ["node", "app.js", "0.0.0.0/3000"]