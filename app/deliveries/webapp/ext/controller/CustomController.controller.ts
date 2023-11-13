import ControllerExtension from 'sap/ui/core/mvc/ControllerExtension';
import ExtensionAPI from 'sap/fe/templates/ListReport/ExtensionAPI';
import JSONModel from 'sap/ui/model/json/JSONModel';

/**
 * @namespace deliveries.ext.controller.CustomController
 * @controller
 */
export default class CustomController extends ControllerExtension<ExtensionAPI> {
    static overrides = {
        /**
         * Called when a controller is instantiated and its View controls (if available) are already created.
         * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
         * @memberOf deliveries.ext.controller.CustomController
         */
        onInit(this: CustomController) {
            // you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
            this.base.getExtensionAPI().getEditFlow().getView().setModel(new JSONModel({}), 'customColumns');
        },
    };
}
