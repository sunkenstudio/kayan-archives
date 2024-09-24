#!/bin/bash
cd kayan-archives
git pull
docker-compose down && docker-compose pull && docker-compose up -d