// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_';
export default { name: 'API_OUTBOUND_DELIVERY_SRV_V2' };
export type HuReturn = {
    SystemMessageIdentification?: string;
    SystemMessageNumber?: string;
    SystemMessageType?: string;
    SystemMessageVariable1?: string;
    SystemMessageVariable2?: string;
    SystemMessageVariable3?: string;
    SystemMessageVariable4?: string;
    DeliveryDocument?: string;
};
export type CreatedDeliveryItem = {
    DeliveryDocument?: string;
    DeliveryDocumentItem?: string;
};
export type PickingReport = {
    SystemMessageIdentification?: string;
    SystemMessageNumber?: string;
    SystemMessageType?: string;
    SystemMessageVariable1?: string;
    SystemMessageVariable2?: string;
    SystemMessageVariable3?: string;
    SystemMessageVariable4?: string;
    Batch?: string;
    DeliveryQuantityUnit?: string;
    ActualDeliveryQuantity?: number;
    DeliveryDocumentItemText?: string;
    Material?: string;
    DeliveryDocumentItem?: string;
    DeliveryDocument?: string;
};
export type Return = {
    CollectiveProcessing?: string;
    DeliveryDocument?: string;
    DeliveryDocumentItem?: string;
    ScheduleLine?: string;
    CollectiveProcessingMsgCounter?: string;
    SystemMessageIdentification?: string;
    SystemMessageNumber?: string;
    SystemMessageType?: string;
    SystemMessageVariable1?: string;
    SystemMessageVariable2?: string;
    SystemMessageVariable3?: string;
    SystemMessageVariable4?: string;
    CollectiveProcessingType?: string;
};
export function _A_OutbDeliveryItemTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_OutbDeliveryItemText extends Base {
        DeliveryDocument?: string;
        DeliveryDocumentItem?: string;
        TextElement?: string;
        Language?: string;
        TextElementDescription?: string;
        TextElementText?: string;
        DeliveryLongTextIsFormatted?: boolean;
        static actions: {};
    };
}
export class A_OutbDeliveryItemText extends _A_OutbDeliveryItemTextAspect(__.Entity) {}
export class A_OutbDeliveryItemText_ extends Array<A_OutbDeliveryItemText> {}
Object.defineProperty(A_OutbDeliveryItemText, 'name', { value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryItemText' });
Object.defineProperty(A_OutbDeliveryItemText_, 'name', {
    value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryItemText',
});

export function _A_OutbDeliveryHeaderTextAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_OutbDeliveryHeaderText extends Base {
        DeliveryDocument?: string;
        TextElement?: string;
        Language?: string;
        TextElementDescription?: string;
        TextElementText?: string;
        DeliveryLongTextIsFormatted?: boolean;
        static actions: {};
    };
}
export class A_OutbDeliveryHeaderText extends _A_OutbDeliveryHeaderTextAspect(__.Entity) {}
export class A_OutbDeliveryHeaderText_ extends Array<A_OutbDeliveryHeaderText> {}
Object.defineProperty(A_OutbDeliveryHeaderText, 'name', {
    value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryHeaderText',
});
Object.defineProperty(A_OutbDeliveryHeaderText_, 'name', {
    value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryHeaderText',
});

export function _A_HandlingUnitHeaderDeliveryAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_HandlingUnitHeaderDelivery extends Base {
        HandlingUnitInternalId?: string;
        CreatedByUser?: string;
        CreationDate?: string;
        CreationTime?: string;
        DeliveryDocument?: string;
        GrossVolume?: number;
        GrossWeight?: number;
        HandlingUnitBaseUnitOfMeasure?: string;
        HandlingUnitContentDescription?: string;
        HandlingUnitExternalId?: string;
        HandlingUnitExternalIdType?: string;
        HandlingUnitGroup1?: string;
        HandlingUnitGroup2?: string;
        HandlingUnitGroup3?: string;
        HandlingUnitGroup4?: string;
        HandlingUnitGroup5?: string;
        HandlingUnitHeight?: number;
        HandlingUnitInternalStatus?: string;
        HandlingUnitLength?: number;
        HandlingUnitLowerLevelRefer?: string;
        HandlingUnitMaxVolume?: number;
        HandlingUnitMaxWeight?: number;
        HandlingUnitNetVolume?: number;
        HandlingUnitSecondExternalId?: string;
        HandlingUnitTareVolume?: number;
        HandlingUnitTareVolumeUnit?: string;
        HandlingUnitTareWeight?: number;
        HandlingUnitTareWeightUnit?: string;
        HandlingUnitUoMDimension?: string;
        HandlingUnitWidth?: number;
        LastChangeDate?: string;
        LastChangedByUser?: string;
        LastChangeTime?: string;
        NetWeight?: number;
        PackagingMaterial?: string;
        PackagingMaterialCategory?: string;
        PackagingMaterialGroup?: string;
        PackagingMaterialType?: string;
        PackingInstructionNumber?: string;
        ShippingPoint?: string;
        VolumeUnit?: string;
        WeightUnit?: string;
        Warehouse?: string;
        to_HandlingUnitItemDelivery?: __.Association.to.many<A_HandlingUnitItemDelivery_>;
        to_HandlingUnitItemDelivery_HandlingUnitInternalId?: string;
        to_HandlingUnitItemDelivery_HandlingUnitItem?: string;
        static actions: {};
    };
}
export class A_HandlingUnitHeaderDelivery extends _A_HandlingUnitHeaderDeliveryAspect(__.Entity) {}
export class A_HandlingUnitHeaderDelivery_ extends Array<A_HandlingUnitHeaderDelivery> {}
Object.defineProperty(A_HandlingUnitHeaderDelivery, 'name', {
    value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_HandlingUnitHeaderDelivery',
});
Object.defineProperty(A_HandlingUnitHeaderDelivery_, 'name', {
    value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_HandlingUnitHeaderDelivery',
});

export function _A_HandlingUnitItemDeliveryAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_HandlingUnitItemDelivery extends Base {
        HandlingUnitInternalId?: string;
        HandlingUnitItem?: string;
        Batch?: string;
        DeliveryDocument?: string;
        DeliveryDocumentItem?: string;
        HandlingUnitExternalId?: string;
        HandlingUnitNestedInternalId?: string;
        HandlingUnitNrOfAuxPackgMat?: number;
        HandlingUnitNumberOfSerialnumb?: number;
        HandlingUnitQuantity?: number;
        HandlingUnitQuantityUnit?: string;
        HandlingUnitTypeOfContent?: string;
        Material?: string;
        MaterialByCustomer?: string;
        MaterialName?: string;
        SerialNumberProfile?: string;
        static actions: {};
    };
}
export class A_HandlingUnitItemDelivery extends _A_HandlingUnitItemDeliveryAspect(__.Entity) {}
export class A_HandlingUnitItemDelivery_ extends Array<A_HandlingUnitItemDelivery> {}
Object.defineProperty(A_HandlingUnitItemDelivery, 'name', {
    value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_HandlingUnitItemDelivery',
});
Object.defineProperty(A_HandlingUnitItemDelivery_, 'name', {
    value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_HandlingUnitItemDelivery',
});

export function _A_OutbDeliveryAddress2Aspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_OutbDeliveryAddress2 extends Base {
        DeliveryDocument?: string;
        PartnerFunction?: string;
        DeliveryVersion?: string;
        AdditionalStreetPrefixName?: string;
        AddressID?: string;
        AdditionalStreetSuffixName?: string;
        AddressTimeZone?: string;
        Building?: string;
        BusinessPartnerName1?: string;
        BusinessPartnerName2?: string;
        BusinessPartnerName3?: string;
        BusinessPartnerName4?: string;
        PersonFamilyName?: string;
        PersonGivenName?: string;
        CareOfName?: string;
        CityName?: string;
        CompanyPostalCode?: string;
        CorrespondenceLanguage?: string;
        Country?: string;
        County?: string;
        DeliveryServiceNumber?: string;
        DeliveryServiceTypeCode?: string;
        District?: string;
        EmailAddress?: string;
        FaxNumber?: string;
        FaxNumberExtension?: string;
        Floor?: string;
        FormOfAddress?: string;
        HomeCityName?: string;
        HouseNumber?: string;
        HouseNumberSupplementText?: string;
        MobilePhoneNumber?: string;
        PhoneNumber?: string;
        PhoneNumberExtension?: string;
        POBox?: string;
        POBoxDeviatingCityName?: string;
        POBoxDeviatingCountry?: string;
        POBoxDeviatingRegion?: string;
        POBoxIsWithoutNumber?: boolean;
        POBoxLobbyName?: string;
        POBoxPostalCode?: string;
        PostalCode?: string;
        PrfrdCommMediumType?: string;
        Region?: string;
        RoomNumber?: string;
        StreetName?: string;
        StreetPrefixName?: string;
        StreetSuffixName?: string;
        TaxJurisdiction?: string;
        TransportZone?: string;
        static actions: {};
    };
}
export class A_OutbDeliveryAddress2 extends _A_OutbDeliveryAddress2Aspect(__.Entity) {}
export class A_OutbDeliveryAddress2_ extends Array<A_OutbDeliveryAddress2> {}
Object.defineProperty(A_OutbDeliveryAddress2, 'name', { value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryAddress2' });
Object.defineProperty(A_OutbDeliveryAddress2_, 'name', {
    value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryAddress2',
});

export function _A_OutbDeliveryItemAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_OutbDeliveryItem extends Base {
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
        to_DeliveryDocumentItemText?: __.Association.to.many<A_OutbDeliveryItemText_>;
        to_DeliveryDocumentItemText_DeliveryDocument?: string;
        to_DeliveryDocumentItemText_DeliveryDocumentItem?: string;
        to_DeliveryDocumentItemText_TextElement?: string;
        to_DeliveryDocumentItemText_Language?: string;
        to_HandlingUnitItemDelivery?: __.Association.to.many<A_HandlingUnitItemDelivery_>;
        to_HandlingUnitItemDelivery_HandlingUnitInternalId?: string;
        to_HandlingUnitItemDelivery_HandlingUnitItem?: string;
        to_DocumentFlow?: __.Association.to.many<A_OutbDeliveryDocFlow_>;
        to_DocumentFlow_PrecedingDocument?: string;
        to_DocumentFlow_PrecedingDocumentItem?: string;
        to_DocumentFlow_SubsequentDocumentCategory?: string;
        to_SerialDeliveryItem?: __.Association.to<A_SerialNmbrDelivery>;
        to_SerialDeliveryItem_MaintenanceItemObjectList?: number;
        static actions: {
            CreateBatchSplitItem: {
                (
                    PickQuantityInSalesUOM: number,
                    Batch: string,
                    ActualDeliveryQuantity: number,
                    DeliveryQuantityUnit: string
                ): CreatedDeliveryItem;
                __parameters: {
                    PickQuantityInSalesUOM: number;
                    Batch: string;
                    ActualDeliveryQuantity: number;
                    DeliveryQuantityUnit: string;
                };
                __returns: CreatedDeliveryItem;
            };
        };
    };
}
export class A_OutbDeliveryItem extends _A_OutbDeliveryItemAspect(__.Entity) {}
export class A_OutbDeliveryItem_ extends Array<A_OutbDeliveryItem> {}
Object.defineProperty(A_OutbDeliveryItem, 'name', { value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryItem' });
Object.defineProperty(A_OutbDeliveryItem_, 'name', { value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryItem' });

export function _A_OutbDeliveryHeaderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_OutbDeliveryHeader extends Base {
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
        to_DeliveryDocumentItem?: __.Association.to.many<A_OutbDeliveryItem_>;
        to_DeliveryDocumentItem_DeliveryDocument?: string;
        to_DeliveryDocumentItem_DeliveryDocumentItem?: string;
        to_DeliveryDocumentPartner?: __.Association.to.many<A_OutbDeliveryPartner_>;
        to_DeliveryDocumentPartner_PartnerFunction?: string;
        to_DeliveryDocumentPartner_SDDocument?: string;
        to_HandlingUnitHeaderDelivery?: __.Association.to.many<A_HandlingUnitHeaderDelivery_>;
        to_HandlingUnitHeaderDelivery_HandlingUnitInternalId?: string;
        to_DeliveryDocumentText?: __.Association.to.many<A_OutbDeliveryHeaderText_>;
        to_DeliveryDocumentText_DeliveryDocument?: string;
        to_DeliveryDocumentText_TextElement?: string;
        to_DeliveryDocumentText_Language?: string;
        static actions: {
            DeleteAllHandlingUnitsFromDelivery: { (): HuReturn; __parameters: {}; __returns: HuReturn };
            PickAndBatchSplitOneItem: {
                (
                    DeliveryDocumentItem: string,
                    Batch: string,
                    SplitQuantity: number,
                    SplitQuantityUnit: string
                ): Array<PickingReport>;
                __parameters: {
                    DeliveryDocumentItem: string;
                    Batch: string;
                    SplitQuantity: number;
                    SplitQuantityUnit: string;
                };
                __returns: Array<PickingReport>;
            };
            SetPickingQuantityWithBaseQuantity: {
                (
                    ActualDeliveredQtyInBaseUnit: number,
                    BaseUnit: string,
                    DeliveryDocumentItem: string
                ): Array<PickingReport>;
                __parameters: { ActualDeliveredQtyInBaseUnit: number; BaseUnit: string; DeliveryDocumentItem: string };
                __returns: Array<PickingReport>;
            };
            AddSerialNumberToDeliveryItem: {
                (DeliveryDocumentItem: string, SerialNumber: string): Array<PickingReport>;
                __parameters: { DeliveryDocumentItem: string; SerialNumber: string };
                __returns: Array<PickingReport>;
            };
            DeleteSerialNumberFromDeliveryItem: {
                (DeliveryDocumentItem: string, SerialNumber: string): Array<PickingReport>;
                __parameters: { DeliveryDocumentItem: string; SerialNumber: string };
                __returns: Array<PickingReport>;
            };
            DeleteAllSerialNumbersFromDeliveryItem: {
                (DeliveryDocumentItem: string): Array<PickingReport>;
                __parameters: { DeliveryDocumentItem: string };
                __returns: Array<PickingReport>;
            };
            PostGoodsIssue: { (): Array<PickingReport>; __parameters: {}; __returns: Array<PickingReport> };
            ReverseGoodsIssue: {
                (ActualGoodsMovementDate: string): Array<Return>;
                __parameters: { ActualGoodsMovementDate: string };
                __returns: Array<Return>;
            };
            ConfirmPickingAllItems: { (): Array<PickingReport>; __parameters: {}; __returns: Array<PickingReport> };
            ConfirmPickingOneItem: {
                (DeliveryDocumentItem: string): Array<PickingReport>;
                __parameters: { DeliveryDocumentItem: string };
                __returns: Array<PickingReport>;
            };
            PickAllItems: { (): Array<PickingReport>; __parameters: {}; __returns: Array<PickingReport> };
            PickOneItem: {
                (DeliveryDocumentItem: string): Array<PickingReport>;
                __parameters: { DeliveryDocumentItem: string };
                __returns: Array<PickingReport>;
            };
            PickOneItemWithSalesQuantity: {
                (
                    DeliveryQuantityUnit: string,
                    DeliveryDocumentItem: string,
                    ActualDeliveryQuantity: number
                ): Array<PickingReport>;
                __parameters: {
                    DeliveryQuantityUnit: string;
                    DeliveryDocumentItem: string;
                    ActualDeliveryQuantity: number;
                };
                __returns: Array<PickingReport>;
            };
            PickOneItemWithBaseQuantity: {
                (
                    BaseUnit: string,
                    ActualDeliveredQtyInBaseUnit: number,
                    DeliveryDocumentItem: string
                ): Array<PickingReport>;
                __parameters: { BaseUnit: string; ActualDeliveredQtyInBaseUnit: number; DeliveryDocumentItem: string };
                __returns: Array<PickingReport>;
            };
        };
    };
}
export class A_OutbDeliveryHeader extends _A_OutbDeliveryHeaderAspect(__.Entity) {}
export class A_OutbDeliveryHeader_ extends Array<A_OutbDeliveryHeader> {}
Object.defineProperty(A_OutbDeliveryHeader, 'name', { value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryHeader' });
Object.defineProperty(A_OutbDeliveryHeader_, 'name', { value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryHeader' });

export function _A_OutbDeliveryDocFlowAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_OutbDeliveryDocFlow extends Base {
        PrecedingDocument?: string;
        PrecedingDocumentItem?: string;
        SubsequentDocumentCategory?: string;
        Deliveryversion?: string;
        PrecedingDocumentCategory?: string;
        Subsequentdocument?: string;
        QuantityInBaseUnit?: number;
        SubsequentDocumentItem?: string;
        SDFulfillmentCalculationRule?: string;
        TransferOrderInWrhsMgmtIsConfd?: boolean;
        static actions: {};
    };
}
export class A_OutbDeliveryDocFlow extends _A_OutbDeliveryDocFlowAspect(__.Entity) {}
export class A_OutbDeliveryDocFlow_ extends Array<A_OutbDeliveryDocFlow> {}
Object.defineProperty(A_OutbDeliveryDocFlow, 'name', { value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryDocFlow' });
Object.defineProperty(A_OutbDeliveryDocFlow_, 'name', { value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryDocFlow' });

export function _A_MaintenanceItemObjectAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_MaintenanceItemObject extends Base {
        MaintenanceItemObject?: number;
        MaintenanceItemObjectList?: number;
        Assembly?: string;
        Equipment?: string;
        FunctionalLocation?: string;
        MaintenanceNotification?: string;
        MaintObjectLocAcctAssgmtNmbr?: string;
        Material?: string;
        SerialNumber?: string;
        static actions: {};
    };
}
export class A_MaintenanceItemObject extends _A_MaintenanceItemObjectAspect(__.Entity) {}
export class A_MaintenanceItemObject_ extends Array<A_MaintenanceItemObject> {}
Object.defineProperty(A_MaintenanceItemObject, 'name', {
    value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_MaintenanceItemObject',
});
Object.defineProperty(A_MaintenanceItemObject_, 'name', {
    value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_MaintenanceItemObject',
});

export function _A_SerialNmbrDeliveryAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_SerialNmbrDelivery extends Base {
        MaintenanceItemObjectList?: number;
        DeliveryDate?: string;
        DeliveryDocument?: string;
        DeliveryDocumentItem?: string;
        SDDocumentCategory?: string;
        to_MaintenanceItemObject?: __.Association.to.many<A_MaintenanceItemObject_>;
        to_MaintenanceItemObject_MaintenanceItemObject?: number;
        to_MaintenanceItemObject_MaintenanceItemObjectList?: number;
        static actions: {};
    };
}
export class A_SerialNmbrDelivery extends _A_SerialNmbrDeliveryAspect(__.Entity) {}
export class A_SerialNmbrDelivery_ extends Array<A_SerialNmbrDelivery> {}
Object.defineProperty(A_SerialNmbrDelivery, 'name', { value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_SerialNmbrDelivery' });
Object.defineProperty(A_SerialNmbrDelivery_, 'name', { value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_SerialNmbrDelivery' });

export function _A_OutbDeliveryPartnerAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_OutbDeliveryPartner extends Base {
        PartnerFunction?: string;
        SDDocument?: string;
        AddressID?: string;
        BusinessPartnerAddressUUID?: string;
        RefBusinessPartnerAddressUUID?: string;
        ContactPerson?: string;
        Customer?: string;
        Personnel?: string;
        SDDocumentItem?: string;
        Supplier?: string;
        to_Address?: __.Association.to<A_OutbDeliveryAddress>;
        to_Address_AddressID?: string;
        to_Address_POBox?: string;
        to_Address_POBoxDeviatingCountry?: string;
        to_Address2?: __.Association.to<A_OutbDeliveryAddress2>;
        to_Address2_DeliveryDocument?: string;
        to_Address2_PartnerFunction?: string;
        static actions: {};
    };
}
export class A_OutbDeliveryPartner extends _A_OutbDeliveryPartnerAspect(__.Entity) {}
export class A_OutbDeliveryPartner_ extends Array<A_OutbDeliveryPartner> {}
Object.defineProperty(A_OutbDeliveryPartner, 'name', { value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryPartner' });
Object.defineProperty(A_OutbDeliveryPartner_, 'name', { value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryPartner' });

export function _A_OutbDeliveryAddressAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class A_OutbDeliveryAddress extends Base {
        AddressID?: string;
        POBox?: string;
        POBoxDeviatingCountry?: string;
        AdditionalStreetPrefixName?: string;
        AdditionalStreetSuffixName?: string;
        AddressTimeZone?: string;
        Building?: string;
        BusinessPartnerName1?: string;
        BusinessPartnerName2?: string;
        BusinessPartnerName3?: string;
        BusinessPartnerName4?: string;
        CareOfName?: string;
        CityCode?: string;
        CityName?: string;
        CitySearch?: string;
        CompanyPostalCode?: string;
        CorrespondenceLanguage?: string;
        Country?: string;
        County?: string;
        DeliveryServiceNumber?: string;
        DeliveryServiceTypeCode?: string;
        District?: string;
        FaxNumber?: string;
        Floor?: string;
        FormOfAddress?: string;
        FullName?: string;
        HomeCityName?: string;
        HouseNumber?: string;
        HouseNumberSupplementText?: string;
        Nation?: string;
        Person?: string;
        PhoneNumber?: string;
        POBoxDeviatingCityName?: string;
        POBoxDeviatingRegion?: string;
        POBoxIsWithoutNumber?: boolean;
        POBoxLobbyName?: string;
        POBoxPostalCode?: string;
        PostalCode?: string;
        PrfrdCommMediumType?: string;
        Region?: string;
        RoomNumber?: string;
        SearchTerm1?: string;
        StreetName?: string;
        StreetPrefixName?: string;
        StreetSearch?: string;
        StreetSuffixName?: string;
        TaxJurisdiction?: string;
        TransportZone?: string;
        static actions: {};
    };
}
export class A_OutbDeliveryAddress extends _A_OutbDeliveryAddressAspect(__.Entity) {}
export class A_OutbDeliveryAddress_ extends Array<A_OutbDeliveryAddress> {}
Object.defineProperty(A_OutbDeliveryAddress, 'name', { value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryAddress' });
Object.defineProperty(A_OutbDeliveryAddress_, 'name', { value: 'API_OUTBOUND_DELIVERY_SRV_V2.A_OutbDeliveryAddress' });
