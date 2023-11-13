// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';
export default { name: 'API_MATERIAL_DOCUMENT_SRV' };
export function _A_MaterialDocumentHeaderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_MaterialDocumentHeader extends Base {
        MaterialDocumentYear?: string;
        MaterialDocument?: string;
        InventoryTransactionType?: string;
        DocumentDate?: string;
        PostingDate?: string;
        CreationDate?: string;
        CreationTime?: string;
        CreatedByUser?: string;
        MaterialDocumentHeaderText?: string;
        ReferenceDocument?: string;
        VersionForPrintingSlip?: string;
        ManualPrintIsTriggered?: string;
        CtrlPostgForExtWhseMgmtSyst?: string;
        GoodsMovementCode?: string;
        to_MaterialDocumentItem?: __.Composition.of.many<A_MaterialDocumentItem_>;
        to_MaterialDocumentItem_MaterialDocumentYear?: string;
        to_MaterialDocumentItem_MaterialDocument?: string;
        to_MaterialDocumentItem_MaterialDocumentItem?: string;
        static actions: {
            Cancel: {
                (PostingDate: string): A_MaterialDocumentHeader;
                __parameters: { PostingDate: string };
                __returns: A_MaterialDocumentHeader;
            };
        };
    };
}
export class A_MaterialDocumentHeader extends _A_MaterialDocumentHeaderAspect(__.Entity) {}
export class A_MaterialDocumentHeader_ extends Array<A_MaterialDocumentHeader> {}
Object.defineProperty(A_MaterialDocumentHeader, 'name', {
    value: 'API_MATERIAL_DOCUMENT_SRV.A_MaterialDocumentHeader',
});
Object.defineProperty(A_MaterialDocumentHeader_, 'name', {
    value: 'API_MATERIAL_DOCUMENT_SRV.A_MaterialDocumentHeader',
});

export function _A_MaterialDocumentItemAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_MaterialDocumentItem extends Base {
        MaterialDocumentYear?: string;
        MaterialDocument?: string;
        MaterialDocumentItem?: string;
        Material?: string;
        Plant?: string;
        StorageLocation?: string;
        Batch?: string;
        GoodsMovementType?: string;
        InventoryStockType?: string;
        InventoryValuationType?: string;
        InventorySpecialStockType?: string;
        Supplier?: string;
        Customer?: string;
        SalesOrder?: string;
        SalesOrderItem?: string;
        SalesOrderScheduleLine?: string;
        PurchaseOrder?: string;
        PurchaseOrderItem?: string;
        WBSElement?: string;
        ManufacturingOrder?: string;
        ManufacturingOrderItem?: string;
        GoodsMovementRefDocType?: string;
        GoodsMovementReasonCode?: string;
        Delivery?: string;
        DeliveryItem?: string;
        AccountAssignmentCategory?: string;
        CostCenter?: string;
        ControllingArea?: string;
        CostObject?: string;
        GLAccount?: string;
        FunctionalArea?: string;
        ProfitabilitySegment?: string;
        ProfitCenter?: string;
        MasterFixedAsset?: string;
        FixedAsset?: string;
        MaterialBaseUnit?: string;
        QuantityInBaseUnit?: number;
        EntryUnit?: string;
        QuantityInEntryUnit?: number;
        CompanyCodeCurrency?: string;
        GdsMvtExtAmtInCoCodeCrcy?: number;
        SlsPrcAmtInclVATInCoCodeCrcy?: number;
        FiscalYear?: string;
        FiscalYearPeriod?: string;
        FiscalYearVariant?: string;
        IssgOrRcvgMaterial?: string;
        IssgOrRcvgBatch?: string;
        IssuingOrReceivingPlant?: string;
        IssuingOrReceivingStorageLoc?: string;
        IssuingOrReceivingStockType?: string;
        IssgOrRcvgSpclStockInd?: string;
        IssuingOrReceivingValType?: string;
        IsCompletelyDelivered?: boolean;
        MaterialDocumentItemText?: string;
        GoodsRecipientName?: string;
        UnloadingPointName?: string;
        ShelfLifeExpirationDate?: string;
        ManufactureDate?: string;
        SerialNumbersAreCreatedAutomly?: boolean;
        Reservation?: string;
        ReservationItem?: string;
        ReservationIsFinallyIssued?: boolean;
        SpecialStockIdfgSalesOrder?: string;
        SpecialStockIdfgSalesOrderItem?: string;
        SpecialStockIdfgWBSElement?: string;
        IsAutomaticallyCreated?: string;
        MaterialDocumentLine?: string;
        MaterialDocumentParentLine?: string;
        HierarchyNodeLevel?: string;
        GoodsMovementIsCancelled?: boolean;
        ReversedMaterialDocumentYear?: string;
        ReversedMaterialDocument?: string;
        ReversedMaterialDocumentItem?: string;
        ReferenceDocumentFiscalYear?: string;
        InvtryMgmtRefDocumentItem?: string;
        InvtryMgmtReferenceDocument?: string;
        MaterialDocumentPostingType?: string;
        InventoryUsabilityCode?: string;
        EWMWarehouse?: string;
        EWMStorageBin?: string;
        StockSegment?: string;
        IssgOrRcvgStockSegment?: string;
        to_MaterialDocumentHeader?: __.Association.to<A_MaterialDocumentHeader>;
        to_MaterialDocumentHeader_MaterialDocumentYear?: string;
        to_MaterialDocumentHeader_MaterialDocument?: string;
        to_SerialNumbers?: __.Association.to.many<A_SerialNumberMaterialDocument_>;
        to_SerialNumbers_Material?: string;
        to_SerialNumbers_SerialNumber?: string;
        to_SerialNumbers_MaterialDocument?: string;
        to_SerialNumbers_MaterialDocumentItem?: string;
        to_SerialNumbers_MaterialDocumentYear?: string;
        static actions: {
            CancelItem: {
                (PostingDate: string): A_MaterialDocumentItem;
                __parameters: { PostingDate: string };
                __returns: A_MaterialDocumentItem;
            };
        };
    };
}
export class A_MaterialDocumentItem extends _A_MaterialDocumentItemAspect(__.Entity) {}
export class A_MaterialDocumentItem_ extends Array<A_MaterialDocumentItem> {}
Object.defineProperty(A_MaterialDocumentItem, 'name', { value: 'API_MATERIAL_DOCUMENT_SRV.A_MaterialDocumentItem' });
Object.defineProperty(A_MaterialDocumentItem_, 'name', { value: 'API_MATERIAL_DOCUMENT_SRV.A_MaterialDocumentItem' });

export function _A_SerialNumberMaterialDocumentAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_SerialNumberMaterialDocument extends Base {
        Material?: string;
        SerialNumber?: string;
        MaterialDocument?: string;
        MaterialDocumentItem?: string;
        MaterialDocumentYear?: string;
        static actions: {};
    };
}
export class A_SerialNumberMaterialDocument extends _A_SerialNumberMaterialDocumentAspect(__.Entity) {}
export class A_SerialNumberMaterialDocument_ extends Array<A_SerialNumberMaterialDocument> {}
Object.defineProperty(A_SerialNumberMaterialDocument, 'name', {
    value: 'API_MATERIAL_DOCUMENT_SRV.A_SerialNumberMaterialDocument',
});
Object.defineProperty(A_SerialNumberMaterialDocument_, 'name', {
    value: 'API_MATERIAL_DOCUMENT_SRV.A_SerialNumberMaterialDocument',
});
