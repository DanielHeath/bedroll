#!/usr/bin/env bash
if ! [ -e output/.git ] ; then
  rm -rf output
  git clone git@github.com:DanielHeath/bedroll-build.git output
fi
bundle exec bonsai --repot
cd output
git add -A .
git commit -m "Build"
git push origin master
cd ..

