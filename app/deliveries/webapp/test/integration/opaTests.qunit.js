sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'deliveries/test/integration/FirstJourney',
        'deliveries/test/integration/pages/OutboundDeliveryItemsList',
        'deliveries/test/integration/pages/OutboundDeliveryItemsObjectPage',
    ],
    function (JourneyRunner, opaJourney, OutboundDeliveryItemsList, OutboundDeliveryItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('deliveries') + '/index.html',
        });

        JourneyRunner.run(
            {
                pages: {
                    onTheOutboundDeliveryItemsList: OutboundDeliveryItemsList,
                    onTheOutboundDeliveryItemsObjectPage: OutboundDeliveryItemsObjectPage,
                },
            },
            opaJourney.run
        );
    }
);
