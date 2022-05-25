deploy_dev:
	docker run --name rijksmuseum -v $(PWD):/app -it -d -w /app -p 3006:3000 node:16.14.0 --trace-deprecation
	docker exec rijksmuseum yarn install
start:
	docker exec rijksmuseum yarn start
install:
	docker exec rijksmuseum yarn install
build:
	docker exec rijksmuseum yarn build