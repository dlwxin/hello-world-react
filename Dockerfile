FROM node:16.13.0 AS builder
WORKDIR /app
COPY . /app
RUN yarn install && yarn build

FROM nginx:1.20.1
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/build /usr/share/nginx/html
# USER nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
