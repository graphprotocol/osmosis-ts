import { Writer, Reader, Protobuf } from "as-proto";
import { google } from "../../../../google";

export class MsgCreateClient {
  static encode(message: MsgCreateClient, writer: Writer): void {
    const client_state = message.client_state;
    if (client_state !== null) {
      writer.uint32(10);
      writer.fork();
      google.protobuf.Any.encode(client_state, writer);
      writer.ldelim();
    }

    const consensus_state = message.consensus_state;
    if (consensus_state !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Any.encode(consensus_state, writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgCreateClient {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgCreateClient();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_state = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.consensus_state = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  client_state: google.protobuf.Any | null;
  consensus_state: google.protobuf.Any | null;
  signer: string;

  constructor(
    client_state: google.protobuf.Any | null = null,
    consensus_state: google.protobuf.Any | null = null,
    signer: string = ""
  ) {
    this.client_state = client_state;
    this.consensus_state = consensus_state;
    this.signer = signer;
  }
}

export function decodeMsgCreateClient(a: Uint8Array): MsgCreateClient {
  return Protobuf.decode<MsgCreateClient>(a, MsgCreateClient.decode);
}

@unmanaged
export class MsgCreateClientResponse {
  static encode(message: MsgCreateClientResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgCreateClientResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgCreateClientResponse();

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

export function decodeMsgCreateClientResponse(a: Uint8Array): MsgCreateClientResponse {
  return Protobuf.decode<MsgCreateClientResponse>(a, MsgCreateClientResponse.decode);
}

export class MsgUpdateClient {
  static encode(message: MsgUpdateClient, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.client_id);

    const header = message.header;
    if (header !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Any.encode(header, writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgUpdateClient {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgUpdateClient();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.header = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        case 3:
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
  header: google.protobuf.Any | null;
  signer: string;

  constructor(client_id: string = "", header: google.protobuf.Any | null = null, signer: string = "") {
    this.client_id = client_id;
    this.header = header;
    this.signer = signer;
  }
}

export function decodeMsgUpdateClient(a: Uint8Array): MsgUpdateClient {
  return Protobuf.decode<MsgUpdateClient>(a, MsgUpdateClient.decode);
}

@unmanaged
export class MsgUpdateClientResponse {
  static encode(message: MsgUpdateClientResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgUpdateClientResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgUpdateClientResponse();

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

export function decodeMsgUpdateClientResponse(a: Uint8Array): MsgUpdateClientResponse {
  return Protobuf.decode<MsgUpdateClientResponse>(a, MsgUpdateClientResponse.decode);
}

export class MsgUpgradeClient {
  static encode(message: MsgUpgradeClient, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.client_id);

    const client_state = message.client_state;
    if (client_state !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Any.encode(client_state, writer);
      writer.ldelim();
    }

    const consensus_state = message.consensus_state;
    if (consensus_state !== null) {
      writer.uint32(26);
      writer.fork();
      google.protobuf.Any.encode(consensus_state, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.bytes(message.proof_upgrade_client);

    writer.uint32(42);
    writer.bytes(message.proof_upgrade_consensus_state);

    writer.uint32(50);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgUpgradeClient {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgUpgradeClient();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.client_state = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.consensus_state = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.proof_upgrade_client = reader.bytes();
          break;

        case 5:
          message.proof_upgrade_consensus_state = reader.bytes();
          break;

        case 6:
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
  client_state: google.protobuf.Any | null;
  consensus_state: google.protobuf.Any | null;
  proof_upgrade_client: Uint8Array;
  proof_upgrade_consensus_state: Uint8Array;
  signer: string;

  constructor(
    client_id: string = "",
    client_state: google.protobuf.Any | null = null,
    consensus_state: google.protobuf.Any | null = null,
    proof_upgrade_client: Uint8Array = new Uint8Array(0),
    proof_upgrade_consensus_state: Uint8Array = new Uint8Array(0),
    signer: string = ""
  ) {
    this.client_id = client_id;
    this.client_state = client_state;
    this.consensus_state = consensus_state;
    this.proof_upgrade_client = proof_upgrade_client;
    this.proof_upgrade_consensus_state = proof_upgrade_consensus_state;
    this.signer = signer;
  }
}

export function decodeMsgUpgradeClient(a: Uint8Array): MsgUpgradeClient {
  return Protobuf.decode<MsgUpgradeClient>(a, MsgUpgradeClient.decode);
}

@unmanaged
export class MsgUpgradeClientResponse {
  static encode(message: MsgUpgradeClientResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgUpgradeClientResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgUpgradeClientResponse();

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

export function decodeMsgUpgradeClientResponse(a: Uint8Array): MsgUpgradeClientResponse {
  return Protobuf.decode<MsgUpgradeClientResponse>(a, MsgUpgradeClientResponse.decode);
}

export class MsgSubmitMisbehaviour {
  static encode(message: MsgSubmitMisbehaviour, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.client_id);

    const misbehaviour = message.misbehaviour;
    if (misbehaviour !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Any.encode(misbehaviour, writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgSubmitMisbehaviour {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSubmitMisbehaviour();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.misbehaviour = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        case 3:
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
  misbehaviour: google.protobuf.Any | null;
  signer: string;

  constructor(client_id: string = "", misbehaviour: google.protobuf.Any | null = null, signer: string = "") {
    this.client_id = client_id;
    this.misbehaviour = misbehaviour;
    this.signer = signer;
  }
}

export function decodeMsgSubmitMisbehaviour(a: Uint8Array): MsgSubmitMisbehaviour {
  return Protobuf.decode<MsgSubmitMisbehaviour>(a, MsgSubmitMisbehaviour.decode);
}

@unmanaged
export class MsgSubmitMisbehaviourResponse {
  static encode(message: MsgSubmitMisbehaviourResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgSubmitMisbehaviourResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSubmitMisbehaviourResponse();

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

export function decodeMsgSubmitMisbehaviourResponse(a: Uint8Array): MsgSubmitMisbehaviourResponse {
  return Protobuf.decode<MsgSubmitMisbehaviourResponse>(a, MsgSubmitMisbehaviourResponse.decode);
}
