// Code generated by protoc-gen-as. DO NOT EDIT.
// versions:
// 	 protoc-gen-as v0.3.0-alpha.2
// 	 protoc        v3.20.1
// source: cosmwasm/wasm/v1/query.ts

import { Writer, Reader, Protobuf } from "as-proto";
import { ContractInfo, ContractCodeHistoryEntry, Model } from "./types";
import { cosmos } from "../../../cosmos";

export class QueryContractInfoRequest {
  static encode(message: QueryContractInfoRequest, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.address);
  }

  static decode(reader: Reader, length: i32): QueryContractInfoRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryContractInfoRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: string;

  constructor(address: string = "") {
    this.address = address;
  }
}

export function decodeQueryContractInfoRequest(a: Uint8Array): QueryContractInfoRequest {
  return Protobuf.decode<QueryContractInfoRequest>(a, QueryContractInfoRequest.decode);
}

export class QueryContractInfoResponse {
  static encode(message: QueryContractInfoResponse, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.address);

    const contract_info_ = message.contract_info;
    if (contract_info_ !== null) {
      writer.uint32(18);
      writer.fork();
      ContractInfo.encode(contract_info_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryContractInfoResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryContractInfoResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.contract_info = ContractInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: string;
  contract_info: ContractInfo | null;

  constructor(address: string = "", contract_info: ContractInfo | null = null) {
    this.address = address;
    this.contract_info = contract_info;
  }
}

export function decodeQueryContractInfoResponse(a: Uint8Array): QueryContractInfoResponse {
  return Protobuf.decode<QueryContractInfoResponse>(a, QueryContractInfoResponse.decode);
}

export class QueryContractHistoryRequest {
  static encode(message: QueryContractHistoryRequest, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.address);

    const pagination_ = message.pagination;
    if (pagination_ !== null) {
      writer.uint32(18);
      writer.fork();
      cosmos.base.query.v1beta1.PageRequest.encode(pagination_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryContractHistoryRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryContractHistoryRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.pagination = cosmos.base.query.v1beta1.PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: string;
  pagination: cosmos.base.query.v1beta1.PageRequest | null;

  constructor(address: string = "", pagination: cosmos.base.query.v1beta1.PageRequest | null = null) {
    this.address = address;
    this.pagination = pagination;
  }
}

export function decodeQueryContractHistoryRequest(a: Uint8Array): QueryContractHistoryRequest {
  return Protobuf.decode<QueryContractHistoryRequest>(a, QueryContractHistoryRequest.decode);
}

export class QueryContractHistoryResponse {
  static encode(message: QueryContractHistoryResponse, writer: Writer): void {
    const entries_ = message.entries;
    for (let i = 0; i < entries_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      ContractCodeHistoryEntry.encode(entries_[i], writer);
      writer.ldelim();
    }

    const pagination_ = message.pagination;
    if (pagination_ !== null) {
      writer.uint32(18);
      writer.fork();
      cosmos.base.query.v1beta1.PageResponse.encode(pagination_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryContractHistoryResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryContractHistoryResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = cosmos.base.query.v1beta1.PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  entries: Array<ContractCodeHistoryEntry>;
  pagination: cosmos.base.query.v1beta1.PageResponse | null;

  constructor(entries: Array<ContractCodeHistoryEntry> = [], pagination: cosmos.base.query.v1beta1.PageResponse | null = null) {
    this.entries = entries;
    this.pagination = pagination;
  }
}

export function decodeQueryContractHistoryResponse(a: Uint8Array): QueryContractHistoryResponse {
  return Protobuf.decode<QueryContractHistoryResponse>(a, QueryContractHistoryResponse.decode);
}

export class QueryContractsByCodeRequest {
  static encode(message: QueryContractsByCodeRequest, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.code_id);

    const pagination_ = message.pagination;
    if (pagination_ !== null) {
      writer.uint32(18);
      writer.fork();
      cosmos.base.query.v1beta1.PageRequest.encode(pagination_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryContractsByCodeRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryContractsByCodeRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;

        case 2:
          message.pagination = cosmos.base.query.v1beta1.PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  code_id: u64;
  pagination: cosmos.base.query.v1beta1.PageRequest | null;

  constructor(code_id: u64 = 0, pagination: cosmos.base.query.v1beta1.PageRequest | null = null) {
    this.code_id = code_id;
    this.pagination = pagination;
  }
}

export function decodeQueryContractsByCodeRequest(a: Uint8Array): QueryContractsByCodeRequest {
  return Protobuf.decode<QueryContractsByCodeRequest>(a, QueryContractsByCodeRequest.decode);
}

export class QueryContractsByCodeResponse {
  static encode(message: QueryContractsByCodeResponse, writer: Writer): void {
    const contracts_ = message.contracts;
    if (contracts_.length !== 0) {
      for (let i = 0; i < contracts_.length; ++i) {
        writer.uint32(10);
        writer.string(contracts_[i]);
      }
    }

    const pagination_ = message.pagination;
    if (pagination_ !== null) {
      writer.uint32(18);
      writer.fork();
      cosmos.base.query.v1beta1.PageResponse.encode(pagination_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryContractsByCodeResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryContractsByCodeResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(reader.string());
          break;

        case 2:
          message.pagination = cosmos.base.query.v1beta1.PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  contracts: Array<string>;
  pagination: cosmos.base.query.v1beta1.PageResponse | null;

  constructor(contracts: Array<string> = [], pagination: cosmos.base.query.v1beta1.PageResponse | null = null) {
    this.contracts = contracts;
    this.pagination = pagination;
  }
}

export function decodeQueryContractsByCodeResponse(a: Uint8Array): QueryContractsByCodeResponse {
  return Protobuf.decode<QueryContractsByCodeResponse>(a, QueryContractsByCodeResponse.decode);
}

export class QueryAllContractStateRequest {
  static encode(message: QueryAllContractStateRequest, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.address);

    const pagination_ = message.pagination;
    if (pagination_ !== null) {
      writer.uint32(18);
      writer.fork();
      cosmos.base.query.v1beta1.PageRequest.encode(pagination_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryAllContractStateRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryAllContractStateRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.pagination = cosmos.base.query.v1beta1.PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: string;
  pagination: cosmos.base.query.v1beta1.PageRequest | null;

  constructor(address: string = "", pagination: cosmos.base.query.v1beta1.PageRequest | null = null) {
    this.address = address;
    this.pagination = pagination;
  }
}

export function decodeQueryAllContractStateRequest(a: Uint8Array): QueryAllContractStateRequest {
  return Protobuf.decode<QueryAllContractStateRequest>(a, QueryAllContractStateRequest.decode);
}

export class QueryAllContractStateResponse {
  static encode(message: QueryAllContractStateResponse, writer: Writer): void {
    const models_ = message.models;
    for (let i = 0; i < models_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      Model.encode(models_[i], writer);
      writer.ldelim();
    }

    const pagination_ = message.pagination;
    if (pagination_ !== null) {
      writer.uint32(18);
      writer.fork();
      cosmos.base.query.v1beta1.PageResponse.encode(pagination_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryAllContractStateResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryAllContractStateResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.models.push(Model.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = cosmos.base.query.v1beta1.PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  models: Array<Model>;
  pagination: cosmos.base.query.v1beta1.PageResponse | null;

  constructor(models: Array<Model> = [], pagination: cosmos.base.query.v1beta1.PageResponse | null = null) {
    this.models = models;
    this.pagination = pagination;
  }
}

export function decodeQueryAllContractStateResponse(a: Uint8Array): QueryAllContractStateResponse {
  return Protobuf.decode<QueryAllContractStateResponse>(a, QueryAllContractStateResponse.decode);
}

export class QueryRawContractStateRequest {
  static encode(message: QueryRawContractStateRequest, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.address);

    writer.uint32(18);
    writer.bytes(message.query_data);
  }

  static decode(reader: Reader, length: i32): QueryRawContractStateRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryRawContractStateRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.query_data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: string;
  query_data: Uint8Array;

  constructor(address: string = "", query_data: Uint8Array = new Uint8Array(0)) {
    this.address = address;
    this.query_data = query_data;
  }
}

export function decodeQueryRawContractStateRequest(a: Uint8Array): QueryRawContractStateRequest {
  return Protobuf.decode<QueryRawContractStateRequest>(a, QueryRawContractStateRequest.decode);
}

export class QueryRawContractStateResponse {
  static encode(message: QueryRawContractStateResponse, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): QueryRawContractStateResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryRawContractStateResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  data: Uint8Array;

  constructor(data: Uint8Array = new Uint8Array(0)) {
    this.data = data;
  }
}

export function decodeQueryRawContractStateResponse(a: Uint8Array): QueryRawContractStateResponse {
  return Protobuf.decode<QueryRawContractStateResponse>(a, QueryRawContractStateResponse.decode);
}

export class QuerySmartContractStateRequest {
  static encode(message: QuerySmartContractStateRequest, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.address);

    writer.uint32(18);
    writer.bytes(message.query_data);
  }

  static decode(reader: Reader, length: i32): QuerySmartContractStateRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QuerySmartContractStateRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.query_data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: string;
  query_data: Uint8Array;

  constructor(address: string = "", query_data: Uint8Array = new Uint8Array(0)) {
    this.address = address;
    this.query_data = query_data;
  }
}

export function decodeQuerySmartContractStateRequest(a: Uint8Array): QuerySmartContractStateRequest {
  return Protobuf.decode<QuerySmartContractStateRequest>(a, QuerySmartContractStateRequest.decode);
}

export class QuerySmartContractStateResponse {
  static encode(message: QuerySmartContractStateResponse, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): QuerySmartContractStateResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QuerySmartContractStateResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  data: Uint8Array;

  constructor(data: Uint8Array = new Uint8Array(0)) {
    this.data = data;
  }
}

export function decodeQuerySmartContractStateResponse(a: Uint8Array): QuerySmartContractStateResponse {
  return Protobuf.decode<QuerySmartContractStateResponse>(a, QuerySmartContractStateResponse.decode);
}

@unmanaged
export class QueryCodeRequest {
  static encode(message: QueryCodeRequest, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.code_id);
  }

  static decode(reader: Reader, length: i32): QueryCodeRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryCodeRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  code_id: u64;

  constructor(code_id: u64 = 0) {
    this.code_id = code_id;
  }
}

export function decodeQueryCodeRequest(a: Uint8Array): QueryCodeRequest {
  return Protobuf.decode<QueryCodeRequest>(a, QueryCodeRequest.decode);
}

export class CodeInfoResponse {
  static encode(message: CodeInfoResponse, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.code_id);

    writer.uint32(18);
    writer.string(message.creator);

    writer.uint32(26);
    writer.bytes(message.data_hash);
  }

  static decode(reader: Reader, length: i32): CodeInfoResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CodeInfoResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_id = reader.uint64();
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.data_hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  code_id: u64;
  creator: string;
  data_hash: Uint8Array;

  constructor(code_id: u64 = 0, creator: string = "", data_hash: Uint8Array = new Uint8Array(0)) {
    this.code_id = code_id;
    this.creator = creator;
    this.data_hash = data_hash;
  }
}

export function decodeCodeInfoResponse(a: Uint8Array): CodeInfoResponse {
  return Protobuf.decode<CodeInfoResponse>(a, CodeInfoResponse.decode);
}

export class QueryCodeResponse {
  static encode(message: QueryCodeResponse, writer: Writer): void {
    const code_info_ = message.code_info;
    if (code_info_ !== null) {
      writer.uint32(10);
      writer.fork();
      CodeInfoResponse.encode(code_info_, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): QueryCodeResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryCodeResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_info = CodeInfoResponse.decode(reader, reader.uint32());
          break;

        case 2:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  code_info: CodeInfoResponse | null;
  data: Uint8Array;

  constructor(code_info: CodeInfoResponse | null = null, data: Uint8Array = new Uint8Array(0)) {
    this.code_info = code_info;
    this.data = data;
  }
}

export function decodeQueryCodeResponse(a: Uint8Array): QueryCodeResponse {
  return Protobuf.decode<QueryCodeResponse>(a, QueryCodeResponse.decode);
}

export class QueryCodesRequest {
  static encode(message: QueryCodesRequest, writer: Writer): void {
    const pagination_ = message.pagination;
    if (pagination_ !== null) {
      writer.uint32(10);
      writer.fork();
      cosmos.base.query.v1beta1.PageRequest.encode(pagination_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryCodesRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryCodesRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = cosmos.base.query.v1beta1.PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  pagination: cosmos.base.query.v1beta1.PageRequest | null;

  constructor(pagination: cosmos.base.query.v1beta1.PageRequest | null = null) {
    this.pagination = pagination;
  }
}

export function decodeQueryCodesRequest(a: Uint8Array): QueryCodesRequest {
  return Protobuf.decode<QueryCodesRequest>(a, QueryCodesRequest.decode);
}

export class QueryCodesResponse {
  static encode(message: QueryCodesResponse, writer: Writer): void {
    const code_infos_ = message.code_infos;
    for (let i = 0; i < code_infos_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      CodeInfoResponse.encode(code_infos_[i], writer);
      writer.ldelim();
    }

    const pagination_ = message.pagination;
    if (pagination_ !== null) {
      writer.uint32(18);
      writer.fork();
      cosmos.base.query.v1beta1.PageResponse.encode(pagination_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryCodesResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryCodesResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_infos.push(CodeInfoResponse.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = cosmos.base.query.v1beta1.PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  code_infos: Array<CodeInfoResponse>;
  pagination: cosmos.base.query.v1beta1.PageResponse | null;

  constructor(code_infos: Array<CodeInfoResponse> = [], pagination: cosmos.base.query.v1beta1.PageResponse | null = null) {
    this.code_infos = code_infos;
    this.pagination = pagination;
  }
}

export function decodeQueryCodesResponse(a: Uint8Array): QueryCodesResponse {
  return Protobuf.decode<QueryCodesResponse>(a, QueryCodesResponse.decode);
}

export class QueryPinnedCodesRequest {
  static encode(message: QueryPinnedCodesRequest, writer: Writer): void {
    const pagination_ = message.pagination;
    if (pagination_ !== null) {
      writer.uint32(18);
      writer.fork();
      cosmos.base.query.v1beta1.PageRequest.encode(pagination_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryPinnedCodesRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryPinnedCodesRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pagination = cosmos.base.query.v1beta1.PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  pagination: cosmos.base.query.v1beta1.PageRequest | null;

  constructor(pagination: cosmos.base.query.v1beta1.PageRequest | null = null) {
    this.pagination = pagination;
  }
}

export function decodeQueryPinnedCodesRequest(a: Uint8Array): QueryPinnedCodesRequest {
  return Protobuf.decode<QueryPinnedCodesRequest>(a, QueryPinnedCodesRequest.decode);
}

export class QueryPinnedCodesResponse {
  static encode(message: QueryPinnedCodesResponse, writer: Writer): void {
    const code_ids_ = message.code_ids;
    if (code_ids_.length !== 0) {
      for (let i = 0; i < code_ids_.length; ++i) {
        writer.uint32(8);
        writer.uint64(code_ids_[i]);
      }
    }

    const pagination_ = message.pagination;
    if (pagination_ !== null) {
      writer.uint32(18);
      writer.fork();
      cosmos.base.query.v1beta1.PageResponse.encode(pagination_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): QueryPinnedCodesResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new QueryPinnedCodesResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code_ids.push(reader.uint64());
          break;

        case 2:
          message.pagination = cosmos.base.query.v1beta1.PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  code_ids: Array<u64>;
  pagination: cosmos.base.query.v1beta1.PageResponse | null;

  constructor(code_ids: Array<u64> = [], pagination: cosmos.base.query.v1beta1.PageResponse | null = null) {
    this.code_ids = code_ids;
    this.pagination = pagination;
  }
}

export function decodeQueryPinnedCodesResponse(a: Uint8Array): QueryPinnedCodesResponse {
  return Protobuf.decode<QueryPinnedCodesResponse>(a, QueryPinnedCodesResponse.decode);
}
