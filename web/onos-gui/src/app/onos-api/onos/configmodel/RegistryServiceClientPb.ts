/**
 * @fileoverview gRPC-Web generated client stub for onos.configmodel
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  DeleteModelRequest,
  DeleteModelResponse,
  GetModelRequest,
  GetModelResponse,
  ListModelsRequest,
  ListModelsResponse,
  PushModelRequest,
  PushModelResponse} from './registry_pb';

export class ConfigModelRegistryServiceClient {
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

  methodInfoGetModel = new grpcWeb.MethodDescriptor(
    "GetModel",
    grpcWeb.MethodType.UNARY,
    GetModelRequest,
    GetModelResponse,
    (request: GetModelRequest) => {
      return request.serializeBinary();
    },
    GetModelResponse.deserializeBinary
  );

  getModel(
    request: GetModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: GetModelResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/onos.configmodel.ConfigModelRegistryService/GetModel',
      request,
      metadata || {},
      this.methodInfoGetModel,
      callback);
  }

  methodInfoListModels = new grpcWeb.MethodDescriptor(
    "ListModel",
    grpcWeb.MethodType.UNARY,
    ListModelsRequest,
    ListModelsResponse,
    (request: ListModelsRequest) => {
      return request.serializeBinary();
    },
    ListModelsResponse.deserializeBinary
  );

  listModels(
    request: ListModelsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: ListModelsResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/onos.configmodel.ConfigModelRegistryService/ListModels',
      request,
      metadata || {},
      this.methodInfoListModels,
      callback);
  }

  methodInfoPushModel = new grpcWeb.MethodDescriptor(
    "PushModel",
    grpcWeb.MethodType.UNARY,
    PushModelRequest,
    PushModelResponse,
    (request: PushModelRequest) => {
      return request.serializeBinary();
    },
    PushModelResponse.deserializeBinary
  );

  pushModel(
    request: PushModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: PushModelResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/onos.configmodel.ConfigModelRegistryService/PushModel',
      request,
      metadata || {},
      this.methodInfoPushModel,
      callback);
  }

  methodInfoDeleteModel = new grpcWeb.MethodDescriptor(
    "DeleteModel",
    grpcWeb.MethodType.UNARY,
    DeleteModelRequest,
    DeleteModelResponse,
    (request: DeleteModelRequest) => {
      return request.serializeBinary();
    },
    DeleteModelResponse.deserializeBinary
  );

  deleteModel(
    request: DeleteModelRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: DeleteModelResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/onos.configmodel.ConfigModelRegistryService/DeleteModel',
      request,
      metadata || {},
      this.methodInfoDeleteModel,
      callback);
  }

}

