// This is an automatically generated file. Please do not change its contents manually!
import * as _API_OUTBOUND_DELIVERY_SRV_V2 from './../API_OUTBOUND_DELIVERY_SRV_V2';
import * as __ from './../_';
import * as _API_MATERIAL_DOCUMENT_SRV from './../API_MATERIAL_DOCUMENT_SRV';
export default { name: 'TransferService' }
export function _OutboundDeliveryItemAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class OutboundDeliveryItem extends Base {
        DeliveryDocument?: string;
        DeliveryDocumentItem?: string;
        ActualDeliveredQtyInBaseUnit?: number;
        ActualDeliveryQuantity?: number;
        AdditionalCustomerGroup1?: string;
        AdditionalCustomerGroup2?: string;
        AdditionalCustomerGroup3?: string;
        AdditionalCustomerGroup4?: string;
        AdditionalCustomerGroup5?: string;
        AdditionalMaterialGroup1?: string;
        AdditionalMaterialGroup2?: string;
        AdditionalMaterialGroup3?: string;
        AdditionalMaterialGroup4?: string;
        AdditionalMaterialGroup5?: string;
        AlternateProductNumber?: string;
        BaseUnit?: string;
        Batch?: string;
        BatchBySupplier?: string;
        BatchClassification?: string;
        BOMExplosion?: string;
        BusinessArea?: string;
        ConsumptionPosting?: string;
        ControllingArea?: string;
        CostCenter?: string;
        CreatedByUser?: string;
        CreationDate?: string;
        CreationTime?: string;
        CustEngineeringChgStatus?: string;
        DeliveryDocumentItemCategory?: string;
        DeliveryDocumentItemText?: string;
        DeliveryGroup?: string;
        DeliveryQuantityUnit?: string;
        DeliveryRelatedBillingStatus?: string;
        DeliveryToBaseQuantityDnmntr?: number;
        DeliveryToBaseQuantityNmrtr?: number;
        DeliveryVersion?: string;
        DepartmentClassificationByCust?: string;
        DistributionChannel?: string;
        Division?: string;
        EUDeliveryItemARCStatus?: string;
        FixedShipgProcgDurationInDays?: number;
        GLAccount?: string;
        GoodsMovementReasonCode?: string;
        GoodsMovementStatus?: string;
        GoodsMovementType?: string;
        HigherLvlItmOfBatSpltItm?: string;
        HigherLevelItem?: string;
        InspectionLot?: string;
        InspectionPartialLot?: string;
        IntercompanyBillingStatus?: string;
        InternationalArticleNumber?: string;
        InventorySpecialStockType?: string;
        InventoryValuationType?: string;
        IsCompletelyDelivered?: boolean;
        IsNotGoodsMovementsRelevant?: string;
        IsSeparateValuation?: boolean;
        IssgOrRcvgBatch?: string;
        IssgOrRcvgMaterial?: string;
        IssgOrRcvgSpclStockInd?: string;
        IssgOrRcvgStockCategory?: string;
        IssgOrRcvgValuationType?: string;
        IssuingOrReceivingPlant?: string;
        IssuingOrReceivingStorageLoc?: string;
        ItemBillingBlockReason?: string;
        ItemBillingIncompletionStatus?: string;
        ItemDeliveryIncompletionStatus?: string;
        ItemGdsMvtIncompletionSts?: string;
        ItemGeneralIncompletionStatus?: string;
        ItemGrossWeight?: number;
        ItemIsBillingRelevant?: string;
        ItemNetWeight?: number;
        ItemPackingIncompletionStatus?: string;
        ItemPickingIncompletionStatus?: string;
        ItemVolume?: number;
        ItemVolumeUnit?: string;
        ItemWeightUnit?: string;
        LastChangeDate?: string;
        LoadingGroup?: string;
        ManufactureDate?: string;
        Material?: string;
        MaterialByCustomer?: string;
        MaterialFreightGroup?: string;
        MaterialGroup?: string;
        MaterialIsBatchManaged?: boolean;
        MaterialIsIntBatchManaged?: boolean;
        NumberOfSerialNumbers?: number;
        OrderID?: string;
        OrderItem?: string;
        OriginalDeliveryQuantity?: number;
        OriginallyRequestedMaterial?: string;
        OverdelivTolrtdLmtRatioInPct?: number;
        PackingStatus?: string;
        PartialDeliveryIsAllowed?: string;
        PaymentGuaranteeForm?: string;
        PickingConfirmationStatus?: string;
        PickingControl?: string;
        PickingStatus?: string;
        Plant?: string;
        PrimaryPostingSwitch?: string;
        ProductAvailabilityDate?: string;
        ProductAvailabilityTime?: string;
        ProductConfiguration?: string;
        ProductHierarchyNode?: string;
        ProfitabilitySegment?: string;
        ProfitCenter?: string;
        ProofOfDeliveryRelevanceCode?: string;
        ProofOfDeliveryStatus?: string;
        QuantityIsFixed?: boolean;
        ReceivingPoint?: string;
        ReferenceDocumentLogicalSystem?: string;
        ReferenceSDDocument?: string;
        ReferenceSDDocumentCategory?: string;
        ReferenceSDDocumentItem?: string;
        RetailPromotion?: string;
        SalesDocumentItemType?: string;
        SalesGroup?: string;
        SalesOffice?: string;
        SDDocumentCategory?: string;
        SDProcessStatus?: string;
        ShelfLifeExpirationDate?: string;
        StatisticsDate?: string;
        StockType?: string;
        StorageBin?: string;
        StorageLocation?: string;
        StorageType?: string;
        SubsequentMovementType?: string;
        TransportationGroup?: string;
        UnderdelivTolrtdLmtRatioInPct?: number;
        UnlimitedOverdeliveryIsAllowed?: boolean;
        VarblShipgProcgDurationInDays?: number;
        Warehouse?: string;
        WarehouseActivityStatus?: string;
        WarehouseStagingArea?: string;
        WarehouseStockCategory?: string;
        WarehouseStorageBin?: string;
        StockSegment?: string;
        RequirementSegment?: string;
        to_DeliveryDocumentItemText?: __.Association.to.many<_API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryItemText_>;
        to_DeliveryDocumentItemText_DeliveryDocument?: string;
        to_DeliveryDocumentItemText_DeliveryDocumentItem?: string;
        to_DeliveryDocumentItemText_TextElement?: string;
        to_DeliveryDocumentItemText_Language?: string;
        to_HandlingUnitItemDelivery?: __.Association.to.many<_API_OUTBOUND_DELIVERY_SRV_V2.A_HandlingUnitItemDelivery_>;
        to_HandlingUnitItemDelivery_HandlingUnitInternalId?: string;
        to_HandlingUnitItemDelivery_HandlingUnitItem?: string;
        to_DocumentFlow?: __.Association.to.many<_API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryDocFlow_>;
        to_DocumentFlow_PrecedingDocument?: string;
        to_DocumentFlow_PrecedingDocumentItem?: string;
        to_DocumentFlow_SubsequentDocumentCategory?: string;
        to_SerialDeliveryItem?: __.Association.to<_API_OUTBOUND_DELIVERY_SRV_V2.A_SerialNmbrDelivery>;
        to_SerialDeliveryItem_MaintenanceItemObjectList?: number;
      static actions: {
    }
  };
}
export class OutboundDeliveryItem extends _OutboundDeliveryItemAspect(__.Entity) {}
export class OutboundDeliveryItems extends Array<OutboundDeliveryItem> {}
Object.defineProperty(OutboundDeliveryItem, 'name', { value: 'TransferService.OutboundDeliveryItems' })
Object.defineProperty(OutboundDeliveryItems, 'name', { value: 'TransferService.OutboundDeliveryItems' })

export function _OutboundDeliveryAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class OutboundDelivery extends Base {
        DeliveryDocument?: string;
        ActualDeliveryRoute?: string;
        Shippinglocationtimezone?: string;
        ActualGoodsMovementDate?: string;
        Receivinglocationtimezone?: string;
        ActualGoodsMovementTime?: string;
        BillingDocumentDate?: string;
        BillOfLading?: string;
        CompleteDeliveryIsDefined?: boolean;
        ConfirmationTime?: string;
        CreatedByUser?: string;
        CreationDate?: string;
        CreationTime?: string;
        CustomerGroup?: string;
        DeliveryBlockReason?: string;
        DeliveryDate?: string;
        DeliveryDocumentBySupplier?: string;
        DeliveryDocumentType?: string;
        DeliveryIsInPlant?: boolean;
        DeliveryPriority?: string;
        DeliveryTime?: string;
        DeliveryVersion?: string;
        DepreciationPercentage?: number;
        DistrStatusByDecentralizedWrhs?: string;
        DocumentDate?: string;
        ExternalIdentificationType?: string;
        ExternalTransportSystem?: string;
        FactoryCalendarByCustomer?: string;
        GoodsIssueOrReceiptSlipNumber?: string;
        GoodsIssueTime?: string;
        HandlingUnitInStock?: string;
        HdrGeneralIncompletionStatus?: string;
        HdrGoodsMvtIncompletionStatus?: string;
        HeaderBillgIncompletionStatus?: string;
        HeaderBillingBlockReason?: string;
        HeaderDelivIncompletionStatus?: string;
        HeaderGrossWeight?: number;
        HeaderNetWeight?: number;
        HeaderPackingIncompletionSts?: string;
        HeaderPickgIncompletionStatus?: string;
        HeaderVolume?: number;
        HeaderVolumeUnit?: string;
        HeaderWeightUnit?: string;
        IncotermsClassification?: string;
        IncotermsTransferLocation?: string;
        IntercompanyBillingDate?: string;
        InternalFinancialDocument?: string;
        IsDeliveryForSingleWarehouse?: string;
        IsExportDelivery?: string;
        LastChangeDate?: string;
        LastChangedByUser?: string;
        LoadingDate?: string;
        LoadingPoint?: string;
        LoadingTime?: string;
        MeansOfTransport?: string;
        MeansOfTransportRefMaterial?: string;
        MeansOfTransportType?: string;
        OrderCombinationIsAllowed?: boolean;
        OrderID?: string;
        OverallDelivConfStatus?: string;
        OverallDelivReltdBillgStatus?: string;
        OverallGoodsMovementStatus?: string;
        OverallIntcoBillingStatus?: string;
        OverallPackingStatus?: string;
        OverallPickingConfStatus?: string;
        OverallPickingStatus?: string;
        OverallProofOfDeliveryStatus?: string;
        OverallSDProcessStatus?: string;
        OverallWarehouseActivityStatus?: string;
        OvrlItmDelivIncompletionSts?: string;
        OvrlItmGdsMvtIncompletionSts?: string;
        OvrlItmGeneralIncompletionSts?: string;
        OvrlItmPackingIncompletionSts?: string;
        OvrlItmPickingIncompletionSts?: string;
        PaymentGuaranteeProcedure?: string;
        PickedItemsLocation?: string;
        PickingDate?: string;
        PickingTime?: string;
        PlannedGoodsIssueDate?: string;
        ProofOfDeliveryDate?: string;
        ProposedDeliveryRoute?: string;
        ReceivingPlant?: string;
        RouteSchedule?: string;
        SalesDistrict?: string;
        SalesOffice?: string;
        SalesOrganization?: string;
        SDDocumentCategory?: string;
        ShipmentBlockReason?: string;
        ShippingCondition?: string;
        ShippingPoint?: string;
        ShippingType?: string;
        ShipToParty?: string;
        SoldToParty?: string;
        SpecialProcessingCode?: string;
        StatisticsCurrency?: string;
        Supplier?: string;
        TotalBlockStatus?: string;
        TotalCreditCheckStatus?: string;
        TotalNumberOfPackage?: string;
        TransactionCurrency?: string;
        TransportationGroup?: string;
        TransportationPlanningDate?: string;
        TransportationPlanningStatus?: string;
        TransportationPlanningTime?: string;
        UnloadingPointName?: string;
        Warehouse?: string;
        WarehouseGate?: string;
        WarehouseStagingArea?: string;
        to_DeliveryDocumentItem?: __.Association.to.many<_API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryItem_>;
        to_DeliveryDocumentItem_DeliveryDocument?: string;
        to_DeliveryDocumentItem_DeliveryDocumentItem?: string;
        to_DeliveryDocumentPartner?: __.Association.to.many<_API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryPartner_>;
        to_DeliveryDocumentPartner_PartnerFunction?: string;
        to_DeliveryDocumentPartner_SDDocument?: string;
        to_HandlingUnitHeaderDelivery?: __.Association.to.many<_API_OUTBOUND_DELIVERY_SRV_V2.A_HandlingUnitHeaderDelivery_>;
        to_HandlingUnitHeaderDelivery_HandlingUnitInternalId?: string;
        to_DeliveryDocumentText?: __.Association.to.many<_API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryHeaderText_>;
        to_DeliveryDocumentText_DeliveryDocument?: string;
        to_DeliveryDocumentText_TextElement?: string;
        to_DeliveryDocumentText_Language?: string;
      static actions: {
    }
  };
}
export class OutboundDelivery extends _OutboundDeliveryAspect(__.Entity) {}
export class OutboundDeliveries extends Array<OutboundDelivery> {}
Object.defineProperty(OutboundDelivery, 'name', { value: 'TransferService.OutboundDeliveries' })
Object.defineProperty(OutboundDeliveries, 'name', { value: 'TransferService.OutboundDeliveries' })

export function _MaterialDocAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class MaterialDoc extends Base {
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
        to_MaterialDocumentItem?: __.Composition.of.many<_API_MATERIAL_DOCUMENT_SRV.A_MaterialDocumentItem_>;
        to_MaterialDocumentItem_MaterialDocumentYear?: string;
        to_MaterialDocumentItem_MaterialDocument?: string;
        to_MaterialDocumentItem_MaterialDocumentItem?: string;
      static actions: {
    }
  };
}
export class MaterialDoc extends _MaterialDocAspect(__.Entity) {}
export class MaterialDocs extends Array<MaterialDoc> {}
Object.defineProperty(MaterialDoc, 'name', { value: 'TransferService.MaterialDocs' })
Object.defineProperty(MaterialDocs, 'name', { value: 'TransferService.MaterialDocs' })

export function _MaterialDocItemAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class MaterialDocItem extends Base {
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
        to_MaterialDocumentHeader?: __.Association.to<_API_MATERIAL_DOCUMENT_SRV.A_MaterialDocumentHeader>;
        to_MaterialDocumentHeader_MaterialDocumentYear?: string;
        to_MaterialDocumentHeader_MaterialDocument?: string;
        to_SerialNumbers?: __.Association.to.many<_API_MATERIAL_DOCUMENT_SRV.A_SerialNumberMaterialDocument_>;
        to_SerialNumbers_Material?: string;
        to_SerialNumbers_SerialNumber?: string;
        to_SerialNumbers_MaterialDocument?: string;
        to_SerialNumbers_MaterialDocumentItem?: string;
        to_SerialNumbers_MaterialDocumentYear?: string;
      static actions: {
    }
  };
}
export class MaterialDocItem extends _MaterialDocItemAspect(__.Entity) {}
export class MaterialDocItems extends Array<MaterialDocItem> {}
Object.defineProperty(MaterialDocItem, 'name', { value: 'TransferService.MaterialDocItems' })
Object.defineProperty(MaterialDocItems, 'name', { value: 'TransferService.MaterialDocItems' })

export function _SerialNumberAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class SerialNumber extends Base {
        Material?: string;
        SerialNumber?: string;
        MaterialDocument?: string;
        MaterialDocumentItem?: string;
        MaterialDocumentYear?: string;
      static actions: {
    }
  };
}
export class SerialNumber extends _SerialNumberAspect(__.Entity) {}
export class SerialNumbers extends Array<SerialNumber> {}
Object.defineProperty(SerialNumber, 'name', { value: 'TransferService.SerialNumbers' })
Object.defineProperty(SerialNumbers, 'name', { value: 'TransferService.SerialNumbers' })
