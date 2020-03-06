import {
    ISupportedTokensService,
    ITokenAllowanceService,
    ITokenBalanceService,
    ITokenMetadataService,
    ITokenRateService
} from '@services';

import { TokenAllowanceImpl, TokenBalanceImpl } from '@providers/ethereum';

import {
    SupportedTokensImpl,
    TokenMetadataImpl,
    TokenRateImpl
} from '@providers/stablepayBackend';

export class ServicesContainer {
    public readonly supportedTokensImpl: ISupportedTokensService;
    public readonly tokenAllowanceImpl: ITokenAllowanceService;
    public readonly tokenBalanceImpl: ITokenBalanceService;
    public readonly tokenMetadataImpl: ITokenMetadataService;
    public readonly tokenRateImpl: ITokenRateService;

    constructor() {
        this.supportedTokensImpl = new SupportedTokensImpl();
        this.tokenAllowanceImpl = new TokenAllowanceImpl();
        this.tokenBalanceImpl = new TokenBalanceImpl();
        this.tokenMetadataImpl = new TokenMetadataImpl();
        this.tokenRateImpl = new TokenRateImpl();
    }
}
