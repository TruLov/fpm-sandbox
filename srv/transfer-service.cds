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

// @readonly
// entity MaterialDocs          as projection on API_MATERIAL_DOCUMENT_SRV.A_MaterialDocumentHeader {
//     MaterialDocumentYear,
//     MaterialDocument,
//     GoodsMovementCode,
//     to_MaterialDocumentItem : redirected to MaterialDocItems,
// };

// @readonly
// entity MaterialDocItems      as projection on API_MATERIAL_DOCUMENT_SRV.A_MaterialDocumentItem {
//     MaterialDocumentYear,
//     MaterialDocument,
//     MaterialDocumentItem,
//     Plant,
//     GoodsMovementType,
//     IssuingOrReceivingPlant,
//     IssuingOrReceivingStorageLoc,
//     QuantityInEntryUnit,
//     InvtryMgmtReferenceDocument,
//     InvtryMgmtRefDocumentItem,
//     ReferenceDocumentFiscalYear,
//     to_MaterialDocumentHeader : redirected to MaterialDocs,
//     to_SerialNumbers          : redirected to SerialNumbers,
// };

// @readonly
// entity SerialNumbers         as projection on API_MATERIAL_DOCUMENT_SRV.A_SerialNumberMaterialDocument {
//     Material,
//     SerialNumber,
//     MaterialDocument,
//     MaterialDocumentItem,
//     MaterialDocumentYear,
// };
}
