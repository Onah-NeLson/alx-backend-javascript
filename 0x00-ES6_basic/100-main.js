/* eslint-disable import/extensions */
/*
 The abcomment that tells ESLint, a popular linting tool for JavaScript, to ignore any rules related to checking or enforcing import extensions. In some configurations, ESLint might raise errors if you import a module without specifying its file extension (e.g., ".js"), but this comment disables those checks for this file.
*/
import createIteratorObject from './100-createIteratorObject.js';

import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
  console.log(item);
}
