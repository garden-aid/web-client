#!/bin/bash
set -e

if [[ $TRAVIS_PULL_REQUEST == "true" ]]; then
  echo "Not deploying changes on pull request";
  exit 0;
fi

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
  FIREBASE_PROJECT=garden-aid-production
else
  FIREBASE_PROJECT=garden-aid-dev
fi

echo 'Running build'
npm run build

echo 'Deploying to firebase'

firebase deploy -P $FIREBASE_PROJECT
