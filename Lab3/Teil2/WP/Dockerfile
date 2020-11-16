FROM debian:jessie

# Install requirement
RUN apt-get update 

# Install wordpress
RUN apt-get install wordpress -y

RUN mv /var/www/html/index.html /var/www/html/index.bak
RUN mv /usr/share/wordpress/wp-config-sample.php /etc/wordpress/config-localhost.php
RUN cp -R /usr/share/wordpress/* /var/www/html/

COPY docker-entrypoint.sh docker-entrypoint.sh

ENTRYPOINT ./docker-entrypoint.sh

EXPOSE 80/tcp