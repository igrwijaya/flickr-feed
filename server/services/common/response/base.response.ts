export interface GenericDataResponse<TData> extends BaseResponse{
    success: boolean
    data: TData
}

export interface BaseResponse {
    success: boolean
    errorMessages?: string[]
}
