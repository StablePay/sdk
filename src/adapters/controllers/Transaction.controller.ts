import { Controller } from '@core';
import { IConfig } from '@config';
import { GetTransactionOrder } from '@useCases/transaction';
import { ITransactionOrderService } from '@services';
import {
    TransactionOrderSerializer,
    ITransactionOrderReq,
    ITransactionOrderRes
} from '@serializers/transaction';

export class TransactionController extends Controller {
    private getTransactionOrder: GetTransactionOrder;

    constructor(
        transactionOrderImpl: ITransactionOrderService,
        private config: IConfig
    ) {
        super();
        this.getTransactionOrder = new GetTransactionOrder(
            transactionOrderImpl
        );
    }

    public transactionOrder = async (
        req: ITransactionOrderReq
    ): Promise<ITransactionOrderRes> => {
        try {
            const order = await this.getTransactionOrder.execute(
                TransactionOrderSerializer.toDomain(req, this.config)
            );
            return this.success(TransactionOrderSerializer.toDTO(order));
        } catch (error) {
            this.fail(error);
            throw error;
        }
    };
}
