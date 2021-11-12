FROM node:alpine
WORKDIR /app
COPY . .
RUN yarn build