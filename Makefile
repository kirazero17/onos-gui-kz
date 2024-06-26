# SPDX-FileCopyrightText: 2020-present Open Networking Foundation <info@opennetworking.org>
#
# SPDX-License-Identifier: Apache-2.0

.PHONY: build

ONOS_GUI_VERSION := latest
ONOS_PROTOC_VERSION := v1.3.0

build-tools:=$(shell if [ ! -d "./build/build-tools" ]; then cd build && git clone https://github.com/onosproject/build-tools.git; fi)
include ./build/build-tools/make/onf-common.mk

build: # @HELP build the Web GUI and run all validations (default)
build:
	cd web/onos-gui && npx ng build --prod

test: # @HELP run the unit tests and source code validation
test: deps build lint license
	cd web/onos-gui && npx ng test --watch=false

coverage: # @HELP generate unit test coverage data
coverage: deps build license test

deps: # @HELP ensure that the required dependencies are in place
	cd web/onos-gui && NG_CLI_ANALYTICS=false npm install -f

lint: # @HELP run the linters for Typescript source code
	cd web/onos-gui && npx ng lint

protos: # @HELP compile the protobuf files (using protoc-go Docker)
	docker run -it -v `pwd`/..:/go/src/github.com/onosproject \
		-w /go/src/github.com/onosproject/onos-gui \
		--entrypoint build/bin/compile-protos-ts.sh \
		onosproject/protoc-go:${ONOS_PROTOC_VERSION}

onos-gui-docker: # @HELP build onos-gui Docker image
	docker build . -f build/onos-gui/Dockerfile \
		-t logm250/onos-gui:${ONOS_GUI_VERSION}

images: # @HELP build all Docker images
images: build onos-gui-docker

kind: # @HELP build Docker images and add them to the currently configured kind cluster
kind: images
	@if [ `kind get clusters` = '' ]; then echo "no kind cluster found" && exit 1; fi
	kind load docker-image logm250/onos-gui:${ONOS_GUI_VERSION}

all: build images

publish: # @HELP publish version on github and dockerhub
	./build/build-tools/publish-version ${VERSION} onosproject/onos-gui

clean:: # @HELP remove all the build artifacts
	rm -rf ./web/onos-gui/dist

