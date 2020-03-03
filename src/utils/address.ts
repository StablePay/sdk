import { ethers } from 'ethers';

export const isEthereumAddress = (address: string): boolean => {
    try {
        ethers.utils.getAddress(address);
        return true;
    } catch (e) {
        return false;
    }
};
