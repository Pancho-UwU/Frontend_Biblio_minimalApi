import { ModelApi } from "./model/model-api";

export interface ResponseApi {
    token:string,
    idUser: number,
    message: string
}
export interface ErrorResponseApi{
    message: string,
    error:string
}
