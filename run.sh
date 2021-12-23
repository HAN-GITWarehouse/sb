docker-compose pull
docker-compose down -v --remove-orphans
docker-compose up -d
docker-compose exec backend bash