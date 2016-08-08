
const appId = "FredrikJ-test-PRD-b576c9596-786fa476";

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}


const getRecords = function(query) {
    const ebayApi = new HttpClient();
    const url = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.12.0&SECURITY-APPNAME=' + appId + '&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&paginationInput.entriesPerPage=10&categoryId=176985&keywords=' + query;
    ebayApi.get(url, function(callback) {
        console.log(callback);
    });
};


export default getRecords;
