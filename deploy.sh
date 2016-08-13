#!/bin/bash
set -e

BRANCH=${TRAVIS_BRANCH:-$(git rev-parse --abbrev-ref HEAD)}

if [[ $BRANCH == 'master' ]]; then
  STAGE="prod"
elif [[ $BRANCH == 'develop' ]]; then
  STAGE="dev"
fi

if [ -z ${STAGE+x} ]; then
  echo "Not deploying changes";
  exit 0;
fi

echo "Deploying from branch $BRANCH to stage $STAGE"

if [ $STAGE == 'prod' ] ; then
  BUILD_TASK="build"
  FIREBASE_PROJECT=garden-aid-production
else
  BUILD_TASK="build:dev"
  FIREBASE_PROJECT=garden-aid-dev
fi

npm run $BUILD_TASK

firebase deploy -P $FIREBASE_PROJECT
