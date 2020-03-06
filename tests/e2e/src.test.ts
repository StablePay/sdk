import StablePayJS from '@src';

jest.setTimeout(20000);

const config = {
    ethereumNetwork: 'ropsten',
    stablepayBackendAPI: 'https://ropsten.api.stablepay.io/api',
    stablepayContractAddress: '0x494ff097f8d4E9C3b2316E3cEC49623bE98B5125',
    signature: 'secret'
};

describe('Library API', () => {
    const stablepay = StablePayJS(config);

    it('Check if StablePay library is initialized', () => {
        expect(stablepay).toBeDefined();
    });

    it('Gets supported tokens', async () => {
        const tokens = await stablepay.supportedTokens({
            network: config.ethereumNetwork
        });
        expect(tokens).toBeDefined();
    });

    it('Gets the token allowance from wallet address to stablepays contract', async () => {
        const allowance = await stablepay.tokenAllowance({
            walletAddress: '0xAc79cE441D3252e44B430261193341278736A69B',
            tokenAddress: '0x4e470dc7321e84ca96fcaedd0c8abcebbaeb68c6',
            network: config.ethereumNetwork
        });
        expect(allowance).toBeDefined();
    });

    it('Gets the token balance from wallet address', async () => {
        const balance = await stablepay.tokenBalance({
            walletAddress: '0xAc79cE441D3252e44B430261193341278736A69B',
            tokenAddress: '0x4e470dc7321e84ca96fcaedd0c8abcebbaeb68c6',
            network: config.ethereumNetwork
        });
        expect(balance).toBeDefined();
    });

    it('Gets a token metadata', async () => {
        const token = await stablepay.tokenMetadata({
            symbol: 'knc',
            network: config.ethereumNetwork
        });
        expect(token).toBeDefined();
    });

    it('Gets a token rate', async () => {
        const rate = await stablepay.tokenRate({
            symbol: 'knc',
            network: config.ethereumNetwork
        });
        expect(rate).toBeDefined();
    });
});
