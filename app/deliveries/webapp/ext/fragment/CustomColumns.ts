import ExtensionAPI from 'sap/fe/core/ExtensionAPI';
import UI5Event from 'sap/ui/base/Event';

/**
 * @name onChangeQuantity
 * Generated event handler for costum column Quantity (ActualDeliveredQtyInBaseUnit)
 *
 * @param this reference to the 'this' that the event handler is bound to.
 * @param event the event object provided by the event provider
 */
export function onChangeQuantity(this: ExtensionAPI, event: UI5Event) {
    const customColumnsModel = this.getEditFlow().getView().getModel('customColumns');
    const { sPath } = event.getSource().getBindingContext();

    const data = customColumnsModel.getData();
    data[`${sPath}/quantity`] = event.getParameter('newValue');
}
