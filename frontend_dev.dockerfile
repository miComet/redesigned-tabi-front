FROM ubuntu:18.04

RUN apt-get update && \
    apt-get install -y nodejs npm tmux git vim curl

RUN npm install -g n
RUN n 12.22.6

RUN npm install --global yarn
RUN git clone 'https://github.com/miComet/redesigned-tabi-front'
RUN cd redesigned-tabi-front && yarn install

ENV LANG C.UTF-8
ENV LC_ALL=C.UTF-8

WORKDIR /project

CMD cd /redesigned-tabi-front && yarn start
