SHELL:=/bin/bash
IMAGE_NAME:=salpe/webpack-tutorial
DOCKER_USER:=*****
DOCKER_PASS:="******"
DOCKER_TAG_NAME:=latest

all: docker-stop docker-publish docker-run
.PHONY: all
docker-stop:
	@echo "Stopping container and removing image"
	export IMAGE_NAME="$(IMAGE_NAME)" && docker stop $$(docker ps -aqf "name=${IMAGE_NAME}")
	docker image rm $(IMAGE_NAME) -f

docker-publish:
	@echo "Login to docker repo"
	docker login --username=$(DOCKER_USER) --password=$(DOCKER_PASS)
	@echo "Building docker image"
	docker build -t $(IMAGE_NAME) .
	@echo "Pushing docker image"
	docker push $(IMAGE_NAME):$(DOCKER_TAG_NAME)

docker-run:
	@echo "Starting container"
	docker pull $(IMAGE_NAME)
	docker run -p 8080:8080 --rm -d $(IMAGE_NAME) 
