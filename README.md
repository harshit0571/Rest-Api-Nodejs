# How to Build Rest Api using Nodejs and Docker


## Technical Stack

- Nodejs , express, mongodb
- Docker

## How it works?

it is a rest api that can create , update , delete and list all the subscribers

## Prerequisite

- Install Docker

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


