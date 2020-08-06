import axios from 'axios';
import {
    ITransactionOrderService,
    ITransactionOrderServiceProps
} from '@services';
import { Order } from '@valueObjects';
import { API_URL_V1 } from '@src/utils';

export class TransactionOrderImpl implements ITransactionOrderService {
    public async execute(props: ITransactionOrderServiceProps): Promise<Order> {
        const request = {
            receiverAddress: props.receiverAddress.value,
            senderAddress: props.senderAddress.value,
            sourceTokenAddress: props.sourceTokenAddress.value,
            targetTokenAddress: props.targetTokenAddress.value,
            targetAmount: props.amount.toString(),
            postAction: props.postAction
        };
        const response = await axios.post(
            `${API_URL_V1}/orders?network=${props.network}`,
            request
        );
        return Order.create(response.data);
    }
}
