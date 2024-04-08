# syntax=docker/dockerfile:1

FROM node:18-alpine

RUN mkdir -p /PaymenyAPIs/node/node_modules && chown -R node:node /PaymenyAPIs/node/app

WORKDIR /PaymenyAPIs/node/app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 4000

CMD ["npm", "start"]
