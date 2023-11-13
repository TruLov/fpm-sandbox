using DeliveryService as service from '../../srv/transfer-service';

annotate service.OutboundDeliveryItems with @(UI.LineItem: [
    {
        $Type: 'UI.DataField',
        Label: 'DeliveryDocumentItem',
        Value: DeliveryDocumentItem,
    },
    {
        $Type: 'UI.DataField',
        Label: 'DeliveryDocument',
        Value: DeliveryDocument,
    },
    {
        $Type: 'UI.DataField',
        Label: 'DeliveryDocumentItemText',
        Value: DeliveryDocumentItemText,
    },
    {
        $Type: 'UI.DataField',
        Label: 'ActualDeliveredQtyInBaseUnit',
        Value: ActualDeliveredQtyInBaseUnit,
    },
    {
        $Type: 'UI.DataField',
        Label: 'BaseUnit',
        Value: BaseUnit,
    },
]);

annotate service.OutboundDeliveryItems with @(
    UI.FieldGroup #GeneratedGroup1: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'DeliveryDocument',
                Value: DeliveryDocument,
            },
            {
                $Type: 'UI.DataField',
                Label: 'DeliveryDocumentItem',
                Value: DeliveryDocumentItem,
            },
            {
                $Type: 'UI.DataField',
                Label: 'DeliveryDocumentItemText',
                Value: DeliveryDocumentItemText,
            },
            {
                $Type: 'UI.DataField',
                Label: 'ActualDeliveredQtyInBaseUnit',
                Value: ActualDeliveredQtyInBaseUnit,
            },
            {
                $Type: 'UI.DataField',
                Label: 'BaseUnit',
                Value: BaseUnit,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Material',
                Value: Material,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Batch',
                Value: Batch,
            },
            {
                $Type: 'UI.DataField',
                Label: 'StorageLocation',
                Value: StorageLocation,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Plant',
                Value: Plant,
            },
            {
                $Type: 'UI.DataField',
                Label: 'CreationDate',
                Value: CreationDate,
            },
        ],
    },
    UI.Facets                     : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'GeneratedFacet1',
        Label : 'General Information',
        Target: '@UI.FieldGroup#GeneratedGroup1',
    }, ]
);

annotate service.OutboundDeliveryItems with @(UI.SelectionFields: [DeliveryDocumentItem, ]);

annotate service.OutboundDeliveryItems with {
    DeliveryDocumentItem @Common.Label: 'DeliveryDocumentItem'
};
