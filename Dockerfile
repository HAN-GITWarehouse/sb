# FROM node:14.4 as front-deps
# ENV NPM_PROXY=https://in.humanrisk.cn:5300/repository/npm-proxy/
# WORKDIR /app
# COPY /.docker/codes/front/app/package.json /app
# RUN npm config set registry $NPM_PROXY && \
#     npm config get registry && \
#     yarn install 

# FROM node:14.4 as front-build
# ENV NPM_PROXY=https://in.humanrisk.cn:5300/repository/npm-proxy/
# WORKDIR /app
# COPY /.docker/codes/front/app /app
# COPY --from=front-deps /app/node_modules /app/node_modules
# RUN npm config set registry $NPM_PROXY && \
#     npm config get registry && \
#     yarn build 

FROM node:14.4 as backend-deps
ENV NPM_PROXY=https://in.humanrisk.cn:5300/repository/npm-proxy/
WORKDIR /app
COPY ./app/package.json /app
RUN echo "NPM_PROXY: ${NPM_PROXY}" && \
    npm config set registry $NPM_PROXY && \
    npm config get registry && \
    yarn install 

FROM node:14.4 as backend-build
ENV NPM_PROXY=https://in.humanrisk.cn:5300/repository/npm-proxy/
WORKDIR /app
COPY /app /app
COPY --from=backend-deps /app/node_modules /app/node_modules
RUN npm config set registry $NPM_PROXY && \
    npm config get registry && \
    yarn build

# production stage
FROM uhub.service.ucloud.cn/humanrisk/00-nginx-oauth as production-stage
COPY --from=backend-build /app/dist /var/www/backend
# COPY --from=front-build /var/www /var/www/front
COPY /.docker/conf/nginx/conf.d /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]