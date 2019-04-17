// import { maxBy } from 'lodash/maxBy';
const maxBy = require('lodash/maxBy');
export default array => maxBy(array, element => element);
