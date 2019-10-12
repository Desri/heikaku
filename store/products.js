export const state = () => ({
    products: {},
    product : '',
});

export const getters =  {
    products(state) {
      return state.products;
    },
    product(state) {
      return state.product;
    },
};

export const mutations = {
    SET_PRODUCTS(state, data) {
      state.products = data
    },
    SET_DETAIL_PRODUCT(state, data) {
      state.product = data
    },
};

export const actions =  {

    async GET_PRODUCTS({ commit }, params) {
        try {
        let item = Object.assign({}, { name: state.name }, params)
          const response = await this.$axios.$get(`api/product`, item)
          commit('SET_PRODUCTS', response.data)
          //console.log(response.data)
        } catch (error) {
          console.log('error')
          throw error
        }
    },
    async GET_DETAIL_PRODUCT({commit}, slug) {
        try {
            const response = await this.$axios.$get(`api/product/${slug}`)
            commit('SET_DETAIL_PRODUCT', response.data)
        } catch(error) {
            throw error
        }
    },

};
