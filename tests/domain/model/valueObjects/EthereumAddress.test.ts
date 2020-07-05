import { EthereumAddress } from '@domain/models/valueObjects/EthereumAddress';
import { ApplicationError } from '@core/ApplicationError';
import { ErrorType } from '@core/ErrorTypes';

describe('Ethereum Address Value Object', () => {

    const ETHEREUM_ADDRESS = '0x1E1Ab4cfA2b5Be3b5bBd7d19E7A11ddF66c0FA7f';
    const ETHEREUM_ADDRESS_2 = '0xbDE58bdb85022756eA99b6DEfB95956c9c4549d8';
    const INVALID_ETHEREUM_ADDRESS = '0x1E1AbRcfA2b5Be3b5bBd7d19E7A11ddINVALID';

    describe('Creation', () => {
        it('should create a valid ethereum address', () => {
            const ethereumAddress = EthereumAddress.of(ETHEREUM_ADDRESS);
    
            expect(ethereumAddress).toBeDefined();
            expect(ethereumAddress.value).toBe(ETHEREUM_ADDRESS);
        });

        it('should throw an error with invalid address', () => {
            // NOTE: needs arrow function to work
            expect(() => EthereumAddress.of(INVALID_ETHEREUM_ADDRESS)).toThrow(
                new ApplicationError(
                    ErrorType.Validation,
                    `'${INVALID_ETHEREUM_ADDRESS}' is not a valid Ethereum Address`
                )
            );
        });
    });

    describe('Ethereum Address', () => {
        it('should Equal two instances with same value address', () => {
            const ethereumAddress1 = EthereumAddress.of(ETHEREUM_ADDRESS);
            const ethereumAddress2 = EthereumAddress.of(ETHEREUM_ADDRESS);
    
            expect(ethereumAddress1.equals(ethereumAddress2)).toBe(true);
        });

        it('should NOT Equal two instances with different value address', () => {
            const ethereumAddress1 = EthereumAddress.of(ETHEREUM_ADDRESS);
            const ethereumAddress2 = EthereumAddress.of(ETHEREUM_ADDRESS_2);
    
            expect(ethereumAddress1.equals(ethereumAddress2)).toBe(false);
        });
    });
    
});