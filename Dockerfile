FROM node:18-alpine

ENV HOST='0.0.0.0'
ENV PORT='3000'

WORKDIR /webapp
COPY package.json package-lock.json ./

RUN npm install
RUN npm run build

COPY ./ /webapp



EXPOSE 3000

CMD [ "npm", "run", "dev" ]