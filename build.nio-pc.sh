version=$(date '+%Y%m%d%H%M%S')
tag='01-games-nio-pc'
echo $version

git pull

docker build -f ./Dockerfile.nio-pc -t uhub.service.ucloud.cn/humanrisk/$tag:$version ./ && \
docker tag uhub.service.ucloud.cn/humanrisk/$tag:$version uhub.service.ucloud.cn/humanrisk/$tag:latest
docker push uhub.service.ucloud.cn/humanrisk/$tag:$version && \
docker push uhub.service.ucloud.cn/humanrisk/$tag:latest