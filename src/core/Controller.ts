export abstract class Controller {
    public success<T>(response: any) {
        return response;
    }

    public fail(error: Error) {
        return { error: error.message };
    }
}
