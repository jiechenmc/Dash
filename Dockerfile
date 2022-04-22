FROM node

# Creating the root folder
WORKDIR /dash

WORKDIR /dash/client
COPY client/package*.json ./
RUN npm install

WORKDIR /dash/server
COPY server/package*.json ./
RUN npm install

WORKDIR /dash
COPY . .

ENV PORT=3000
ENV PORT=3001

EXPOSE 3000
EXPOSE 3001

WORKDIR /dash/server
CMD [ "npm", "run",  "dev"]