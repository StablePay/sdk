import { TokenController } from '@controllers';
import { IConfig } from '@config';
import { ServicesContainer } from '@containers';

export const getTokenAPI = (config: IConfig, services: ServicesContainer) => {
    const tokenController = new TokenController(
        services.supportedTokensService,
        services.tokenAllowanceService,
        services.tokenAllowancesService,
        services.tokenBalanceService,
        services.tokenBalancesService,
        services.tokenMetadataService,
        services.tokenRateService,
        config
    );

    return {
        supportedTokens: tokenController.supportedTokens,
        tokenAllowance: tokenController.tokenAllowance,
        tokenAllowances: tokenController.tokenAllowances,
        tokenBalance: tokenController.tokenBalance,
        tokenBalances: tokenController.tokenBalances,
        tokenMetadata: tokenController.tokenMetadata,
        tokenRate: tokenController.tokenRate
    };
};
