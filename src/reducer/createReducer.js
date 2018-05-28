export default (initialState, handlers) => (state = initialState, action) =>
  Object.prototype.hasOwnProperty.call(handlers, action.type)
    ? handlers[action.type](state, action)
    : state;
