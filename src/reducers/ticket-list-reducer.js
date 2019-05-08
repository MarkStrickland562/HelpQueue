import c from './../constants';

export default (state = {}, action) => {
  let newState;
  switch (action.type) {
  case c.ADD_TICKET:
    const { names, location, issue, timeOpen, id } = action;
    newState = Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: formattedWaitTime
      }
    });
    return newState;

    case c.UPDATE_TIME:
    const newTicket = Object.assign({}, state[id], {formattedWaitTime});
    newState = Object.assign({}, state, {
      [id]: newTicket
    });
    return newState;

    default:
      return state;
  }
};
  