const state = {
	count: 1,
	stateCount:0
};
const mutations = {
};
const actions = {
};
const getters = {
	stateCount: function (state) {
		return state.count + 3
	}
};
export default {
	state,
	mutations,
	actions,
	getters
}