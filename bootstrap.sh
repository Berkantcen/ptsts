#!/bin/bash

if [ "$APP_ENV" = "production" ]
then
    cp .env.prod .env.production
elif [ "$APP_ENV" = "development" ]
then
    cp .env.dev .env.production
else
    echo "APP_ENV not set"
    exit 1
fi

exec "$@"
