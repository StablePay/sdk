import { TransactionController } from '@controllers';
import { IConfig } from '@config';
import { ServicesContainer } from '@containers';

export const getTransactionAPI = (
    config: IConfig,
    services: ServicesContainer
) => {
    const transactionController = new TransactionController(
        services.transactionOrderService,
        config
    );

    return {
        transactionOrder: transactionController.transactionOrder
    };
};
