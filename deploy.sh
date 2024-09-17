#!/bin/sh

echo "Switching to branch main"
git checkout main

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP dist/ earthclaninfo@kidsmath.sarahzw.com:/var/www/kidsmath.sarahzw.com/
echo "Deployment complete"