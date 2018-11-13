///////////////////////////////////////////////////////////////////////////////
//
//  XBR Open Data Markets - https://xbr.network
//
//  JavaScript client library for the XBR Network.
//
//  Copyright (C) Crossbar.io Technologies GmbH and contributors
//
//  Licensed under the Apache 2.0 License:
//  https://opensource.org/licenses/Apache-2.0
//
///////////////////////////////////////////////////////////////////////////////

var pjson = require('../package.json');
exports.version = pjson.version;

// this breaks MetaMask!
//var web3 = require('web3');
//exports.web3 = web3;

// https://truffleframework.com/docs/truffle/getting-started/package-management-via-npm#within-javascript-code
var contract = require("truffle-contract");

var XBRToken_json = require("../build/contracts/XBRToken.json");
var XBRNetwork_json = require("../build/contracts/XBRNetwork.json");
var XBRPaymentChannel_json = require("../build/contracts/XBRPaymentChannel.json");

var XBRToken = contract(XBRToken_json);
var XBRNetwork = contract(XBRNetwork_json);
var XBRPaymentChannel = contract(XBRPaymentChannel_json);

function setProvider (provider) {
    XBRToken.setProvider(provider);
    XBRNetwork.setProvider(provider);
}

exports.XBRToken = XBRToken;
exports.XBRNetwork = XBRNetwork;
exports.XBRPaymentChannel = XBRPaymentChannel;

exports.setProvider = setProvider;

// FIXME: make this dependent on the network
exports.xbrToken = XBRToken.at('0xc56a7b89639738382abf20e1829d1ff1a4e21e33');
exports.xbrNetwork = XBRNetwork.at('0x18c07e395df250003f439f6e8ea1ea8aa51752c6');