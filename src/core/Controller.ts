export abstract class Controller {
    protected success<T>(response: any) {
        return response;
    }

    protected fail(error: Error) {
        return error;
    }
}
