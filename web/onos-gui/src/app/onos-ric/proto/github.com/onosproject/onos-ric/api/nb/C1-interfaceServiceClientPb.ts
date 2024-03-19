/**
 * @fileoverview gRPC-Web generated client stub for interface.c1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  HandOverRequest,
  HandOverResponse,
  RadioPowerRequest,
  RadioPowerResponse,
  StationInfo,
  StationLinkInfo,
  StationLinkListRequest,
  StationListRequest,
  UEInfo,
  UELinkInfo,
  UELinkListRequest,
  UEListRequest} from './c1-interface_pb';

export class C1InterfaceServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListStations = new grpcWeb.MethodDescriptor(
    "ListStations",
    grpcWeb.MethodType.UNARY,
    StationListRequest,
    StationInfo,
    (request: StationListRequest) => {
      return request.serializeBinary();
    },
    StationInfo.deserializeBinary
  );

  listStations(
    request: StationListRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/interface.c1.C1InterfaceService/ListStations',
      request,
      metadata || {},
      this.methodInfoListStations);
  }

  methodInfoListStationLinks = new grpcWeb.MethodDescriptor(
    "ListStLinks",
    grpcWeb.MethodType.UNARY,
    StationLinkListRequest,
    StationLinkInfo,
    (request: StationLinkListRequest) => {
      return request.serializeBinary();
    },
    StationLinkInfo.deserializeBinary
  );

  listStationLinks(
    request: StationLinkListRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/interface.c1.C1InterfaceService/ListStationLinks',
      request,
      metadata || {},
      this.methodInfoListStationLinks);
  }

  methodInfoListUELinks = new grpcWeb.MethodDescriptor(
    "ListUELs",
    grpcWeb.MethodType.UNARY,
    UELinkListRequest,
    UELinkInfo,
    (request: UELinkListRequest) => {
      return request.serializeBinary();
    },
    UELinkInfo.deserializeBinary
  );

  listUELinks(
    request: UELinkListRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/interface.c1.C1InterfaceService/ListUELinks',
      request,
      metadata || {},
      this.methodInfoListUELinks);
  }

  methodInfoListUEs = new grpcWeb.MethodDescriptor(
    "ListUEs",
    grpcWeb.MethodType.UNARY,
    UEListRequest,
    UEInfo,
    (request: UEListRequest) => {
      return request.serializeBinary();
    },
    UEInfo.deserializeBinary
  );

  listUEs(
    request: UEListRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/interface.c1.C1InterfaceService/ListUEs',
      request,
      metadata || {},
      this.methodInfoListUEs);
  }

  methodInfoTriggerHandOver = new grpcWeb.MethodDescriptor(
    "Handover",
    grpcWeb.MethodType.UNARY,
    HandOverRequest,
    HandOverResponse,
    (request: HandOverRequest) => {
      return request.serializeBinary();
    },
    HandOverResponse.deserializeBinary
  );

  triggerHandOver(
    request: HandOverRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: HandOverResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/interface.c1.C1InterfaceService/TriggerHandOver',
      request,
      metadata || {},
      this.methodInfoTriggerHandOver,
      callback);
  }

  methodInfoSetRadioPower = new grpcWeb.MethodDescriptor(
    "SetRadioPower",
    grpcWeb.MethodType.UNARY,
    RadioPowerRequest,
    RadioPowerResponse,
    (request: RadioPowerRequest) => {
      return request.serializeBinary();
    },
    RadioPowerResponse.deserializeBinary
  );

  setRadioPower(
    request: RadioPowerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: RadioPowerResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/interface.c1.C1InterfaceService/SetRadioPower',
      request,
      metadata || {},
      this.methodInfoSetRadioPower,
      callback);
  }

}

