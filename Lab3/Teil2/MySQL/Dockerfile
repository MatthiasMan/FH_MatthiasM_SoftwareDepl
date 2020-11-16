FROM debian:jessie

USER root

# Install requirement
RUN apt-get update 

# Install mysql-server
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server

# Copy the files from directory to container
COPY mysql_secure_install.sh mysql_secure_install.sh
COPY init.sql init.sql
COPY docker-entrypoint.sh docker-entrypoint.sh

# ensure, that there are no secure problems
# It answers the yes/no and pwd questions
RUN ./mysql_secure_install.sh

ENTRYPOINT ./docker-entrypoint.sh

EXPOSE 3306/tcp