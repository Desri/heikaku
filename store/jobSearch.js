export const state = () => ({
    status: {},
    category: {},
    province: {},
});

export const getters =  {
  status(state) {
    return state.status;
  },
  category(state) {
    return state.category;
  },
  province(state) {
    return state.province;
  },
};

export const mutations = {
  SET_STATUS(state, data) {
    state.status = data
  },
  SET_CATEGORY(state, data) {
    state.category = data
  },
  SET_PROVINCE(state, data) {
    state.province = data
  },
};

export const actions =  {

  async GET_STATUS({commit}) {
    try {
      const response = await this.$axios.$get('api/status.json')
      commit('SET_STATUS', response.data)
      //console.log(response.data)
    } catch(error) {
      throw error
    }
  },

  async GET_CATEGORY({commit}) {
    try {
      const response = await this.$axios.$get('api/job-category.json')
      commit('SET_CATEGORY', response.data)
      //console.log(response.data)
    } catch(error) {
      throw error
    }
  },

  async GET_PROVINCE({commit}) {
    try {
      const response = await this.$axios.$get('api/province.json')
      commit('SET_PROVINCE', response.data)
      //console.log(response.data)
    } catch(error) {
      throw error
    }
  },

};
