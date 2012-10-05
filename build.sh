#!/usr/bin/env bash
if ! [ -e output2/.git ] ; then
  rm -rf output2
  git clone git@github.com:DanielHeath/bedroll-build.git output2
fi
rm -rf output
bundle exec bonsai --repot
cp -r output2/.git output/
cd output
git add -A .
git commit -m "Build"
git push origin master
cd ..
rm -rf output2/.git
mv output/.git output2/

