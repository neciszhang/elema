import axios from 'axios';

//获取首页默认地址
export const guessCity = () => axios('/v1/cities', {
	type: 'guess'
});

//获取热门城市
export const hotCity = () => axios('/v1/cities', {
	type: 'hot'
});

//获取首页所有城市
export const groupCity = () => axios('/v1/cities', {
	type: 'group'
});