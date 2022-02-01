FROM node:16-alpine3.12 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/.vitepress/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
