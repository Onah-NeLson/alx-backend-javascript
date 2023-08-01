// The next line of code is a special comment that disables ESLint's 'import/extensions' rule for the entire file.
/* eslint-disable import/extensions */
import getListStudentIds from './1-get_list_student_ids.js';
import getListStudents from './0-get_list_students.js';

console.log(getListStudentIds('hello'));
console.log(getListStudentIds(getListStudents()));
