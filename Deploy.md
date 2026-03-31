# Deployment Guide


- [Guide for our env](#Dev environment EKS)
- [Guide for CMR env](#Dev environment CMR)

## Dev environment 

### Requirements

- docker installed and running
- aws cli installed and configured
- kubectl command line installed

### Command to deploy in dev ENV

**All commands need to be executed in the project root.**

#. Generate Build

```bash
npm run buildWindows
```

#. Generate docker image 

```bash
docker build -t 399883341639.dkr.ecr.us-east-2.amazonaws.com/front_grand_public:tandeem .
```

#. Push image to the ecr registry

```bash
docker push 399883341639.dkr.ecr.us-east-2.amazonaws.com/front_grand_public:tandeem

# Before executing the above command you should authenticate to ECR registry

# The command below needs to be executed at least once in 24 hours.

aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 399883341639.dkr.ecr.us-east-2.amazonaws.com
```

#. Restart pod in cluster to deploy the new docker image

```bash
kubectl rollout restart -n frontend deployment.apps/front-grand-public
```

## # # # # # # # # # # # # #

## CMR environment

### Requirements

- docker installed and running
- aws cli installed and configured
- kubectl command line installed
- Forticlient installed *VPN to Access CMR ENV*

### Command to deploy in CMR ENV

**All commands need to be executed in the project root.**


### **Change backend URL**

#. Change backend url in file *redux/actions/api.js*

```bash
export const BACKEND_URL = "http://172.17.43.10/c";
export const BACKEND_URL_ACHAT = "http://172.17.43.10/f";
```

#. Generate Build

```bash
npm run build
```

#. Generate docker image

```bash
docker build -t registry.seven-app.org/cmr-portail/fron_grand_public:ENV-CMR-DEV .
```

#. Push image to the ecr registry

```bash
docker push registry.seven-app.org/cmr-portail/fron_grand_public:ENV-CMR-DEV 

# Before executing the above command you should authenticate to our registry

docker login registry.seven-app.org 

# Use your gitlab credentials
```
#. Connect to CMR env using forticlient

#. Restart pod in dev cluster to deploy the new docker image

```bash
kubectl rollout restart -n front-end deployment.apps/front-client
```
