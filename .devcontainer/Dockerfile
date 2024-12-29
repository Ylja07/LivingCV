FROM node:lts

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install sudo and create the non-root user
RUN apt-get update && apt-get install -y sudo && \
    useradd -ms /bin/bash devuser && \
    echo "devuser:docker" | chpasswd && \
    adduser devuser sudo

# Switch to the non-root user
USER devuser

# # Create a non-root user for a better terminal experience
# RUN useradd -ms /bin/bash devuser
# USER devuser

# Set the working directory
WORKDIR /workspace

# Expose port 4200 for ng serve
EXPOSE 4200
