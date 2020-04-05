#!/bin/bash
npm run build
ssh root@120.78.177.9 "mkdir /usr/local/nginx/apps"
scp -r ./dist/* root@120.78.177.9:/usr/local/nginx/apps
