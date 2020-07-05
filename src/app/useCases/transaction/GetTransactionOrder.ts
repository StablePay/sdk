import { UseCase } from '@core';
import { ITransactionOrderService } from '@services';
import { Order, EthereumAddress } from '@valueObjects';
import { EthereumNetwork } from '@types';

interface IGetTransactionOrderProps {
    receiverAddress: EthereumAddress;
    senderAddress: EthereumAddress;
    sourceTokenAddress: EthereumAddress;
    targetTokenAddress: EthereumAddress;
    amount: number;
    postAction?: {
        action: string;
        data?: object;
    };
    network: EthereumNetwork;
}

export class GetTransactionOrder
    implements UseCase<IGetTransactionOrderProps, Order> {
    public constructor(
        private transactionOrderImpl: ITransactionOrderService
    ) {}

    public async execute(props: IGetTransactionOrderProps): Promise<Order> {
        return await this.transactionOrderImpl.execute(props);
    }
}
