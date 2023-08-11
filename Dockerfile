FROM node

WORKDIR /home/node/app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
