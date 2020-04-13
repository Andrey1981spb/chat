                  Simple Chat
                   
1.What is it

Simple Chat (the Product - in the following) is a application for fast on-line communication

2.Software requirement

To be installed: IntelliJ IDEA Ultimate, JDK11, Tomcat (version not lower 9), RabbitMQ,
Docker (version not lower 19.03.5)

3.Installation

The Product may be got from public repository https://github.com/Andrey1981spb/chat 
and then opened in IntelliJ IDEA Ultimate. 

4.  Deployment

There are 2 ways for deployment:

4.1. At localhost.

First establish at application.properties (chat/src/resources/application.properties) 
the value of spring.rabbitmq.host as "localhost",
the value of spring.rabbitmq.port as 61613

Then run application by main-method at ChatApplication.
In any browser enter "http://www.localhost:8080"

4.2. From containers.

While first deployment create docker network by command: 
"docker network create chat_network". Run main-method at ChatApplication for creating 
war-file at target-folder. 

While first and further deployment:
establish at application.properties (chat/src/resources/application.properties) 
the value of spring.rabbitmq.host as "broker",
the value of spring.rabbitmq.port as 5672.
Then run mvn clean and mvn install.
In any browser enter "http://www.localhost:8080"
