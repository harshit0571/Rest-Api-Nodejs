# How to Build RESTAPI using Node, MongoDB and Docker


## Technical Stack

- Nodejs
- Express
- MongoDB
- Docker

## How it works?

It is a REST API that creates , updates , delete and list all the subscribers

<p align="center">
  <img src="https://user-images.githubusercontent.com/62325935/184538869-f0eba634-7b21-447e-99ec-984d0984c9f3.jpeg" width="350" title="hover text">
</p>

## Prerequisite

- Install Docker Desktop's

## Step1 - Clone the repository

```
 git clone https://github.com/harshit0571/Rest-Api-Nodejs.git
```

## Step2 - Change directory to Rest-Api-Nodejs

```
 cd Rest-Api-Nodejs
```

## Step3 - Create docker image

```
docker build -t rest .
```

## Step4 - Run it on server

```
 docker run -p 3000:3000 rest
```


