version=$(date '+%Y%m%d%H%M%S')
tag='01-games-backend'
echo $version

git pull

docker build -t uhub.service.ucloud.cn/humanrisk/$tag:$version ./ && \
docker tag uhub.service.ucloud.cn/humanrisk/$tag:$version uhub.service.ucloud.cn/humanrisk/$tag:latest
docker push uhub.service.ucloud.cn/humanrisk/$tag:$version && \
docker push uhub.service.ucloud.cn/humanrisk/$tag:latest