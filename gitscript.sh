#!/bin/bash

git add *
read -p "What are you committing?" response
git commit -m {response}
git push origin master
