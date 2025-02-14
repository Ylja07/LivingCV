FROM node:lts

# Install Angular CLI globally
RUN npm install -g @angular/cli

RUN echo 'root:root' | chpasswd

# Install sudo and create the non-root user
RUN apt-get update && apt-get install -y sudo git

# Create a directory for Git completion files
RUN mkdir -p /usr/share/git/completion && \
    curl -L https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh -o /usr/share/git/completion/git-prompt.sh && \
    curl -L https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash -o /usr/share/git/completion/git-completion.bash


RUN git config --global user.name "YljavS" && git config --global user.email "ylja.van.son@alliander.com"

# # Create a non-root user for a better terminal experience
# RUN useradd -ms /bin/bash devuser
# USER devuser

# COPY .devcontainer/set_shell_prompt.sh /root/set_shell_prompt.sh
# RUN chmod +x /root/set_shell_prompt.sh
# RUN echo "source /root/set_shell_prompt.sh" >> /root/.bashrc

# Set the working directory
WORKDIR /workspace

# Expose port 4200 for ng serve
EXPOSE 4200
