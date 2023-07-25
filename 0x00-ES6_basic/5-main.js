/* eslint-disable import/extensions */
/*
 * The above comment tells ESLint, a popular linting tool for JavaScript, to ignore any rules related to checking or enforcing import extensions.
 * In some configurations, ESLint might raise errors if you import a module without specifying its file extension (e.g., ".js"), but this comment disables those checks for this file.
 */
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));
