import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (uid, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/user/login',
      data: {
        uid,
        password
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
    location.assign('/account');
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/user/logout'
    });
    if ((res.data.status = 'success')) location.assign('/login');
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};