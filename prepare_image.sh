#!/bin/bash

GREEN='\033[0;32m'  # Green color for success
RED='\033[0;31m'    # Red color for error
NC='\033[0m'        # No color (reset)

# Function to print success message
print_success() {
    echo -e "${GREEN}Script executed successfully.${NC}"
}

# Function to print error message
print_error() {
    echo -e "${RED}Error executing the script.${NC}"
}


# Function to prompt for backend URL change
prompt_change_backend() {
    echo "Please change the backend URL in redux/actions/api.js and press Enter to continue."
    read -p "Press Enter when ready to continue..."
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

docker_login() {
    echo "Logging in to Docker registry..."
    echo "user_config" | docker login --username "user_config" --password-stdin registry.seven-app.org
}
# Check and start Docker if not running
check_docker || { print_error; exit 1; }

# Function to build image after backend URL change
build_image() {
    # Navigate to the project root directory

    # Prompt to change backend URL
    prompt_change_backend

    # Generate Build
    npm run build || { print_error; exit 1; }

    # Login to Docker registry
    #docker_login || { print_error; exit 1; }

    # Generate docker image
    docker build -t registry.seven-app.org/cmr-portail/fron_grand_public:ENV-CMR-DEV . || { print_error; exit 1; }

    # Push image to the registry
    docker push registry.seven-app.org/cmr-portail/fron_grand_public:ENV-CMR-DEV || { print_error; exit 1; }

    print_success
}

# Execute the build_image function
build_image

