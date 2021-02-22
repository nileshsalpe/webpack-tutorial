FROM node:15
WORKDIR /usr/src/app/webpack-tutorial
COPY . .
RUN npm install -g npm@7.5.4
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "deploy" ]