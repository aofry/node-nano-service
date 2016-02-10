FROM node:5.6 

ADD . /app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
