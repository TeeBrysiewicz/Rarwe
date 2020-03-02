import BaseValidator from 'ember-cp-validations/validators/base';

const YearOfFormation = BaseValidator.extend({
  validate(value) {
    if (!value) {
      return true;
    }
    let words = value.split(/\s+/);
    let currentYear = new Date().getFullYear();
    let yearOfFormation = words.find((word) => {
      if (word.match(/\b\d{4}\b/)) {
        let year = parseInt(word, 10);
        return year > 1900 && year <= currentYear;
      }
    });
    return yearOfFormation ? true : "The year of formation must be included in the description";
  }
});

YearOfFormation.reopenClass({
  getDependentsFor(/* attribute, options */) {
    return [];
  }
});

export default YearOfFormation;
