import { getContract } from '@frameworks/ethers';
import { TokenAllowanceImpl } from '@src/infrastructure/providers/ethereum';



describe('TokenAllowImpl', () => {
    it('should create a TokenAllowanceImpl', () => {
        const tokenAllowanceImpl = new TokenAllowanceImpl();

        expect(tokenAllowanceImpl).toBeDefined();
        
    });
});