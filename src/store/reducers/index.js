import { combineReducers } from "redux";
import mainContainerReducer from "../../containers/MainContainer/reducer";
import selectedElementReducer from "../../containers/LeftSideBar/reducer";
import { reducer as reduxFormReducer } from 'redux-form';

const reducers = combineReducers({
  mainContainerReducer,
  selectedElementReducer,
  form: reduxFormReducer,
});

export default reducers;
