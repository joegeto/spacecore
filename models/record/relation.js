'use strict';

const Record = require('../record.js');
const ImageFile = require('./file/image.js');
const RelationGroupRecord = require('./relation/group.js');
const RelationTokenRecord = require('./relation/token.js');
const BasicHelper = require("../helpers/basicHelper.js");
const ArrayHelper = require("../helpers/arrayHelper.js");
const ObjectHelper = require('../helpers/objectHelper.js');

class RelationRecord extends Record {
	/*
	 * A relation is a person or company that is a customer or supplier
	 */
	
	constructor(input=null) {
		super(input);
		
		// Data storage
		this._data.nickname = '';
		this._data.realname = '';
		this._data.picture = null;
		this._data.addresses = [];
		this._data.bankaccounts = [];
		this._data.emailaddresses = [];
		this._data.phonenumbers = [];
		this._data.groups = [];
		this._data.tokens = [];
		
		// Helper functions
		this.getNickname = BasicHelper.get.bind(this, 'nickname', 'string');
		this.setNickname = BasicHelper.set.bind(this, 'nickname', 'string');
		this.getRealname = BasicHelper.get.bind(this, 'realname', 'string');
		this.setRealname = BasicHelper.set.bind(this, 'realname', 'string');
		this.getPicture = ObjectHelper.get.bind(this, 'picture', ImageFile);
		this.setPicture = ObjectHelper.set.bind(this, 'picture', ImageFile);

		this.getAddresses = ArrayHelper.get.bind(this, 'addresses', 'string');
		this.setAddresses = ArrayHelper.set.bind(this, 'addresses', 'string');
		this.hasAdress = ArrayHelper.has.bind(this, 'addresses', 'string');
		this.addAdress = ArrayHelper.add.bind(this, 'addresses', 'string');
		this.removeAdress = ArrayHelper.remove.bind(this, 'addresses', 'string');
		
		this.getBankaccounts = ArrayHelper.get.bind(this, 'bankaccounts', 'string');
		this.setBankaccounts = ArrayHelper.set.bind(this, 'bankaccounts', 'string');
		this.hasBankaccount = ArrayHelper.has.bind(this, 'bankaccounts', 'string');
		this.addBankaccount = ArrayHelper.add.bind(this, 'bankaccounts', 'string');
		this.removeBankaccount = ArrayHelper.remove.bind(this, 'bankaccounts', 'string');
		
		this.getEmailaddresses = ArrayHelper.get.bind(this, 'emailaddresses', 'string');
		this.setEmailaddresses = ArrayHelper.set.bind(this, 'emailaddresses', 'string');
		this.hasEmailaddress = ArrayHelper.has.bind(this, 'emailaddresses', 'string');
		this.addEmailaddress = ArrayHelper.add.bind(this, 'emailaddresses', 'string');
		this.removeEmailaddress = ArrayHelper.remove.bind(this, 'emailaddresses', 'string');
		
		this.getPhonenumbers = ArrayHelper.get.bind(this, 'phonenumbers', 'string');
		this.setPhonenumbers = ArrayHelper.set.bind(this, 'phonenumbers', 'string');
		this.hasPhonenumber = ArrayHelper.has.bind(this, 'phonenumbers', 'string');
		this.addPhonenumber = ArrayHelper.add.bind(this, 'phonenumbers', 'string');
		this.removePhonenumber = ArrayHelper.remove.bind(this, 'phonenumbers', 'string');
		
		this.getGroups = ArrayHelper.get.bind(this, 'groups', RelationGroupRecord);
		this.setGroups = ArrayHelper.set.bind(this, 'groups', RelationGroupRecord);
		this.hasGroup = ArrayHelper.has.bind(this, 'groups', RelationGroupRecord);
		this.addGroup = ArrayHelper.add.bind(this, 'groups', RelationGroupRecord);
		this.removeGroup = ArrayHelper.remove.bind(this, 'groups', RelationGroupRecord);
		
		this.getTokens = ArrayHelper.get.bind(this, 'tokens', RelationTokenRecord);
		this.setTokens = ArrayHelper.set.bind(this, 'tokens', RelationTokenRecord);
		this.hasToken = ArrayHelper.has.bind(this, 'tokens', RelationTokenRecord);
		this.addToken = ArrayHelper.add.bind(this, 'tokens', RelationTokenRecord);
		this.removeToken = ArrayHelper.remove.bind(this, 'tokens', RelationTokenRecord);
		
		if (input !== null) {
			this.setNickname(input.nickname);
			this.setRealname(input.realname);
			this.setPicture(input.picture);
			this.setAddresses(input.addresses);
			this.setBankaccounts(input.bankaccounts);
			this.setEmailaddresses(input.emailaddresses);
			this.setPhonenumbers(input.phonenumbers);
			this.setGroups(input.groups);
			this.setTokens(input.tokens);
		}
	}
	
	serialize(includeSecrets=false) {
		return Object.assign(super.serialize(includeSecrets), {
			nickname: this.getNickname(),
			realname: this.getRealname(),
			picture: (this._data.picture===null) ? null : this._data.picture.serialize(includeSecrets),
			addresses: this.getAddresses(),
			bankaccounts: this.getBankaccounts(),
			emailaddresses: this.getEmailaddresses(),
			phonenumbers: this.getPhonenumbers(),
			/*groups: this._serializeArray(this._groups, includeSecrets),
			tokens: this._serializeArray(this._tokens, includeSecrets)*/
		});
	}
}

module.exports = RelationRecord;