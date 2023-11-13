import cds from '@sap/cds';
import { OutboundDeliveryItems } from '#cds-models/TransferService';

export default class DeliveryService extends cds.ApplicationService {
    async init() {
        const [API_OUTBOUND_DELIVERY_SRV_V2] = await Promise.all([cds.connect.to('API_OUTBOUND_DELIVERY_SRV_V2')]);

        this.on('READ', OutboundDeliveryItems, ({ query }) => API_OUTBOUND_DELIVERY_SRV_V2.run(query));

        await super.init();
    }
}
