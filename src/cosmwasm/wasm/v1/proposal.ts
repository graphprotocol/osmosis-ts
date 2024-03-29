// Code generated by protoc-gen-as. DO NOT EDIT.
// versions:
// 	 protoc-gen-as v0.3.0-alpha.2
// 	 protoc        v3.20.1
// source: cosmwasm/wasm/v1/proposal.ts

import { Writer, Reader, Protobuf } from "as-proto";
import { AccessConfig } from "./types";
import { cosmos } from "../../../cosmos";

export class StoreCodeProposal {
  static encode(message: StoreCodeProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    writer.uint32(26);
    writer.string(message.run_as);

    writer.uint32(34);
    writer.bytes(message.wasm_byte_code);

    const instantiate_permission_ = message.instantiate_permission;
    if (instantiate_permission_ !== null) {
      writer.uint32(58);
      writer.fork();
      AccessConfig.encode(instantiate_permission_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): StoreCodeProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new StoreCodeProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.run_as = reader.string();
          break;

        case 4:
          message.wasm_byte_code = reader.bytes();
          break;

        case 7:
          message.instantiate_permission = AccessConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;
  run_as: string;
  wasm_byte_code: Uint8Array;
  instantiate_permission: AccessConfig | null;

  constructor(
    title: string = "",
    description: string = "",
    run_as: string = "",
    wasm_byte_code: Uint8Array = new Uint8Array(0),
    instantiate_permission: AccessConfig | null = null
  ) {
    this.title = title;
    this.description = description;
    this.run_as = run_as;
    this.wasm_byte_code = wasm_byte_code;
    this.instantiate_permission = instantiate_permission;
  }
}

export function decodeStoreCodeProposal(a: Uint8Array): StoreCodeProposal {
  return Protobuf.decode<StoreCodeProposal>(a, StoreCodeProposal.decode);
}

export class InstantiateContractProposal {
  static encode(message: InstantiateContractProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    writer.uint32(26);
    writer.string(message.run_as);

    writer.uint32(34);
    writer.string(message.admin);

    writer.uint32(40);
    writer.uint64(message.code_id);

    writer.uint32(50);
    writer.string(message.label);

    writer.uint32(58);
    writer.bytes(message.msg);

    const funds_ = message.funds;
    for (let i = 0; i < funds_.length; ++i) {
      writer.uint32(66);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(funds_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): InstantiateContractProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new InstantiateContractProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.run_as = reader.string();
          break;

        case 4:
          message.admin = reader.string();
          break;

        case 5:
          message.code_id = reader.uint64();
          break;

        case 6:
          message.label = reader.string();
          break;

        case 7:
          message.msg = reader.bytes();
          break;

        case 8:
          message.funds.push(cosmos.base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;
  run_as: string;
  admin: string;
  code_id: u64;
  label: string;
  msg: Uint8Array;
  funds: Array<cosmos.base.v1beta1.Coin>;

  constructor(
    title: string = "",
    description: string = "",
    run_as: string = "",
    admin: string = "",
    code_id: u64 = 0,
    label: string = "",
    msg: Uint8Array = new Uint8Array(0),
    funds: Array<cosmos.base.v1beta1.Coin> = []
  ) {
    this.title = title;
    this.description = description;
    this.run_as = run_as;
    this.admin = admin;
    this.code_id = code_id;
    this.label = label;
    this.msg = msg;
    this.funds = funds;
  }
}

export function decodeInstantiateContractProposal(a: Uint8Array): InstantiateContractProposal {
  return Protobuf.decode<InstantiateContractProposal>(a, InstantiateContractProposal.decode);
}

export class MigrateContractProposal {
  static encode(message: MigrateContractProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    writer.uint32(34);
    writer.string(message.contract);

    writer.uint32(40);
    writer.uint64(message.code_id);

    writer.uint32(50);
    writer.bytes(message.msg);
  }

  static decode(reader: Reader, length: i32): MigrateContractProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MigrateContractProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 4:
          message.contract = reader.string();
          break;

        case 5:
          message.code_id = reader.uint64();
          break;

        case 6:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;
  contract: string;
  code_id: u64;
  msg: Uint8Array;

  constructor(
    title: string = "",
    description: string = "",
    contract: string = "",
    code_id: u64 = 0,
    msg: Uint8Array = new Uint8Array(0)
  ) {
    this.title = title;
    this.description = description;
    this.contract = contract;
    this.code_id = code_id;
    this.msg = msg;
  }
}

export function decodeMigrateContractProposal(a: Uint8Array): MigrateContractProposal {
  return Protobuf.decode<MigrateContractProposal>(a, MigrateContractProposal.decode);
}

export class SudoContractProposal {
  static encode(message: SudoContractProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    writer.uint32(26);
    writer.string(message.contract);

    writer.uint32(34);
    writer.bytes(message.msg);
  }

  static decode(reader: Reader, length: i32): SudoContractProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SudoContractProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        case 4:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;
  contract: string;
  msg: Uint8Array;

  constructor(title: string = "", description: string = "", contract: string = "", msg: Uint8Array = new Uint8Array(0)) {
    this.title = title;
    this.description = description;
    this.contract = contract;
    this.msg = msg;
  }
}

export function decodeSudoContractProposal(a: Uint8Array): SudoContractProposal {
  return Protobuf.decode<SudoContractProposal>(a, SudoContractProposal.decode);
}

export class ExecuteContractProposal {
  static encode(message: ExecuteContractProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    writer.uint32(26);
    writer.string(message.run_as);

    writer.uint32(34);
    writer.string(message.contract);

    writer.uint32(42);
    writer.bytes(message.msg);

    const funds_ = message.funds;
    for (let i = 0; i < funds_.length; ++i) {
      writer.uint32(50);
      writer.fork();
      cosmos.base.v1beta1.Coin.encode(funds_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ExecuteContractProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ExecuteContractProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.run_as = reader.string();
          break;

        case 4:
          message.contract = reader.string();
          break;

        case 5:
          message.msg = reader.bytes();
          break;

        case 6:
          message.funds.push(cosmos.base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;
  run_as: string;
  contract: string;
  msg: Uint8Array;
  funds: Array<cosmos.base.v1beta1.Coin>;

  constructor(
    title: string = "",
    description: string = "",
    run_as: string = "",
    contract: string = "",
    msg: Uint8Array = new Uint8Array(0),
    funds: Array<cosmos.base.v1beta1.Coin> = []
  ) {
    this.title = title;
    this.description = description;
    this.run_as = run_as;
    this.contract = contract;
    this.msg = msg;
    this.funds = funds;
  }
}

export function decodeExecuteContractProposal(a: Uint8Array): ExecuteContractProposal {
  return Protobuf.decode<ExecuteContractProposal>(a, ExecuteContractProposal.decode);
}

export class UpdateAdminProposal {
  static encode(message: UpdateAdminProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    writer.uint32(26);
    writer.string(message.new_admin);

    writer.uint32(34);
    writer.string(message.contract);
  }

  static decode(reader: Reader, length: i32): UpdateAdminProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new UpdateAdminProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.new_admin = reader.string();
          break;

        case 4:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;
  new_admin: string;
  contract: string;

  constructor(title: string = "", description: string = "", new_admin: string = "", contract: string = "") {
    this.title = title;
    this.description = description;
    this.new_admin = new_admin;
    this.contract = contract;
  }
}

export function decodeUpdateAdminProposal(a: Uint8Array): UpdateAdminProposal {
  return Protobuf.decode<UpdateAdminProposal>(a, UpdateAdminProposal.decode);
}

export class ClearAdminProposal {
  static encode(message: ClearAdminProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    writer.uint32(26);
    writer.string(message.contract);
  }

  static decode(reader: Reader, length: i32): ClearAdminProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ClearAdminProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;
  contract: string;

  constructor(title: string = "", description: string = "", contract: string = "") {
    this.title = title;
    this.description = description;
    this.contract = contract;
  }
}

export function decodeClearAdminProposal(a: Uint8Array): ClearAdminProposal {
  return Protobuf.decode<ClearAdminProposal>(a, ClearAdminProposal.decode);
}

export class PinCodesProposal {
  static encode(message: PinCodesProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    const code_ids_ = message.code_ids;
    if (code_ids_.length !== 0) {
      for (let i = 0; i < code_ids_.length; ++i) {
        writer.uint32(24);
        writer.uint64(code_ids_[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): PinCodesProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PinCodesProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.code_ids.push(reader.uint64());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;
  code_ids: Array<u64>;

  constructor(title: string = "", description: string = "", code_ids: Array<u64> = []) {
    this.title = title;
    this.description = description;
    this.code_ids = code_ids;
  }
}

export function decodePinCodesProposal(a: Uint8Array): PinCodesProposal {
  return Protobuf.decode<PinCodesProposal>(a, PinCodesProposal.decode);
}

export class UnpinCodesProposal {
  static encode(message: UnpinCodesProposal, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.title);

    writer.uint32(18);
    writer.string(message.description);

    const code_ids_ = message.code_ids;
    if (code_ids_.length !== 0) {
      for (let i = 0; i < code_ids_.length; ++i) {
        writer.uint32(24);
        writer.uint64(code_ids_[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): UnpinCodesProposal {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new UnpinCodesProposal();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.code_ids.push(reader.uint64());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  title: string;
  description: string;
  code_ids: Array<u64>;

  constructor(title: string = "", description: string = "", code_ids: Array<u64> = []) {
    this.title = title;
    this.description = description;
    this.code_ids = code_ids;
  }
}

export function decodeUnpinCodesProposal(a: Uint8Array): UnpinCodesProposal {
  return Protobuf.decode<UnpinCodesProposal>(a, UnpinCodesProposal.decode);
}
