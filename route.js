//*** (IMPORTS STARTS ) ****
var updatecrm = require('./invokecrm.js');
var updateebs = require('./invokeebs.js');
var updatelsp = require('./invokelsp.js');
var updatedelivery = require('./invokedelivery.js');
var querycrm = require('./query.js');
var queryebs = require('./queryebs.js');
var querylsp = require('./querylsp.js');
var querydelivery = require('./querydelivery.js');

//***  IMPORTS ENDS ****
exports.invoke = function (request,reply) {
	console.log('the function='+request.body.header.event_const);
	var header = request.body.header.event_const;
	var jsonblob = request.body.jsonblob;
	console.log("Header value:"+header);
	var fnName;
	if(header === "CNST_CREATE_SALES_ORDER"){
		console.log("In route js entered and stored Create Sales Order function");
		fnName = "CreateSalesOrder";
		orgname  = updatecrm;
	}

	if(header === "CNST_UPDATE_STATUS_ON_PROCESS_ORDER"){
		console.log("In route js entered and stored Update Status On ProcessOrder function");
		fnName = "UpdateStatusOnProcessOrder";
		orgname  = updatecrm;
	}
	
	if(header === "CNST_PROCESS_ORDER_IN_EBS"){
		console.log("In route js entered and stored Update Status On ProcessOrder function");
		fnName = "UpdateProcessOrderInEBS";
		orgname  = updateebs;
	}
	
	if(header === "CNST_UPDATE_STATUS_ON_CANCEL_ORDER"){
		console.log("In route js entered and stored Update Status On CancelOrder function");
		fnName = "UpdateStatusOnCancelOrder";
		orgname  = updateebs;
	}
	
	if(header === "CNST_GENERATE_LSP_DETAILS_ID"){
		console.log("In route js entered and stored Update Status On CancelOrder function");
		fnName = "GenerateLSPDetailsID";
		orgname  = updatelsp;
	}
	if(header === "CNST_UPDATE_CRM_DASHBOARD_ON_ACKNOWLEGDE"){
		console.log("In route js entered and stored Update Status On CancelOrder function");
		fnName = "updateCRMDashboardOnAcknowledge";
		orgname  = updateebs;
	}
	
	if(header === "CNST_UPDATE_LSP_STATUS_FOR_PRODUCTID"){
		console.log("In route js entered and stored Update Status On CancelOrder function");
		fnName = "UpdateLSPStatusesForProductID";
		orgname  = updatelsp;
	}
	
	if(header === "CNST_PICK_RELEASE_ORDER_LSP"){
		console.log("In route js entered and stored Update Status On CancelOrder function");
		fnName = "PickReleaseOrderLSP";
		orgname  = updatelsp;
	}
	
	if(header === "CNST_UPDATE_LSP_DASHBOARD_ON_ACKNOWLEDGE"){
		console.log("In route js entered and stored Update LSP Dashboard on Acknolwdege function");
		fnName = "updateLSPDashboardOnAcknowledge";
		orgname  = updatelsp;
	}
	if(header === "CNST_UPDATE_RELEASE_ORDER_IN_EBS"){
		console.log("In route js entered and stored Update Release Order in EBS function");
		fnName = "UpdateReleaseOrderInEBS";
		orgname  = updateebs;
	}
	if(header === "CNST_CREATE_STATUS_CONFIG"){
		console.log("In route js entered CreateStatusConfig function");
		fnName = "CreateStatusConfig";
		orgname  = updatecrm;
    }
	if(header === "CNST_UPDATE_SHIP_ORDER_IN_LSP"){
		console.log("In route js entered CreateStatusConfig function");
		fnName = "UpdateShipOrderInLSP";
		orgname  = updatelsp;
    }
	if(header === "CNST_UPDATE_STATUS_IN_TRANSPORTER"){
		console.log("In route js entered updateStatusInTransporter function");
		fnName = "updateStatusInTransporter";
		orgname  = updatedelivery;
    }
	if(header === "CNST_UPDATE_SHIP_DELIVERED_IN_TRANSPORTER"){
		console.log("In route js entered UpdateShipDeliveredInTransporter function");
		fnName = "UpdateShipDeliveredInTransporter";
		orgname  = updatedelivery;
    }
	
	if(header === "CNST_UPDATE_CRM_DASHBOARD_ON_ERROR"){
		console.log("In route js entered updateCRMDashboardOnError function");
		fnName = "updateCRMDashboardOnError";
		orgname  = updatecrm;
    }
	if(header === "CNST_UPDATE_DASHBOARD_ON_TRANSPORTER_AKNOWLEDGE"){
		console.log("In route js entered updateDashboardOnTransporterAcknowledge function");
		fnName = "updateDashboardOnTransporterAcknowledge";
		orgname  = updatedelivery;
    }

	if(header === "CNST_UPDATE_SHIPMENT_IN_LSPORDERSTATUS"){
		console.log("In route js entered updateShipmentInLSPOrderStatus function");
		fnName = "updateShipmentInLSPOrderStatus";
		orgname  = updatelsp;
    }
	
	if(header === "CNST_UPDATE_EBS_DASHBOARD_ON_ERROR"){
		console.log("In route js entered updateEBSDashboardonError function");
		fnName = "updateEBSDashboardonError";
		orgname  = updateebs;
    }
	if(header === "CNST_UPDATE_STATUS_CONFIG"){
		console.log("In route js entered updateStatusConfig function");
		fnName = "updateStatusConfig";
		orgname  = updatelsp;
    }
	if(header === "CNST_DELETE_STATUS_CONFIG"){
		console.log("In route js entered deleteStatusConfig function");
		fnName = "deleteStatusConfig";
		orgname  = updatecrm;
    }
	if(header === "CNST_LOG_CRM_WARNINGS"){
		console.log("In route js entered logWarningsDetails function");
		fnName = "LogCRMWarnings";
		orgname  = updatecrm;
    }
	if(header === "CNST_UPDATE_RELEASE_ORDER_IN_EBS_GEN_LSP"){
		console.log("In route js entered UpdateReleaseOrderAndGenerateLspDetails function");
		fnName = "UpdateReleaseOrderAndGenerateLspDetails";
		orgname  = updateebs;
    }
	//modifications starts here
	
	if(header === "CNST_UPDATE_DASHBOARD_STATUS_ON_WARNINGS"){
		console.log("In route js entered updateDashboardStatusBasedOnWarings function");
		fnName = "updateDashboardStatusBasedOnWarings";
		orgname  = updatecrm;
    }
	
	console.log("Function name at Routes layer:"+fnName);
	orgname.invokeSDK(fnName,jsonblob,reply);
}

// ***  ( QUERY SDK METHODS STARTS ) ***//      
exports.querygetAllSalesOrder = function (request,reply) {
	var fnName = "getAllSalesOrder";
	queryebs.querySDK(fnName, request, reply);
	
}

exports.querygetAllEBSOrders = function (request,reply) {
	var fnName = "getAllEBSOrders";
	queryebs.querySDK(fnName, request, reply);
	
}

exports.querygetOrderDetailsByCRMOrderNo = function (request,reply) {
  var fnName = "getOrderDetailsByCRMOrderNo";
  querycrm.querySDK(fnName, request, reply);
  
}
exports.querygetOrdersByCRMDashboardStatus = function (request,reply) {
	var fnName = "getOrdersByCRMDashboardStatus";
	querycrm.querySDK(fnName, request, reply);
	
}
exports.querygetOrdersByEBSDashboardStatus = function (request,reply) {
	var fnName = "getOrdersByEBSDashboardStatus";
	queryebs.querySDK(fnName, request, reply);
	
}
exports.querygetAllSalesOrderhd = function (request,reply) {
	var fnName = "getAllSalesOrderhd";
	queryebs.querySDK(fnName, request, reply);
	
}
exports.querygetEbsMasterID = function (request,reply) {
	var fnName = "getEbsMasterID";
	queryebs.querySDK(fnName, request, reply);
	
}
exports.querygetAllLSPOrders = function (request,reply) {
	var fnName = "getAllLSPOrders";
	querylsp.querySDK(fnName, request, reply);
	
}
exports.querygetOrdersByLSPDashboardStatus = function (request,reply) {
	var fnName = "getOrdersByLSPDashboardStatus";
	querylsp.querySDK(fnName, request, reply);
	
}
exports.querygetstatusconfig = function (request,reply) {
	var fnName = "getstatusconfig";
	querycrm.querySDK(fnName, request, reply);
	
}
exports.querygetAllTransporterOrders = function (request,reply) {
	var fnName = "getAllTransporterOrders";
	querydelivery.querySDK(fnName, request, reply);
	
}
exports.querygetLSPDetailsStatusByProdID = function (request,reply) {
	var fnName = "getLSPDetailsStatusByProdID";
	querylsp.querySDK(fnName, request, reply);
	
}
exports.querygetOrdersByTransportDashboardStatus = function (request,reply) {
	var fnName = "getOrdersByTransportDashboardStatus";
	querydelivery.querySDK(fnName, request, reply);
	
}
exports.querygetCRMMasterID = function (request,reply) {
	var fnName = "getCRMMasterID";
	querycrm.querySDK(fnName, request, reply);
	
}
exports.queryupdateCountInDashboard = function (request,reply) {
	var fnName = "updateCountInDashboard";
	querycrm.querySDK(fnName, request, reply);
	
}
exports.queryupdateEBSCountInDashboard = function (request,reply) {
	var fnName = "updateEBSCountInDashboard";
	querycrm.querySDK(fnName, request, reply);
	
}
exports.queryupdateLSPCountInDashboard = function (request,reply) {
	var fnName = "updateLSPCountInDashboard";
	querycrm.querySDK(fnName, request, reply);
	
}
exports.queryupdateDeliveryCountInDashboard = function (request,reply) {
	var fnName = "updateDeliveryCountInDashboard";
	querydelivery.querySDK(fnName, request, reply);
	
}
exports.querygetEbsMaster = function (request,reply) {
	var fnName = "getEbsMaster";
	queryebs.querySDK(fnName, request, reply);
	
}
exports.querygetWarnings = function (request,reply) {
	var fnName = "getWarnings";
	querycrm.querySDK(fnName, request, reply);
	
}
exports.querygetWarningsDetails = function (request,reply) {
	var fnName = "getWarningsDetails";
	querycrm.querySDK(fnName, request, reply);
	
}
exports.querygetstatusconfigByStatusID = function (request,reply) {
	var fnName = "getstatusconfigByStatusID";
	querycrm.querySDK(fnName, request, reply);
	
}
exports.querycheckcrmwarning = function (request,reply) {
	var fnName = "checkcrmwarning";
	querycrm.querySDK(fnName, request, reply);
	
}
exports.querygetAllWarningLogs = function (request,reply) {
	var fnName = "getAllWarningLogs";
	querycrm.querySDK(fnName, request, reply);
	
}
//modifications
exports.querygetLogwarningDetails = function (request,reply) {
	var fnName = "getLogwarningDetails";
	orgquery.querySDK(fnName, request, reply);
}
