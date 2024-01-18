FROM node:18-alpine AS build
WORKDIR /app
COPY ./FlixnetFrontend/package*.json ./
RUN npm ci
COPY ./FlixnetFrontend .
RUN npm run build -- --output-path=dist
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
