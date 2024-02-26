/**
 * @file This file contains all the English language translations
 * English Language
 * @type {Object}
 * @returns {Object} language - The language object
 */

import common from './en/common.json';
import err from './en/err.json';

const en = () => {
  const language = {
    ...common,
    ...err,
  };
  return language;
}

export default en