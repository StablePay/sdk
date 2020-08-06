import { EthereumAddress, Order } from '@valueObjects';
import { EthereumNetwork } from '@types';
import { IConfig } from '@src/config';

export interface ITransactionOrderReq {
    receiverAddress: string;
    senderAddress: string;
    sourceTokenAddress: string;
    targetTokenAddress: string;
    amount: number;
    postAction?: {
        action: string;
        data?: object;
    };
}

export interface ITransactionOrderRes extends Order {}

export class TransactionOrderSerializer {
    public static toDomain(obj: ITransactionOrderReq, config: IConfig) {
        return {
            receiverAddress: EthereumAddress.of(obj.receiverAddress),
            senderAddress: EthereumAddress.of(obj.senderAddress),
            sourceTokenAddress: EthereumAddress.of(obj.sourceTokenAddress),
            targetTokenAddress: EthereumAddress.of(obj.targetTokenAddress),
            amount: obj.amount,
            postAction: obj.postAction,
            network: EthereumNetwork.of(config.ethereumNetwork)
        };
    }

    public static toDTO(order: Order): ITransactionOrderRes {
        return order;
    }
}
