#!/bin/bash
filePath="/home/nurzatkhan/NRZ/image.jpg"
url="https://www.thebabyrack.co.uk/img/baby%20white.jpg"

curl \
-o  $filePath \
$url
