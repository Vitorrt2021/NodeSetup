FROM node:16-slim AS builder
WORKDIR /app/
COPY . .
RUN npm install --no-package-lock
RUN npm run build
CMD ["bash", "docker-cmd.sh"]
