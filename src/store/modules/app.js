import Cookies from 'js-cookie';

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    navHeight: 0,
    clientHeight: 0
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1);
      } else {
        Cookies.set('sidebarStatus', 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
      state.sidebar.withoutAnimation = false;
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1);
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation;
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device;
    },
    SET_NAVHEIGHT(state, height) {
      state.navHeight = height;
    },
    SET_CLIENT_HEIGHT(state, height) {
      state.clientHeight = height;
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR');
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation);
    },
    ToggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device);
    },
    SET_NAVHEIGHT({ commit }, { height }) {
      if (height && height !== '' && height.indexOf('px') !== -1) {
        height = height.replace('px', '');
        commit('SET_NAVHEIGHT', height);
      }
    },
    SET_CLIENT_HEIGHT({ commit }, { height }) {
      if (height && height > 0) {
        commit('SET_CLIENT_HEIGHT', height);
      }
    }
  }
};

export default app;
