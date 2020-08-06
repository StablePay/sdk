import { getContract } from '@frameworks/ethers';
import { EthereumAddress } from '@domain/models/valueObjects/EthereumAddress';
import { EthereumNetwork } from '@types';
import { TokenAllowanceImpl, ITokenAllowanceImplProps } from '@src/infrastructure/providers/ethereum';
import { erc20 } from '@frameworks/ethereum/contracts';
import { ApplicationError, ErrorType } from '@src/core';

jest.mock('../../../../src/infrastructure/frameworks/ethers');

const ALLOWANCE_AMOUNT = '1000000000';
// NOTE: generated from https://vanity-eth.tk/
const TOKEN_ADDRESS = '0x1E1Ab4cfA2b5Be3b5bBd7d19E7A11ddF66c0FA7f';
const WALLET_ADDRESS = '0xbDE58bdb85022756eA99b6DEfB95956c9c4549d8';
const CONTRACT_ADDRESS = '0xd4783779A5e1bd00743Fa1d0C21560089e151600';

describe('TokenAllowImpl', () => {
    const mockErc20Contract: any = {
        allowance: jest.fn(() => Promise.resolve(ALLOWANCE_AMOUNT))
    }

    let tokenAllowanceImpl: TokenAllowanceImpl;
    let props: ITokenAllowanceImplProps;

    const setupMock = (erc20Contract: any) => {
        // NOTE: to get jest mock types in TS
        (getContract as jest.Mock).mockReturnValue(erc20Contract)
    }

    beforeEach(() => {
        tokenAllowanceImpl = new TokenAllowanceImpl();
        props = {
            tokenAddress: EthereumAddress.of(TOKEN_ADDRESS),
            walletAddress: EthereumAddress.of(WALLET_ADDRESS),
            spenderAddress: EthereumAddress.of(CONTRACT_ADDRESS),
            network: EthereumNetwork.Mainnet,
        }
        setupMock(mockErc20Contract);

    })
    it('should create a TokenAllowanceImpl', () => {
        expect(tokenAllowanceImpl).toBeDefined();
        
    });

    it('should get token allowance for contract', async () => {
        const res = await tokenAllowanceImpl.execute(props);

        expect(res).toBe(ALLOWANCE_AMOUNT);
        // mocks expectations
        expect(getContract).toBeCalledWith(
            props.tokenAddress.value,
            erc20.abi,
            props.network.toString(),
        );
        expect(mockErc20Contract.allowance).toBeCalledWith(
            props.walletAddress.value,
            props.spenderAddress.value
        );
    });

    it('should fail with application error if allowance is null', async () => {
        // setup for error
        mockErc20Contract.allowance = jest.fn(() => Promise.resolve(null))
        setupMock(mockErc20Contract);

        await expect(tokenAllowanceImpl.execute(props)).rejects.toThrow(
            new ApplicationError(ErrorType.Internal ,'TokenAllowanceImpl.execute Expected a valid allowance value') 
        );
    });
});