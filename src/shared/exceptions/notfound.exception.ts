import { HttpStatus } from "@nestjs/common";
import { RpcBaseException } from "./base";


export class RPCNotFoundException extends RpcBaseException {
  constructor(objectOrError: string | object, description = "Data not Found on your request") {
    super(RpcBaseException.createPayload(objectOrError, description, HttpStatus.NOT_FOUND), HttpStatus.NOT_FOUND);
  }
}