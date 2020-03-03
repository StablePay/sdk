export abstract class Repository<T1, T2> {
    public abstract async get(id: T2): Promise<T1 | undefined>;
}
