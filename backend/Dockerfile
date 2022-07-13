FROM node:16-alpine

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn

COPY prisma ./

RUN npx prisma generate

RUN npx prisma migrate dev --name init

COPY . .

EXPOSE 8000

CMD ['yarn', 'start']