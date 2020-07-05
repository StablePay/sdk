import StablePayJS from '@src';

jest.setTimeout(20000);

const config = {
    ethereumNetwork: 'ropsten',
    stablepayBackendAPI: 'https://ropsten.api.stablepay.io/api',
    stablepayContractAddress: '0x494ff097f8d4E9C3b2316E3cEC49623bE98B5125',
    signature: 'secret'
};

// NOTE: uncomment to test end to end with network
xdescribe('Library API', () => {
    const stablepay = StablePayJS(config);

    it('Check if StablePay library is initialized', () => {
        expect(stablepay).toBeDefined();
    });

    xit('Gets supported tokens', async () => {
        const tokens = await stablepay.Token.supportedTokens({
            network: config.ethereumNetwork
        });
        expect(tokens).toBeDefined();
    });

    xit('Gets the token allowance from wallet address to stablepays contract', async () => {
        const allowance = await stablepay.Token.tokenAllowance({
            walletAddress: '0xAc79cE441D3252e44B430261193341278736A69B',
            tokenAddress: '0x4e470dc7321e84ca96fcaedd0c8abcebbaeb68c6',
            network: config.ethereumNetwork
        });
        expect(allowance).toBeDefined();
    });

    xit('Gets the token balance from wallet address', async () => {
        const balance = await stablepay.Token.tokenBalance({
            walletAddress: '0xAc79cE441D3252e44B430261193341278736A69B',
            tokenAddress: '0x4e470dc7321e84ca96fcaedd0c8abcebbaeb68c6',
            network: config.ethereumNetwork
        });
        expect(balance).toBeDefined();
    });

    xit('Gets a token metadata', async () => {
        const token = await stablepay.Token.tokenMetadata({
            symbol: 'knc',
            network: config.ethereumNetwork
        });
        expect(token).toBeDefined();
    });

    xit('Gets a token rate', async () => {
        const rate = await stablepay.Token.tokenRate({
            symbol: 'knc',
            network: config.ethereumNetwork
        });
        expect(rate).toBeDefined();
    });
});
