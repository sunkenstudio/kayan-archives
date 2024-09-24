FROM node:20.11.1

WORKDIR /app

COPY package*.json .

COPY . .

RUN npm install

RUN npm run build

ENV PORT=4588

EXPOSE 4588

CMD [ "npm", "run", "start" ]