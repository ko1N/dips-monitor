# build frontend
FROM node:15 as builder
WORKDIR /app
COPY . .

RUN npm install -g @angular/cli@9.0.4
RUN npm install
RUN ng build --prod --base-href /

FROM nginx:latest
COPY --from=builder /app/dist/relay-radar /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html/
ADD build/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
