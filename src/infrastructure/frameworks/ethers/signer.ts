import * as ethers from 'ethers';

export class UncheckedJsonRpcSigner extends ethers.Signer {
    constructor(private signer: ethers.providers.JsonRpcSigner) {
        super();
        ethers.utils.defineReadOnly(this, 'signer', signer);
        ethers.utils.defineReadOnly(this, 'provider', signer.provider);
    }

    public getAddress() {
        return this.signer.getAddress();
    }

    public async sendTransaction(
        transaction: ethers.providers.TransactionRequest
    ): Promise<ethers.providers.TransactionResponse> {
        const hash = await this.signer.sendUncheckedTransaction(transaction);
        return {
            hash,
            confirmations: 0,
            from: '',
            nonce: 0,
            gasLimit: new ethers.utils.BigNumber(0),
            gasPrice: new ethers.utils.BigNumber(0),
            data: '',
            value: new ethers.utils.BigNumber(0),
            chainId: 0,
            wait: (confirmations?: number) => {
                return this.signer.provider.waitForTransaction(
                    hash,
                    confirmations
                );
            }
        };
    }

    public signMessage(message: string) {
        return this.signer.signMessage(message);
    }
}
