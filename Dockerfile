FROM node:5.6 

ADD . /app

RUN npm install

EXPOSE 3000

WORKDIR /app

CMD ["node", "server.js"]
