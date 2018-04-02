import haprampAPI from '../utils/haprampAPI';
import {actionTypes as allPostsActionTypes} from './allPostsReducer';

export const actionTypes = {
	FEED_LOADING: 'FEED.LOAD.INIT',
	FEED_LOADED: 'FEED.LOAD.DONE',
	FEED_LOADING_FAILED: 'FEED.LOAD.FAILED',
};

export const loadFeedsForUser = username => dispatch => {
	dispatch({type: actionTypes.FEED_LOADING});
	haprampAPI.v2.feed.getUserFeed(username)
		.then(results => {
			dispatch({type: actionTypes.FEED_LOADED, results, feedType: 'user', username});
			dispatch({type: allPostsActionTypes.ADD_POSTS, posts: results});
		})
		.catch(reason => dispatch({type: actionTypes.FEED_LOADING_FAILED, reason}))
};

export const loadFeedsByHot = tag => dispatch => {
	dispatch({type: actionTypes.FEED_LOADING});
	haprampAPI.v2.feed.getFeedsByHot(tag)
		.then(results => {
			dispatch({type: actionTypes.FEED_LOADED, results, feedType: 'hot', tag});
			dispatch({type: allPostsActionTypes.ADD_POSTS, posts: results});
		})
		.catch(reason => dispatch({type: actionTypes.FEED_LOADING_FAILED, reason}))
};

export const loadFeedsByTrending = tag => dispatch => {
	dispatch({type: actionTypes.FEED_LOADING});
	haprampAPI.v2.feed.getFeedsByTrending(tag)
		.then(results => {
			dispatch({type: actionTypes.FEED_LOADED, results, feedType: 'trending', tag});
			dispatch({type: allPostsActionTypes.ADD_POSTS, posts: results});
		})
		.catch(reason => dispatch({type: actionTypes.FEED_LOADING_FAILED, reason}))
};

export const loadFeedsByCreated = tag => dispatch => {
	dispatch({type: actionTypes.FEED_LOADING});
	haprampAPI.v2.feed.getFeedsByCreated(tag)
		.then(results => {
			dispatch({type: actionTypes.FEED_LOADED, results, feedType: 'created', tag});
			dispatch({type: allPostsActionTypes.ADD_POSTS, posts: results});
		})
		.catch(reason => dispatch({type: actionTypes.FEED_LOADING_FAILED, reason}))
};
