import { TokenController } from '@controllers';
import { IConfig } from '@config';
import { ServicesContainer } from '@containers';

export const getTokenAPI = (config: IConfig, services: ServicesContainer) => {
    const tokenController = new TokenController(
        services.supportedTokensImpl,
        services.tokenAllowanceImpl,
        services.tokenBalanceImpl,
        services.tokenMetadataImpl,
        services.tokenRateImpl,
        config
    );

    return tokenController;
};
