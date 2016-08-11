#!/bin/bash
set -e

STAGE=${STAGE:-dev}

echo 'Installing dependencies'
npm i

echo 'Running tests'
npm test

echo "Deploying to stage $STAGE"

if [ $STAGE == 'prod' ] ; then
  npm run build
  firebase deploy -P garden-aid-production
else
  npm run build:dev
  firebase deploy -P garden-aid-dev
fi
