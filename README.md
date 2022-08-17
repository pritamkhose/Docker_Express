# Docker_Express
 Docker container express app, which can easily be deployed to anywhare.

## Running App Locally

Make sure you have Node JS.

```sh
git clone https://github.com/pritamkhose/Docker_Express.git
cd Docker_Express
npm install
npm start


npm install -g nodemon
nodemon
or
npm start-dev

```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## To create Project.

```sh
mkdir Docker_Express
cd Docker_Express
npm install -g express-generator

express --view=pug Docker_Express
```

## To install testing dev dependencies.

```sh
npm install --save-dev babel-cli babel-preset-env jest supertest superagent
npm install --save-dev chai chai-http mocha
```

## To run jest testing by `npm run test`

## To run chai & mocha testing by `npm run test-mocha`


## To get Jest with HTML report `npm run test-CI` within test-report.html

Install dependencies : `npm i jest-html-reporter --save-dev` and [Read more here](https://medium.com/@biswa8998/jest-with-html-report-a884b08d6635)

## To get test code coverage with HTML report `npm run test -- --coverage`

it will create html report file at `.\coverage\lcov-report\index.html`


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

## Deploy Docker image to Azure
- [Deploy dockerhub image to azure docker create app](https://faun.pub/deploying-a-docker-container-in-azure-56249038603d)

- [Deploy dockerhub image to azure docker create app](https://code.visualstudio.com/docs/containers/app-service)


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

## Testing Link
- [Testing frameworks compare](https://blog.logrocket.com/the-best-unit-testing-frameworks-for-node-js/)

- [Example 1](https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/)

- [Example 2](https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6)

- [Chai Example](https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai)

- [Chaijs](https://www.chaijs.com/guide/)

- [Mochajs](https://mochajs.org/#getting-started)

- [Jest](https://jestjs.io/docs/testing-frameworks)

- [Unit and integration testing](https://blog.logrocket.com/unit-and-integration-testing-for-node-js-apps/)

- [Example mocha and chai](https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai)
