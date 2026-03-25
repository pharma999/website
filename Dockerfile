FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build TypeScript
RUN npm run build

# Debug (optional but helpful)
RUN ls -R dist

EXPOSE 5173

CMD ["node", "dist/index.js"]
