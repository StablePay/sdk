import { getTokenAPI } from './Token.api';
import { getTransactionAPI } from './Transaction.api';
import { IConfig } from '@config';
import { ServicesContainer } from '@containers';

export const getAPI = (config: IConfig, services: ServicesContainer) => {
    return {
        Token: getTokenAPI(config, services),
        Transaction: getTransactionAPI(config, services)
    };
};
