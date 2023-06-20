FROM httpd

RUN apt-get update

CMD [ "echo","apache web server" ]