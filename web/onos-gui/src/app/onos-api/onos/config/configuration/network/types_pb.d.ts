// Code generated by GENERATOR. DO NOT EDIT.

import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as gogoproto_gogo_pb from '../../../../gogoproto/gogo_pb';
import * as onos_config_configuration_types_pb from '../types_pb';

export class NetworkConfiguration extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIndex(): number;
  setIndex(value: number): void;

  getRevision(): number;
  setRevision(value: number): void;

  getStatus(): onos_config_configuration_types_pb.Status | undefined;
  setStatus(value?: onos_config_configuration_types_pb.Status): void;
  hasStatus(): boolean;
  clearStatus(): void;

  getRetention(): onos_config_configuration_types_pb.RetentionOptions | undefined;
  setRetention(value?: onos_config_configuration_types_pb.RetentionOptions): void;
  hasRetention(): boolean;
  clearRetention(): void;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreated(): boolean;
  clearCreated(): void;

  getUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdated(): boolean;
  clearUpdated(): void;

  getRefsList(): Array<DeviceConfigurationRef>;
  setRefsList(value: Array<DeviceConfigurationRef>): void;
  clearRefsList(): void;
  addRefs(value?: DeviceConfigurationRef, index?: number): DeviceConfigurationRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkConfiguration): NetworkConfiguration.AsObject;
  static serializeBinaryToWriter(message: NetworkConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkConfiguration;
  static deserializeBinaryFromReader(message: NetworkConfiguration, reader: jspb.BinaryReader): NetworkConfiguration;
}

export namespace NetworkConfiguration {
  export type AsObject = {
    id: string,
    index: number,
    revision: number,
    status?: onos_config_configuration_types_pb.Status.AsObject,
    retention?: onos_config_configuration_types_pb.RetentionOptions.AsObject,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    refsList: Array<DeviceConfigurationRef.AsObject>,
  }
}

export class DeviceConfigurationRef extends jspb.Message {
  getDeviceConfigurationId(): string;
  setDeviceConfigurationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceConfigurationRef.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceConfigurationRef): DeviceConfigurationRef.AsObject;
  static serializeBinaryToWriter(message: DeviceConfigurationRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceConfigurationRef;
  static deserializeBinaryFromReader(message: DeviceConfigurationRef, reader: jspb.BinaryReader): DeviceConfigurationRef;
}

export namespace DeviceConfigurationRef {
  export type AsObject = {
    deviceConfigurationId: string,
  }
}

