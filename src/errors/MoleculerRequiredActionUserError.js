'use strict';

const _ = require('lodash');

const { MoleculerError } = require('moleculer').Errors;

module.exports = class MoleculerRequiredActionUserError extends MoleculerError {
  constructor(detail = '', title = '', challenge = {}) {
    let message = detail;
    let code = 410;
    let type = 'RequiredActionUser';
    let data = {
      title: _.isEmpty(title) ? 'RequiredActionUser' : title,
      detail: detail,
      challenge: challenge,
    };

    super(message, code, type, data);
  }
};
