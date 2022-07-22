FROM node:14

COPY package.json ./package.json

COPY package-lock.json ./package-lock.json

COPY . .

RUN npm install

WORKDIR /home/node/app

CMD ["node","app.js"]
