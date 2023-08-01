// The next line of code is a special comment that disables ESLint's 'import/extensions' rule for the entire file.
/* eslint-disable import/extensions */
import getListStudents from './0-get_list_students.js';
import getStudentsByLocation from './2-get_students_by_loc.js';

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));
