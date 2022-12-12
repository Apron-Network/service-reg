FROM ubuntu:18.04 as service_reg_builder

ARG FRONT_REPO="https://github.com/Apron-Network/service-reg.git"
ARG FRONT_BRANCH="master"

RUN apt-get update && apt-get install --no-install-recommends -y git gnupg curl ca-certificates

# install nodejs
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install --no-install-recommends -y nodejs && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*
RUN npm install yarn -g

RUN mkdir /builds && cd /builds && git clone -b ${FRONT_BRANCH} ${FRONT_REPO}
WORKDIR /builds/service-reg

RUN YARN_CHECKSUM_BEHAVIOR=update yarn && yarn build

FROM ubuntu
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install curl ca-certificates npm nodejs -y
RUN npm install -g serve

COPY --from=service_reg_builder /builds/service-reg/build /service_reg
