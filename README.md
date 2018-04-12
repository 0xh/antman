# Antman - Instagram bot (backend)
Instagram multi account bot based on a network of microservices.
There is an API [client](https://github.com/blueonrails/antman-client) already made. 

----

**Dependencies**
 - MongoDB
 - Rabbitmq

----

**Getting started**
```
  - npm install
  - npm install fuge -g 
  - fuge shell fuge/fuge-dev.yml
  - fuge > start all
  ```
  
Now there is up some services:
  - API less-REST, localhost:9000 [(see client)](https://github.com/blueonrails/antman-client)
  - Admin panel, localhost:8000 
----
**Acknowledgments**
 - https://github.com/moleculerjs/moleculer
 - https://github.com/huttarichard/instagram-private-api

**End User License Agreement (EULA)**

  1) *You will not use* this repository for sending mass spam or any other malicious activity
  2) *We / You will not support* anyone who is violating this EULA conditions
  3) *Repository is just for learning / personal purposes* thus should not be part of any 
  	service available on the Internet that is trying to do any malicious activity (mass bulk request, spam etc.)
