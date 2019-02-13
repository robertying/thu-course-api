# Builder stage

FROM node:11-alpine AS builder

# Create app directory
WORKDIR /home/node/app

RUN apk add --no-cache --virtual .build-deps make gcc g++ python

# Install app devDependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install

RUN apk del .build-deps

# Bundle app source
COPY . .

# Build
RUN npm run build


# Runner stage

FROM node:11-alpine
ENV NODE_ENV=production
WORKDIR /home/node/app

# Copy dependencies
COPY package*.json ./
COPY --from=builder /home/node/app/node_modules ./node_modules

# Copy build files
COPY --from=builder /home/node/app/build ./build

EXPOSE 23333

CMD npm run serve
