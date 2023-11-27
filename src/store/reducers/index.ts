// third-party
import { combineReducers } from 'redux';

// project import
import leads from './leads';
import snackbar from './snackbar';
import auth from './auth';
import usersInfo from './usersInfo';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  snackbar,
  leads,
  auth,
  usersInfo
});

export default reducers;