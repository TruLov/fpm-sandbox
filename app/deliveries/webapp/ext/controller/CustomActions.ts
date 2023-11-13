import ExtensionAPI from 'sap/fe/core/ExtensionAPI';
import Context from 'sap/ui/model/odata/v4/Context';

/**
 * Generated event handler.
 *
 * @param this reference to the 'this' that the event handler is bound to.
 * @param pageContext the context of the page on which the event was fired
 */
export function submit(this: ExtensionAPI, pageContext: Context) {
    const customColumnsData = this.getEditFlow().getView().getModel('customColumns').getData();
    const selectedContexts = this.getSelectedContexts();

    for (let i = 0; i < selectedContexts.length; i++) {
        const element = selectedContexts[i];
        const quantity = customColumnsData[`${element.sPath}/quantity`];
        console.log(`Fetched quantity from custom column: ${quantity}`);
    }
}
