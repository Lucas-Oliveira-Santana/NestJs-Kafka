<h1> Backend Kafka Test </h1>
This challenge was proposed for a backend developer position

## Requirements:

Before start, you'l need install: [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) , [NodeJs](https://nodejs.org/en/download/), [Docker](https://docs.docker.com/engine/install/) , [Docker-compose](https://docs.docker.com/compose/install/)


## Runing Local
To run the project, follow the next steps:

## Clone Repository
```bash
git clone git@github.com:Lucas-Oliveira-Santana/NestJs-Kafka.git

cd NestJs-Kafka
```



 ## Docker up
  ```bash
  sudo docker-compose up
  ```

 ## Run Migrations

 ### Enter the container
   ```bash
  docker exec -it nest_api bash
  ```

 ### Run Migrations
   ```bash
  npm run prisma:migrate
  ```

## Running application
access your browser
```bash
http://localhost:9021/
```

### Create a message
 ```bash
at topics "cart-abandoned'

you can create a message:

{
  "id": 53,
  "items": [
    {
      "id": 152,
      "name": "Produto 2",
      "quantity": 1
    }
  ],
  "customer": {
    "id": 19,
    "email": "fulanooo@email.com",
    "firstName": "Fulano",
    "lastName": "Da Silva",
    "phone": "5527999643944"
  }
}
```

## Get Opportunities By Client
```
route:
http://localhost:3000/opportunities


example:
{
	"id":53
}
```

## Technologies used
- [Typescript](https://www.typescriptlang.org/)
- [NestJs](https://nestjs.com/)
- [Kafka](https://kafka.apache.org/)
- [Docker](https://www.docker.com/), [docker-compose](https://docs.docker.com/compose/)
- [PrismaIO](https://www.prisma.io/)
- [PostgresSQL](https://www.postgresql.org/)

