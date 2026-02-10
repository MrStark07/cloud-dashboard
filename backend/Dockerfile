FROM node:18

# Fix SSL issues
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

WORKDIR /app

COPY package*.json ./

RUN npm config set strict-ssl false \
    && npm install

COPY . .

EXPOSE 3000
CMD ["node", "app.js"]

