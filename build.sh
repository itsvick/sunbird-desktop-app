#!/bin/bash

#Build 
cd src
export NODE_OPTIONS=--max_old_space_size=3012
npm install --unsafe-perm=true --allow-root
npm install
npm run build
cd client
npm install
npm run prod 
cd ..
npm run build-resource-bundles
rm -rf temp client resourcebundles node_modules
cd ..
tar -czvf src.tar.gz src

