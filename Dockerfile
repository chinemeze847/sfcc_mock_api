# #base image
# FROM node:18-alpine

# # Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# COPY package*.json ./

# RUN npm install

# # Bundle app source
# COPY ./src ./src

# EXPOSE 9090
# CMD npm run start

FROM node:18.12.1-slim

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

EXPOSE 9090 

CMD ["npm", "start"]