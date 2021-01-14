// source: mobilecoind_api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

const jspb = require('google-protobuf');

const goog = jspb;
const global = Function('return this')();

const google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

goog.object.extend(proto, google_protobuf_empty_pb);
const external_pb = require('./external_pb.js');

goog.object.extend(proto, external_pb);
const blockchain_pb = require('./blockchain_pb.js');

goog.object.extend(proto, blockchain_pb);
goog.exportSymbol('proto.mobilecoind_api.AddMonitorRequest', null, global);
goog.exportSymbol('proto.mobilecoind_api.AddMonitorResponse', null, global);
goog.exportSymbol(
  'proto.mobilecoind_api.ArchiveBlockSignatureData',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.CreateAddressCodeRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.CreateAddressCodeResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.CreateRequestCodeRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.CreateRequestCodeResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.CreateTransferCodeRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.CreateTransferCodeResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GenerateEntropyResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GenerateOptimizationTxRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GenerateOptimizationTxResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GenerateTransferCodeTxRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GenerateTransferCodeTxResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GenerateTxFromTxOutListRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GenerateTxFromTxOutListResponse',
  null,
  global
);
goog.exportSymbol('proto.mobilecoind_api.GenerateTxRequest', null, global);
goog.exportSymbol('proto.mobilecoind_api.GenerateTxResponse', null, global);
goog.exportSymbol('proto.mobilecoind_api.GetAccountKeyRequest', null, global);
goog.exportSymbol('proto.mobilecoind_api.GetAccountKeyResponse', null, global);
goog.exportSymbol('proto.mobilecoind_api.GetBalanceRequest', null, global);
goog.exportSymbol('proto.mobilecoind_api.GetBalanceResponse', null, global);
goog.exportSymbol(
  'proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse',
  null,
  global
);
goog.exportSymbol('proto.mobilecoind_api.GetBlockInfoRequest', null, global);
goog.exportSymbol('proto.mobilecoind_api.GetBlockInfoResponse', null, global);
goog.exportSymbol('proto.mobilecoind_api.GetBlockRequest', null, global);
goog.exportSymbol('proto.mobilecoind_api.GetBlockResponse', null, global);
goog.exportSymbol('proto.mobilecoind_api.GetLedgerInfoResponse', null, global);
goog.exportSymbol('proto.mobilecoind_api.GetMonitorListResponse', null, global);
goog.exportSymbol(
  'proto.mobilecoind_api.GetMonitorStatusRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GetMonitorStatusResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GetNetworkStatusResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GetProcessedBlockRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GetProcessedBlockResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GetPublicAddressRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GetPublicAddressResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GetTxStatusAsReceiverRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GetTxStatusAsReceiverResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GetTxStatusAsSenderRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GetTxStatusAsSenderResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GetUnspentTxOutListRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.GetUnspentTxOutListResponse',
  null,
  global
);
goog.exportSymbol('proto.mobilecoind_api.MonitorStatus', null, global);
goog.exportSymbol('proto.mobilecoind_api.Outlay', null, global);
goog.exportSymbol(
  'proto.mobilecoind_api.ParseAddressCodeRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.ParseAddressCodeResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.ParseRequestCodeRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.ParseRequestCodeResponse',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.ParseTransferCodeRequest',
  null,
  global
);
goog.exportSymbol(
  'proto.mobilecoind_api.ParseTransferCodeResponse',
  null,
  global
);
goog.exportSymbol('proto.mobilecoind_api.PayAddressCodeRequest', null, global);
goog.exportSymbol('proto.mobilecoind_api.ProcessedTxOut', null, global);
goog.exportSymbol(
  'proto.mobilecoind_api.ProcessedTxOutDirection',
  null,
  global
);
goog.exportSymbol('proto.mobilecoind_api.ReceiverTxReceipt', null, global);
goog.exportSymbol('proto.mobilecoind_api.RemoveMonitorRequest', null, global);
goog.exportSymbol('proto.mobilecoind_api.SendPaymentRequest', null, global);
goog.exportSymbol('proto.mobilecoind_api.SendPaymentResponse', null, global);
goog.exportSymbol('proto.mobilecoind_api.SenderTxReceipt', null, global);
goog.exportSymbol('proto.mobilecoind_api.SubmitTxRequest', null, global);
goog.exportSymbol('proto.mobilecoind_api.SubmitTxResponse', null, global);
goog.exportSymbol('proto.mobilecoind_api.TxProposal', null, global);
goog.exportSymbol('proto.mobilecoind_api.TxStatus', null, global);
goog.exportSymbol('proto.mobilecoind_api.UnspentTxOut', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.Outlay = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.Outlay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.Outlay.displayName = 'proto.mobilecoind_api.Outlay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.UnspentTxOut = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.UnspentTxOut, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.UnspentTxOut.displayName =
    'proto.mobilecoind_api.UnspentTxOut';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.TxProposal = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.mobilecoind_api.TxProposal.repeatedFields_,
    null
  );
};
goog.inherits(proto.mobilecoind_api.TxProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.TxProposal.displayName =
    'proto.mobilecoind_api.TxProposal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.SenderTxReceipt = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.mobilecoind_api.SenderTxReceipt.repeatedFields_,
    null
  );
};
goog.inherits(proto.mobilecoind_api.SenderTxReceipt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.SenderTxReceipt.displayName =
    'proto.mobilecoind_api.SenderTxReceipt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.ReceiverTxReceipt = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.ReceiverTxReceipt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.ReceiverTxReceipt.displayName =
    'proto.mobilecoind_api.ReceiverTxReceipt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.MonitorStatus = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.MonitorStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.MonitorStatus.displayName =
    'proto.mobilecoind_api.MonitorStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.ProcessedTxOut = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.ProcessedTxOut, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.ProcessedTxOut.displayName =
    'proto.mobilecoind_api.ProcessedTxOut';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.AddMonitorRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.AddMonitorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.AddMonitorRequest.displayName =
    'proto.mobilecoind_api.AddMonitorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.AddMonitorResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.AddMonitorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.AddMonitorResponse.displayName =
    'proto.mobilecoind_api.AddMonitorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.RemoveMonitorRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.RemoveMonitorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.RemoveMonitorRequest.displayName =
    'proto.mobilecoind_api.RemoveMonitorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetMonitorListResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.mobilecoind_api.GetMonitorListResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.mobilecoind_api.GetMonitorListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetMonitorListResponse.displayName =
    'proto.mobilecoind_api.GetMonitorListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetMonitorStatusRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetMonitorStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetMonitorStatusRequest.displayName =
    'proto.mobilecoind_api.GetMonitorStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetMonitorStatusResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetMonitorStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetMonitorStatusResponse.displayName =
    'proto.mobilecoind_api.GetMonitorStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetUnspentTxOutListRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetUnspentTxOutListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetUnspentTxOutListRequest.displayName =
    'proto.mobilecoind_api.GetUnspentTxOutListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetUnspentTxOutListResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.mobilecoind_api.GetUnspentTxOutListResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.mobilecoind_api.GetUnspentTxOutListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetUnspentTxOutListResponse.displayName =
    'proto.mobilecoind_api.GetUnspentTxOutListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GenerateEntropyResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GenerateEntropyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GenerateEntropyResponse.displayName =
    'proto.mobilecoind_api.GenerateEntropyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetAccountKeyRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetAccountKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetAccountKeyRequest.displayName =
    'proto.mobilecoind_api.GetAccountKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetAccountKeyResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetAccountKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetAccountKeyResponse.displayName =
    'proto.mobilecoind_api.GetAccountKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetPublicAddressRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetPublicAddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetPublicAddressRequest.displayName =
    'proto.mobilecoind_api.GetPublicAddressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetPublicAddressResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetPublicAddressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetPublicAddressResponse.displayName =
    'proto.mobilecoind_api.GetPublicAddressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.ParseRequestCodeRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.ParseRequestCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.ParseRequestCodeRequest.displayName =
    'proto.mobilecoind_api.ParseRequestCodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.ParseRequestCodeResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.ParseRequestCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.ParseRequestCodeResponse.displayName =
    'proto.mobilecoind_api.ParseRequestCodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.CreateRequestCodeRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.CreateRequestCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.CreateRequestCodeRequest.displayName =
    'proto.mobilecoind_api.CreateRequestCodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.CreateRequestCodeResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.CreateRequestCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.CreateRequestCodeResponse.displayName =
    'proto.mobilecoind_api.CreateRequestCodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.ParseTransferCodeRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.ParseTransferCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.ParseTransferCodeRequest.displayName =
    'proto.mobilecoind_api.ParseTransferCodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.ParseTransferCodeResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.ParseTransferCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.ParseTransferCodeResponse.displayName =
    'proto.mobilecoind_api.ParseTransferCodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.CreateTransferCodeRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.CreateTransferCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.CreateTransferCodeRequest.displayName =
    'proto.mobilecoind_api.CreateTransferCodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.CreateTransferCodeResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.CreateTransferCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.CreateTransferCodeResponse.displayName =
    'proto.mobilecoind_api.CreateTransferCodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.ParseAddressCodeRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.ParseAddressCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.ParseAddressCodeRequest.displayName =
    'proto.mobilecoind_api.ParseAddressCodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.ParseAddressCodeResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.ParseAddressCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.ParseAddressCodeResponse.displayName =
    'proto.mobilecoind_api.ParseAddressCodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.CreateAddressCodeRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.CreateAddressCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.CreateAddressCodeRequest.displayName =
    'proto.mobilecoind_api.CreateAddressCodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.CreateAddressCodeResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.CreateAddressCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.CreateAddressCodeResponse.displayName =
    'proto.mobilecoind_api.CreateAddressCodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GenerateTxRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.mobilecoind_api.GenerateTxRequest.repeatedFields_,
    null
  );
};
goog.inherits(proto.mobilecoind_api.GenerateTxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GenerateTxRequest.displayName =
    'proto.mobilecoind_api.GenerateTxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GenerateTxResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GenerateTxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GenerateTxResponse.displayName =
    'proto.mobilecoind_api.GenerateTxResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GenerateOptimizationTxRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.mobilecoind_api.GenerateOptimizationTxRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GenerateOptimizationTxRequest.displayName =
    'proto.mobilecoind_api.GenerateOptimizationTxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GenerateOptimizationTxResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.mobilecoind_api.GenerateOptimizationTxResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GenerateOptimizationTxResponse.displayName =
    'proto.mobilecoind_api.GenerateOptimizationTxResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.mobilecoind_api.GenerateTransferCodeTxRequest.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.mobilecoind_api.GenerateTransferCodeTxRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GenerateTransferCodeTxRequest.displayName =
    'proto.mobilecoind_api.GenerateTransferCodeTxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.mobilecoind_api.GenerateTransferCodeTxResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GenerateTransferCodeTxResponse.displayName =
    'proto.mobilecoind_api.GenerateTransferCodeTxResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.mobilecoind_api.GenerateTxFromTxOutListRequest.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.mobilecoind_api.GenerateTxFromTxOutListRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GenerateTxFromTxOutListRequest.displayName =
    'proto.mobilecoind_api.GenerateTxFromTxOutListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GenerateTxFromTxOutListResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.mobilecoind_api.GenerateTxFromTxOutListResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GenerateTxFromTxOutListResponse.displayName =
    'proto.mobilecoind_api.GenerateTxFromTxOutListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.SubmitTxRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.SubmitTxRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.SubmitTxRequest.displayName =
    'proto.mobilecoind_api.SubmitTxRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.SubmitTxResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.mobilecoind_api.SubmitTxResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.mobilecoind_api.SubmitTxResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.SubmitTxResponse.displayName =
    'proto.mobilecoind_api.SubmitTxResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetLedgerInfoResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetLedgerInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetLedgerInfoResponse.displayName =
    'proto.mobilecoind_api.GetLedgerInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetBlockInfoRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetBlockInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetBlockInfoRequest.displayName =
    'proto.mobilecoind_api.GetBlockInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetBlockInfoResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetBlockInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetBlockInfoResponse.displayName =
    'proto.mobilecoind_api.GetBlockInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.ArchiveBlockSignatureData = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.ArchiveBlockSignatureData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.ArchiveBlockSignatureData.displayName =
    'proto.mobilecoind_api.ArchiveBlockSignatureData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetBlockRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetBlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetBlockRequest.displayName =
    'proto.mobilecoind_api.GetBlockRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetBlockResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.mobilecoind_api.GetBlockResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.mobilecoind_api.GetBlockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetBlockResponse.displayName =
    'proto.mobilecoind_api.GetBlockResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetTxStatusAsSenderRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetTxStatusAsSenderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetTxStatusAsSenderRequest.displayName =
    'proto.mobilecoind_api.GetTxStatusAsSenderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetTxStatusAsSenderResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetTxStatusAsSenderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetTxStatusAsSenderResponse.displayName =
    'proto.mobilecoind_api.GetTxStatusAsSenderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetTxStatusAsReceiverRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetTxStatusAsReceiverRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetTxStatusAsReceiverRequest.displayName =
    'proto.mobilecoind_api.GetTxStatusAsReceiverRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetTxStatusAsReceiverResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.mobilecoind_api.GetTxStatusAsReceiverResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetTxStatusAsReceiverResponse.displayName =
    'proto.mobilecoind_api.GetTxStatusAsReceiverResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetProcessedBlockRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetProcessedBlockRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetProcessedBlockRequest.displayName =
    'proto.mobilecoind_api.GetProcessedBlockRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetProcessedBlockResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.mobilecoind_api.GetProcessedBlockResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.mobilecoind_api.GetProcessedBlockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetProcessedBlockResponse.displayName =
    'proto.mobilecoind_api.GetProcessedBlockResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest.displayName =
    'proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse.displayName =
    'proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetBalanceRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetBalanceRequest.displayName =
    'proto.mobilecoind_api.GetBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetBalanceResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetBalanceResponse.displayName =
    'proto.mobilecoind_api.GetBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.SendPaymentRequest = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.mobilecoind_api.SendPaymentRequest.repeatedFields_,
    null
  );
};
goog.inherits(proto.mobilecoind_api.SendPaymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.SendPaymentRequest.displayName =
    'proto.mobilecoind_api.SendPaymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.SendPaymentResponse = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.mobilecoind_api.SendPaymentResponse.repeatedFields_,
    null
  );
};
goog.inherits(proto.mobilecoind_api.SendPaymentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.SendPaymentResponse.displayName =
    'proto.mobilecoind_api.SendPaymentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.PayAddressCodeRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.PayAddressCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.PayAddressCodeRequest.displayName =
    'proto.mobilecoind_api.PayAddressCodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mobilecoind_api.GetNetworkStatusResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mobilecoind_api.GetNetworkStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mobilecoind_api.GetNetworkStatusResponse.displayName =
    'proto.mobilecoind_api.GetNetworkStatusResponse';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.Outlay.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.Outlay.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.Outlay} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.Outlay.toObject = function (includeInstance, msg) {
    let f;
    const obj = {
      value: jspb.Message.getFieldWithDefault(msg, 1, '0'),
      receiver:
        (f = msg.getReceiver()) &&
        external_pb.PublicAddress.toObject(includeInstance, f),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.Outlay}
 */
proto.mobilecoind_api.Outlay.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.Outlay();
  return proto.mobilecoind_api.Outlay.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.Outlay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.Outlay}
 */
proto.mobilecoind_api.Outlay.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setValue(value);
        break;
      case 2:
        var value = new external_pb.PublicAddress();
        reader.readMessage(
          value,
          external_pb.PublicAddress.deserializeBinaryFromReader
        );
        msg.setReceiver(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.Outlay.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.Outlay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.Outlay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.Outlay.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getValue();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(1, f);
  }
  f = message.getReceiver();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      external_pb.PublicAddress.serializeBinaryToWriter
    );
  }
};

/**
 * optional uint64 value = 1;
 * @return {string}
 */
proto.mobilecoind_api.Outlay.prototype.getValue = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.Outlay} returns this
 */
proto.mobilecoind_api.Outlay.prototype.setValue = function (value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};

/**
 * optional external.PublicAddress receiver = 2;
 * @return {?proto.external.PublicAddress}
 */
proto.mobilecoind_api.Outlay.prototype.getReceiver = function () {
  return /** @type{?proto.external.PublicAddress} */ (jspb.Message.getWrapperField(
    this,
    external_pb.PublicAddress,
    2
  ));
};

/**
 * @param {?proto.external.PublicAddress|undefined} value
 * @return {!proto.mobilecoind_api.Outlay} returns this
 */
proto.mobilecoind_api.Outlay.prototype.setReceiver = function (value) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.Outlay} returns this
 */
proto.mobilecoind_api.Outlay.prototype.clearReceiver = function () {
  return this.setReceiver(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.Outlay.prototype.hasReceiver = function () {
  return jspb.Message.getField(this, 2) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.UnspentTxOut.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.UnspentTxOut.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.UnspentTxOut} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.UnspentTxOut.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      txOut:
        (f = msg.getTxOut()) && external_pb.TxOut.toObject(includeInstance, f),
      subaddressIndex: jspb.Message.getFieldWithDefault(msg, 2, '0'),
      keyImage:
        (f = msg.getKeyImage()) &&
        external_pb.KeyImage.toObject(includeInstance, f),
      value: jspb.Message.getFieldWithDefault(msg, 4, '0'),
      attemptedSpendHeight: jspb.Message.getFieldWithDefault(msg, 5, '0'),
      attemptedSpendTombstone: jspb.Message.getFieldWithDefault(msg, 6, '0'),
      monitorId: msg.getMonitorId_asB64(),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.UnspentTxOut}
 */
proto.mobilecoind_api.UnspentTxOut.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.UnspentTxOut();
  return proto.mobilecoind_api.UnspentTxOut.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.UnspentTxOut} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.UnspentTxOut}
 */
proto.mobilecoind_api.UnspentTxOut.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new external_pb.TxOut();
        reader.readMessage(
          value,
          external_pb.TxOut.deserializeBinaryFromReader
        );
        msg.setTxOut(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setSubaddressIndex(value);
        break;
      case 3:
        var value = new external_pb.KeyImage();
        reader.readMessage(
          value,
          external_pb.KeyImage.deserializeBinaryFromReader
        );
        msg.setKeyImage(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setValue(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setAttemptedSpendHeight(value);
        break;
      case 6:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setAttemptedSpendTombstone(value);
        break;
      case 10:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMonitorId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.UnspentTxOut.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.UnspentTxOut.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.UnspentTxOut} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.UnspentTxOut.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getTxOut();
  if (f != null) {
    writer.writeMessage(1, f, external_pb.TxOut.serializeBinaryToWriter);
  }
  f = message.getSubaddressIndex();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(2, f);
  }
  f = message.getKeyImage();
  if (f != null) {
    writer.writeMessage(3, f, external_pb.KeyImage.serializeBinaryToWriter);
  }
  f = message.getValue();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(4, f);
  }
  f = message.getAttemptedSpendHeight();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(5, f);
  }
  f = message.getAttemptedSpendTombstone();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(6, f);
  }
  f = message.getMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(10, f);
  }
};

/**
 * optional external.TxOut tx_out = 1;
 * @return {?proto.external.TxOut}
 */
proto.mobilecoind_api.UnspentTxOut.prototype.getTxOut = function () {
  return /** @type{?proto.external.TxOut} */ (jspb.Message.getWrapperField(
    this,
    external_pb.TxOut,
    1
  ));
};

/**
 * @param {?proto.external.TxOut|undefined} value
 * @return {!proto.mobilecoind_api.UnspentTxOut} returns this
 */
proto.mobilecoind_api.UnspentTxOut.prototype.setTxOut = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.UnspentTxOut} returns this
 */
proto.mobilecoind_api.UnspentTxOut.prototype.clearTxOut = function () {
  return this.setTxOut(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.UnspentTxOut.prototype.hasTxOut = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional uint64 subaddress_index = 2;
 * @return {string}
 */
proto.mobilecoind_api.UnspentTxOut.prototype.getSubaddressIndex = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.UnspentTxOut} returns this
 */
proto.mobilecoind_api.UnspentTxOut.prototype.setSubaddressIndex = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};

/**
 * optional external.KeyImage key_image = 3;
 * @return {?proto.external.KeyImage}
 */
proto.mobilecoind_api.UnspentTxOut.prototype.getKeyImage = function () {
  return /** @type{?proto.external.KeyImage} */ (jspb.Message.getWrapperField(
    this,
    external_pb.KeyImage,
    3
  ));
};

/**
 * @param {?proto.external.KeyImage|undefined} value
 * @return {!proto.mobilecoind_api.UnspentTxOut} returns this
 */
proto.mobilecoind_api.UnspentTxOut.prototype.setKeyImage = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.UnspentTxOut} returns this
 */
proto.mobilecoind_api.UnspentTxOut.prototype.clearKeyImage = function () {
  return this.setKeyImage(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.UnspentTxOut.prototype.hasKeyImage = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional uint64 value = 4;
 * @return {string}
 */
proto.mobilecoind_api.UnspentTxOut.prototype.getValue = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.UnspentTxOut} returns this
 */
proto.mobilecoind_api.UnspentTxOut.prototype.setValue = function (value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};

/**
 * optional uint64 attempted_spend_height = 5;
 * @return {string}
 */
proto.mobilecoind_api.UnspentTxOut.prototype.getAttemptedSpendHeight = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.UnspentTxOut} returns this
 */
proto.mobilecoind_api.UnspentTxOut.prototype.setAttemptedSpendHeight = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};

/**
 * optional uint64 attempted_spend_tombstone = 6;
 * @return {string}
 */
proto.mobilecoind_api.UnspentTxOut.prototype.getAttemptedSpendTombstone = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.UnspentTxOut} returns this
 */
proto.mobilecoind_api.UnspentTxOut.prototype.setAttemptedSpendTombstone = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 6, value);
};

/**
 * optional bytes monitor_id = 10;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.UnspentTxOut.prototype.getMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    10,
    ''
  ));
};

/**
 * optional bytes monitor_id = 10;
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.UnspentTxOut.prototype.getMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMonitorId()));
};

/**
 * optional bytes monitor_id = 10;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.UnspentTxOut.prototype.getMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.UnspentTxOut} returns this
 */
proto.mobilecoind_api.UnspentTxOut.prototype.setMonitorId = function (value) {
  return jspb.Message.setProto3BytesField(this, 10, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mobilecoind_api.TxProposal.repeatedFields_ = [1, 2, 6];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.TxProposal.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.TxProposal.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.TxProposal} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.TxProposal.toObject = function (includeInstance, msg) {
    let f;
    const obj = {
      inputListList: jspb.Message.toObjectList(
        msg.getInputListList(),
        proto.mobilecoind_api.UnspentTxOut.toObject,
        includeInstance
      ),
      outlayListList: jspb.Message.toObjectList(
        msg.getOutlayListList(),
        proto.mobilecoind_api.Outlay.toObject,
        includeInstance
      ),
      tx: (f = msg.getTx()) && external_pb.Tx.toObject(includeInstance, f),
      fee: jspb.Message.getFieldWithDefault(msg, 4, '0'),
      outlayIndexToTxOutIndexMap: (f = msg.getOutlayIndexToTxOutIndexMap())
        ? f.toObject(includeInstance, undefined)
        : [],
      outlayConfirmationNumbersList: msg.getOutlayConfirmationNumbersList_asB64(),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.TxProposal}
 */
proto.mobilecoind_api.TxProposal.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.TxProposal();
  return proto.mobilecoind_api.TxProposal.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.TxProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.TxProposal}
 */
proto.mobilecoind_api.TxProposal.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.mobilecoind_api.UnspentTxOut();
        reader.readMessage(
          value,
          proto.mobilecoind_api.UnspentTxOut.deserializeBinaryFromReader
        );
        msg.addInputList(value);
        break;
      case 2:
        var value = new proto.mobilecoind_api.Outlay();
        reader.readMessage(
          value,
          proto.mobilecoind_api.Outlay.deserializeBinaryFromReader
        );
        msg.addOutlayList(value);
        break;
      case 3:
        var value = new external_pb.Tx();
        reader.readMessage(value, external_pb.Tx.deserializeBinaryFromReader);
        msg.setTx(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setFee(value);
        break;
      case 5:
        var value = msg.getOutlayIndexToTxOutIndexMap();
        reader.readMessage(value, (message, reader) => {
          jspb.Map.deserializeBinary(
            message,
            reader,
            jspb.BinaryReader.prototype.readUint64,
            jspb.BinaryReader.prototype.readUint64,
            null,
            0,
            0
          );
        });
        break;
      case 6:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.addOutlayConfirmationNumbers(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.TxProposal.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.TxProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.TxProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.TxProposal.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getInputListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mobilecoind_api.UnspentTxOut.serializeBinaryToWriter
    );
  }
  f = message.getOutlayListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.mobilecoind_api.Outlay.serializeBinaryToWriter
    );
  }
  f = message.getTx();
  if (f != null) {
    writer.writeMessage(3, f, external_pb.Tx.serializeBinaryToWriter);
  }
  f = message.getFee();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(4, f);
  }
  f = message.getOutlayIndexToTxOutIndexMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(
      5,
      writer,
      jspb.BinaryWriter.prototype.writeUint64,
      jspb.BinaryWriter.prototype.writeUint64
    );
  }
  f = message.getOutlayConfirmationNumbersList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(6, f);
  }
};

/**
 * repeated UnspentTxOut input_list = 1;
 * @return {!Array<!proto.mobilecoind_api.UnspentTxOut>}
 */
proto.mobilecoind_api.TxProposal.prototype.getInputListList = function () {
  return /** @type{!Array<!proto.mobilecoind_api.UnspentTxOut>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.mobilecoind_api.UnspentTxOut,
    1
  ));
};

/**
 * @param {!Array<!proto.mobilecoind_api.UnspentTxOut>} value
 * @return {!proto.mobilecoind_api.TxProposal} returns this
 */
proto.mobilecoind_api.TxProposal.prototype.setInputListList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.mobilecoind_api.UnspentTxOut=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mobilecoind_api.UnspentTxOut}
 */
proto.mobilecoind_api.TxProposal.prototype.addInputList = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.mobilecoind_api.UnspentTxOut,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.TxProposal} returns this
 */
proto.mobilecoind_api.TxProposal.prototype.clearInputListList = function () {
  return this.setInputListList([]);
};

/**
 * repeated Outlay outlay_list = 2;
 * @return {!Array<!proto.mobilecoind_api.Outlay>}
 */
proto.mobilecoind_api.TxProposal.prototype.getOutlayListList = function () {
  return /** @type{!Array<!proto.mobilecoind_api.Outlay>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.mobilecoind_api.Outlay,
    2
  ));
};

/**
 * @param {!Array<!proto.mobilecoind_api.Outlay>} value
 * @return {!proto.mobilecoind_api.TxProposal} returns this
 */
proto.mobilecoind_api.TxProposal.prototype.setOutlayListList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.mobilecoind_api.Outlay=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mobilecoind_api.Outlay}
 */
proto.mobilecoind_api.TxProposal.prototype.addOutlayList = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.mobilecoind_api.Outlay,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.TxProposal} returns this
 */
proto.mobilecoind_api.TxProposal.prototype.clearOutlayListList = function () {
  return this.setOutlayListList([]);
};

/**
 * optional external.Tx tx = 3;
 * @return {?proto.external.Tx}
 */
proto.mobilecoind_api.TxProposal.prototype.getTx = function () {
  return /** @type{?proto.external.Tx} */ (jspb.Message.getWrapperField(
    this,
    external_pb.Tx,
    3
  ));
};

/**
 * @param {?proto.external.Tx|undefined} value
 * @return {!proto.mobilecoind_api.TxProposal} returns this
 */
proto.mobilecoind_api.TxProposal.prototype.setTx = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.TxProposal} returns this
 */
proto.mobilecoind_api.TxProposal.prototype.clearTx = function () {
  return this.setTx(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.TxProposal.prototype.hasTx = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional uint64 fee = 4;
 * @return {string}
 */
proto.mobilecoind_api.TxProposal.prototype.getFee = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.TxProposal} returns this
 */
proto.mobilecoind_api.TxProposal.prototype.setFee = function (value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};

/**
 * map<uint64, uint64> outlay_index_to_tx_out_index = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.mobilecoind_api.TxProposal.prototype.getOutlayIndexToTxOutIndexMap = function (
  opt_noLazyCreate
) {
  return /** @type {!jspb.Map<number,number>} */ (jspb.Message.getMapField(
    this,
    5,
    opt_noLazyCreate,
    null
  ));
};

/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.mobilecoind_api.TxProposal} returns this
 */
proto.mobilecoind_api.TxProposal.prototype.clearOutlayIndexToTxOutIndexMap = function () {
  this.getOutlayIndexToTxOutIndexMap().clear();
  return this;
};

/**
 * repeated bytes outlay_confirmation_numbers = 6;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.mobilecoind_api.TxProposal.prototype.getOutlayConfirmationNumbersList = function () {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(
    this,
    6
  ));
};

/**
 * repeated bytes outlay_confirmation_numbers = 6;
 * This is a type-conversion wrapper around `getOutlayConfirmationNumbersList()`
 * @return {!Array<string>}
 */
proto.mobilecoind_api.TxProposal.prototype.getOutlayConfirmationNumbersList_asB64 = function () {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
    this.getOutlayConfirmationNumbersList()
  ));
};

/**
 * repeated bytes outlay_confirmation_numbers = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOutlayConfirmationNumbersList()`
 * @return {!Array<!Uint8Array>}
 */
proto.mobilecoind_api.TxProposal.prototype.getOutlayConfirmationNumbersList_asU8 = function () {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
    this.getOutlayConfirmationNumbersList()
  ));
};

/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.mobilecoind_api.TxProposal} returns this
 */
proto.mobilecoind_api.TxProposal.prototype.setOutlayConfirmationNumbersList = function (
  value
) {
  return jspb.Message.setField(this, 6, value || []);
};

/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.mobilecoind_api.TxProposal} returns this
 */
proto.mobilecoind_api.TxProposal.prototype.addOutlayConfirmationNumbers = function (
  value,
  opt_index
) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.TxProposal} returns this
 */
proto.mobilecoind_api.TxProposal.prototype.clearOutlayConfirmationNumbersList = function () {
  return this.setOutlayConfirmationNumbersList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mobilecoind_api.SenderTxReceipt.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.SenderTxReceipt.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.SenderTxReceipt.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.SenderTxReceipt} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.SenderTxReceipt.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      keyImageListList: jspb.Message.toObjectList(
        msg.getKeyImageListList(),
        external_pb.KeyImage.toObject,
        includeInstance
      ),
      tombstone: jspb.Message.getFieldWithDefault(msg, 2, '0'),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.SenderTxReceipt}
 */
proto.mobilecoind_api.SenderTxReceipt.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.SenderTxReceipt();
  return proto.mobilecoind_api.SenderTxReceipt.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.SenderTxReceipt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.SenderTxReceipt}
 */
proto.mobilecoind_api.SenderTxReceipt.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new external_pb.KeyImage();
        reader.readMessage(
          value,
          external_pb.KeyImage.deserializeBinaryFromReader
        );
        msg.addKeyImageList(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setTombstone(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.SenderTxReceipt.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.SenderTxReceipt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.SenderTxReceipt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.SenderTxReceipt.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getKeyImageListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      external_pb.KeyImage.serializeBinaryToWriter
    );
  }
  f = message.getTombstone();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(2, f);
  }
};

/**
 * repeated external.KeyImage key_image_list = 1;
 * @return {!Array<!proto.external.KeyImage>}
 */
proto.mobilecoind_api.SenderTxReceipt.prototype.getKeyImageListList = function () {
  return /** @type{!Array<!proto.external.KeyImage>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    external_pb.KeyImage,
    1
  ));
};

/**
 * @param {!Array<!proto.external.KeyImage>} value
 * @return {!proto.mobilecoind_api.SenderTxReceipt} returns this
 */
proto.mobilecoind_api.SenderTxReceipt.prototype.setKeyImageListList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.external.KeyImage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.external.KeyImage}
 */
proto.mobilecoind_api.SenderTxReceipt.prototype.addKeyImageList = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.external.KeyImage,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.SenderTxReceipt} returns this
 */
proto.mobilecoind_api.SenderTxReceipt.prototype.clearKeyImageListList = function () {
  return this.setKeyImageListList([]);
};

/**
 * optional uint64 tombstone = 2;
 * @return {string}
 */
proto.mobilecoind_api.SenderTxReceipt.prototype.getTombstone = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.SenderTxReceipt} returns this
 */
proto.mobilecoind_api.SenderTxReceipt.prototype.setTombstone = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.ReceiverTxReceipt.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.ReceiverTxReceipt.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.ReceiverTxReceipt} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.ReceiverTxReceipt.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      recipient:
        (f = msg.getRecipient()) &&
        external_pb.PublicAddress.toObject(includeInstance, f),
      txPublicKey:
        (f = msg.getTxPublicKey()) &&
        external_pb.CompressedRistretto.toObject(includeInstance, f),
      txOutHash: msg.getTxOutHash_asB64(),
      tombstone: jspb.Message.getFieldWithDefault(msg, 4, '0'),
      confirmationNumber: msg.getConfirmationNumber_asB64(),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.ReceiverTxReceipt}
 */
proto.mobilecoind_api.ReceiverTxReceipt.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.ReceiverTxReceipt();
  return proto.mobilecoind_api.ReceiverTxReceipt.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.ReceiverTxReceipt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.ReceiverTxReceipt}
 */
proto.mobilecoind_api.ReceiverTxReceipt.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new external_pb.PublicAddress();
        reader.readMessage(
          value,
          external_pb.PublicAddress.deserializeBinaryFromReader
        );
        msg.setRecipient(value);
        break;
      case 2:
        var value = new external_pb.CompressedRistretto();
        reader.readMessage(
          value,
          external_pb.CompressedRistretto.deserializeBinaryFromReader
        );
        msg.setTxPublicKey(value);
        break;
      case 3:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setTxOutHash(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setTombstone(value);
        break;
      case 5:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setConfirmationNumber(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.ReceiverTxReceipt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.ReceiverTxReceipt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.ReceiverTxReceipt.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getRecipient();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      external_pb.PublicAddress.serializeBinaryToWriter
    );
  }
  f = message.getTxPublicKey();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      external_pb.CompressedRistretto.serializeBinaryToWriter
    );
  }
  f = message.getTxOutHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(3, f);
  }
  f = message.getTombstone();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(4, f);
  }
  f = message.getConfirmationNumber_asU8();
  if (f.length > 0) {
    writer.writeBytes(5, f);
  }
};

/**
 * optional external.PublicAddress recipient = 1;
 * @return {?proto.external.PublicAddress}
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.getRecipient = function () {
  return /** @type{?proto.external.PublicAddress} */ (jspb.Message.getWrapperField(
    this,
    external_pb.PublicAddress,
    1
  ));
};

/**
 * @param {?proto.external.PublicAddress|undefined} value
 * @return {!proto.mobilecoind_api.ReceiverTxReceipt} returns this
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.setRecipient = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.ReceiverTxReceipt} returns this
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.clearRecipient = function () {
  return this.setRecipient(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.hasRecipient = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional external.CompressedRistretto tx_public_key = 2;
 * @return {?proto.external.CompressedRistretto}
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.getTxPublicKey = function () {
  return /** @type{?proto.external.CompressedRistretto} */ (jspb.Message.getWrapperField(
    this,
    external_pb.CompressedRistretto,
    2
  ));
};

/**
 * @param {?proto.external.CompressedRistretto|undefined} value
 * @return {!proto.mobilecoind_api.ReceiverTxReceipt} returns this
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.setTxPublicKey = function (
  value
) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.ReceiverTxReceipt} returns this
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.clearTxPublicKey = function () {
  return this.setTxPublicKey(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.hasTxPublicKey = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional bytes tx_out_hash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.getTxOutHash = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    3,
    ''
  ));
};

/**
 * optional bytes tx_out_hash = 3;
 * This is a type-conversion wrapper around `getTxOutHash()`
 * @return {string}
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.getTxOutHash_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getTxOutHash()));
};

/**
 * optional bytes tx_out_hash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxOutHash()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.getTxOutHash_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getTxOutHash()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.ReceiverTxReceipt} returns this
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.setTxOutHash = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};

/**
 * optional uint64 tombstone = 4;
 * @return {string}
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.getTombstone = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.ReceiverTxReceipt} returns this
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.setTombstone = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};

/**
 * optional bytes confirmation_number = 5;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.getConfirmationNumber = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    5,
    ''
  ));
};

/**
 * optional bytes confirmation_number = 5;
 * This is a type-conversion wrapper around `getConfirmationNumber()`
 * @return {string}
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.getConfirmationNumber_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
    this.getConfirmationNumber()
  ));
};

/**
 * optional bytes confirmation_number = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getConfirmationNumber()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.getConfirmationNumber_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getConfirmationNumber()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.ReceiverTxReceipt} returns this
 */
proto.mobilecoind_api.ReceiverTxReceipt.prototype.setConfirmationNumber = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.MonitorStatus.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.MonitorStatus.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.MonitorStatus} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.MonitorStatus.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      accountKey:
        (f = msg.getAccountKey()) &&
        external_pb.AccountKey.toObject(includeInstance, f),
      firstSubaddress: jspb.Message.getFieldWithDefault(msg, 2, '0'),
      numSubaddresses: jspb.Message.getFieldWithDefault(msg, 3, '0'),
      firstBlock: jspb.Message.getFieldWithDefault(msg, 4, '0'),
      nextBlock: jspb.Message.getFieldWithDefault(msg, 5, '0'),
      name: jspb.Message.getFieldWithDefault(msg, 6, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.MonitorStatus}
 */
proto.mobilecoind_api.MonitorStatus.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.MonitorStatus();
  return proto.mobilecoind_api.MonitorStatus.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.MonitorStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.MonitorStatus}
 */
proto.mobilecoind_api.MonitorStatus.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new external_pb.AccountKey();
        reader.readMessage(
          value,
          external_pb.AccountKey.deserializeBinaryFromReader
        );
        msg.setAccountKey(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setFirstSubaddress(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setNumSubaddresses(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setFirstBlock(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setNextBlock(value);
        break;
      case 6:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.MonitorStatus.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.MonitorStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.MonitorStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.MonitorStatus.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getAccountKey();
  if (f != null) {
    writer.writeMessage(1, f, external_pb.AccountKey.serializeBinaryToWriter);
  }
  f = message.getFirstSubaddress();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(2, f);
  }
  f = message.getNumSubaddresses();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(3, f);
  }
  f = message.getFirstBlock();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(4, f);
  }
  f = message.getNextBlock();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(5, f);
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(6, f);
  }
};

/**
 * optional external.AccountKey account_key = 1;
 * @return {?proto.external.AccountKey}
 */
proto.mobilecoind_api.MonitorStatus.prototype.getAccountKey = function () {
  return /** @type{?proto.external.AccountKey} */ (jspb.Message.getWrapperField(
    this,
    external_pb.AccountKey,
    1
  ));
};

/**
 * @param {?proto.external.AccountKey|undefined} value
 * @return {!proto.mobilecoind_api.MonitorStatus} returns this
 */
proto.mobilecoind_api.MonitorStatus.prototype.setAccountKey = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.MonitorStatus} returns this
 */
proto.mobilecoind_api.MonitorStatus.prototype.clearAccountKey = function () {
  return this.setAccountKey(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.MonitorStatus.prototype.hasAccountKey = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional uint64 first_subaddress = 2;
 * @return {string}
 */
proto.mobilecoind_api.MonitorStatus.prototype.getFirstSubaddress = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.MonitorStatus} returns this
 */
proto.mobilecoind_api.MonitorStatus.prototype.setFirstSubaddress = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};

/**
 * optional uint64 num_subaddresses = 3;
 * @return {string}
 */
proto.mobilecoind_api.MonitorStatus.prototype.getNumSubaddresses = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.MonitorStatus} returns this
 */
proto.mobilecoind_api.MonitorStatus.prototype.setNumSubaddresses = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};

/**
 * optional uint64 first_block = 4;
 * @return {string}
 */
proto.mobilecoind_api.MonitorStatus.prototype.getFirstBlock = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.MonitorStatus} returns this
 */
proto.mobilecoind_api.MonitorStatus.prototype.setFirstBlock = function (value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};

/**
 * optional uint64 next_block = 5;
 * @return {string}
 */
proto.mobilecoind_api.MonitorStatus.prototype.getNextBlock = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.MonitorStatus} returns this
 */
proto.mobilecoind_api.MonitorStatus.prototype.setNextBlock = function (value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};

/**
 * optional string name = 6;
 * @return {string}
 */
proto.mobilecoind_api.MonitorStatus.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.MonitorStatus} returns this
 */
proto.mobilecoind_api.MonitorStatus.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.ProcessedTxOut.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.ProcessedTxOut.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.ProcessedTxOut} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.ProcessedTxOut.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      monitorId: msg.getMonitorId_asB64(),
      subaddressIndex: jspb.Message.getFieldWithDefault(msg, 2, '0'),
      publicKey:
        (f = msg.getPublicKey()) &&
        external_pb.CompressedRistretto.toObject(includeInstance, f),
      keyImage:
        (f = msg.getKeyImage()) &&
        external_pb.KeyImage.toObject(includeInstance, f),
      value: jspb.Message.getFieldWithDefault(msg, 5, '0'),
      direction: jspb.Message.getFieldWithDefault(msg, 6, 0),
      addressCode: jspb.Message.getFieldWithDefault(msg, 7, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.ProcessedTxOut}
 */
proto.mobilecoind_api.ProcessedTxOut.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.ProcessedTxOut();
  return proto.mobilecoind_api.ProcessedTxOut.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.ProcessedTxOut} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.ProcessedTxOut}
 */
proto.mobilecoind_api.ProcessedTxOut.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMonitorId(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setSubaddressIndex(value);
        break;
      case 3:
        var value = new external_pb.CompressedRistretto();
        reader.readMessage(
          value,
          external_pb.CompressedRistretto.deserializeBinaryFromReader
        );
        msg.setPublicKey(value);
        break;
      case 4:
        var value = new external_pb.KeyImage();
        reader.readMessage(
          value,
          external_pb.KeyImage.deserializeBinaryFromReader
        );
        msg.setKeyImage(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setValue(value);
        break;
      case 6:
        var value = /** @type {!proto.mobilecoind_api.ProcessedTxOutDirection} */ (reader.readEnum());
        msg.setDirection(value);
        break;
      case 7:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddressCode(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.ProcessedTxOut.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.ProcessedTxOut} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.ProcessedTxOut.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getSubaddressIndex();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(2, f);
  }
  f = message.getPublicKey();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      external_pb.CompressedRistretto.serializeBinaryToWriter
    );
  }
  f = message.getKeyImage();
  if (f != null) {
    writer.writeMessage(4, f, external_pb.KeyImage.serializeBinaryToWriter);
  }
  f = message.getValue();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(5, f);
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(6, f);
  }
  f = message.getAddressCode();
  if (f.length > 0) {
    writer.writeString(7, f);
  }
};

/**
 * optional bytes monitor_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.getMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes monitor_id = 1;
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.getMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMonitorId()));
};

/**
 * optional bytes monitor_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.getMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.ProcessedTxOut} returns this
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.setMonitorId = function (value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional uint64 subaddress_index = 2;
 * @return {string}
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.getSubaddressIndex = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.ProcessedTxOut} returns this
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.setSubaddressIndex = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};

/**
 * optional external.CompressedRistretto public_key = 3;
 * @return {?proto.external.CompressedRistretto}
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.getPublicKey = function () {
  return /** @type{?proto.external.CompressedRistretto} */ (jspb.Message.getWrapperField(
    this,
    external_pb.CompressedRistretto,
    3
  ));
};

/**
 * @param {?proto.external.CompressedRistretto|undefined} value
 * @return {!proto.mobilecoind_api.ProcessedTxOut} returns this
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.setPublicKey = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.ProcessedTxOut} returns this
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.clearPublicKey = function () {
  return this.setPublicKey(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.hasPublicKey = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional external.KeyImage key_image = 4;
 * @return {?proto.external.KeyImage}
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.getKeyImage = function () {
  return /** @type{?proto.external.KeyImage} */ (jspb.Message.getWrapperField(
    this,
    external_pb.KeyImage,
    4
  ));
};

/**
 * @param {?proto.external.KeyImage|undefined} value
 * @return {!proto.mobilecoind_api.ProcessedTxOut} returns this
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.setKeyImage = function (value) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.ProcessedTxOut} returns this
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.clearKeyImage = function () {
  return this.setKeyImage(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.hasKeyImage = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional uint64 value = 5;
 * @return {string}
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.getValue = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.ProcessedTxOut} returns this
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.setValue = function (value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};

/**
 * optional ProcessedTxOutDirection direction = 6;
 * @return {!proto.mobilecoind_api.ProcessedTxOutDirection}
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.getDirection = function () {
  return /** @type {!proto.mobilecoind_api.ProcessedTxOutDirection} */ (jspb.Message.getFieldWithDefault(
    this,
    6,
    0
  ));
};

/**
 * @param {!proto.mobilecoind_api.ProcessedTxOutDirection} value
 * @return {!proto.mobilecoind_api.ProcessedTxOut} returns this
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.setDirection = function (value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};

/**
 * optional string address_code = 7;
 * @return {string}
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.getAddressCode = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.ProcessedTxOut} returns this
 */
proto.mobilecoind_api.ProcessedTxOut.prototype.setAddressCode = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 7, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.AddMonitorRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.AddMonitorRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.AddMonitorRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.AddMonitorRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      accountKey:
        (f = msg.getAccountKey()) &&
        external_pb.AccountKey.toObject(includeInstance, f),
      firstSubaddress: jspb.Message.getFieldWithDefault(msg, 2, 0),
      numSubaddresses: jspb.Message.getFieldWithDefault(msg, 3, 0),
      firstBlock: jspb.Message.getFieldWithDefault(msg, 4, 0),
      name: jspb.Message.getFieldWithDefault(msg, 5, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.AddMonitorRequest}
 */
proto.mobilecoind_api.AddMonitorRequest.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.AddMonitorRequest();
  return proto.mobilecoind_api.AddMonitorRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.AddMonitorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.AddMonitorRequest}
 */
proto.mobilecoind_api.AddMonitorRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new external_pb.AccountKey();
        reader.readMessage(
          value,
          external_pb.AccountKey.deserializeBinaryFromReader
        );
        msg.setAccountKey(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFirstSubaddress(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setNumSubaddresses(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFirstBlock(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.AddMonitorRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.AddMonitorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.AddMonitorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.AddMonitorRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getAccountKey();
  if (f != null) {
    writer.writeMessage(1, f, external_pb.AccountKey.serializeBinaryToWriter);
  }
  f = message.getFirstSubaddress();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getNumSubaddresses();
  if (f !== 0) {
    writer.writeUint64(3, f);
  }
  f = message.getFirstBlock();
  if (f !== 0) {
    writer.writeUint64(4, f);
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
};

/**
 * optional external.AccountKey account_key = 1;
 * @return {?proto.external.AccountKey}
 */
proto.mobilecoind_api.AddMonitorRequest.prototype.getAccountKey = function () {
  return /** @type{?proto.external.AccountKey} */ (jspb.Message.getWrapperField(
    this,
    external_pb.AccountKey,
    1
  ));
};

/**
 * @param {?proto.external.AccountKey|undefined} value
 * @return {!proto.mobilecoind_api.AddMonitorRequest} returns this
 */
proto.mobilecoind_api.AddMonitorRequest.prototype.setAccountKey = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.AddMonitorRequest} returns this
 */
proto.mobilecoind_api.AddMonitorRequest.prototype.clearAccountKey = function () {
  return this.setAccountKey(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.AddMonitorRequest.prototype.hasAccountKey = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional uint64 first_subaddress = 2;
 * @return {number}
 */
proto.mobilecoind_api.AddMonitorRequest.prototype.getFirstSubaddress = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.AddMonitorRequest} returns this
 */
proto.mobilecoind_api.AddMonitorRequest.prototype.setFirstSubaddress = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional uint64 num_subaddresses = 3;
 * @return {number}
 */
proto.mobilecoind_api.AddMonitorRequest.prototype.getNumSubaddresses = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.AddMonitorRequest} returns this
 */
proto.mobilecoind_api.AddMonitorRequest.prototype.setNumSubaddresses = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 3, value);
};

/**
 * optional uint64 first_block = 4;
 * @return {number}
 */
proto.mobilecoind_api.AddMonitorRequest.prototype.getFirstBlock = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.AddMonitorRequest} returns this
 */
proto.mobilecoind_api.AddMonitorRequest.prototype.setFirstBlock = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional string name = 5;
 * @return {string}
 */
proto.mobilecoind_api.AddMonitorRequest.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.AddMonitorRequest} returns this
 */
proto.mobilecoind_api.AddMonitorRequest.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.AddMonitorResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.AddMonitorResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.AddMonitorResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.AddMonitorResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      monitorId: msg.getMonitorId_asB64(),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.AddMonitorResponse}
 */
proto.mobilecoind_api.AddMonitorResponse.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.AddMonitorResponse();
  return proto.mobilecoind_api.AddMonitorResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.AddMonitorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.AddMonitorResponse}
 */
proto.mobilecoind_api.AddMonitorResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMonitorId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.AddMonitorResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.AddMonitorResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.AddMonitorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.AddMonitorResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
};

/**
 * optional bytes monitor_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.AddMonitorResponse.prototype.getMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes monitor_id = 1;
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.AddMonitorResponse.prototype.getMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMonitorId()));
};

/**
 * optional bytes monitor_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.AddMonitorResponse.prototype.getMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.AddMonitorResponse} returns this
 */
proto.mobilecoind_api.AddMonitorResponse.prototype.setMonitorId = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.RemoveMonitorRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.RemoveMonitorRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.RemoveMonitorRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.RemoveMonitorRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      monitorId: msg.getMonitorId_asB64(),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.RemoveMonitorRequest}
 */
proto.mobilecoind_api.RemoveMonitorRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.RemoveMonitorRequest();
  return proto.mobilecoind_api.RemoveMonitorRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.RemoveMonitorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.RemoveMonitorRequest}
 */
proto.mobilecoind_api.RemoveMonitorRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMonitorId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.RemoveMonitorRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.RemoveMonitorRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.RemoveMonitorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.RemoveMonitorRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
};

/**
 * optional bytes monitor_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.RemoveMonitorRequest.prototype.getMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes monitor_id = 1;
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.RemoveMonitorRequest.prototype.getMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMonitorId()));
};

/**
 * optional bytes monitor_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.RemoveMonitorRequest.prototype.getMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.RemoveMonitorRequest} returns this
 */
proto.mobilecoind_api.RemoveMonitorRequest.prototype.setMonitorId = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mobilecoind_api.GetMonitorListResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetMonitorListResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetMonitorListResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetMonitorListResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetMonitorListResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      monitorIdListList: msg.getMonitorIdListList_asB64(),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetMonitorListResponse}
 */
proto.mobilecoind_api.GetMonitorListResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetMonitorListResponse();
  return proto.mobilecoind_api.GetMonitorListResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetMonitorListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetMonitorListResponse}
 */
proto.mobilecoind_api.GetMonitorListResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.addMonitorIdList(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetMonitorListResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetMonitorListResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetMonitorListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetMonitorListResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getMonitorIdListList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(1, f);
  }
};

/**
 * repeated bytes monitor_id_list = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.mobilecoind_api.GetMonitorListResponse.prototype.getMonitorIdListList = function () {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(
    this,
    1
  ));
};

/**
 * repeated bytes monitor_id_list = 1;
 * This is a type-conversion wrapper around `getMonitorIdListList()`
 * @return {!Array<string>}
 */
proto.mobilecoind_api.GetMonitorListResponse.prototype.getMonitorIdListList_asB64 = function () {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
    this.getMonitorIdListList()
  ));
};

/**
 * repeated bytes monitor_id_list = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMonitorIdListList()`
 * @return {!Array<!Uint8Array>}
 */
proto.mobilecoind_api.GetMonitorListResponse.prototype.getMonitorIdListList_asU8 = function () {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
    this.getMonitorIdListList()
  ));
};

/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.mobilecoind_api.GetMonitorListResponse} returns this
 */
proto.mobilecoind_api.GetMonitorListResponse.prototype.setMonitorIdListList = function (
  value
) {
  return jspb.Message.setField(this, 1, value || []);
};

/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.mobilecoind_api.GetMonitorListResponse} returns this
 */
proto.mobilecoind_api.GetMonitorListResponse.prototype.addMonitorIdList = function (
  value,
  opt_index
) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.GetMonitorListResponse} returns this
 */
proto.mobilecoind_api.GetMonitorListResponse.prototype.clearMonitorIdListList = function () {
  return this.setMonitorIdListList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetMonitorStatusRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetMonitorStatusRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetMonitorStatusRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetMonitorStatusRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      monitorId: msg.getMonitorId_asB64(),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetMonitorStatusRequest}
 */
proto.mobilecoind_api.GetMonitorStatusRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetMonitorStatusRequest();
  return proto.mobilecoind_api.GetMonitorStatusRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetMonitorStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetMonitorStatusRequest}
 */
proto.mobilecoind_api.GetMonitorStatusRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMonitorId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetMonitorStatusRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetMonitorStatusRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetMonitorStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetMonitorStatusRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
};

/**
 * optional bytes monitor_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.GetMonitorStatusRequest.prototype.getMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes monitor_id = 1;
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.GetMonitorStatusRequest.prototype.getMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMonitorId()));
};

/**
 * optional bytes monitor_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetMonitorStatusRequest.prototype.getMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.GetMonitorStatusRequest} returns this
 */
proto.mobilecoind_api.GetMonitorStatusRequest.prototype.setMonitorId = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetMonitorStatusResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetMonitorStatusResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetMonitorStatusResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetMonitorStatusResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      status:
        (f = msg.getStatus()) &&
        proto.mobilecoind_api.MonitorStatus.toObject(includeInstance, f),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetMonitorStatusResponse}
 */
proto.mobilecoind_api.GetMonitorStatusResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetMonitorStatusResponse();
  return proto.mobilecoind_api.GetMonitorStatusResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetMonitorStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetMonitorStatusResponse}
 */
proto.mobilecoind_api.GetMonitorStatusResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.mobilecoind_api.MonitorStatus();
        reader.readMessage(
          value,
          proto.mobilecoind_api.MonitorStatus.deserializeBinaryFromReader
        );
        msg.setStatus(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetMonitorStatusResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetMonitorStatusResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetMonitorStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetMonitorStatusResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mobilecoind_api.MonitorStatus.serializeBinaryToWriter
    );
  }
};

/**
 * optional MonitorStatus status = 1;
 * @return {?proto.mobilecoind_api.MonitorStatus}
 */
proto.mobilecoind_api.GetMonitorStatusResponse.prototype.getStatus = function () {
  return /** @type{?proto.mobilecoind_api.MonitorStatus} */ (jspb.Message.getWrapperField(
    this,
    proto.mobilecoind_api.MonitorStatus,
    1
  ));
};

/**
 * @param {?proto.mobilecoind_api.MonitorStatus|undefined} value
 * @return {!proto.mobilecoind_api.GetMonitorStatusResponse} returns this
 */
proto.mobilecoind_api.GetMonitorStatusResponse.prototype.setStatus = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.GetMonitorStatusResponse} returns this
 */
proto.mobilecoind_api.GetMonitorStatusResponse.prototype.clearStatus = function () {
  return this.setStatus(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.GetMonitorStatusResponse.prototype.hasStatus = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetUnspentTxOutListRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetUnspentTxOutListRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetUnspentTxOutListRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetUnspentTxOutListRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      monitorId: msg.getMonitorId_asB64(),
      subaddressIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetUnspentTxOutListRequest}
 */
proto.mobilecoind_api.GetUnspentTxOutListRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetUnspentTxOutListRequest();
  return proto.mobilecoind_api.GetUnspentTxOutListRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetUnspentTxOutListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetUnspentTxOutListRequest}
 */
proto.mobilecoind_api.GetUnspentTxOutListRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMonitorId(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSubaddressIndex(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetUnspentTxOutListRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetUnspentTxOutListRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetUnspentTxOutListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetUnspentTxOutListRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getSubaddressIndex();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
};

/**
 * optional bytes monitor_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.GetUnspentTxOutListRequest.prototype.getMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes monitor_id = 1;
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.GetUnspentTxOutListRequest.prototype.getMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMonitorId()));
};

/**
 * optional bytes monitor_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetUnspentTxOutListRequest.prototype.getMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.GetUnspentTxOutListRequest} returns this
 */
proto.mobilecoind_api.GetUnspentTxOutListRequest.prototype.setMonitorId = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional uint64 subaddress_index = 2;
 * @return {number}
 */
proto.mobilecoind_api.GetUnspentTxOutListRequest.prototype.getSubaddressIndex = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GetUnspentTxOutListRequest} returns this
 */
proto.mobilecoind_api.GetUnspentTxOutListRequest.prototype.setSubaddressIndex = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mobilecoind_api.GetUnspentTxOutListResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetUnspentTxOutListResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetUnspentTxOutListResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetUnspentTxOutListResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetUnspentTxOutListResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      outputListList: jspb.Message.toObjectList(
        msg.getOutputListList(),
        proto.mobilecoind_api.UnspentTxOut.toObject,
        includeInstance
      ),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetUnspentTxOutListResponse}
 */
proto.mobilecoind_api.GetUnspentTxOutListResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetUnspentTxOutListResponse();
  return proto.mobilecoind_api.GetUnspentTxOutListResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetUnspentTxOutListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetUnspentTxOutListResponse}
 */
proto.mobilecoind_api.GetUnspentTxOutListResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.mobilecoind_api.UnspentTxOut();
        reader.readMessage(
          value,
          proto.mobilecoind_api.UnspentTxOut.deserializeBinaryFromReader
        );
        msg.addOutputList(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetUnspentTxOutListResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetUnspentTxOutListResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetUnspentTxOutListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetUnspentTxOutListResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getOutputListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mobilecoind_api.UnspentTxOut.serializeBinaryToWriter
    );
  }
};

/**
 * repeated UnspentTxOut output_list = 1;
 * @return {!Array<!proto.mobilecoind_api.UnspentTxOut>}
 */
proto.mobilecoind_api.GetUnspentTxOutListResponse.prototype.getOutputListList = function () {
  return /** @type{!Array<!proto.mobilecoind_api.UnspentTxOut>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.mobilecoind_api.UnspentTxOut,
    1
  ));
};

/**
 * @param {!Array<!proto.mobilecoind_api.UnspentTxOut>} value
 * @return {!proto.mobilecoind_api.GetUnspentTxOutListResponse} returns this
 */
proto.mobilecoind_api.GetUnspentTxOutListResponse.prototype.setOutputListList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.mobilecoind_api.UnspentTxOut=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mobilecoind_api.UnspentTxOut}
 */
proto.mobilecoind_api.GetUnspentTxOutListResponse.prototype.addOutputList = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.mobilecoind_api.UnspentTxOut,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.GetUnspentTxOutListResponse} returns this
 */
proto.mobilecoind_api.GetUnspentTxOutListResponse.prototype.clearOutputListList = function () {
  return this.setOutputListList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GenerateEntropyResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GenerateEntropyResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GenerateEntropyResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GenerateEntropyResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      entropy: msg.getEntropy_asB64(),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GenerateEntropyResponse}
 */
proto.mobilecoind_api.GenerateEntropyResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GenerateEntropyResponse();
  return proto.mobilecoind_api.GenerateEntropyResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GenerateEntropyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GenerateEntropyResponse}
 */
proto.mobilecoind_api.GenerateEntropyResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setEntropy(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GenerateEntropyResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GenerateEntropyResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GenerateEntropyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GenerateEntropyResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getEntropy_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
};

/**
 * optional bytes entropy = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.GenerateEntropyResponse.prototype.getEntropy = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes entropy = 1;
 * This is a type-conversion wrapper around `getEntropy()`
 * @return {string}
 */
proto.mobilecoind_api.GenerateEntropyResponse.prototype.getEntropy_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getEntropy()));
};

/**
 * optional bytes entropy = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEntropy()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GenerateEntropyResponse.prototype.getEntropy_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getEntropy()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.GenerateEntropyResponse} returns this
 */
proto.mobilecoind_api.GenerateEntropyResponse.prototype.setEntropy = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetAccountKeyRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetAccountKeyRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetAccountKeyRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetAccountKeyRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      entropy: msg.getEntropy_asB64(),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetAccountKeyRequest}
 */
proto.mobilecoind_api.GetAccountKeyRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetAccountKeyRequest();
  return proto.mobilecoind_api.GetAccountKeyRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetAccountKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetAccountKeyRequest}
 */
proto.mobilecoind_api.GetAccountKeyRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setEntropy(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetAccountKeyRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetAccountKeyRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetAccountKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetAccountKeyRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getEntropy_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
};

/**
 * optional bytes entropy = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.GetAccountKeyRequest.prototype.getEntropy = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes entropy = 1;
 * This is a type-conversion wrapper around `getEntropy()`
 * @return {string}
 */
proto.mobilecoind_api.GetAccountKeyRequest.prototype.getEntropy_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getEntropy()));
};

/**
 * optional bytes entropy = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEntropy()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetAccountKeyRequest.prototype.getEntropy_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getEntropy()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.GetAccountKeyRequest} returns this
 */
proto.mobilecoind_api.GetAccountKeyRequest.prototype.setEntropy = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetAccountKeyResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetAccountKeyResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetAccountKeyResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetAccountKeyResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      accountKey:
        (f = msg.getAccountKey()) &&
        external_pb.AccountKey.toObject(includeInstance, f),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetAccountKeyResponse}
 */
proto.mobilecoind_api.GetAccountKeyResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetAccountKeyResponse();
  return proto.mobilecoind_api.GetAccountKeyResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetAccountKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetAccountKeyResponse}
 */
proto.mobilecoind_api.GetAccountKeyResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new external_pb.AccountKey();
        reader.readMessage(
          value,
          external_pb.AccountKey.deserializeBinaryFromReader
        );
        msg.setAccountKey(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetAccountKeyResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetAccountKeyResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetAccountKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetAccountKeyResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getAccountKey();
  if (f != null) {
    writer.writeMessage(1, f, external_pb.AccountKey.serializeBinaryToWriter);
  }
};

/**
 * optional external.AccountKey account_key = 1;
 * @return {?proto.external.AccountKey}
 */
proto.mobilecoind_api.GetAccountKeyResponse.prototype.getAccountKey = function () {
  return /** @type{?proto.external.AccountKey} */ (jspb.Message.getWrapperField(
    this,
    external_pb.AccountKey,
    1
  ));
};

/**
 * @param {?proto.external.AccountKey|undefined} value
 * @return {!proto.mobilecoind_api.GetAccountKeyResponse} returns this
 */
proto.mobilecoind_api.GetAccountKeyResponse.prototype.setAccountKey = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.GetAccountKeyResponse} returns this
 */
proto.mobilecoind_api.GetAccountKeyResponse.prototype.clearAccountKey = function () {
  return this.setAccountKey(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.GetAccountKeyResponse.prototype.hasAccountKey = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetPublicAddressRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetPublicAddressRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetPublicAddressRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetPublicAddressRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      monitorId: msg.getMonitorId_asB64(),
      subaddressIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetPublicAddressRequest}
 */
proto.mobilecoind_api.GetPublicAddressRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetPublicAddressRequest();
  return proto.mobilecoind_api.GetPublicAddressRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetPublicAddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetPublicAddressRequest}
 */
proto.mobilecoind_api.GetPublicAddressRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMonitorId(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSubaddressIndex(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetPublicAddressRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetPublicAddressRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetPublicAddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetPublicAddressRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getSubaddressIndex();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
};

/**
 * optional bytes monitor_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.GetPublicAddressRequest.prototype.getMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes monitor_id = 1;
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.GetPublicAddressRequest.prototype.getMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMonitorId()));
};

/**
 * optional bytes monitor_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetPublicAddressRequest.prototype.getMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.GetPublicAddressRequest} returns this
 */
proto.mobilecoind_api.GetPublicAddressRequest.prototype.setMonitorId = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional uint64 subaddress_index = 2;
 * @return {number}
 */
proto.mobilecoind_api.GetPublicAddressRequest.prototype.getSubaddressIndex = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GetPublicAddressRequest} returns this
 */
proto.mobilecoind_api.GetPublicAddressRequest.prototype.setSubaddressIndex = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetPublicAddressResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetPublicAddressResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetPublicAddressResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetPublicAddressResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      publicAddress:
        (f = msg.getPublicAddress()) &&
        external_pb.PublicAddress.toObject(includeInstance, f),
      b58Code: jspb.Message.getFieldWithDefault(msg, 2, ''),
      mobUrl: jspb.Message.getFieldWithDefault(msg, 3, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetPublicAddressResponse}
 */
proto.mobilecoind_api.GetPublicAddressResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetPublicAddressResponse();
  return proto.mobilecoind_api.GetPublicAddressResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetPublicAddressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetPublicAddressResponse}
 */
proto.mobilecoind_api.GetPublicAddressResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new external_pb.PublicAddress();
        reader.readMessage(
          value,
          external_pb.PublicAddress.deserializeBinaryFromReader
        );
        msg.setPublicAddress(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setB58Code(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setMobUrl(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetPublicAddressResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetPublicAddressResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetPublicAddressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetPublicAddressResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getPublicAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      external_pb.PublicAddress.serializeBinaryToWriter
    );
  }
  f = message.getB58Code();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getMobUrl();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional external.PublicAddress public_address = 1;
 * @return {?proto.external.PublicAddress}
 */
proto.mobilecoind_api.GetPublicAddressResponse.prototype.getPublicAddress = function () {
  return /** @type{?proto.external.PublicAddress} */ (jspb.Message.getWrapperField(
    this,
    external_pb.PublicAddress,
    1
  ));
};

/**
 * @param {?proto.external.PublicAddress|undefined} value
 * @return {!proto.mobilecoind_api.GetPublicAddressResponse} returns this
 */
proto.mobilecoind_api.GetPublicAddressResponse.prototype.setPublicAddress = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.GetPublicAddressResponse} returns this
 */
proto.mobilecoind_api.GetPublicAddressResponse.prototype.clearPublicAddress = function () {
  return this.setPublicAddress(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.GetPublicAddressResponse.prototype.hasPublicAddress = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional string b58_code = 2;
 * @return {string}
 */
proto.mobilecoind_api.GetPublicAddressResponse.prototype.getB58Code = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.GetPublicAddressResponse} returns this
 */
proto.mobilecoind_api.GetPublicAddressResponse.prototype.setB58Code = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string mob_url = 3;
 * @return {string}
 */
proto.mobilecoind_api.GetPublicAddressResponse.prototype.getMobUrl = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.GetPublicAddressResponse} returns this
 */
proto.mobilecoind_api.GetPublicAddressResponse.prototype.setMobUrl = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.ParseRequestCodeRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.ParseRequestCodeRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.ParseRequestCodeRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.ParseRequestCodeRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      b58Code: jspb.Message.getFieldWithDefault(msg, 1, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.ParseRequestCodeRequest}
 */
proto.mobilecoind_api.ParseRequestCodeRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.ParseRequestCodeRequest();
  return proto.mobilecoind_api.ParseRequestCodeRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.ParseRequestCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.ParseRequestCodeRequest}
 */
proto.mobilecoind_api.ParseRequestCodeRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setB58Code(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.ParseRequestCodeRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.ParseRequestCodeRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.ParseRequestCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.ParseRequestCodeRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getB58Code();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string b58_code = 1;
 * @return {string}
 */
proto.mobilecoind_api.ParseRequestCodeRequest.prototype.getB58Code = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.ParseRequestCodeRequest} returns this
 */
proto.mobilecoind_api.ParseRequestCodeRequest.prototype.setB58Code = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.ParseRequestCodeResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.ParseRequestCodeResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.ParseRequestCodeResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.ParseRequestCodeResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      receiver:
        (f = msg.getReceiver()) &&
        external_pb.PublicAddress.toObject(includeInstance, f),
      value: jspb.Message.getFieldWithDefault(msg, 2, '0'),
      memo: jspb.Message.getFieldWithDefault(msg, 3, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.ParseRequestCodeResponse}
 */
proto.mobilecoind_api.ParseRequestCodeResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.ParseRequestCodeResponse();
  return proto.mobilecoind_api.ParseRequestCodeResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.ParseRequestCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.ParseRequestCodeResponse}
 */
proto.mobilecoind_api.ParseRequestCodeResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new external_pb.PublicAddress();
        reader.readMessage(
          value,
          external_pb.PublicAddress.deserializeBinaryFromReader
        );
        msg.setReceiver(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setValue(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setMemo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.ParseRequestCodeResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.ParseRequestCodeResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.ParseRequestCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.ParseRequestCodeResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getReceiver();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      external_pb.PublicAddress.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(2, f);
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional external.PublicAddress receiver = 1;
 * @return {?proto.external.PublicAddress}
 */
proto.mobilecoind_api.ParseRequestCodeResponse.prototype.getReceiver = function () {
  return /** @type{?proto.external.PublicAddress} */ (jspb.Message.getWrapperField(
    this,
    external_pb.PublicAddress,
    1
  ));
};

/**
 * @param {?proto.external.PublicAddress|undefined} value
 * @return {!proto.mobilecoind_api.ParseRequestCodeResponse} returns this
 */
proto.mobilecoind_api.ParseRequestCodeResponse.prototype.setReceiver = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.ParseRequestCodeResponse} returns this
 */
proto.mobilecoind_api.ParseRequestCodeResponse.prototype.clearReceiver = function () {
  return this.setReceiver(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.ParseRequestCodeResponse.prototype.hasReceiver = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional uint64 value = 2;
 * @return {string}
 */
proto.mobilecoind_api.ParseRequestCodeResponse.prototype.getValue = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.ParseRequestCodeResponse} returns this
 */
proto.mobilecoind_api.ParseRequestCodeResponse.prototype.setValue = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};

/**
 * optional string memo = 3;
 * @return {string}
 */
proto.mobilecoind_api.ParseRequestCodeResponse.prototype.getMemo = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.ParseRequestCodeResponse} returns this
 */
proto.mobilecoind_api.ParseRequestCodeResponse.prototype.setMemo = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.CreateRequestCodeRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.CreateRequestCodeRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.CreateRequestCodeRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.CreateRequestCodeRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      receiver:
        (f = msg.getReceiver()) &&
        external_pb.PublicAddress.toObject(includeInstance, f),
      value: jspb.Message.getFieldWithDefault(msg, 2, 0),
      memo: jspb.Message.getFieldWithDefault(msg, 3, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.CreateRequestCodeRequest}
 */
proto.mobilecoind_api.CreateRequestCodeRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.CreateRequestCodeRequest();
  return proto.mobilecoind_api.CreateRequestCodeRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.CreateRequestCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.CreateRequestCodeRequest}
 */
proto.mobilecoind_api.CreateRequestCodeRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new external_pb.PublicAddress();
        reader.readMessage(
          value,
          external_pb.PublicAddress.deserializeBinaryFromReader
        );
        msg.setReceiver(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setValue(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setMemo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.CreateRequestCodeRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.CreateRequestCodeRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.CreateRequestCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.CreateRequestCodeRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getReceiver();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      external_pb.PublicAddress.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional external.PublicAddress receiver = 1;
 * @return {?proto.external.PublicAddress}
 */
proto.mobilecoind_api.CreateRequestCodeRequest.prototype.getReceiver = function () {
  return /** @type{?proto.external.PublicAddress} */ (jspb.Message.getWrapperField(
    this,
    external_pb.PublicAddress,
    1
  ));
};

/**
 * @param {?proto.external.PublicAddress|undefined} value
 * @return {!proto.mobilecoind_api.CreateRequestCodeRequest} returns this
 */
proto.mobilecoind_api.CreateRequestCodeRequest.prototype.setReceiver = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.CreateRequestCodeRequest} returns this
 */
proto.mobilecoind_api.CreateRequestCodeRequest.prototype.clearReceiver = function () {
  return this.setReceiver(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.CreateRequestCodeRequest.prototype.hasReceiver = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional uint64 value = 2;
 * @return {number}
 */
proto.mobilecoind_api.CreateRequestCodeRequest.prototype.getValue = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.CreateRequestCodeRequest} returns this
 */
proto.mobilecoind_api.CreateRequestCodeRequest.prototype.setValue = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional string memo = 3;
 * @return {string}
 */
proto.mobilecoind_api.CreateRequestCodeRequest.prototype.getMemo = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.CreateRequestCodeRequest} returns this
 */
proto.mobilecoind_api.CreateRequestCodeRequest.prototype.setMemo = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.CreateRequestCodeResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.CreateRequestCodeResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.CreateRequestCodeResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.CreateRequestCodeResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      b58Code: jspb.Message.getFieldWithDefault(msg, 1, ''),
      mobUrl: jspb.Message.getFieldWithDefault(msg, 2, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.CreateRequestCodeResponse}
 */
proto.mobilecoind_api.CreateRequestCodeResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.CreateRequestCodeResponse();
  return proto.mobilecoind_api.CreateRequestCodeResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.CreateRequestCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.CreateRequestCodeResponse}
 */
proto.mobilecoind_api.CreateRequestCodeResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setB58Code(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setMobUrl(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.CreateRequestCodeResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.CreateRequestCodeResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.CreateRequestCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.CreateRequestCodeResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getB58Code();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getMobUrl();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string b58_code = 1;
 * @return {string}
 */
proto.mobilecoind_api.CreateRequestCodeResponse.prototype.getB58Code = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.CreateRequestCodeResponse} returns this
 */
proto.mobilecoind_api.CreateRequestCodeResponse.prototype.setB58Code = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string mob_url = 2;
 * @return {string}
 */
proto.mobilecoind_api.CreateRequestCodeResponse.prototype.getMobUrl = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.CreateRequestCodeResponse} returns this
 */
proto.mobilecoind_api.CreateRequestCodeResponse.prototype.setMobUrl = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.ParseTransferCodeRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.ParseTransferCodeRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.ParseTransferCodeRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.ParseTransferCodeRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      b58Code: jspb.Message.getFieldWithDefault(msg, 1, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.ParseTransferCodeRequest}
 */
proto.mobilecoind_api.ParseTransferCodeRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.ParseTransferCodeRequest();
  return proto.mobilecoind_api.ParseTransferCodeRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.ParseTransferCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.ParseTransferCodeRequest}
 */
proto.mobilecoind_api.ParseTransferCodeRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setB58Code(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.ParseTransferCodeRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.ParseTransferCodeRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.ParseTransferCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.ParseTransferCodeRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getB58Code();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string b58_code = 1;
 * @return {string}
 */
proto.mobilecoind_api.ParseTransferCodeRequest.prototype.getB58Code = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.ParseTransferCodeRequest} returns this
 */
proto.mobilecoind_api.ParseTransferCodeRequest.prototype.setB58Code = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.ParseTransferCodeResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.ParseTransferCodeResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.ParseTransferCodeResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.ParseTransferCodeResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      entropy: msg.getEntropy_asB64(),
      txPublicKey:
        (f = msg.getTxPublicKey()) &&
        external_pb.CompressedRistretto.toObject(includeInstance, f),
      memo: jspb.Message.getFieldWithDefault(msg, 3, ''),
      utxo:
        (f = msg.getUtxo()) &&
        proto.mobilecoind_api.UnspentTxOut.toObject(includeInstance, f),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.ParseTransferCodeResponse}
 */
proto.mobilecoind_api.ParseTransferCodeResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.ParseTransferCodeResponse();
  return proto.mobilecoind_api.ParseTransferCodeResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.ParseTransferCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.ParseTransferCodeResponse}
 */
proto.mobilecoind_api.ParseTransferCodeResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setEntropy(value);
        break;
      case 2:
        var value = new external_pb.CompressedRistretto();
        reader.readMessage(
          value,
          external_pb.CompressedRistretto.deserializeBinaryFromReader
        );
        msg.setTxPublicKey(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setMemo(value);
        break;
      case 4:
        var value = new proto.mobilecoind_api.UnspentTxOut();
        reader.readMessage(
          value,
          proto.mobilecoind_api.UnspentTxOut.deserializeBinaryFromReader
        );
        msg.setUtxo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.ParseTransferCodeResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.ParseTransferCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.ParseTransferCodeResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getEntropy_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getTxPublicKey();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      external_pb.CompressedRistretto.serializeBinaryToWriter
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getUtxo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.mobilecoind_api.UnspentTxOut.serializeBinaryToWriter
    );
  }
};

/**
 * optional bytes entropy = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.getEntropy = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes entropy = 1;
 * This is a type-conversion wrapper around `getEntropy()`
 * @return {string}
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.getEntropy_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getEntropy()));
};

/**
 * optional bytes entropy = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEntropy()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.getEntropy_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getEntropy()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.ParseTransferCodeResponse} returns this
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.setEntropy = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional external.CompressedRistretto tx_public_key = 2;
 * @return {?proto.external.CompressedRistretto}
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.getTxPublicKey = function () {
  return /** @type{?proto.external.CompressedRistretto} */ (jspb.Message.getWrapperField(
    this,
    external_pb.CompressedRistretto,
    2
  ));
};

/**
 * @param {?proto.external.CompressedRistretto|undefined} value
 * @return {!proto.mobilecoind_api.ParseTransferCodeResponse} returns this
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.setTxPublicKey = function (
  value
) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.ParseTransferCodeResponse} returns this
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.clearTxPublicKey = function () {
  return this.setTxPublicKey(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.hasTxPublicKey = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string memo = 3;
 * @return {string}
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.getMemo = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.ParseTransferCodeResponse} returns this
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.setMemo = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional UnspentTxOut utxo = 4;
 * @return {?proto.mobilecoind_api.UnspentTxOut}
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.getUtxo = function () {
  return /** @type{?proto.mobilecoind_api.UnspentTxOut} */ (jspb.Message.getWrapperField(
    this,
    proto.mobilecoind_api.UnspentTxOut,
    4
  ));
};

/**
 * @param {?proto.mobilecoind_api.UnspentTxOut|undefined} value
 * @return {!proto.mobilecoind_api.ParseTransferCodeResponse} returns this
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.setUtxo = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.ParseTransferCodeResponse} returns this
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.clearUtxo = function () {
  return this.setUtxo(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.ParseTransferCodeResponse.prototype.hasUtxo = function () {
  return jspb.Message.getField(this, 4) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.CreateTransferCodeRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.CreateTransferCodeRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.CreateTransferCodeRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.CreateTransferCodeRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      entropy: msg.getEntropy_asB64(),
      txPublicKey:
        (f = msg.getTxPublicKey()) &&
        external_pb.CompressedRistretto.toObject(includeInstance, f),
      memo: jspb.Message.getFieldWithDefault(msg, 3, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.CreateTransferCodeRequest}
 */
proto.mobilecoind_api.CreateTransferCodeRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.CreateTransferCodeRequest();
  return proto.mobilecoind_api.CreateTransferCodeRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.CreateTransferCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.CreateTransferCodeRequest}
 */
proto.mobilecoind_api.CreateTransferCodeRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setEntropy(value);
        break;
      case 2:
        var value = new external_pb.CompressedRistretto();
        reader.readMessage(
          value,
          external_pb.CompressedRistretto.deserializeBinaryFromReader
        );
        msg.setTxPublicKey(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setMemo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.CreateTransferCodeRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.CreateTransferCodeRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.CreateTransferCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.CreateTransferCodeRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getEntropy_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getTxPublicKey();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      external_pb.CompressedRistretto.serializeBinaryToWriter
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional bytes entropy = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.CreateTransferCodeRequest.prototype.getEntropy = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes entropy = 1;
 * This is a type-conversion wrapper around `getEntropy()`
 * @return {string}
 */
proto.mobilecoind_api.CreateTransferCodeRequest.prototype.getEntropy_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getEntropy()));
};

/**
 * optional bytes entropy = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEntropy()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.CreateTransferCodeRequest.prototype.getEntropy_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getEntropy()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.CreateTransferCodeRequest} returns this
 */
proto.mobilecoind_api.CreateTransferCodeRequest.prototype.setEntropy = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional external.CompressedRistretto tx_public_key = 2;
 * @return {?proto.external.CompressedRistretto}
 */
proto.mobilecoind_api.CreateTransferCodeRequest.prototype.getTxPublicKey = function () {
  return /** @type{?proto.external.CompressedRistretto} */ (jspb.Message.getWrapperField(
    this,
    external_pb.CompressedRistretto,
    2
  ));
};

/**
 * @param {?proto.external.CompressedRistretto|undefined} value
 * @return {!proto.mobilecoind_api.CreateTransferCodeRequest} returns this
 */
proto.mobilecoind_api.CreateTransferCodeRequest.prototype.setTxPublicKey = function (
  value
) {
  return jspb.Message.setWrapperField(this, 2, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.CreateTransferCodeRequest} returns this
 */
proto.mobilecoind_api.CreateTransferCodeRequest.prototype.clearTxPublicKey = function () {
  return this.setTxPublicKey(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.CreateTransferCodeRequest.prototype.hasTxPublicKey = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional string memo = 3;
 * @return {string}
 */
proto.mobilecoind_api.CreateTransferCodeRequest.prototype.getMemo = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.CreateTransferCodeRequest} returns this
 */
proto.mobilecoind_api.CreateTransferCodeRequest.prototype.setMemo = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.CreateTransferCodeResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.CreateTransferCodeResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.CreateTransferCodeResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.CreateTransferCodeResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      b58Code: jspb.Message.getFieldWithDefault(msg, 1, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.CreateTransferCodeResponse}
 */
proto.mobilecoind_api.CreateTransferCodeResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.CreateTransferCodeResponse();
  return proto.mobilecoind_api.CreateTransferCodeResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.CreateTransferCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.CreateTransferCodeResponse}
 */
proto.mobilecoind_api.CreateTransferCodeResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setB58Code(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.CreateTransferCodeResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.CreateTransferCodeResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.CreateTransferCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.CreateTransferCodeResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getB58Code();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string b58_code = 1;
 * @return {string}
 */
proto.mobilecoind_api.CreateTransferCodeResponse.prototype.getB58Code = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.CreateTransferCodeResponse} returns this
 */
proto.mobilecoind_api.CreateTransferCodeResponse.prototype.setB58Code = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.ParseAddressCodeRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.ParseAddressCodeRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.ParseAddressCodeRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.ParseAddressCodeRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      b58Code: jspb.Message.getFieldWithDefault(msg, 1, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.ParseAddressCodeRequest}
 */
proto.mobilecoind_api.ParseAddressCodeRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.ParseAddressCodeRequest();
  return proto.mobilecoind_api.ParseAddressCodeRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.ParseAddressCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.ParseAddressCodeRequest}
 */
proto.mobilecoind_api.ParseAddressCodeRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setB58Code(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.ParseAddressCodeRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.ParseAddressCodeRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.ParseAddressCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.ParseAddressCodeRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getB58Code();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string b58_code = 1;
 * @return {string}
 */
proto.mobilecoind_api.ParseAddressCodeRequest.prototype.getB58Code = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.ParseAddressCodeRequest} returns this
 */
proto.mobilecoind_api.ParseAddressCodeRequest.prototype.setB58Code = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.ParseAddressCodeResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.ParseAddressCodeResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.ParseAddressCodeResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.ParseAddressCodeResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      receiver:
        (f = msg.getReceiver()) &&
        external_pb.PublicAddress.toObject(includeInstance, f),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.ParseAddressCodeResponse}
 */
proto.mobilecoind_api.ParseAddressCodeResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.ParseAddressCodeResponse();
  return proto.mobilecoind_api.ParseAddressCodeResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.ParseAddressCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.ParseAddressCodeResponse}
 */
proto.mobilecoind_api.ParseAddressCodeResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new external_pb.PublicAddress();
        reader.readMessage(
          value,
          external_pb.PublicAddress.deserializeBinaryFromReader
        );
        msg.setReceiver(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.ParseAddressCodeResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.ParseAddressCodeResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.ParseAddressCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.ParseAddressCodeResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getReceiver();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      external_pb.PublicAddress.serializeBinaryToWriter
    );
  }
};

/**
 * optional external.PublicAddress receiver = 1;
 * @return {?proto.external.PublicAddress}
 */
proto.mobilecoind_api.ParseAddressCodeResponse.prototype.getReceiver = function () {
  return /** @type{?proto.external.PublicAddress} */ (jspb.Message.getWrapperField(
    this,
    external_pb.PublicAddress,
    1
  ));
};

/**
 * @param {?proto.external.PublicAddress|undefined} value
 * @return {!proto.mobilecoind_api.ParseAddressCodeResponse} returns this
 */
proto.mobilecoind_api.ParseAddressCodeResponse.prototype.setReceiver = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.ParseAddressCodeResponse} returns this
 */
proto.mobilecoind_api.ParseAddressCodeResponse.prototype.clearReceiver = function () {
  return this.setReceiver(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.ParseAddressCodeResponse.prototype.hasReceiver = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.CreateAddressCodeRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.CreateAddressCodeRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.CreateAddressCodeRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.CreateAddressCodeRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      receiver:
        (f = msg.getReceiver()) &&
        external_pb.PublicAddress.toObject(includeInstance, f),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.CreateAddressCodeRequest}
 */
proto.mobilecoind_api.CreateAddressCodeRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.CreateAddressCodeRequest();
  return proto.mobilecoind_api.CreateAddressCodeRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.CreateAddressCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.CreateAddressCodeRequest}
 */
proto.mobilecoind_api.CreateAddressCodeRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new external_pb.PublicAddress();
        reader.readMessage(
          value,
          external_pb.PublicAddress.deserializeBinaryFromReader
        );
        msg.setReceiver(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.CreateAddressCodeRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.CreateAddressCodeRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.CreateAddressCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.CreateAddressCodeRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getReceiver();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      external_pb.PublicAddress.serializeBinaryToWriter
    );
  }
};

/**
 * optional external.PublicAddress receiver = 1;
 * @return {?proto.external.PublicAddress}
 */
proto.mobilecoind_api.CreateAddressCodeRequest.prototype.getReceiver = function () {
  return /** @type{?proto.external.PublicAddress} */ (jspb.Message.getWrapperField(
    this,
    external_pb.PublicAddress,
    1
  ));
};

/**
 * @param {?proto.external.PublicAddress|undefined} value
 * @return {!proto.mobilecoind_api.CreateAddressCodeRequest} returns this
 */
proto.mobilecoind_api.CreateAddressCodeRequest.prototype.setReceiver = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.CreateAddressCodeRequest} returns this
 */
proto.mobilecoind_api.CreateAddressCodeRequest.prototype.clearReceiver = function () {
  return this.setReceiver(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.CreateAddressCodeRequest.prototype.hasReceiver = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.CreateAddressCodeResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.CreateAddressCodeResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.CreateAddressCodeResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.CreateAddressCodeResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      b58Code: jspb.Message.getFieldWithDefault(msg, 1, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.CreateAddressCodeResponse}
 */
proto.mobilecoind_api.CreateAddressCodeResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.CreateAddressCodeResponse();
  return proto.mobilecoind_api.CreateAddressCodeResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.CreateAddressCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.CreateAddressCodeResponse}
 */
proto.mobilecoind_api.CreateAddressCodeResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setB58Code(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.CreateAddressCodeResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.CreateAddressCodeResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.CreateAddressCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.CreateAddressCodeResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getB58Code();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string b58_code = 1;
 * @return {string}
 */
proto.mobilecoind_api.CreateAddressCodeResponse.prototype.getB58Code = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.CreateAddressCodeResponse} returns this
 */
proto.mobilecoind_api.CreateAddressCodeResponse.prototype.setB58Code = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mobilecoind_api.GenerateTxRequest.repeatedFields_ = [3, 4];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GenerateTxRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GenerateTxRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GenerateTxRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GenerateTxRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      senderMonitorId: msg.getSenderMonitorId_asB64(),
      changeSubaddress: jspb.Message.getFieldWithDefault(msg, 2, 0),
      inputListList: jspb.Message.toObjectList(
        msg.getInputListList(),
        proto.mobilecoind_api.UnspentTxOut.toObject,
        includeInstance
      ),
      outlayListList: jspb.Message.toObjectList(
        msg.getOutlayListList(),
        proto.mobilecoind_api.Outlay.toObject,
        includeInstance
      ),
      fee: jspb.Message.getFieldWithDefault(msg, 5, 0),
      tombstone: jspb.Message.getFieldWithDefault(msg, 6, 0),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GenerateTxRequest}
 */
proto.mobilecoind_api.GenerateTxRequest.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GenerateTxRequest();
  return proto.mobilecoind_api.GenerateTxRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GenerateTxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GenerateTxRequest}
 */
proto.mobilecoind_api.GenerateTxRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setSenderMonitorId(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setChangeSubaddress(value);
        break;
      case 3:
        var value = new proto.mobilecoind_api.UnspentTxOut();
        reader.readMessage(
          value,
          proto.mobilecoind_api.UnspentTxOut.deserializeBinaryFromReader
        );
        msg.addInputList(value);
        break;
      case 4:
        var value = new proto.mobilecoind_api.Outlay();
        reader.readMessage(
          value,
          proto.mobilecoind_api.Outlay.deserializeBinaryFromReader
        );
        msg.addOutlayList(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFee(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTombstone(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GenerateTxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GenerateTxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GenerateTxRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getSenderMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getChangeSubaddress();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getInputListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.mobilecoind_api.UnspentTxOut.serializeBinaryToWriter
    );
  }
  f = message.getOutlayListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.mobilecoind_api.Outlay.serializeBinaryToWriter
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint64(5, f);
  }
  f = message.getTombstone();
  if (f !== 0) {
    writer.writeUint64(6, f);
  }
};

/**
 * optional bytes sender_monitor_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.getSenderMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes sender_monitor_id = 1;
 * This is a type-conversion wrapper around `getSenderMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.getSenderMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
    this.getSenderMonitorId()
  ));
};

/**
 * optional bytes sender_monitor_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSenderMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.getSenderMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getSenderMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.GenerateTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.setSenderMonitorId = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional uint64 change_subaddress = 2;
 * @return {number}
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.getChangeSubaddress = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GenerateTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.setChangeSubaddress = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * repeated UnspentTxOut input_list = 3;
 * @return {!Array<!proto.mobilecoind_api.UnspentTxOut>}
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.getInputListList = function () {
  return /** @type{!Array<!proto.mobilecoind_api.UnspentTxOut>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.mobilecoind_api.UnspentTxOut,
    3
  ));
};

/**
 * @param {!Array<!proto.mobilecoind_api.UnspentTxOut>} value
 * @return {!proto.mobilecoind_api.GenerateTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.setInputListList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.mobilecoind_api.UnspentTxOut=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mobilecoind_api.UnspentTxOut}
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.addInputList = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    3,
    opt_value,
    proto.mobilecoind_api.UnspentTxOut,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.GenerateTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.clearInputListList = function () {
  return this.setInputListList([]);
};

/**
 * repeated Outlay outlay_list = 4;
 * @return {!Array<!proto.mobilecoind_api.Outlay>}
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.getOutlayListList = function () {
  return /** @type{!Array<!proto.mobilecoind_api.Outlay>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.mobilecoind_api.Outlay,
    4
  ));
};

/**
 * @param {!Array<!proto.mobilecoind_api.Outlay>} value
 * @return {!proto.mobilecoind_api.GenerateTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.setOutlayListList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};

/**
 * @param {!proto.mobilecoind_api.Outlay=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mobilecoind_api.Outlay}
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.addOutlayList = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    4,
    opt_value,
    proto.mobilecoind_api.Outlay,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.GenerateTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.clearOutlayListList = function () {
  return this.setOutlayListList([]);
};

/**
 * optional uint64 fee = 5;
 * @return {number}
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.getFee = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GenerateTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.setFee = function (value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};

/**
 * optional uint64 tombstone = 6;
 * @return {number}
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.getTombstone = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GenerateTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTxRequest.prototype.setTombstone = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GenerateTxResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GenerateTxResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GenerateTxResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GenerateTxResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      txProposal:
        (f = msg.getTxProposal()) &&
        proto.mobilecoind_api.TxProposal.toObject(includeInstance, f),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GenerateTxResponse}
 */
proto.mobilecoind_api.GenerateTxResponse.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GenerateTxResponse();
  return proto.mobilecoind_api.GenerateTxResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GenerateTxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GenerateTxResponse}
 */
proto.mobilecoind_api.GenerateTxResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.mobilecoind_api.TxProposal();
        reader.readMessage(
          value,
          proto.mobilecoind_api.TxProposal.deserializeBinaryFromReader
        );
        msg.setTxProposal(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GenerateTxResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GenerateTxResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GenerateTxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GenerateTxResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getTxProposal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mobilecoind_api.TxProposal.serializeBinaryToWriter
    );
  }
};

/**
 * optional TxProposal tx_proposal = 1;
 * @return {?proto.mobilecoind_api.TxProposal}
 */
proto.mobilecoind_api.GenerateTxResponse.prototype.getTxProposal = function () {
  return /** @type{?proto.mobilecoind_api.TxProposal} */ (jspb.Message.getWrapperField(
    this,
    proto.mobilecoind_api.TxProposal,
    1
  ));
};

/**
 * @param {?proto.mobilecoind_api.TxProposal|undefined} value
 * @return {!proto.mobilecoind_api.GenerateTxResponse} returns this
 */
proto.mobilecoind_api.GenerateTxResponse.prototype.setTxProposal = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.GenerateTxResponse} returns this
 */
proto.mobilecoind_api.GenerateTxResponse.prototype.clearTxProposal = function () {
  return this.setTxProposal(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.GenerateTxResponse.prototype.hasTxProposal = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GenerateOptimizationTxRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GenerateOptimizationTxRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GenerateOptimizationTxRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GenerateOptimizationTxRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      monitorId: msg.getMonitorId_asB64(),
      subaddress: jspb.Message.getFieldWithDefault(msg, 2, 0),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GenerateOptimizationTxRequest}
 */
proto.mobilecoind_api.GenerateOptimizationTxRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GenerateOptimizationTxRequest();
  return proto.mobilecoind_api.GenerateOptimizationTxRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GenerateOptimizationTxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GenerateOptimizationTxRequest}
 */
proto.mobilecoind_api.GenerateOptimizationTxRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMonitorId(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSubaddress(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GenerateOptimizationTxRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GenerateOptimizationTxRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GenerateOptimizationTxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GenerateOptimizationTxRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getSubaddress();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
};

/**
 * optional bytes monitor_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.GenerateOptimizationTxRequest.prototype.getMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes monitor_id = 1;
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.GenerateOptimizationTxRequest.prototype.getMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMonitorId()));
};

/**
 * optional bytes monitor_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GenerateOptimizationTxRequest.prototype.getMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.GenerateOptimizationTxRequest} returns this
 */
proto.mobilecoind_api.GenerateOptimizationTxRequest.prototype.setMonitorId = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional uint64 subaddress = 2;
 * @return {number}
 */
proto.mobilecoind_api.GenerateOptimizationTxRequest.prototype.getSubaddress = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GenerateOptimizationTxRequest} returns this
 */
proto.mobilecoind_api.GenerateOptimizationTxRequest.prototype.setSubaddress = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GenerateOptimizationTxResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GenerateOptimizationTxResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GenerateOptimizationTxResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GenerateOptimizationTxResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      txProposal:
        (f = msg.getTxProposal()) &&
        proto.mobilecoind_api.TxProposal.toObject(includeInstance, f),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GenerateOptimizationTxResponse}
 */
proto.mobilecoind_api.GenerateOptimizationTxResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GenerateOptimizationTxResponse();
  return proto.mobilecoind_api.GenerateOptimizationTxResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GenerateOptimizationTxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GenerateOptimizationTxResponse}
 */
proto.mobilecoind_api.GenerateOptimizationTxResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.mobilecoind_api.TxProposal();
        reader.readMessage(
          value,
          proto.mobilecoind_api.TxProposal.deserializeBinaryFromReader
        );
        msg.setTxProposal(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GenerateOptimizationTxResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GenerateOptimizationTxResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GenerateOptimizationTxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GenerateOptimizationTxResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getTxProposal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mobilecoind_api.TxProposal.serializeBinaryToWriter
    );
  }
};

/**
 * optional TxProposal tx_proposal = 1;
 * @return {?proto.mobilecoind_api.TxProposal}
 */
proto.mobilecoind_api.GenerateOptimizationTxResponse.prototype.getTxProposal = function () {
  return /** @type{?proto.mobilecoind_api.TxProposal} */ (jspb.Message.getWrapperField(
    this,
    proto.mobilecoind_api.TxProposal,
    1
  ));
};

/**
 * @param {?proto.mobilecoind_api.TxProposal|undefined} value
 * @return {!proto.mobilecoind_api.GenerateOptimizationTxResponse} returns this
 */
proto.mobilecoind_api.GenerateOptimizationTxResponse.prototype.setTxProposal = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.GenerateOptimizationTxResponse} returns this
 */
proto.mobilecoind_api.GenerateOptimizationTxResponse.prototype.clearTxProposal = function () {
  return this.setTxProposal(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.GenerateOptimizationTxResponse.prototype.hasTxProposal = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GenerateTransferCodeTxRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GenerateTransferCodeTxRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GenerateTransferCodeTxRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      senderMonitorId: msg.getSenderMonitorId_asB64(),
      changeSubaddress: jspb.Message.getFieldWithDefault(msg, 2, 0),
      inputListList: jspb.Message.toObjectList(
        msg.getInputListList(),
        proto.mobilecoind_api.UnspentTxOut.toObject,
        includeInstance
      ),
      value: jspb.Message.getFieldWithDefault(msg, 4, 0),
      fee: jspb.Message.getFieldWithDefault(msg, 5, 0),
      tombstone: jspb.Message.getFieldWithDefault(msg, 6, 0),
      memo: jspb.Message.getFieldWithDefault(msg, 7, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxRequest}
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GenerateTransferCodeTxRequest();
  return proto.mobilecoind_api.GenerateTransferCodeTxRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GenerateTransferCodeTxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxRequest}
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setSenderMonitorId(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setChangeSubaddress(value);
        break;
      case 3:
        var value = new proto.mobilecoind_api.UnspentTxOut();
        reader.readMessage(
          value,
          proto.mobilecoind_api.UnspentTxOut.deserializeBinaryFromReader
        );
        msg.addInputList(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setValue(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFee(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTombstone(value);
        break;
      case 7:
        var value = /** @type {string} */ (reader.readString());
        msg.setMemo(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GenerateTransferCodeTxRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GenerateTransferCodeTxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getSenderMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getChangeSubaddress();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getInputListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.mobilecoind_api.UnspentTxOut.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(4, f);
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint64(5, f);
  }
  f = message.getTombstone();
  if (f !== 0) {
    writer.writeUint64(6, f);
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(7, f);
  }
};

/**
 * optional bytes sender_monitor_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.getSenderMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes sender_monitor_id = 1;
 * This is a type-conversion wrapper around `getSenderMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.getSenderMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
    this.getSenderMonitorId()
  ));
};

/**
 * optional bytes sender_monitor_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSenderMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.getSenderMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getSenderMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.setSenderMonitorId = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional uint64 change_subaddress = 2;
 * @return {number}
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.getChangeSubaddress = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.setChangeSubaddress = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * repeated UnspentTxOut input_list = 3;
 * @return {!Array<!proto.mobilecoind_api.UnspentTxOut>}
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.getInputListList = function () {
  return /** @type{!Array<!proto.mobilecoind_api.UnspentTxOut>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.mobilecoind_api.UnspentTxOut,
    3
  ));
};

/**
 * @param {!Array<!proto.mobilecoind_api.UnspentTxOut>} value
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.setInputListList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.mobilecoind_api.UnspentTxOut=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mobilecoind_api.UnspentTxOut}
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.addInputList = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    3,
    opt_value,
    proto.mobilecoind_api.UnspentTxOut,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.clearInputListList = function () {
  return this.setInputListList([]);
};

/**
 * optional uint64 value = 4;
 * @return {number}
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.getValue = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.setValue = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional uint64 fee = 5;
 * @return {number}
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.getFee = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.setFee = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 5, value);
};

/**
 * optional uint64 tombstone = 6;
 * @return {number}
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.getTombstone = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.setTombstone = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

/**
 * optional string memo = 7;
 * @return {string}
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.getMemo = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxRequest} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxRequest.prototype.setMemo = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 7, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GenerateTransferCodeTxResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GenerateTransferCodeTxResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GenerateTransferCodeTxResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      txProposal:
        (f = msg.getTxProposal()) &&
        proto.mobilecoind_api.TxProposal.toObject(includeInstance, f),
      entropy: msg.getEntropy_asB64(),
      txPublicKey:
        (f = msg.getTxPublicKey()) &&
        external_pb.CompressedRistretto.toObject(includeInstance, f),
      memo: jspb.Message.getFieldWithDefault(msg, 4, ''),
      b58Code: jspb.Message.getFieldWithDefault(msg, 5, ''),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxResponse}
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GenerateTransferCodeTxResponse();
  return proto.mobilecoind_api.GenerateTransferCodeTxResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GenerateTransferCodeTxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxResponse}
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.mobilecoind_api.TxProposal();
        reader.readMessage(
          value,
          proto.mobilecoind_api.TxProposal.deserializeBinaryFromReader
        );
        msg.setTxProposal(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setEntropy(value);
        break;
      case 3:
        var value = new external_pb.CompressedRistretto();
        reader.readMessage(
          value,
          external_pb.CompressedRistretto.deserializeBinaryFromReader
        );
        msg.setTxPublicKey(value);
        break;
      case 4:
        var value = /** @type {string} */ (reader.readString());
        msg.setMemo(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setB58Code(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GenerateTransferCodeTxResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GenerateTransferCodeTxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getTxProposal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mobilecoind_api.TxProposal.serializeBinaryToWriter
    );
  }
  f = message.getEntropy_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
  f = message.getTxPublicKey();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      external_pb.CompressedRistretto.serializeBinaryToWriter
    );
  }
  f = message.getMemo();
  if (f.length > 0) {
    writer.writeString(4, f);
  }
  f = message.getB58Code();
  if (f.length > 0) {
    writer.writeString(5, f);
  }
};

/**
 * optional TxProposal tx_proposal = 1;
 * @return {?proto.mobilecoind_api.TxProposal}
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.getTxProposal = function () {
  return /** @type{?proto.mobilecoind_api.TxProposal} */ (jspb.Message.getWrapperField(
    this,
    proto.mobilecoind_api.TxProposal,
    1
  ));
};

/**
 * @param {?proto.mobilecoind_api.TxProposal|undefined} value
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxResponse} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.setTxProposal = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxResponse} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.clearTxProposal = function () {
  return this.setTxProposal(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.hasTxProposal = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional bytes entropy = 2;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.getEntropy = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    2,
    ''
  ));
};

/**
 * optional bytes entropy = 2;
 * This is a type-conversion wrapper around `getEntropy()`
 * @return {string}
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.getEntropy_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getEntropy()));
};

/**
 * optional bytes entropy = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEntropy()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.getEntropy_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getEntropy()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxResponse} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.setEntropy = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

/**
 * optional external.CompressedRistretto tx_public_key = 3;
 * @return {?proto.external.CompressedRistretto}
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.getTxPublicKey = function () {
  return /** @type{?proto.external.CompressedRistretto} */ (jspb.Message.getWrapperField(
    this,
    external_pb.CompressedRistretto,
    3
  ));
};

/**
 * @param {?proto.external.CompressedRistretto|undefined} value
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxResponse} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.setTxPublicKey = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxResponse} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.clearTxPublicKey = function () {
  return this.setTxPublicKey(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.hasTxPublicKey = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional string memo = 4;
 * @return {string}
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.getMemo = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxResponse} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.setMemo = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 4, value);
};

/**
 * optional string b58_code = 5;
 * @return {string}
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.getB58Code = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.GenerateTransferCodeTxResponse} returns this
 */
proto.mobilecoind_api.GenerateTransferCodeTxResponse.prototype.setB58Code = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GenerateTxFromTxOutListRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GenerateTxFromTxOutListRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GenerateTxFromTxOutListRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      accountKey:
        (f = msg.getAccountKey()) &&
        external_pb.AccountKey.toObject(includeInstance, f),
      inputListList: jspb.Message.toObjectList(
        msg.getInputListList(),
        proto.mobilecoind_api.UnspentTxOut.toObject,
        includeInstance
      ),
      receiver:
        (f = msg.getReceiver()) &&
        external_pb.PublicAddress.toObject(includeInstance, f),
      fee: jspb.Message.getFieldWithDefault(msg, 4, 0),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GenerateTxFromTxOutListRequest}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GenerateTxFromTxOutListRequest();
  return proto.mobilecoind_api.GenerateTxFromTxOutListRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GenerateTxFromTxOutListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GenerateTxFromTxOutListRequest}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new external_pb.AccountKey();
        reader.readMessage(
          value,
          external_pb.AccountKey.deserializeBinaryFromReader
        );
        msg.setAccountKey(value);
        break;
      case 2:
        var value = new proto.mobilecoind_api.UnspentTxOut();
        reader.readMessage(
          value,
          proto.mobilecoind_api.UnspentTxOut.deserializeBinaryFromReader
        );
        msg.addInputList(value);
        break;
      case 3:
        var value = new external_pb.PublicAddress();
        reader.readMessage(
          value,
          external_pb.PublicAddress.deserializeBinaryFromReader
        );
        msg.setReceiver(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFee(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GenerateTxFromTxOutListRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GenerateTxFromTxOutListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getAccountKey();
  if (f != null) {
    writer.writeMessage(1, f, external_pb.AccountKey.serializeBinaryToWriter);
  }
  f = message.getInputListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.mobilecoind_api.UnspentTxOut.serializeBinaryToWriter
    );
  }
  f = message.getReceiver();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      external_pb.PublicAddress.serializeBinaryToWriter
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint64(4, f);
  }
};

/**
 * optional external.AccountKey account_key = 1;
 * @return {?proto.external.AccountKey}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.getAccountKey = function () {
  return /** @type{?proto.external.AccountKey} */ (jspb.Message.getWrapperField(
    this,
    external_pb.AccountKey,
    1
  ));
};

/**
 * @param {?proto.external.AccountKey|undefined} value
 * @return {!proto.mobilecoind_api.GenerateTxFromTxOutListRequest} returns this
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.setAccountKey = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.GenerateTxFromTxOutListRequest} returns this
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.clearAccountKey = function () {
  return this.setAccountKey(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.hasAccountKey = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated UnspentTxOut input_list = 2;
 * @return {!Array<!proto.mobilecoind_api.UnspentTxOut>}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.getInputListList = function () {
  return /** @type{!Array<!proto.mobilecoind_api.UnspentTxOut>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.mobilecoind_api.UnspentTxOut,
    2
  ));
};

/**
 * @param {!Array<!proto.mobilecoind_api.UnspentTxOut>} value
 * @return {!proto.mobilecoind_api.GenerateTxFromTxOutListRequest} returns this
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.setInputListList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.mobilecoind_api.UnspentTxOut=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mobilecoind_api.UnspentTxOut}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.addInputList = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.mobilecoind_api.UnspentTxOut,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.GenerateTxFromTxOutListRequest} returns this
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.clearInputListList = function () {
  return this.setInputListList([]);
};

/**
 * optional external.PublicAddress receiver = 3;
 * @return {?proto.external.PublicAddress}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.getReceiver = function () {
  return /** @type{?proto.external.PublicAddress} */ (jspb.Message.getWrapperField(
    this,
    external_pb.PublicAddress,
    3
  ));
};

/**
 * @param {?proto.external.PublicAddress|undefined} value
 * @return {!proto.mobilecoind_api.GenerateTxFromTxOutListRequest} returns this
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.setReceiver = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.GenerateTxFromTxOutListRequest} returns this
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.clearReceiver = function () {
  return this.setReceiver(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.hasReceiver = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional uint64 fee = 4;
 * @return {number}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.getFee = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GenerateTxFromTxOutListRequest} returns this
 */
proto.mobilecoind_api.GenerateTxFromTxOutListRequest.prototype.setFee = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GenerateTxFromTxOutListResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GenerateTxFromTxOutListResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GenerateTxFromTxOutListResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GenerateTxFromTxOutListResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      txProposal:
        (f = msg.getTxProposal()) &&
        proto.mobilecoind_api.TxProposal.toObject(includeInstance, f),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GenerateTxFromTxOutListResponse}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GenerateTxFromTxOutListResponse();
  return proto.mobilecoind_api.GenerateTxFromTxOutListResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GenerateTxFromTxOutListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GenerateTxFromTxOutListResponse}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.mobilecoind_api.TxProposal();
        reader.readMessage(
          value,
          proto.mobilecoind_api.TxProposal.deserializeBinaryFromReader
        );
        msg.setTxProposal(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GenerateTxFromTxOutListResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GenerateTxFromTxOutListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GenerateTxFromTxOutListResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getTxProposal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mobilecoind_api.TxProposal.serializeBinaryToWriter
    );
  }
};

/**
 * optional TxProposal tx_proposal = 1;
 * @return {?proto.mobilecoind_api.TxProposal}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListResponse.prototype.getTxProposal = function () {
  return /** @type{?proto.mobilecoind_api.TxProposal} */ (jspb.Message.getWrapperField(
    this,
    proto.mobilecoind_api.TxProposal,
    1
  ));
};

/**
 * @param {?proto.mobilecoind_api.TxProposal|undefined} value
 * @return {!proto.mobilecoind_api.GenerateTxFromTxOutListResponse} returns this
 */
proto.mobilecoind_api.GenerateTxFromTxOutListResponse.prototype.setTxProposal = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.GenerateTxFromTxOutListResponse} returns this
 */
proto.mobilecoind_api.GenerateTxFromTxOutListResponse.prototype.clearTxProposal = function () {
  return this.setTxProposal(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.GenerateTxFromTxOutListResponse.prototype.hasTxProposal = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.SubmitTxRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.SubmitTxRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.SubmitTxRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.SubmitTxRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      txProposal:
        (f = msg.getTxProposal()) &&
        proto.mobilecoind_api.TxProposal.toObject(includeInstance, f),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.SubmitTxRequest}
 */
proto.mobilecoind_api.SubmitTxRequest.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.SubmitTxRequest();
  return proto.mobilecoind_api.SubmitTxRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.SubmitTxRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.SubmitTxRequest}
 */
proto.mobilecoind_api.SubmitTxRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.mobilecoind_api.TxProposal();
        reader.readMessage(
          value,
          proto.mobilecoind_api.TxProposal.deserializeBinaryFromReader
        );
        msg.setTxProposal(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.SubmitTxRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.SubmitTxRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.SubmitTxRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.SubmitTxRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getTxProposal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mobilecoind_api.TxProposal.serializeBinaryToWriter
    );
  }
};

/**
 * optional TxProposal tx_proposal = 1;
 * @return {?proto.mobilecoind_api.TxProposal}
 */
proto.mobilecoind_api.SubmitTxRequest.prototype.getTxProposal = function () {
  return /** @type{?proto.mobilecoind_api.TxProposal} */ (jspb.Message.getWrapperField(
    this,
    proto.mobilecoind_api.TxProposal,
    1
  ));
};

/**
 * @param {?proto.mobilecoind_api.TxProposal|undefined} value
 * @return {!proto.mobilecoind_api.SubmitTxRequest} returns this
 */
proto.mobilecoind_api.SubmitTxRequest.prototype.setTxProposal = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.SubmitTxRequest} returns this
 */
proto.mobilecoind_api.SubmitTxRequest.prototype.clearTxProposal = function () {
  return this.setTxProposal(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.SubmitTxRequest.prototype.hasTxProposal = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mobilecoind_api.SubmitTxResponse.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.SubmitTxResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.SubmitTxResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.SubmitTxResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.SubmitTxResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      senderTxReceipt:
        (f = msg.getSenderTxReceipt()) &&
        proto.mobilecoind_api.SenderTxReceipt.toObject(includeInstance, f),
      receiverTxReceiptListList: jspb.Message.toObjectList(
        msg.getReceiverTxReceiptListList(),
        proto.mobilecoind_api.ReceiverTxReceipt.toObject,
        includeInstance
      ),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.SubmitTxResponse}
 */
proto.mobilecoind_api.SubmitTxResponse.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.SubmitTxResponse();
  return proto.mobilecoind_api.SubmitTxResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.SubmitTxResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.SubmitTxResponse}
 */
proto.mobilecoind_api.SubmitTxResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.mobilecoind_api.SenderTxReceipt();
        reader.readMessage(
          value,
          proto.mobilecoind_api.SenderTxReceipt.deserializeBinaryFromReader
        );
        msg.setSenderTxReceipt(value);
        break;
      case 2:
        var value = new proto.mobilecoind_api.ReceiverTxReceipt();
        reader.readMessage(
          value,
          proto.mobilecoind_api.ReceiverTxReceipt.deserializeBinaryFromReader
        );
        msg.addReceiverTxReceiptList(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.SubmitTxResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.SubmitTxResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.SubmitTxResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.SubmitTxResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getSenderTxReceipt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mobilecoind_api.SenderTxReceipt.serializeBinaryToWriter
    );
  }
  f = message.getReceiverTxReceiptListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.mobilecoind_api.ReceiverTxReceipt.serializeBinaryToWriter
    );
  }
};

/**
 * optional SenderTxReceipt sender_tx_receipt = 1;
 * @return {?proto.mobilecoind_api.SenderTxReceipt}
 */
proto.mobilecoind_api.SubmitTxResponse.prototype.getSenderTxReceipt = function () {
  return /** @type{?proto.mobilecoind_api.SenderTxReceipt} */ (jspb.Message.getWrapperField(
    this,
    proto.mobilecoind_api.SenderTxReceipt,
    1
  ));
};

/**
 * @param {?proto.mobilecoind_api.SenderTxReceipt|undefined} value
 * @return {!proto.mobilecoind_api.SubmitTxResponse} returns this
 */
proto.mobilecoind_api.SubmitTxResponse.prototype.setSenderTxReceipt = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.SubmitTxResponse} returns this
 */
proto.mobilecoind_api.SubmitTxResponse.prototype.clearSenderTxReceipt = function () {
  return this.setSenderTxReceipt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.SubmitTxResponse.prototype.hasSenderTxReceipt = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated ReceiverTxReceipt receiver_tx_receipt_list = 2;
 * @return {!Array<!proto.mobilecoind_api.ReceiverTxReceipt>}
 */
proto.mobilecoind_api.SubmitTxResponse.prototype.getReceiverTxReceiptListList = function () {
  return /** @type{!Array<!proto.mobilecoind_api.ReceiverTxReceipt>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.mobilecoind_api.ReceiverTxReceipt,
    2
  ));
};

/**
 * @param {!Array<!proto.mobilecoind_api.ReceiverTxReceipt>} value
 * @return {!proto.mobilecoind_api.SubmitTxResponse} returns this
 */
proto.mobilecoind_api.SubmitTxResponse.prototype.setReceiverTxReceiptListList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.mobilecoind_api.ReceiverTxReceipt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mobilecoind_api.ReceiverTxReceipt}
 */
proto.mobilecoind_api.SubmitTxResponse.prototype.addReceiverTxReceiptList = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.mobilecoind_api.ReceiverTxReceipt,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.SubmitTxResponse} returns this
 */
proto.mobilecoind_api.SubmitTxResponse.prototype.clearReceiverTxReceiptListList = function () {
  return this.setReceiverTxReceiptListList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetLedgerInfoResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetLedgerInfoResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetLedgerInfoResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetLedgerInfoResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      blockCount: jspb.Message.getFieldWithDefault(msg, 1, '0'),
      txoCount: jspb.Message.getFieldWithDefault(msg, 2, '0'),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetLedgerInfoResponse}
 */
proto.mobilecoind_api.GetLedgerInfoResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetLedgerInfoResponse();
  return proto.mobilecoind_api.GetLedgerInfoResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetLedgerInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetLedgerInfoResponse}
 */
proto.mobilecoind_api.GetLedgerInfoResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setBlockCount(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setTxoCount(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetLedgerInfoResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetLedgerInfoResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetLedgerInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetLedgerInfoResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getBlockCount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(1, f);
  }
  f = message.getTxoCount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(2, f);
  }
};

/**
 * optional uint64 block_count = 1;
 * @return {string}
 */
proto.mobilecoind_api.GetLedgerInfoResponse.prototype.getBlockCount = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.GetLedgerInfoResponse} returns this
 */
proto.mobilecoind_api.GetLedgerInfoResponse.prototype.setBlockCount = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};

/**
 * optional uint64 txo_count = 2;
 * @return {string}
 */
proto.mobilecoind_api.GetLedgerInfoResponse.prototype.getTxoCount = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.GetLedgerInfoResponse} returns this
 */
proto.mobilecoind_api.GetLedgerInfoResponse.prototype.setTxoCount = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetBlockInfoRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetBlockInfoRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetBlockInfoRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetBlockInfoRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      block: jspb.Message.getFieldWithDefault(msg, 1, 0),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetBlockInfoRequest}
 */
proto.mobilecoind_api.GetBlockInfoRequest.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetBlockInfoRequest();
  return proto.mobilecoind_api.GetBlockInfoRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetBlockInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetBlockInfoRequest}
 */
proto.mobilecoind_api.GetBlockInfoRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setBlock(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetBlockInfoRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetBlockInfoRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetBlockInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetBlockInfoRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getBlock();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
};

/**
 * optional uint64 block = 1;
 * @return {number}
 */
proto.mobilecoind_api.GetBlockInfoRequest.prototype.getBlock = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GetBlockInfoRequest} returns this
 */
proto.mobilecoind_api.GetBlockInfoRequest.prototype.setBlock = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetBlockInfoResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetBlockInfoResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetBlockInfoResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetBlockInfoResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      keyImageCount: jspb.Message.getFieldWithDefault(msg, 1, '0'),
      txoCount: jspb.Message.getFieldWithDefault(msg, 2, '0'),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetBlockInfoResponse}
 */
proto.mobilecoind_api.GetBlockInfoResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetBlockInfoResponse();
  return proto.mobilecoind_api.GetBlockInfoResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetBlockInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetBlockInfoResponse}
 */
proto.mobilecoind_api.GetBlockInfoResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setKeyImageCount(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setTxoCount(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetBlockInfoResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetBlockInfoResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetBlockInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetBlockInfoResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getKeyImageCount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(1, f);
  }
  f = message.getTxoCount();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(2, f);
  }
};

/**
 * optional uint64 key_image_count = 1;
 * @return {string}
 */
proto.mobilecoind_api.GetBlockInfoResponse.prototype.getKeyImageCount = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.GetBlockInfoResponse} returns this
 */
proto.mobilecoind_api.GetBlockInfoResponse.prototype.setKeyImageCount = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};

/**
 * optional uint64 txo_count = 2;
 * @return {string}
 */
proto.mobilecoind_api.GetBlockInfoResponse.prototype.getTxoCount = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.GetBlockInfoResponse} returns this
 */
proto.mobilecoind_api.GetBlockInfoResponse.prototype.setTxoCount = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.ArchiveBlockSignatureData.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.ArchiveBlockSignatureData.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.ArchiveBlockSignatureData} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.ArchiveBlockSignatureData.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      srcUrl: jspb.Message.getFieldWithDefault(msg, 1, ''),
      filename: jspb.Message.getFieldWithDefault(msg, 2, ''),
      signature:
        (f = msg.getSignature()) &&
        blockchain_pb.BlockSignature.toObject(includeInstance, f),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.ArchiveBlockSignatureData}
 */
proto.mobilecoind_api.ArchiveBlockSignatureData.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.ArchiveBlockSignatureData();
  return proto.mobilecoind_api.ArchiveBlockSignatureData.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.ArchiveBlockSignatureData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.ArchiveBlockSignatureData}
 */
proto.mobilecoind_api.ArchiveBlockSignatureData.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setSrcUrl(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setFilename(value);
        break;
      case 3:
        var value = new blockchain_pb.BlockSignature();
        reader.readMessage(
          value,
          blockchain_pb.BlockSignature.deserializeBinaryFromReader
        );
        msg.setSignature(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.ArchiveBlockSignatureData.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.ArchiveBlockSignatureData.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.ArchiveBlockSignatureData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.ArchiveBlockSignatureData.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getSrcUrl();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      blockchain_pb.BlockSignature.serializeBinaryToWriter
    );
  }
};

/**
 * optional string src_url = 1;
 * @return {string}
 */
proto.mobilecoind_api.ArchiveBlockSignatureData.prototype.getSrcUrl = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.ArchiveBlockSignatureData} returns this
 */
proto.mobilecoind_api.ArchiveBlockSignatureData.prototype.setSrcUrl = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string filename = 2;
 * @return {string}
 */
proto.mobilecoind_api.ArchiveBlockSignatureData.prototype.getFilename = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.ArchiveBlockSignatureData} returns this
 */
proto.mobilecoind_api.ArchiveBlockSignatureData.prototype.setFilename = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional blockchain.BlockSignature signature = 3;
 * @return {?proto.blockchain.BlockSignature}
 */
proto.mobilecoind_api.ArchiveBlockSignatureData.prototype.getSignature = function () {
  return /** @type{?proto.blockchain.BlockSignature} */ (jspb.Message.getWrapperField(
    this,
    blockchain_pb.BlockSignature,
    3
  ));
};

/**
 * @param {?proto.blockchain.BlockSignature|undefined} value
 * @return {!proto.mobilecoind_api.ArchiveBlockSignatureData} returns this
 */
proto.mobilecoind_api.ArchiveBlockSignatureData.prototype.setSignature = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.ArchiveBlockSignatureData} returns this
 */
proto.mobilecoind_api.ArchiveBlockSignatureData.prototype.clearSignature = function () {
  return this.setSignature(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.ArchiveBlockSignatureData.prototype.hasSignature = function () {
  return jspb.Message.getField(this, 3) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetBlockRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetBlockRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetBlockRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetBlockRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      block: jspb.Message.getFieldWithDefault(msg, 1, 0),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetBlockRequest}
 */
proto.mobilecoind_api.GetBlockRequest.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetBlockRequest();
  return proto.mobilecoind_api.GetBlockRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetBlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetBlockRequest}
 */
proto.mobilecoind_api.GetBlockRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setBlock(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetBlockRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetBlockRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetBlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetBlockRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getBlock();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
};

/**
 * optional uint64 block = 1;
 * @return {number}
 */
proto.mobilecoind_api.GetBlockRequest.prototype.getBlock = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GetBlockRequest} returns this
 */
proto.mobilecoind_api.GetBlockRequest.prototype.setBlock = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mobilecoind_api.GetBlockResponse.repeatedFields_ = [2, 3, 4];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetBlockResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetBlockResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetBlockResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetBlockResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      block:
        (f = msg.getBlock()) &&
        blockchain_pb.Block.toObject(includeInstance, f),
      signaturesList: jspb.Message.toObjectList(
        msg.getSignaturesList(),
        proto.mobilecoind_api.ArchiveBlockSignatureData.toObject,
        includeInstance
      ),
      keyImagesList: jspb.Message.toObjectList(
        msg.getKeyImagesList(),
        external_pb.KeyImage.toObject,
        includeInstance
      ),
      txosList: jspb.Message.toObjectList(
        msg.getTxosList(),
        external_pb.TxOut.toObject,
        includeInstance
      ),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetBlockResponse}
 */
proto.mobilecoind_api.GetBlockResponse.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetBlockResponse();
  return proto.mobilecoind_api.GetBlockResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetBlockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetBlockResponse}
 */
proto.mobilecoind_api.GetBlockResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new blockchain_pb.Block();
        reader.readMessage(
          value,
          blockchain_pb.Block.deserializeBinaryFromReader
        );
        msg.setBlock(value);
        break;
      case 2:
        var value = new proto.mobilecoind_api.ArchiveBlockSignatureData();
        reader.readMessage(
          value,
          proto.mobilecoind_api.ArchiveBlockSignatureData
            .deserializeBinaryFromReader
        );
        msg.addSignatures(value);
        break;
      case 3:
        var value = new external_pb.KeyImage();
        reader.readMessage(
          value,
          external_pb.KeyImage.deserializeBinaryFromReader
        );
        msg.addKeyImages(value);
        break;
      case 4:
        var value = new external_pb.TxOut();
        reader.readMessage(
          value,
          external_pb.TxOut.deserializeBinaryFromReader
        );
        msg.addTxos(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetBlockResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetBlockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetBlockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetBlockResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(1, f, blockchain_pb.Block.serializeBinaryToWriter);
  }
  f = message.getSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.mobilecoind_api.ArchiveBlockSignatureData.serializeBinaryToWriter
    );
  }
  f = message.getKeyImagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      external_pb.KeyImage.serializeBinaryToWriter
    );
  }
  f = message.getTxosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      external_pb.TxOut.serializeBinaryToWriter
    );
  }
};

/**
 * optional blockchain.Block block = 1;
 * @return {?proto.blockchain.Block}
 */
proto.mobilecoind_api.GetBlockResponse.prototype.getBlock = function () {
  return /** @type{?proto.blockchain.Block} */ (jspb.Message.getWrapperField(
    this,
    blockchain_pb.Block,
    1
  ));
};

/**
 * @param {?proto.blockchain.Block|undefined} value
 * @return {!proto.mobilecoind_api.GetBlockResponse} returns this
 */
proto.mobilecoind_api.GetBlockResponse.prototype.setBlock = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.GetBlockResponse} returns this
 */
proto.mobilecoind_api.GetBlockResponse.prototype.clearBlock = function () {
  return this.setBlock(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.GetBlockResponse.prototype.hasBlock = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated ArchiveBlockSignatureData signatures = 2;
 * @return {!Array<!proto.mobilecoind_api.ArchiveBlockSignatureData>}
 */
proto.mobilecoind_api.GetBlockResponse.prototype.getSignaturesList = function () {
  return /** @type{!Array<!proto.mobilecoind_api.ArchiveBlockSignatureData>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.mobilecoind_api.ArchiveBlockSignatureData,
    2
  ));
};

/**
 * @param {!Array<!proto.mobilecoind_api.ArchiveBlockSignatureData>} value
 * @return {!proto.mobilecoind_api.GetBlockResponse} returns this
 */
proto.mobilecoind_api.GetBlockResponse.prototype.setSignaturesList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.mobilecoind_api.ArchiveBlockSignatureData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mobilecoind_api.ArchiveBlockSignatureData}
 */
proto.mobilecoind_api.GetBlockResponse.prototype.addSignatures = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.mobilecoind_api.ArchiveBlockSignatureData,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.GetBlockResponse} returns this
 */
proto.mobilecoind_api.GetBlockResponse.prototype.clearSignaturesList = function () {
  return this.setSignaturesList([]);
};

/**
 * repeated external.KeyImage key_images = 3;
 * @return {!Array<!proto.external.KeyImage>}
 */
proto.mobilecoind_api.GetBlockResponse.prototype.getKeyImagesList = function () {
  return /** @type{!Array<!proto.external.KeyImage>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    external_pb.KeyImage,
    3
  ));
};

/**
 * @param {!Array<!proto.external.KeyImage>} value
 * @return {!proto.mobilecoind_api.GetBlockResponse} returns this
 */
proto.mobilecoind_api.GetBlockResponse.prototype.setKeyImagesList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.external.KeyImage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.external.KeyImage}
 */
proto.mobilecoind_api.GetBlockResponse.prototype.addKeyImages = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    3,
    opt_value,
    proto.external.KeyImage,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.GetBlockResponse} returns this
 */
proto.mobilecoind_api.GetBlockResponse.prototype.clearKeyImagesList = function () {
  return this.setKeyImagesList([]);
};

/**
 * repeated external.TxOut txos = 4;
 * @return {!Array<!proto.external.TxOut>}
 */
proto.mobilecoind_api.GetBlockResponse.prototype.getTxosList = function () {
  return /** @type{!Array<!proto.external.TxOut>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    external_pb.TxOut,
    4
  ));
};

/**
 * @param {!Array<!proto.external.TxOut>} value
 * @return {!proto.mobilecoind_api.GetBlockResponse} returns this
 */
proto.mobilecoind_api.GetBlockResponse.prototype.setTxosList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};

/**
 * @param {!proto.external.TxOut=} opt_value
 * @param {number=} opt_index
 * @return {!proto.external.TxOut}
 */
proto.mobilecoind_api.GetBlockResponse.prototype.addTxos = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    4,
    opt_value,
    proto.external.TxOut,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.GetBlockResponse} returns this
 */
proto.mobilecoind_api.GetBlockResponse.prototype.clearTxosList = function () {
  return this.setTxosList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetTxStatusAsSenderRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetTxStatusAsSenderRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetTxStatusAsSenderRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetTxStatusAsSenderRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      receipt:
        (f = msg.getReceipt()) &&
        proto.mobilecoind_api.SenderTxReceipt.toObject(includeInstance, f),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetTxStatusAsSenderRequest}
 */
proto.mobilecoind_api.GetTxStatusAsSenderRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetTxStatusAsSenderRequest();
  return proto.mobilecoind_api.GetTxStatusAsSenderRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetTxStatusAsSenderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetTxStatusAsSenderRequest}
 */
proto.mobilecoind_api.GetTxStatusAsSenderRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.mobilecoind_api.SenderTxReceipt();
        reader.readMessage(
          value,
          proto.mobilecoind_api.SenderTxReceipt.deserializeBinaryFromReader
        );
        msg.setReceipt(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetTxStatusAsSenderRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetTxStatusAsSenderRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetTxStatusAsSenderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetTxStatusAsSenderRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getReceipt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mobilecoind_api.SenderTxReceipt.serializeBinaryToWriter
    );
  }
};

/**
 * optional SenderTxReceipt receipt = 1;
 * @return {?proto.mobilecoind_api.SenderTxReceipt}
 */
proto.mobilecoind_api.GetTxStatusAsSenderRequest.prototype.getReceipt = function () {
  return /** @type{?proto.mobilecoind_api.SenderTxReceipt} */ (jspb.Message.getWrapperField(
    this,
    proto.mobilecoind_api.SenderTxReceipt,
    1
  ));
};

/**
 * @param {?proto.mobilecoind_api.SenderTxReceipt|undefined} value
 * @return {!proto.mobilecoind_api.GetTxStatusAsSenderRequest} returns this
 */
proto.mobilecoind_api.GetTxStatusAsSenderRequest.prototype.setReceipt = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.GetTxStatusAsSenderRequest} returns this
 */
proto.mobilecoind_api.GetTxStatusAsSenderRequest.prototype.clearReceipt = function () {
  return this.setReceipt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.GetTxStatusAsSenderRequest.prototype.hasReceipt = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetTxStatusAsSenderResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetTxStatusAsSenderResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetTxStatusAsSenderResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetTxStatusAsSenderResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetTxStatusAsSenderResponse}
 */
proto.mobilecoind_api.GetTxStatusAsSenderResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetTxStatusAsSenderResponse();
  return proto.mobilecoind_api.GetTxStatusAsSenderResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetTxStatusAsSenderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetTxStatusAsSenderResponse}
 */
proto.mobilecoind_api.GetTxStatusAsSenderResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.mobilecoind_api.TxStatus} */ (reader.readEnum());
        msg.setStatus(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetTxStatusAsSenderResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetTxStatusAsSenderResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetTxStatusAsSenderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetTxStatusAsSenderResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
};

/**
 * optional TxStatus status = 1;
 * @return {!proto.mobilecoind_api.TxStatus}
 */
proto.mobilecoind_api.GetTxStatusAsSenderResponse.prototype.getStatus = function () {
  return /** @type {!proto.mobilecoind_api.TxStatus} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    0
  ));
};

/**
 * @param {!proto.mobilecoind_api.TxStatus} value
 * @return {!proto.mobilecoind_api.GetTxStatusAsSenderResponse} returns this
 */
proto.mobilecoind_api.GetTxStatusAsSenderResponse.prototype.setStatus = function (
  value
) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetTxStatusAsReceiverRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetTxStatusAsReceiverRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetTxStatusAsReceiverRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetTxStatusAsReceiverRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      receipt:
        (f = msg.getReceipt()) &&
        proto.mobilecoind_api.ReceiverTxReceipt.toObject(includeInstance, f),
      monitorId: msg.getMonitorId_asB64(),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetTxStatusAsReceiverRequest}
 */
proto.mobilecoind_api.GetTxStatusAsReceiverRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetTxStatusAsReceiverRequest();
  return proto.mobilecoind_api.GetTxStatusAsReceiverRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetTxStatusAsReceiverRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetTxStatusAsReceiverRequest}
 */
proto.mobilecoind_api.GetTxStatusAsReceiverRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.mobilecoind_api.ReceiverTxReceipt();
        reader.readMessage(
          value,
          proto.mobilecoind_api.ReceiverTxReceipt.deserializeBinaryFromReader
        );
        msg.setReceipt(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMonitorId(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetTxStatusAsReceiverRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetTxStatusAsReceiverRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetTxStatusAsReceiverRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetTxStatusAsReceiverRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getReceipt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mobilecoind_api.ReceiverTxReceipt.serializeBinaryToWriter
    );
  }
  f = message.getMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(2, f);
  }
};

/**
 * optional ReceiverTxReceipt receipt = 1;
 * @return {?proto.mobilecoind_api.ReceiverTxReceipt}
 */
proto.mobilecoind_api.GetTxStatusAsReceiverRequest.prototype.getReceipt = function () {
  return /** @type{?proto.mobilecoind_api.ReceiverTxReceipt} */ (jspb.Message.getWrapperField(
    this,
    proto.mobilecoind_api.ReceiverTxReceipt,
    1
  ));
};

/**
 * @param {?proto.mobilecoind_api.ReceiverTxReceipt|undefined} value
 * @return {!proto.mobilecoind_api.GetTxStatusAsReceiverRequest} returns this
 */
proto.mobilecoind_api.GetTxStatusAsReceiverRequest.prototype.setReceipt = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.GetTxStatusAsReceiverRequest} returns this
 */
proto.mobilecoind_api.GetTxStatusAsReceiverRequest.prototype.clearReceipt = function () {
  return this.setReceipt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.GetTxStatusAsReceiverRequest.prototype.hasReceipt = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional bytes monitor_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.GetTxStatusAsReceiverRequest.prototype.getMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    2,
    ''
  ));
};

/**
 * optional bytes monitor_id = 2;
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.GetTxStatusAsReceiverRequest.prototype.getMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMonitorId()));
};

/**
 * optional bytes monitor_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetTxStatusAsReceiverRequest.prototype.getMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.GetTxStatusAsReceiverRequest} returns this
 */
proto.mobilecoind_api.GetTxStatusAsReceiverRequest.prototype.setMonitorId = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetTxStatusAsReceiverResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetTxStatusAsReceiverResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetTxStatusAsReceiverResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetTxStatusAsReceiverResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetTxStatusAsReceiverResponse}
 */
proto.mobilecoind_api.GetTxStatusAsReceiverResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetTxStatusAsReceiverResponse();
  return proto.mobilecoind_api.GetTxStatusAsReceiverResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetTxStatusAsReceiverResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetTxStatusAsReceiverResponse}
 */
proto.mobilecoind_api.GetTxStatusAsReceiverResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.mobilecoind_api.TxStatus} */ (reader.readEnum());
        msg.setStatus(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetTxStatusAsReceiverResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetTxStatusAsReceiverResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetTxStatusAsReceiverResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetTxStatusAsReceiverResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
};

/**
 * optional TxStatus status = 1;
 * @return {!proto.mobilecoind_api.TxStatus}
 */
proto.mobilecoind_api.GetTxStatusAsReceiverResponse.prototype.getStatus = function () {
  return /** @type {!proto.mobilecoind_api.TxStatus} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    0
  ));
};

/**
 * @param {!proto.mobilecoind_api.TxStatus} value
 * @return {!proto.mobilecoind_api.GetTxStatusAsReceiverResponse} returns this
 */
proto.mobilecoind_api.GetTxStatusAsReceiverResponse.prototype.setStatus = function (
  value
) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetProcessedBlockRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetProcessedBlockRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetProcessedBlockRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetProcessedBlockRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      monitorId: msg.getMonitorId_asB64(),
      block: jspb.Message.getFieldWithDefault(msg, 2, 0),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetProcessedBlockRequest}
 */
proto.mobilecoind_api.GetProcessedBlockRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetProcessedBlockRequest();
  return proto.mobilecoind_api.GetProcessedBlockRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetProcessedBlockRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetProcessedBlockRequest}
 */
proto.mobilecoind_api.GetProcessedBlockRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMonitorId(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setBlock(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetProcessedBlockRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetProcessedBlockRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetProcessedBlockRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetProcessedBlockRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getBlock();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
};

/**
 * optional bytes monitor_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.GetProcessedBlockRequest.prototype.getMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes monitor_id = 1;
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.GetProcessedBlockRequest.prototype.getMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMonitorId()));
};

/**
 * optional bytes monitor_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetProcessedBlockRequest.prototype.getMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.GetProcessedBlockRequest} returns this
 */
proto.mobilecoind_api.GetProcessedBlockRequest.prototype.setMonitorId = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional uint64 block = 2;
 * @return {number}
 */
proto.mobilecoind_api.GetProcessedBlockRequest.prototype.getBlock = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GetProcessedBlockRequest} returns this
 */
proto.mobilecoind_api.GetProcessedBlockRequest.prototype.setBlock = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mobilecoind_api.GetProcessedBlockResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetProcessedBlockResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetProcessedBlockResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetProcessedBlockResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetProcessedBlockResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      txOutsList: jspb.Message.toObjectList(
        msg.getTxOutsList(),
        proto.mobilecoind_api.ProcessedTxOut.toObject,
        includeInstance
      ),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetProcessedBlockResponse}
 */
proto.mobilecoind_api.GetProcessedBlockResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetProcessedBlockResponse();
  return proto.mobilecoind_api.GetProcessedBlockResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetProcessedBlockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetProcessedBlockResponse}
 */
proto.mobilecoind_api.GetProcessedBlockResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.mobilecoind_api.ProcessedTxOut();
        reader.readMessage(
          value,
          proto.mobilecoind_api.ProcessedTxOut.deserializeBinaryFromReader
        );
        msg.addTxOuts(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetProcessedBlockResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetProcessedBlockResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetProcessedBlockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetProcessedBlockResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getTxOutsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mobilecoind_api.ProcessedTxOut.serializeBinaryToWriter
    );
  }
};

/**
 * repeated ProcessedTxOut tx_outs = 1;
 * @return {!Array<!proto.mobilecoind_api.ProcessedTxOut>}
 */
proto.mobilecoind_api.GetProcessedBlockResponse.prototype.getTxOutsList = function () {
  return /** @type{!Array<!proto.mobilecoind_api.ProcessedTxOut>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.mobilecoind_api.ProcessedTxOut,
    1
  ));
};

/**
 * @param {!Array<!proto.mobilecoind_api.ProcessedTxOut>} value
 * @return {!proto.mobilecoind_api.GetProcessedBlockResponse} returns this
 */
proto.mobilecoind_api.GetProcessedBlockResponse.prototype.setTxOutsList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.mobilecoind_api.ProcessedTxOut=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mobilecoind_api.ProcessedTxOut}
 */
proto.mobilecoind_api.GetProcessedBlockResponse.prototype.addTxOuts = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.mobilecoind_api.ProcessedTxOut,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.GetProcessedBlockResponse} returns this
 */
proto.mobilecoind_api.GetProcessedBlockResponse.prototype.clearTxOutsList = function () {
  return this.setTxOutsList([]);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      txPublicKey:
        (f = msg.getTxPublicKey()) &&
        external_pb.CompressedRistretto.toObject(includeInstance, f),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest}
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest();
  return proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest}
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new external_pb.CompressedRistretto();
        reader.readMessage(
          value,
          external_pb.CompressedRistretto.deserializeBinaryFromReader
        );
        msg.setTxPublicKey(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getTxPublicKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      external_pb.CompressedRistretto.serializeBinaryToWriter
    );
  }
};

/**
 * optional external.CompressedRistretto tx_public_key = 1;
 * @return {?proto.external.CompressedRistretto}
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest.prototype.getTxPublicKey = function () {
  return /** @type{?proto.external.CompressedRistretto} */ (jspb.Message.getWrapperField(
    this,
    external_pb.CompressedRistretto,
    1
  ));
};

/**
 * @param {?proto.external.CompressedRistretto|undefined} value
 * @return {!proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest} returns this
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest.prototype.setTxPublicKey = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest} returns this
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest.prototype.clearTxPublicKey = function () {
  return this.setTxPublicKey(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyRequest.prototype.hasTxPublicKey = function () {
  return jspb.Message.getField(this, 1) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      block: jspb.Message.getFieldWithDefault(msg, 1, '0'),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse}
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse();
  return proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse}
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setBlock(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getBlock();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(1, f);
  }
};

/**
 * optional uint64 block = 1;
 * @return {string}
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse.prototype.getBlock = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse} returns this
 */
proto.mobilecoind_api.GetBlockIndexByTxPubKeyResponse.prototype.setBlock = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetBalanceRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetBalanceRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetBalanceRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetBalanceRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      monitorId: msg.getMonitorId_asB64(),
      subaddressIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetBalanceRequest}
 */
proto.mobilecoind_api.GetBalanceRequest.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetBalanceRequest();
  return proto.mobilecoind_api.GetBalanceRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetBalanceRequest}
 */
proto.mobilecoind_api.GetBalanceRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setMonitorId(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSubaddressIndex(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetBalanceRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetBalanceRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getSubaddressIndex();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
};

/**
 * optional bytes monitor_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.GetBalanceRequest.prototype.getMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes monitor_id = 1;
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.GetBalanceRequest.prototype.getMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getMonitorId()));
};

/**
 * optional bytes monitor_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetBalanceRequest.prototype.getMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.GetBalanceRequest} returns this
 */
proto.mobilecoind_api.GetBalanceRequest.prototype.setMonitorId = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional uint64 subaddress_index = 2;
 * @return {number}
 */
proto.mobilecoind_api.GetBalanceRequest.prototype.getSubaddressIndex = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.GetBalanceRequest} returns this
 */
proto.mobilecoind_api.GetBalanceRequest.prototype.setSubaddressIndex = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetBalanceResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetBalanceResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetBalanceResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetBalanceResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      balance: jspb.Message.getFieldWithDefault(msg, 1, '0'),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetBalanceResponse}
 */
proto.mobilecoind_api.GetBalanceResponse.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetBalanceResponse();
  return proto.mobilecoind_api.GetBalanceResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetBalanceResponse}
 */
proto.mobilecoind_api.GetBalanceResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setBalance(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetBalanceResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetBalanceResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetBalanceResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getBalance();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(1, f);
  }
};

/**
 * optional uint64 balance = 1;
 * @return {string}
 */
proto.mobilecoind_api.GetBalanceResponse.prototype.getBalance = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.GetBalanceResponse} returns this
 */
proto.mobilecoind_api.GetBalanceResponse.prototype.setBalance = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mobilecoind_api.SendPaymentRequest.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.SendPaymentRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.SendPaymentRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.SendPaymentRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.SendPaymentRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      senderMonitorId: msg.getSenderMonitorId_asB64(),
      senderSubaddress: jspb.Message.getFieldWithDefault(msg, 2, 0),
      outlayListList: jspb.Message.toObjectList(
        msg.getOutlayListList(),
        proto.mobilecoind_api.Outlay.toObject,
        includeInstance
      ),
      fee: jspb.Message.getFieldWithDefault(msg, 4, 0),
      tombstone: jspb.Message.getFieldWithDefault(msg, 5, 0),
      maxInputUtxoValue: jspb.Message.getFieldWithDefault(msg, 6, 0),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.SendPaymentRequest}
 */
proto.mobilecoind_api.SendPaymentRequest.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.SendPaymentRequest();
  return proto.mobilecoind_api.SendPaymentRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.SendPaymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.SendPaymentRequest}
 */
proto.mobilecoind_api.SendPaymentRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setSenderMonitorId(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSenderSubaddress(value);
        break;
      case 3:
        var value = new proto.mobilecoind_api.Outlay();
        reader.readMessage(
          value,
          proto.mobilecoind_api.Outlay.deserializeBinaryFromReader
        );
        msg.addOutlayList(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFee(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTombstone(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setMaxInputUtxoValue(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.SendPaymentRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.SendPaymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.SendPaymentRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getSenderMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getSenderSubaddress();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getOutlayListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.mobilecoind_api.Outlay.serializeBinaryToWriter
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint64(4, f);
  }
  f = message.getTombstone();
  if (f !== 0) {
    writer.writeUint64(5, f);
  }
  f = message.getMaxInputUtxoValue();
  if (f !== 0) {
    writer.writeUint64(6, f);
  }
};

/**
 * optional bytes sender_monitor_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.getSenderMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes sender_monitor_id = 1;
 * This is a type-conversion wrapper around `getSenderMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.getSenderMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
    this.getSenderMonitorId()
  ));
};

/**
 * optional bytes sender_monitor_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSenderMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.getSenderMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getSenderMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.SendPaymentRequest} returns this
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.setSenderMonitorId = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional uint64 sender_subaddress = 2;
 * @return {number}
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.getSenderSubaddress = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.SendPaymentRequest} returns this
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.setSenderSubaddress = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * repeated Outlay outlay_list = 3;
 * @return {!Array<!proto.mobilecoind_api.Outlay>}
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.getOutlayListList = function () {
  return /** @type{!Array<!proto.mobilecoind_api.Outlay>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.mobilecoind_api.Outlay,
    3
  ));
};

/**
 * @param {!Array<!proto.mobilecoind_api.Outlay>} value
 * @return {!proto.mobilecoind_api.SendPaymentRequest} returns this
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.setOutlayListList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.mobilecoind_api.Outlay=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mobilecoind_api.Outlay}
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.addOutlayList = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    3,
    opt_value,
    proto.mobilecoind_api.Outlay,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.SendPaymentRequest} returns this
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.clearOutlayListList = function () {
  return this.setOutlayListList([]);
};

/**
 * optional uint64 fee = 4;
 * @return {number}
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.getFee = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.SendPaymentRequest} returns this
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.setFee = function (value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional uint64 tombstone = 5;
 * @return {number}
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.getTombstone = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.SendPaymentRequest} returns this
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.setTombstone = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 5, value);
};

/**
 * optional uint64 max_input_utxo_value = 6;
 * @return {number}
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.getMaxInputUtxoValue = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.SendPaymentRequest} returns this
 */
proto.mobilecoind_api.SendPaymentRequest.prototype.setMaxInputUtxoValue = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mobilecoind_api.SendPaymentResponse.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.SendPaymentResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.SendPaymentResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.SendPaymentResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.SendPaymentResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      senderTxReceipt:
        (f = msg.getSenderTxReceipt()) &&
        proto.mobilecoind_api.SenderTxReceipt.toObject(includeInstance, f),
      receiverTxReceiptListList: jspb.Message.toObjectList(
        msg.getReceiverTxReceiptListList(),
        proto.mobilecoind_api.ReceiverTxReceipt.toObject,
        includeInstance
      ),
      txProposal:
        (f = msg.getTxProposal()) &&
        proto.mobilecoind_api.TxProposal.toObject(includeInstance, f),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.SendPaymentResponse}
 */
proto.mobilecoind_api.SendPaymentResponse.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.SendPaymentResponse();
  return proto.mobilecoind_api.SendPaymentResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.SendPaymentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.SendPaymentResponse}
 */
proto.mobilecoind_api.SendPaymentResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.mobilecoind_api.SenderTxReceipt();
        reader.readMessage(
          value,
          proto.mobilecoind_api.SenderTxReceipt.deserializeBinaryFromReader
        );
        msg.setSenderTxReceipt(value);
        break;
      case 2:
        var value = new proto.mobilecoind_api.ReceiverTxReceipt();
        reader.readMessage(
          value,
          proto.mobilecoind_api.ReceiverTxReceipt.deserializeBinaryFromReader
        );
        msg.addReceiverTxReceiptList(value);
        break;
      case 3:
        var value = new proto.mobilecoind_api.TxProposal();
        reader.readMessage(
          value,
          proto.mobilecoind_api.TxProposal.deserializeBinaryFromReader
        );
        msg.setTxProposal(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.SendPaymentResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.SendPaymentResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.SendPaymentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.SendPaymentResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getSenderTxReceipt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mobilecoind_api.SenderTxReceipt.serializeBinaryToWriter
    );
  }
  f = message.getReceiverTxReceiptListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.mobilecoind_api.ReceiverTxReceipt.serializeBinaryToWriter
    );
  }
  f = message.getTxProposal();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mobilecoind_api.TxProposal.serializeBinaryToWriter
    );
  }
};

/**
 * optional SenderTxReceipt sender_tx_receipt = 1;
 * @return {?proto.mobilecoind_api.SenderTxReceipt}
 */
proto.mobilecoind_api.SendPaymentResponse.prototype.getSenderTxReceipt = function () {
  return /** @type{?proto.mobilecoind_api.SenderTxReceipt} */ (jspb.Message.getWrapperField(
    this,
    proto.mobilecoind_api.SenderTxReceipt,
    1
  ));
};

/**
 * @param {?proto.mobilecoind_api.SenderTxReceipt|undefined} value
 * @return {!proto.mobilecoind_api.SendPaymentResponse} returns this
 */
proto.mobilecoind_api.SendPaymentResponse.prototype.setSenderTxReceipt = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.SendPaymentResponse} returns this
 */
proto.mobilecoind_api.SendPaymentResponse.prototype.clearSenderTxReceipt = function () {
  return this.setSenderTxReceipt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.SendPaymentResponse.prototype.hasSenderTxReceipt = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated ReceiverTxReceipt receiver_tx_receipt_list = 2;
 * @return {!Array<!proto.mobilecoind_api.ReceiverTxReceipt>}
 */
proto.mobilecoind_api.SendPaymentResponse.prototype.getReceiverTxReceiptListList = function () {
  return /** @type{!Array<!proto.mobilecoind_api.ReceiverTxReceipt>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.mobilecoind_api.ReceiverTxReceipt,
    2
  ));
};

/**
 * @param {!Array<!proto.mobilecoind_api.ReceiverTxReceipt>} value
 * @return {!proto.mobilecoind_api.SendPaymentResponse} returns this
 */
proto.mobilecoind_api.SendPaymentResponse.prototype.setReceiverTxReceiptListList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.mobilecoind_api.ReceiverTxReceipt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mobilecoind_api.ReceiverTxReceipt}
 */
proto.mobilecoind_api.SendPaymentResponse.prototype.addReceiverTxReceiptList = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.mobilecoind_api.ReceiverTxReceipt,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mobilecoind_api.SendPaymentResponse} returns this
 */
proto.mobilecoind_api.SendPaymentResponse.prototype.clearReceiverTxReceiptListList = function () {
  return this.setReceiverTxReceiptListList([]);
};

/**
 * optional TxProposal tx_proposal = 3;
 * @return {?proto.mobilecoind_api.TxProposal}
 */
proto.mobilecoind_api.SendPaymentResponse.prototype.getTxProposal = function () {
  return /** @type{?proto.mobilecoind_api.TxProposal} */ (jspb.Message.getWrapperField(
    this,
    proto.mobilecoind_api.TxProposal,
    3
  ));
};

/**
 * @param {?proto.mobilecoind_api.TxProposal|undefined} value
 * @return {!proto.mobilecoind_api.SendPaymentResponse} returns this
 */
proto.mobilecoind_api.SendPaymentResponse.prototype.setTxProposal = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.mobilecoind_api.SendPaymentResponse} returns this
 */
proto.mobilecoind_api.SendPaymentResponse.prototype.clearTxProposal = function () {
  return this.setTxProposal(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mobilecoind_api.SendPaymentResponse.prototype.hasTxProposal = function () {
  return jspb.Message.getField(this, 3) != null;
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.PayAddressCodeRequest.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.PayAddressCodeRequest.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.PayAddressCodeRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.PayAddressCodeRequest.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      senderMonitorId: msg.getSenderMonitorId_asB64(),
      senderSubaddress: jspb.Message.getFieldWithDefault(msg, 2, 0),
      receiverB58Code: jspb.Message.getFieldWithDefault(msg, 3, ''),
      amount: jspb.Message.getFieldWithDefault(msg, 4, 0),
      fee: jspb.Message.getFieldWithDefault(msg, 5, 0),
      tombstone: jspb.Message.getFieldWithDefault(msg, 6, 0),
      maxInputUtxoValue: jspb.Message.getFieldWithDefault(msg, 7, 0),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.PayAddressCodeRequest}
 */
proto.mobilecoind_api.PayAddressCodeRequest.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.PayAddressCodeRequest();
  return proto.mobilecoind_api.PayAddressCodeRequest.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.PayAddressCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.PayAddressCodeRequest}
 */
proto.mobilecoind_api.PayAddressCodeRequest.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setSenderMonitorId(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSenderSubaddress(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setReceiverB58Code(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setAmount(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setFee(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setTombstone(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setMaxInputUtxoValue(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.PayAddressCodeRequest.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.PayAddressCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.PayAddressCodeRequest.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getSenderMonitorId_asU8();
  if (f.length > 0) {
    writer.writeBytes(1, f);
  }
  f = message.getSenderSubaddress();
  if (f !== 0) {
    writer.writeUint64(2, f);
  }
  f = message.getReceiverB58Code();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(4, f);
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeUint64(5, f);
  }
  f = message.getTombstone();
  if (f !== 0) {
    writer.writeUint64(6, f);
  }
  f = message.getMaxInputUtxoValue();
  if (f !== 0) {
    writer.writeUint64(7, f);
  }
};

/**
 * optional bytes sender_monitor_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.getSenderMonitorId = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    1,
    ''
  ));
};

/**
 * optional bytes sender_monitor_id = 1;
 * This is a type-conversion wrapper around `getSenderMonitorId()`
 * @return {string}
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.getSenderMonitorId_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
    this.getSenderMonitorId()
  ));
};

/**
 * optional bytes sender_monitor_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSenderMonitorId()`
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.getSenderMonitorId_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getSenderMonitorId()
  ));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mobilecoind_api.PayAddressCodeRequest} returns this
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.setSenderMonitorId = function (
  value
) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};

/**
 * optional uint64 sender_subaddress = 2;
 * @return {number}
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.getSenderSubaddress = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.PayAddressCodeRequest} returns this
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.setSenderSubaddress = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 2, value);
};

/**
 * optional string receiver_b58_code = 3;
 * @return {string}
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.getReceiverB58Code = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.PayAddressCodeRequest} returns this
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.setReceiverB58Code = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional uint64 amount = 4;
 * @return {number}
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.getAmount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.PayAddressCodeRequest} returns this
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.setAmount = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional uint64 fee = 5;
 * @return {number}
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.getFee = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.PayAddressCodeRequest} returns this
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.setFee = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 5, value);
};

/**
 * optional uint64 tombstone = 6;
 * @return {number}
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.getTombstone = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.PayAddressCodeRequest} returns this
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.setTombstone = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 6, value);
};

/**
 * optional uint64 max_input_utxo_value = 7;
 * @return {number}
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.getMaxInputUtxoValue = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/**
 * @param {number} value
 * @return {!proto.mobilecoind_api.PayAddressCodeRequest} returns this
 */
proto.mobilecoind_api.PayAddressCodeRequest.prototype.setMaxInputUtxoValue = function (
  value
) {
  return jspb.Message.setProto3IntField(this, 7, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.mobilecoind_api.GetNetworkStatusResponse.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.mobilecoind_api.GetNetworkStatusResponse.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.mobilecoind_api.GetNetworkStatusResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.mobilecoind_api.GetNetworkStatusResponse.toObject = function (
    includeInstance,
    msg
  ) {
    let f;
    const obj = {
      networkHighestBlockIndex: jspb.Message.getFieldWithDefault(msg, 1, '0'),
      peerBlockIndexMapMap: (f = msg.getPeerBlockIndexMapMap())
        ? f.toObject(includeInstance, undefined)
        : [],
      localBlockIndex: jspb.Message.getFieldWithDefault(msg, 3, '0'),
      isBehind: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mobilecoind_api.GetNetworkStatusResponse}
 */
proto.mobilecoind_api.GetNetworkStatusResponse.deserializeBinary = function (
  bytes
) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.mobilecoind_api.GetNetworkStatusResponse();
  return proto.mobilecoind_api.GetNetworkStatusResponse.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mobilecoind_api.GetNetworkStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mobilecoind_api.GetNetworkStatusResponse}
 */
proto.mobilecoind_api.GetNetworkStatusResponse.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setNetworkHighestBlockIndex(value);
        break;
      case 2:
        var value = msg.getPeerBlockIndexMapMap();
        reader.readMessage(value, (message, reader) => {
          jspb.Map.deserializeBinary(
            message,
            reader,
            jspb.BinaryReader.prototype.readString,
            jspb.BinaryReader.prototype.readUint64,
            null,
            '',
            0
          );
        });
        break;
      case 3:
        var value = /** @type {string} */ (reader.readUint64String());
        msg.setLocalBlockIndex(value);
        break;
      case 4:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setIsBehind(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mobilecoind_api.GetNetworkStatusResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.mobilecoind_api.GetNetworkStatusResponse.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mobilecoind_api.GetNetworkStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mobilecoind_api.GetNetworkStatusResponse.serializeBinaryToWriter = function (
  message,
  writer
) {
  let f;
  f = message.getNetworkHighestBlockIndex();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(1, f);
  }
  f = message.getPeerBlockIndexMapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(
      2,
      writer,
      jspb.BinaryWriter.prototype.writeString,
      jspb.BinaryWriter.prototype.writeUint64
    );
  }
  f = message.getLocalBlockIndex();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(3, f);
  }
  f = message.getIsBehind();
  if (f) {
    writer.writeBool(4, f);
  }
};

/**
 * optional uint64 network_highest_block_index = 1;
 * @return {string}
 */
proto.mobilecoind_api.GetNetworkStatusResponse.prototype.getNetworkHighestBlockIndex = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.GetNetworkStatusResponse} returns this
 */
proto.mobilecoind_api.GetNetworkStatusResponse.prototype.setNetworkHighestBlockIndex = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};

/**
 * map<string, uint64> peer_block_index_map = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.mobilecoind_api.GetNetworkStatusResponse.prototype.getPeerBlockIndexMapMap = function (
  opt_noLazyCreate
) {
  return /** @type {!jspb.Map<string,number>} */ (jspb.Message.getMapField(
    this,
    2,
    opt_noLazyCreate,
    null
  ));
};

/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.mobilecoind_api.GetNetworkStatusResponse} returns this
 */
proto.mobilecoind_api.GetNetworkStatusResponse.prototype.clearPeerBlockIndexMapMap = function () {
  this.getPeerBlockIndexMapMap().clear();
  return this;
};

/**
 * optional uint64 local_block_index = 3;
 * @return {string}
 */
proto.mobilecoind_api.GetNetworkStatusResponse.prototype.getLocalBlockIndex = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, '0'));
};

/**
 * @param {string} value
 * @return {!proto.mobilecoind_api.GetNetworkStatusResponse} returns this
 */
proto.mobilecoind_api.GetNetworkStatusResponse.prototype.setLocalBlockIndex = function (
  value
) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};

/**
 * optional bool is_behind = 4;
 * @return {boolean}
 */
proto.mobilecoind_api.GetNetworkStatusResponse.prototype.getIsBehind = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(
    this,
    4,
    false
  ));
};

/**
 * @param {boolean} value
 * @return {!proto.mobilecoind_api.GetNetworkStatusResponse} returns this
 */
proto.mobilecoind_api.GetNetworkStatusResponse.prototype.setIsBehind = function (
  value
) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};

/**
 * @enum {number}
 */
proto.mobilecoind_api.TxStatus = {
  UNKNOWN: 0,
  VERIFIED: 1,
  TOMBSTONEBLOCKEXCEEDED: 2,
  INVALIDCONFIRMATIONNUMBER: 3,
};

/**
 * @enum {number}
 */
proto.mobilecoind_api.ProcessedTxOutDirection = {
  INVALID: 0,
  RECEIVED: 1,
  SPENT: 2,
};

goog.object.extend(exports, proto.mobilecoind_api);
