#!/bin/bash

sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mysql/my.cnf

# set the init file
mysqld --init-file="/init.sql"