import { login, logout } from './login';
import { updateSettings } from './updateSetting'
import { updateData, CreateOne, DeleteOne } from './updateData'
import { showAlert } from './alerts';

const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav-item-logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const UpdateUserForm = document.querySelector('.form-update-user');
const UpdateCourseForm = document.querySelector('.form-update-course');
const UpdateRecordForm = document.querySelector('.form-update-record');
const CreateUserForm = document.querySelector('.form-create-user');
const CreateCourseForm = document.querySelector('.form-create-course');
const CreateRecordForm = document.querySelector('.form-create-record');

const deleteCourseBtns = document.querySelectorAll('.delete-course-btn');
deleteCourseBtns.forEach(btn => {
  btn.addEventListener('click', (event) => DeleteOne('course', event.target.id));
});

const deleteReocrdBtns = document.querySelectorAll('.delete-record-btn');
deleteReocrdBtns.forEach(btn => {
  btn.addEventListener('click', (event) => DeleteOne('record', event.target.id));
});

const deleteUserBtns = document.querySelectorAll('.delete-user-btn');
deleteUserBtns.forEach(btn => {
  btn.addEventListener('click', (event) => DeleteOne('user', event.target.id));
});



if (loginForm) loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const uid = document.getElementById('uid').value;
    const password = document.getElementById('password').value;
    login(uid, password);
});

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (userDataForm) userDataForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const sex = document.getElementById('sex').value;
    const brith = new Date(document.getElementById('brith').value);
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    updateSettings({name, email, sex, brith, phone, address}, 'data');
});

if (userPasswordForm)
  userPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });
  const alertMessage = document.querySelector('body').dataset.alert;
  if (alertMessage) showAlert('success', alertMessage, 20);

if (UpdateUserForm) UpdateUserForm.addEventListener('submit', e => {
    e.preventDefault();
    const role = document.getElementById('role').value;
    const uid = document.getElementById('uid').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const sex = document.getElementById('sex').value;
    const brith = new Date(document.getElementById('brith').value);
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    updateData({role, uid, name, email, sex, brith, phone, address}, 'data', 'user');
});

if (UpdateCourseForm) UpdateCourseForm.addEventListener('submit', e => {
  e.preventDefault();
  const course_id = document.getElementById('course_id').value;
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const credits = document.getElementById('credits').value;
  updateData({course_id, name, description, credits}, 'data', 'course');
});

if (UpdateRecordForm) UpdateRecordForm.addEventListener('submit', e => {
  e.preventDefault();
  const mark = document.getElementById('mark').value;
  const status = document.getElementById('status').value;
  const year = document.getElementById('year').value;
  const comments = new Date(document.getElementById('comments').value);
  updateData({mark, status, year, comments}, 'data', 'record');
});

if (CreateUserForm) CreateUserForm.addEventListener('submit', e => {
  e.preventDefault();
  const role = document.getElementById('role').value;
  const uid = document.getElementById('uid').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordConfirm = document.getElementById('passwordConfirm').value; 
  CreateOne({role, uid, name, email, password, passwordConfirm}, 'user', 'user');
});

if (CreateCourseForm) CreateCourseForm.addEventListener('submit', e => {
  e.preventDefault();
  const course_id = document.getElementById('course_id').value;
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const credits = document.getElementById('credits').value;
  CreateOne({course_id, name, description, credits}, 'course', 'course');
});

if (CreateRecordForm) CreateRecordForm.addEventListener('submit', e => {
  e.preventDefault();
  const user = document.getElementById('user').value;
  const course = document.getElementById('course').value;
  const mark = document.getElementById('mark').value;
  const status = document.getElementById('status').value;
  const year = document.getElementById('year').value;
  const comments = new Date(document.getElementById('comments').value);
  CreateOne({user, course, mark, status, year, comments}, 'record', 'record');

});