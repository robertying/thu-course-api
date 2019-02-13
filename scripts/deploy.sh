echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker build -t yingrui205/thu-course-api:latest .
docker push yingrui205/thu-course-api:latest
