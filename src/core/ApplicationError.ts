import { ErrorType } from './ErrorTypes';

export class ApplicationError extends Error {
    constructor(readonly errorType: ErrorType, ...params: any) {
        super(...params);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ApplicationError);
        }

        this.name = 'ApplicationError';
    }
}
