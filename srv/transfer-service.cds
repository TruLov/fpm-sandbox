using {API_OUTBOUND_DELIVERY_SRV_V2} from './external/API_OUTBOUND_DELIVERY_SRV_V2';
using {API_MATERIAL_DOCUMENT_SRV} from './external/API_MATERIAL_DOCUMENT_SRV';


@path: 'deliveries'
service DeliveryService {

    @readonly
    entity OutboundDeliveryItems as projection on API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryItem {
        DeliveryDocument,
        DeliveryDocumentItem,
        DeliveryDocumentItemText,
        ActualDeliveredQtyInBaseUnit,
        BaseUnit,
        Material,
        Batch,
        StorageLocation,
        Plant,
        CreationDate
    };

    @readonly
    entity OutboundDeliveries    as projection on API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryHeader {
        DeliveryDocument,
        CreatedByUser,
        CreationDate,
        CreationTime,
        DeliveryDate,
        DocumentDate,
        to_DeliveryDocumentItem : redirected to OutboundDeliveryItems,
    };
}
