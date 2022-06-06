// Code generated by protoc-gen-as. DO NOT EDIT.
// versions:
// 	 protoc-gen-as v0.3.0-alpha.3
// 	 protoc        v3.20.1
// source: ibc/core/connection/v1/tx.ts

import { Writer, Reader, Protobuf } from "as-proto";
import { Counterparty, Version } from "./connection";
import { google } from "../../../../google";
import { client } from "../../client";

export class MsgConnectionOpenInit {
  static encode(message: MsgConnectionOpenInit, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.client_id);

    const counterparty_ = message.counterparty;
    if (counterparty_ !== null) {
      writer.uint32(18);
      writer.fork();
      Counterparty.encode(counterparty_, writer);
      writer.ldelim();
    }

    const version_ = message.version;
    if (version_ !== null) {
      writer.uint32(26);
      writer.fork();
      Version.encode(version_, writer);
      writer.ldelim();
    }

    writer.uint32(32);
    writer.uint64(message.delay_period);

    writer.uint32(42);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgConnectionOpenInit {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgConnectionOpenInit();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;

        case 4:
          message.delay_period = reader.uint64();
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  client_id: string;
  counterparty: Counterparty | null;
  version: Version | null;
  delay_period: u64;
  signer: string;

  constructor(
    client_id: string = "",
    counterparty: Counterparty | null = null,
    version: Version | null = null,
    delay_period: u64 = 0,
    signer: string = ""
  ) {
    this.client_id = client_id;
    this.counterparty = counterparty;
    this.version = version;
    this.delay_period = delay_period;
    this.signer = signer;
  }
}

export function decodeMsgConnectionOpenInit(a: Uint8Array): MsgConnectionOpenInit {
  return Protobuf.decode<MsgConnectionOpenInit>(a, MsgConnectionOpenInit.decode);
}

@unmanaged
export class MsgConnectionOpenInitResponse {
  static encode(message: MsgConnectionOpenInitResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgConnectionOpenInitResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgConnectionOpenInitResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function decodeMsgConnectionOpenInitResponse(a: Uint8Array): MsgConnectionOpenInitResponse {
  return Protobuf.decode<MsgConnectionOpenInitResponse>(a, MsgConnectionOpenInitResponse.decode);
}

export class MsgConnectionOpenTry {
  static encode(message: MsgConnectionOpenTry, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.client_id);

    writer.uint32(18);
    writer.string(message.previous_connection_id);

    const client_state_ = message.client_state;
    if (client_state_ !== null) {
      writer.uint32(26);
      writer.fork();
      google.protobuf.Any.encode(client_state_, writer);
      writer.ldelim();
    }

    const counterparty_ = message.counterparty;
    if (counterparty_ !== null) {
      writer.uint32(34);
      writer.fork();
      Counterparty.encode(counterparty_, writer);
      writer.ldelim();
    }

    writer.uint32(40);
    writer.uint64(message.delay_period);

    const counterparty_versions_ = message.counterparty_versions;
    for (let i = 0; i < counterparty_versions_.length; ++i) {
      writer.uint32(50);
      writer.fork();
      Version.encode(counterparty_versions_[i], writer);
      writer.ldelim();
    }

    const proof_height_ = message.proof_height;
    if (proof_height_ !== null) {
      writer.uint32(58);
      writer.fork();
      client.v1.Height.encode(proof_height_, writer);
      writer.ldelim();
    }

    writer.uint32(66);
    writer.bytes(message.proof_init);

    writer.uint32(74);
    writer.bytes(message.proof_client);

    writer.uint32(82);
    writer.bytes(message.proof_consensus);

    const consensus_height_ = message.consensus_height;
    if (consensus_height_ !== null) {
      writer.uint32(90);
      writer.fork();
      client.v1.Height.encode(consensus_height_, writer);
      writer.ldelim();
    }

    writer.uint32(98);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgConnectionOpenTry {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgConnectionOpenTry();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.previous_connection_id = reader.string();
          break;

        case 3:
          message.client_state = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 5:
          message.delay_period = reader.uint64();
          break;

        case 6:
          message.counterparty_versions.push(Version.decode(reader, reader.uint32()));
          break;

        case 7:
          message.proof_height = client.v1.Height.decode(reader, reader.uint32());
          break;

        case 8:
          message.proof_init = reader.bytes();
          break;

        case 9:
          message.proof_client = reader.bytes();
          break;

        case 10:
          message.proof_consensus = reader.bytes();
          break;

        case 11:
          message.consensus_height = client.v1.Height.decode(reader, reader.uint32());
          break;

        case 12:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  client_id: string;
  previous_connection_id: string;
  client_state: google.protobuf.Any | null;
  counterparty: Counterparty | null;
  delay_period: u64;
  counterparty_versions: Array<Version>;
  proof_height: client.v1.Height | null;
  proof_init: Uint8Array;
  proof_client: Uint8Array;
  proof_consensus: Uint8Array;
  consensus_height: client.v1.Height | null;
  signer: string;

  constructor(
    client_id: string = "",
    previous_connection_id: string = "",
    client_state: google.protobuf.Any | null = null,
    counterparty: Counterparty | null = null,
    delay_period: u64 = 0,
    counterparty_versions: Array<Version> = [],
    proof_height: client.v1.Height | null = null,
    proof_init: Uint8Array = new Uint8Array(0),
    proof_client: Uint8Array = new Uint8Array(0),
    proof_consensus: Uint8Array = new Uint8Array(0),
    consensus_height: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.client_id = client_id;
    this.previous_connection_id = previous_connection_id;
    this.client_state = client_state;
    this.counterparty = counterparty;
    this.delay_period = delay_period;
    this.counterparty_versions = counterparty_versions;
    this.proof_height = proof_height;
    this.proof_init = proof_init;
    this.proof_client = proof_client;
    this.proof_consensus = proof_consensus;
    this.consensus_height = consensus_height;
    this.signer = signer;
  }
}

export function decodeMsgConnectionOpenTry(a: Uint8Array): MsgConnectionOpenTry {
  return Protobuf.decode<MsgConnectionOpenTry>(a, MsgConnectionOpenTry.decode);
}

@unmanaged
export class MsgConnectionOpenTryResponse {
  static encode(message: MsgConnectionOpenTryResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgConnectionOpenTryResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgConnectionOpenTryResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function decodeMsgConnectionOpenTryResponse(a: Uint8Array): MsgConnectionOpenTryResponse {
  return Protobuf.decode<MsgConnectionOpenTryResponse>(a, MsgConnectionOpenTryResponse.decode);
}

export class MsgConnectionOpenAck {
  static encode(message: MsgConnectionOpenAck, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.connection_id);

    writer.uint32(18);
    writer.string(message.counterparty_connection_id);

    const version_ = message.version;
    if (version_ !== null) {
      writer.uint32(26);
      writer.fork();
      Version.encode(version_, writer);
      writer.ldelim();
    }

    const client_state_ = message.client_state;
    if (client_state_ !== null) {
      writer.uint32(34);
      writer.fork();
      google.protobuf.Any.encode(client_state_, writer);
      writer.ldelim();
    }

    const proof_height_ = message.proof_height;
    if (proof_height_ !== null) {
      writer.uint32(42);
      writer.fork();
      client.v1.Height.encode(proof_height_, writer);
      writer.ldelim();
    }

    writer.uint32(50);
    writer.bytes(message.proof_try);

    writer.uint32(58);
    writer.bytes(message.proof_client);

    writer.uint32(66);
    writer.bytes(message.proof_consensus);

    const consensus_height_ = message.consensus_height;
    if (consensus_height_ !== null) {
      writer.uint32(74);
      writer.fork();
      client.v1.Height.encode(consensus_height_, writer);
      writer.ldelim();
    }

    writer.uint32(82);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgConnectionOpenAck {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgConnectionOpenAck();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;

        case 2:
          message.counterparty_connection_id = reader.string();
          break;

        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;

        case 4:
          message.client_state = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.proof_height = client.v1.Height.decode(reader, reader.uint32());
          break;

        case 6:
          message.proof_try = reader.bytes();
          break;

        case 7:
          message.proof_client = reader.bytes();
          break;

        case 8:
          message.proof_consensus = reader.bytes();
          break;

        case 9:
          message.consensus_height = client.v1.Height.decode(reader, reader.uint32());
          break;

        case 10:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  connection_id: string;
  counterparty_connection_id: string;
  version: Version | null;
  client_state: google.protobuf.Any | null;
  proof_height: client.v1.Height | null;
  proof_try: Uint8Array;
  proof_client: Uint8Array;
  proof_consensus: Uint8Array;
  consensus_height: client.v1.Height | null;
  signer: string;

  constructor(
    connection_id: string = "",
    counterparty_connection_id: string = "",
    version: Version | null = null,
    client_state: google.protobuf.Any | null = null,
    proof_height: client.v1.Height | null = null,
    proof_try: Uint8Array = new Uint8Array(0),
    proof_client: Uint8Array = new Uint8Array(0),
    proof_consensus: Uint8Array = new Uint8Array(0),
    consensus_height: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.connection_id = connection_id;
    this.counterparty_connection_id = counterparty_connection_id;
    this.version = version;
    this.client_state = client_state;
    this.proof_height = proof_height;
    this.proof_try = proof_try;
    this.proof_client = proof_client;
    this.proof_consensus = proof_consensus;
    this.consensus_height = consensus_height;
    this.signer = signer;
  }
}

export function decodeMsgConnectionOpenAck(a: Uint8Array): MsgConnectionOpenAck {
  return Protobuf.decode<MsgConnectionOpenAck>(a, MsgConnectionOpenAck.decode);
}

@unmanaged
export class MsgConnectionOpenAckResponse {
  static encode(message: MsgConnectionOpenAckResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgConnectionOpenAckResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgConnectionOpenAckResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function decodeMsgConnectionOpenAckResponse(a: Uint8Array): MsgConnectionOpenAckResponse {
  return Protobuf.decode<MsgConnectionOpenAckResponse>(a, MsgConnectionOpenAckResponse.decode);
}

export class MsgConnectionOpenConfirm {
  static encode(message: MsgConnectionOpenConfirm, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.connection_id);

    writer.uint32(18);
    writer.bytes(message.proof_ack);

    const proof_height_ = message.proof_height;
    if (proof_height_ !== null) {
      writer.uint32(26);
      writer.fork();
      client.v1.Height.encode(proof_height_, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgConnectionOpenConfirm {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgConnectionOpenConfirm();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;

        case 2:
          message.proof_ack = reader.bytes();
          break;

        case 3:
          message.proof_height = client.v1.Height.decode(reader, reader.uint32());
          break;

        case 4:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  connection_id: string;
  proof_ack: Uint8Array;
  proof_height: client.v1.Height | null;
  signer: string;

  constructor(
    connection_id: string = "",
    proof_ack: Uint8Array = new Uint8Array(0),
    proof_height: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.connection_id = connection_id;
    this.proof_ack = proof_ack;
    this.proof_height = proof_height;
    this.signer = signer;
  }
}

export function decodeMsgConnectionOpenConfirm(a: Uint8Array): MsgConnectionOpenConfirm {
  return Protobuf.decode<MsgConnectionOpenConfirm>(a, MsgConnectionOpenConfirm.decode);
}

@unmanaged
export class MsgConnectionOpenConfirmResponse {
  static encode(message: MsgConnectionOpenConfirmResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgConnectionOpenConfirmResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgConnectionOpenConfirmResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function decodeMsgConnectionOpenConfirmResponse(a: Uint8Array): MsgConnectionOpenConfirmResponse {
  return Protobuf.decode<MsgConnectionOpenConfirmResponse>(a, MsgConnectionOpenConfirmResponse.decode);
}
