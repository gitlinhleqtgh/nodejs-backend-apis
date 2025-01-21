# Use the official MongoDB image as the base
FROM mongo:latest

# Set environment variables for initial database and user
ENV MONGO_INITDB_ROOT_USERNAME=${MONGO_USER}
ENV MONGO_INITDB_ROOT_PASSWORD=${MONGO_PASSWORD}

# Expose MongoDB's default port
EXPOSE 27017
