export interface ErrorResponse {
    statusCode: number;
    error: {
        code:string;
        reason: string;
    }
}