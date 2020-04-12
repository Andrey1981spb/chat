FROM tomcat:9.0.31-jdk11-openjdk

ADD target/chat-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war

CMD ["catalina.sh","run"]