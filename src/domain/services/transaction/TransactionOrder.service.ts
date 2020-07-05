import { Service } from '@core';
import { EthereumAddress, Order } from '@valueObjects';
import { EthereumNetwork } from '@types';

export interface ITransactionOrderServiceProps {
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

export interface ITransactionOrderService
    extends Service<ITransactionOrderServiceProps, Order> {}
