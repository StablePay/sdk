import { Controller } from '@core';
import { IConfig } from '@config';
import {
    GetSupportedTokens,
    GetTokenAllowance,
    GetTokenBalance,
    GetTokenMetadata,
    GetTokenRate,
    GetTokenBalances,
    GetTokenAllowances
} from '@useCases/token';
import {
    ISupportedTokensService,
    ITokenAllowanceService,
    ITokenBalanceService,
    ITokenMetadataService,
    ITokenRateService,
    ITokenAllowancesService,
    ITokenBalancesService
} from '@services';
import {
    SupportedTokensSerializer,
    TokenAllowanceSerializer,
    TokenBalanceSerializer,
    TokenBalancesSerializer,
    TokenMetadataSerializer,
    TokenRateSerializer
} from '@serializers/token';
import { TokenAllowancesSerializer } from '../serializers/token/TokenAllowances.serializer';
import { TokenAllowancesArray, TokenBalancesArray } from '@src/domain/models/types';

export class TokenController extends Controller {
    private getSupportedTokens: GetSupportedTokens;
    private getTokenAllowance: GetTokenAllowance;
    private getTokenAllowances: GetTokenAllowances;
    private getTokenBalance: GetTokenBalance;
    private getTokenBalances: GetTokenBalances;
    private getTokenMetadata: GetTokenMetadata;
    private getTokenRate: GetTokenRate;

    constructor(
        supportedTokensImpl: ISupportedTokensService,
        tokenAllowanceImpl: ITokenAllowanceService,
        tokenAllowancesImpl: ITokenAllowancesService,
        tokenBalanceImpl: ITokenBalanceService,
        tokenBalancesImpl: ITokenBalancesService,
        tokenMetadataImpl: ITokenMetadataService,
        tokenRateImpl: ITokenRateService,
        private config: IConfig
    ) {
        super();
        this.getSupportedTokens = new GetSupportedTokens(supportedTokensImpl);
        this.getTokenAllowance = new GetTokenAllowance(tokenAllowanceImpl);
        this.getTokenAllowances = new GetTokenAllowances(tokenAllowancesImpl);
        this.getTokenBalance = new GetTokenBalance(tokenBalanceImpl);
        this.getTokenBalances = new GetTokenBalances(tokenBalancesImpl);
        this.getTokenMetadata = new GetTokenMetadata(tokenMetadataImpl);
        this.getTokenRate = new GetTokenRate(tokenRateImpl);
    }

    public supportedTokens = async ({
        network
    }: {
        network: string;
    }): Promise<
        Array<{
            name: string;
            symbol: string;
            address: string;
            decimals: number;
            imageSource: string;
        }>
    > => {
        try {
            const supportedTokens = await this.getSupportedTokens.execute(
                SupportedTokensSerializer.toDomain({ network })
            );
            return this.success(
                SupportedTokensSerializer.toDTO(supportedTokens)
            );
        } catch (error) {
            this.fail(error);
            throw error;
        }
    };

    public tokenAllowance = async ({
        walletAddress,
        tokenAddress,
        network
    }: {
        walletAddress: string;
        tokenAddress: string;
        network: string;
    }): Promise<string> => {
        try {
            const allowance = await this.getTokenAllowance.execute(
                TokenAllowanceSerializer.toDomain({
                    walletAddress,
                    tokenAddress,
                    spenderAddress: this.config.stablepayContractAddress,
                    network
                })
            );
            return this.success(TokenAllowanceSerializer.toDTO(allowance));
        } catch (error) {
            this.fail(error);
            throw error;
        }
    };

    public tokenAllowances = async ({
        walletAddress,
        tokenAddresses,
        network
    }: {
        walletAddress: string;
        tokenAddresses: string[];
        network: string;
    }): Promise<TokenAllowancesArray> => {
        try {
            const allowances = await this.getTokenAllowances.execute(
                TokenAllowancesSerializer.toDomain({
                    walletAddress,
                    tokenAddresses,
                    spenderAddress: this.config.stablepayContractAddress,
                    network
                })
            );
            return this.success(TokenAllowancesSerializer.toDTO(allowances));
        } catch (error) {
            this.fail(error);
            throw error;
        }
    };

    public tokenBalance = async ({
        walletAddress,
        tokenAddress,
        network
    }: {
        walletAddress: string;
        tokenAddress: string;
        network: string;
    }): Promise<string> => {
        try {
            const balance = await this.getTokenBalance.execute(
                TokenBalanceSerializer.toDomain({
                    walletAddress,
                    tokenAddress,
                    network
                })
            );
            return this.success(TokenBalanceSerializer.toDTO(balance));
        } catch (error) {
            this.fail(error);
            throw error;
        }
    };

    public tokenBalances = async ({
        walletAddress,
        tokenAddresses,
        network
    }: {
        walletAddress: string;
        tokenAddresses: string[];
        network: string;
    }): Promise<TokenBalancesArray> => {
        try {
            const balances = await this.getTokenBalances.execute(
                TokenBalancesSerializer.toDomain({
                    walletAddress,
                    tokenAddresses,
                    network
                })
            );
            return this.success(TokenBalancesSerializer.toDTO(balances));
        } catch (error) {
            this.fail(error);
            throw error;
        }
    };

    public tokenMetadata = async ({
        symbol,
        network
    }: {
        symbol: string;
        network: string;
    }): Promise<{
        name: string;
        symbol: string;
        address: string;
        decimals: number;
        imageSource: string;
    }> => {
        try {
            const token = await this.getTokenMetadata.execute(
                TokenMetadataSerializer.toDomain({ symbol, network })
            );
            return this.success(TokenMetadataSerializer.toDTO(token));
        } catch (error) {
            this.fail(error);
            throw error;
        }
    };

    public tokenRate = async ({
        symbol,
        network
    }: {
        symbol: string;
        network: string;
    }): Promise<{
        expected: string;
        slippage: string;
    }> => {
        try {
            const rate = await this.getTokenRate.execute(
                TokenRateSerializer.toDomain({ symbol, network })
            );
            return this.success(TokenRateSerializer.toDTO(rate));
        } catch (error) {
            this.fail(error);
            throw error;
        }
    };
}
