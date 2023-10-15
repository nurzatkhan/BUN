#!/bin/bash
filename="/home/nurzatkhan/NRZ/curl/formPost/image.jpg"
url="http://localhost:3000"
#curl --help

#curl \
#  -L $url"path" \
#  -X POST \
#  -F 'file=@"/home/nurzatkhan/NRZ/curl/formPost/image.jpg"' \
#  -v 

curl \
  -L $url"/test" \
  -X POST \
  -v \
  -d '{ "key1":"value1", "key2":"value2" }'\
  -H "Content-Type: application/json" \  
