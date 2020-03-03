export abstract class UseCase<T1, T2> {
    public abstract execute(request?: T1): Promise<T2> | T2;
}
