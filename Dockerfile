# syntax=docker/dockerfile:1.4

# automatically use latest version of node
FROM node:22-alpine as builder

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@13

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM builder as dev-envs

RUN apk update && apk add --no-cache git

RUN adduser -D -h /home/vscode -s /bin/bash vscode
RUN addgroup docker
RUN addgroup vscode docker

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

CMD ["ng", "serve", "--host", "0.0.0.0"]