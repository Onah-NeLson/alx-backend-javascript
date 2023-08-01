// The next line of code is a special comment that disables ESLint's 'import/extensions' rule for the entire file.
/* eslint-disable import/extensions */
import getListStudents from './0-get_list_students.js';
import getStudentIdsSum from './3-get_ids_sum.js';

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
