FROM node:12-alpine as build

# needed for serving at the right url when deployed in HDAP
ENV PUBLIC_URL="https://apps.hdap.gatech.edu/connected-patient-experience-app/"
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app
COPY package*json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
