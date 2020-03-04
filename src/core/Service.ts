export abstract class Service<T1, T2> {
    public abstract execute(props?: T1): T2 | Promise<T2>;
}
