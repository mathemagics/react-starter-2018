import createReducer from './createReducer';

// action-types ===========================================================
const MOUNT_MAIN = 'MOUNT_MAIN';

// actions ================================================================
export const loadMainContent = () => ({ type: MOUNT_MAIN });

const INITIAL_STATE = {
  mainContent: 'initial Content',
};

// reducer ================================================================
export default createReducer(INITIAL_STATE, {
  [MOUNT_MAIN]: state => ({ ...state, mainContent: 'new content' }),
});
