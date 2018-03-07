import {combineReducers} from 'redux';

import {loginReducer} from './loginReducer';
import {addContentReducer} from "./addContentReducer";
import {authUserReducer} from "./authUserReducer";
import {createPostReducer} from "./createPostReducer";
import {userProfileReducer} from "./userProfileReducer";
import {communitiesReducer} from "./communitiesReducer";

export default combineReducers({
	login: loginReducer,
	addContent: addContentReducer,
	authUser: authUserReducer,
	createPost: createPostReducer,
	userProfile: userProfileReducer,
	communities: communitiesReducer,
});
