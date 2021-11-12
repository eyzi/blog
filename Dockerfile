FROM node:alpine
WORKDIR /app
COPY . .
RUN yarn install && yarn build