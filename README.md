# Docker_Express
 Docker container express app, which can easily be deployed to anywhare.

## Running App Locally

Make sure you have Node JS.

```sh
git clone https://github.com/pritamkhose/Docker_Express.git
cd Docker_Express
npm install

npm install -g nodemon
nodemon

```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## To create Project.

```sh
mkdir Docker_Express
cd Docker_Express
npm install -g express-generator

express --view=pug Docker_Express
```

## To install Docker compose.

```sh
sudo apt install docker-compose
```

## To build & run Docker compose.

```sh
sudo docker-compose up --build -d   // -d Run forever
sudo docker-compose up              // run util CTRL+C exit

sudo docker-compose pause
sudo docker-compose unpause
sudo docker-compose stop
sudo docker-compose start

sudo docker-compose down

sudo docker-compose ps

sudo docker-compose logs
```

## To build & run Docker image.

```sh
sudo docker build -t pritamkhose/docker_express .

sudo docker run -p 3000:3000 -d pritamkhose/docker_express 

sudo docker logs f46251f91c95

sudo docker stop f46251f91c95
sudo docker start f46251f91c95
```

## Docker Extra Command

```sh
sudo docker --version
sudo docker info
sudo docker --help

sudo docker images
sudo docker images ps


sudo docker ps
sudo docker ps -a
sudo docker ps --all

sudo docker run busybox
sudo docker run -it busybox sh
sudo docker run busybox ping google.com
sudo docker exec -it busybox echo hi
sudo docker stop 9fa42f1891bd
sudo docker logs 9fa42f1891bd
sudo docker rmi Image 9fa42f1891bd
sudo docker rm a089ee2fc944

sudo docker system df
sudo docker system prune -a
```

## Pull Docker image
```sh
sudo docker pull pritamkhose/docker-express:latest
```

## Push Docker image to [Docker hub](https://hub.docker.com/repository/docker/pritamkhose/docker_express)
```sh
sudo docker push pritamkhose/docker-express
```

## Ubuntu get storage space 
```sh
df -h
```

## Reference Link

- [Express js starter generator](http://expressjs.com/en/starter/generator.html) 

- [Express requset object api](https://www.digitalocean.com/community/tutorials/nodejs-req-object-in-expressjs)

- [Docker Install Steps](https://docs.docker.com/engine/install/ubuntu/)

- [Docker NodeJS webapp](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

- [Docker compose NodeJS](https://rollout.io/blog/using-docker-compose-for-nodejs-development/)

- [Docker compose Cheatsheet](https://devhints.io/docker-compose)

- [Docker Cheatsheet](https://dockerlabs.collabnix.com/docker/cheatsheet/)

- [Docker compose Node & MongoDB](https://www.digitalocean.com/community/tutorials/containerizing-a-node-js-application-for-development-with-docker-compose)