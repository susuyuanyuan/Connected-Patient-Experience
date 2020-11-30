FROM node:lts as build

WORKDIR /usr/src/app
# used for accessing mongodb
ENV MONGODB_URL="mongodb+srv://group-project:Ka6V91u9Bm9g2Doo@cluster0.bf6rf.mongodb.net/patients?retryWrites=true&w=majority"
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*json ./

RUN npm -v
RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]