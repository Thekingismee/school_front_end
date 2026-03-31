FROM --platform=linux/amd64 nginx:stable-alpine3.17

RUN apk update --no-cache && \
    apk upgrade --no-cache && \
    apk add --no-cache openssl

COPY nginx.conf /etc/nginx/

COPY /build /usr/share/nginx/html



CMD ["nginx","-g","daemon off;"]
