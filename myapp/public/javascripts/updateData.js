import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateData = async (data, type, option) => {
  try {
    const path = window.location.pathname;
    const id = path.split('/')[2]; // assuming the path is "/user/:id/update"
    const url = `/api/${option}/${id}`;
    console.log(data)
    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const CreateOne = async (data, type, option) => {
  try {
    
    const url = 
      type === 'user' ? '/api/user/signup' : `/api/${option}/`;
    console.log(data)
    const res = await axios({
      method: 'POST',
      url,
      data
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} Create successfully!`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};


export const DeleteOne = async (type, id) => {
  try {
    const url = `/api/${type}/${id}`;
    
    const res = await axios({
      method: 'DELETE',
      url
    });

    if (res.status === 'success') {
      showAlert('success', `${type.toUpperCase()} DELETED successfully!`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};