// Code generated by protoc-gen-as. DO NOT EDIT.
// versions:
// 	 protoc-gen-as v0.3.0-alpha.2
// 	 protoc        v3.20.1
// source: cosmwasm/wasm/v1/genesis.ts

import { Writer, Reader, Protobuf } from "as-proto";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract } from "./tx";
import { Params, CodeInfo, ContractInfo, Model } from "./types";

export class GenesisState {
  static encode(message: GenesisState, writer: Writer): void {
    const params_ = message.params;
    if (params_ !== null) {
      writer.uint32(10);
      writer.fork();
      Params.encode(params_, writer);
      writer.ldelim();
    }

    const codes_ = message.codes;
    for (let i = 0; i < codes_.length; ++i) {
      writer.uint32(18);
      writer.fork();
      Code.encode(codes_[i], writer);
      writer.ldelim();
    }

    const contracts_ = message.contracts;
    for (let i = 0; i < contracts_.length; ++i) {
      writer.uint32(26);
      writer.fork();
      Contract.encode(contracts_[i], writer);
      writer.ldelim();
    }

    const sequences_ = message.sequences;
    for (let i = 0; i < sequences_.length; ++i) {
      writer.uint32(34);
      writer.fork();
      Sequence.encode(sequences_[i], writer);
      writer.ldelim();
    }

    const gen_msgs_ = message.gen_msgs;
    for (let i = 0; i < gen_msgs_.length; ++i) {
      writer.uint32(42);
      writer.fork();
      GenesisState.GenMsgs.encode(gen_msgs_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GenesisState {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GenesisState();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;

        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;

        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
          break;

        case 5:
          message.gen_msgs.push(GenesisState.GenMsgs.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  params: Params | null;
  codes: Array<Code>;
  contracts: Array<Contract>;
  sequences: Array<Sequence>;
  gen_msgs: Array<GenesisState.GenMsgs>;

  constructor(
    params: Params | null = null,
    codes: Array<Code> = [],
    contracts: Array<Contract> = [],
    sequences: Array<Sequence> = [],
    gen_msgs: Array<GenesisState.GenMsgs> = []
  ) {
    this.params = params;
    this.codes = codes;
    this.contracts = contracts;
    this.sequences = sequences;
    this.gen_msgs = gen_msgs;
  }
}

export function decodeGenesisState(a: Uint8Array): GenesisState {
  return Protobuf.decode<GenesisState>(a, GenesisState.decode);
}

export namespace GenesisState {
  export class GenMsgs {
    static encode(message: GenMsgs, writer: Writer): void {
      const store_code_ = message.store_code;
      if (store_code_ !== null) {
        writer.uint32(10);
        writer.fork();
        MsgStoreCode.encode(store_code_, writer);
        writer.ldelim();
      }

      const instantiate_contract_ = message.instantiate_contract;
      if (instantiate_contract_ !== null) {
        writer.uint32(18);
        writer.fork();
        MsgInstantiateContract.encode(instantiate_contract_, writer);
        writer.ldelim();
      }

      const execute_contract_ = message.execute_contract;
      if (execute_contract_ !== null) {
        writer.uint32(26);
        writer.fork();
        MsgExecuteContract.encode(execute_contract_, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): GenMsgs {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new GenMsgs();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.store_code = MsgStoreCode.decode(reader, reader.uint32());
            break;

          case 2:
            message.instantiate_contract = MsgInstantiateContract.decode(reader, reader.uint32());
            break;

          case 3:
            message.execute_contract = MsgExecuteContract.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    store_code: MsgStoreCode | null;
    instantiate_contract: MsgInstantiateContract | null;
    execute_contract: MsgExecuteContract | null;

    constructor(
      store_code: MsgStoreCode | null = null,
      instantiate_contract: MsgInstantiateContract | null = null,
      execute_contract: MsgExecuteContract | null = null
    ) {
      this.store_code = store_code;
      this.instantiate_contract = instantiate_contract;
      this.execute_contract = execute_contract;
    }
  }

  export function decodeGenMsgs(a: Uint8Array): GenMsgs {
    return Protobuf.decode<GenMsgs>(a, GenMsgs.decode);
  }
}

export class Code {
  static encode(message: Code, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.code_id);

    const code_info_ = message.code_info;
    if (code_info_ !== null) {
      writer.uint32(18);
      writer.fork();
      CodeInfo.encode(code_info_, writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.bytes(message.code_bytes);

    writer.uint32(32);
    writer.bool(message.pinned);
  }

  static decode(reader: Reader, length: i32): Code {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Code();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;

        case 2:
          message.code_info = CodeInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.code_bytes = reader.bytes();
          break;

        case 4:
          message.pinned = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  code_id: u64;
  code_info: CodeInfo | null;
  code_bytes: Uint8Array;
  pinned: bool;

  constructor(
    code_id: u64 = 0,
    code_info: CodeInfo | null = null,
    code_bytes: Uint8Array = new Uint8Array(0),
    pinned: bool = false
  ) {
    this.code_id = code_id;
    this.code_info = code_info;
    this.code_bytes = code_bytes;
    this.pinned = pinned;
  }
}

export function decodeCode(a: Uint8Array): Code {
  return Protobuf.decode<Code>(a, Code.decode);
}

export class Contract {
  static encode(message: Contract, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.contract_address);

    const contract_info_ = message.contract_info;
    if (contract_info_ !== null) {
      writer.uint32(18);
      writer.fork();
      ContractInfo.encode(contract_info_, writer);
      writer.ldelim();
    }

    const contract_state_ = message.contract_state;
    for (let i = 0; i < contract_state_.length; ++i) {
      writer.uint32(26);
      writer.fork();
      Model.encode(contract_state_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Contract {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Contract();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract_address = reader.string();
          break;

        case 2:
          message.contract_info = ContractInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.contract_state.push(Model.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  contract_address: string;
  contract_info: ContractInfo | null;
  contract_state: Array<Model>;

  constructor(contract_address: string = "", contract_info: ContractInfo | null = null, contract_state: Array<Model> = []) {
    this.contract_address = contract_address;
    this.contract_info = contract_info;
    this.contract_state = contract_state;
  }
}

export function decodeContract(a: Uint8Array): Contract {
  return Protobuf.decode<Contract>(a, Contract.decode);
}

export class Sequence {
  static encode(message: Sequence, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.id_key);

    writer.uint32(16);
    writer.uint64(message.value);
  }

  static decode(reader: Reader, length: i32): Sequence {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Sequence();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id_key = reader.bytes();
          break;

        case 2:
          message.value = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  id_key: Uint8Array;
  value: u64;

  constructor(id_key: Uint8Array = new Uint8Array(0), value: u64 = 0) {
    this.id_key = id_key;
    this.value = value;
  }
}

export function decodeSequence(a: Uint8Array): Sequence {
  return Protobuf.decode<Sequence>(a, Sequence.decode);
}
