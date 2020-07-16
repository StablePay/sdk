import { getAPI } from '@api';
import { ServicesContainer } from '@containers';
import { IConfig } from '@config';

export default (config: IConfig) => {
    const services = new ServicesContainer();
    return getAPI(config, services);
};
