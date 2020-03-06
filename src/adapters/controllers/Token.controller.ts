import { Controller } from '@core';
import { IConfig } from '@config';
import {
    GetSupportedTokens,
    GetTokenAllowance,
    GetTokenBalance,
    GetTokenMetadata,
    GetTokenRate
} from '@useCases/token';
import {
    ISupportedTokensService,
    ITokenAllowanceService,
    ITokenBalanceService,
    ITokenMetadataService,
    ITokenRateService
} from '@services';
import {
    SupportedTokensSerializer,
    TokenAllowanceSerializer,
    TokenBalanceSerializer,
    TokenMetadataSerializer,
    TokenRateSerializer
} from '@serializers/token';

export class TokenController extends Controller {
    private getSupportedTokens: GetSupportedTokens;
    private getTokenAllowance: GetTokenAllowance;
    private getTokenBalance: GetTokenBalance;
    private getTokenMetadata: GetTokenMetadata;
    private getTokenRate: GetTokenRate;

    constructor(
        supportedTokensImpl: ISupportedTokensService,
        tokenAllowanceImpl: ITokenAllowanceService,
        tokenBalanceImpl: ITokenBalanceService,
        tokenMetadataImpl: ITokenMetadataService,
        tokenRateImpl: ITokenRateService,
        private config: IConfig
    ) {
        super();
        this.getSupportedTokens = new GetSupportedTokens(supportedTokensImpl);
        this.getTokenAllowance = new GetTokenAllowance(tokenAllowanceImpl);
        this.getTokenBalance = new GetTokenBalance(tokenBalanceImpl);
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
                    contractAddress: this.config.stablepayContractAddress,
                    network
                })
            );
            return this.success(TokenAllowanceSerializer.toDTO(allowance));
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
