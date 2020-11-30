FROM node:lts as build

ENV PATH /backend/node_modules/.bin:$PATH
ENV MONGODB_URL="mongodb+srv://suyuanyuan:ao7aH44qJJUWwwE0@cluster0.bf6rf@cluster0.bf6rf.mongodb.net/patients?retryWrites=true&w=majority";
WORKDIR /backend
RUN npm -v
RUN npm install
COPY . .
CMD ["node", "server.js"]