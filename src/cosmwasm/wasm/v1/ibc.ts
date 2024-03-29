// Code generated by protoc-gen-as. DO NOT EDIT.
// versions:
// 	 protoc-gen-as v0.3.0-alpha.2
// 	 protoc        v3.20.1
// source: cosmwasm/wasm/v1/ibc.ts

import { Writer, Reader, Protobuf } from "as-proto";

export class MsgIBCSend {
  static encode(message: MsgIBCSend, writer: Writer): void {
    writer.uint32(18);
    writer.string(message.channel);

    writer.uint32(32);
    writer.uint64(message.timeout_height);

    writer.uint32(40);
    writer.uint64(message.timeout_timestamp);

    writer.uint32(50);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): MsgIBCSend {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgIBCSend();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;

        case 4:
          message.timeout_height = reader.uint64();
          break;

        case 5:
          message.timeout_timestamp = reader.uint64();
          break;

        case 6:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  channel: string;
  timeout_height: u64;
  timeout_timestamp: u64;
  data: Uint8Array;

  constructor(channel: string = "", timeout_height: u64 = 0, timeout_timestamp: u64 = 0, data: Uint8Array = new Uint8Array(0)) {
    this.channel = channel;
    this.timeout_height = timeout_height;
    this.timeout_timestamp = timeout_timestamp;
    this.data = data;
  }
}

export function decodeMsgIBCSend(a: Uint8Array): MsgIBCSend {
  return Protobuf.decode<MsgIBCSend>(a, MsgIBCSend.decode);
}

export class MsgIBCCloseChannel {
  static encode(message: MsgIBCCloseChannel, writer: Writer): void {
    writer.uint32(18);
    writer.string(message.channel);
  }

  static decode(reader: Reader, length: i32): MsgIBCCloseChannel {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgIBCCloseChannel();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  channel: string;

  constructor(channel: string = "") {
    this.channel = channel;
  }
}

export function decodeMsgIBCCloseChannel(a: Uint8Array): MsgIBCCloseChannel {
  return Protobuf.decode<MsgIBCCloseChannel>(a, MsgIBCCloseChannel.decode);
}
