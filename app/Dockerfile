FROM node:lts as build

# needed for serving at the right url when deployed in HDAP
# ENV PUBLIC_URL="https://apps.hdap.gatech.edu/connected-patient-experience-app/"
ENV PATH /app/node_modules/.bin:$PATH
# used for getting the server address for the backend
ENV REACT_APP_SERVER_URL https://apps.hdap.gatech.edu/connected-patient-experience-backend
WORKDIR /app
COPY package*json ./
RUN npm -v
RUN npm install
COPY . .
RUN npm run build

# RUN npm install -g serve
# RUN ls -al build
# CMD serve -s build -l 80

FROM nginx:alpine
EXPOSE 80
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
