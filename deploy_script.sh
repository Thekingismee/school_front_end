#!/bin/bash

GREEN='\033[0;32m'  # Green color for success
RED='\033[0;31m'    # Red color for error
NC='\033[0m'        # No color (reset)

# Function to print success message
print_success() {
    echo -e "${GREEN}CMR Portal deployed in dev environment successfully.${NC}"
}

# Function to print error message
print_error() {
    echo -e "${RED}Error executing the script.${NC}"
}



# Function to check if Docker is running and start if not
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        echo "Docker daemon is not running. Starting Docker..."
        open -a Docker
        echo "Docker started."
    else
        echo "Docker daemon is already running."
    fi
}

# Check and start Docker if not running
check_docker || { print_error; exit 1; }

# Generate Build
npm run build || { print_error; exit 1; }

# Generate docker image
docker build -t 399883341639.dkr.ecr.us-east-2.amazonaws.com/front_grand_public . || { print_error; exit 1; }

# Authenticate to ECR registry (valid for 24 hours)
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 399883341639.dkr.ecr.us-east-2.amazonaws.com  || { print_error; exit 1; }

# Push image to the ECR registry
docker push 399883341639.dkr.ecr.us-east-2.amazonaws.com/front_grand_public || { print_error; exit 1; }

# Restart pod in cluster to deploy the new docker image
kubectl rollout restart -n frontend deployment.apps/front-grand-public || { print_error; exit 1; }

print_success