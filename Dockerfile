### STAGE 1: Build ###
FROM node:14.17.0-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

### STAGE 2: Run ###
FROM nginx:1.20.1
COPY --from=build-step /app/dist/Front /usr/share/nginx/html
EXPOSE 4200:80
