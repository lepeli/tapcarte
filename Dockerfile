FROM node:20-alpine

LABEL maintenair="Yvan FOUCHER <contact@yvan.dev>"

WORKDIR /app

COPY ./ ./

RUN npm install

EXPOSE 5173

CMD ["npm","run", "dev", "--", "--host"]