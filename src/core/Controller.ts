export abstract class Controller {
    protected success(response: any) {
        return response;
    }

    protected fail(error: Error) {
        return error;
    }
}
