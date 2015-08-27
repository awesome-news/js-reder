import { GOTO_PAGE, NEXT_PAGE, PREV_PAGE, RECEIVE_PAGE } from '../actions/actions';

const initialState = {
  total: 1,
  current: 1,
  next: 1,
  pending: false,
  page1: []
};

export function pages(state = initialState, action) {
  switch(action.type) {
    case GOTO_PAGE:
      return Object.assign({}, state, {next: action.pageNo, pending: true});
    case NEXT_PAGE:
      let nextPage = state.total > state.current ? state.current + 1 : state.total;
      return Object.assign({}, state, {next: nextPage, pending: true});
    case PREV_PAGE:
      let prevPage = state.current > 1 ? state.current - 1 : state.current;
      return Object.assign({}, state, {next: prevPage, pending: true});
    case RECEIVE_PAGE:
      let newData = {};
      newData['page' + action.pageNo] = action.json['page' + action.pageNo];
      newData.total = action.json.total;
      newData.current = action.json.current;
      newData.next = action.json.current;
      newData.pending = false;
      return Object.assign({}, state, newData);
    default:
      return state;
  }
}
