#!/bin/bash -x
STR="Hello World!"
echo $STR
#ls -al
cd ~/git/bootstrapSample
git pull
sudo cp -R html/* /usr/share/tomcat8/webapps/sample2/
sudo chown -R tomcat:tomcat /usr/share/tomcat8/webapps/sample2/*
cd ~

