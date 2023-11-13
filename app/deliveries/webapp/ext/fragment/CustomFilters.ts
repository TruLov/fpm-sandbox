import ExtensionAPI from 'sap/fe/core/ExtensionAPI';
import FilterBar from 'sap/fe/macros/filterBar/FilterBarAPI';
import UI5Event from 'sap/ui/base/Event';
import { ValueState } from 'sap/ui/core/library';

type TEventParameters = {
    id: string;
    newValue: string;
    value: string;
};

/**
 * Custom filter DeliveryDocument
 *
 * @param this
 * @param event the event object provided by the event provider
 */
export function filterDeliveryDocument(this: ExtensionAPI, event: UI5Event) {
    const { newValue } = <TEventParameters>event.getParameters();

    const newValueContainsItemId = newValue.length > 10;
    if (newValueContainsItemId) {
        const documentId = newValue.substring(0, 10);
        const itemId = newValue.substring(10, 12);

        const filterBar = <FilterBar>(
            this.getEditFlow()
                .getView()
                .byId('deliveries::OutboundDeliveryItemsList--fe::FilterBar::OutboundDeliveryItems::FilterBar')
        );
        filterBar.setFilterValues('DeliveryDocument', documentId);
        filterBar.setFilterValues('DeliveryDocumentItem', itemId);
    }
}

export function onStringFilterFormatValue(value: string): ValueState {
    return !value ? ValueState.Error : ValueState.None;
}
