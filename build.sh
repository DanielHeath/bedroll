#!/usr/bin/env bash
bundle exec bonsai repot
cd output
git add -A .
git commit -m "Build"
git push origin master
cd ..

