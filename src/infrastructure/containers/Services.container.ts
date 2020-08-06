import {
    ISupportedTokensService,
    ITokenAllowanceService,
    ITokenBalanceService,
    ITokenMetadataService,
    ITokenRateService,
    ITransactionOrderService,
    ITokenBalancesService,
    ITokenAllowancesService,
} from '@services';

import {
    TokenAllowanceImpl,
    TokenBalanceImpl,
    TokenBalancesImpl,
    TokenAllowancesImpl
} from '@providers/ethereum';

import {
    SupportedTokensImpl,
    TokenMetadataImpl,
    TokenRateImpl,
    TransactionOrderImpl
} from '@providers/stablepayBackend';

export class ServicesContainer {
    public readonly supportedTokensService: ISupportedTokensService;
    public readonly tokenAllowanceService: ITokenAllowanceService;
    public readonly tokenAllowancesService: ITokenAllowancesService;
    public readonly tokenBalanceService: ITokenBalanceService;
    public readonly tokenBalancesService: ITokenBalancesService;
    public readonly tokenMetadataService: ITokenMetadataService;
    public readonly tokenRateService: ITokenRateService;
    public readonly transactionOrderService: ITransactionOrderService;

    constructor() {
        this.supportedTokensService = new SupportedTokensImpl();
        this.tokenAllowanceService = new TokenAllowanceImpl();
        this.tokenAllowancesService = new TokenAllowancesImpl();
        this.tokenBalanceService = new TokenBalanceImpl();
        this.tokenBalancesService = new TokenBalancesImpl();
        this.tokenMetadataService = new TokenMetadataImpl();
        this.tokenRateService = new TokenRateImpl();
        this.transactionOrderService = new TransactionOrderImpl();
    }
}
