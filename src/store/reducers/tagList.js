const ADD_TAG = 'add_tag';
const DELETE_TAG = 'delete_tag';
const initState = [
  {
    title: '首页',
    path: '/'
  }
];

export default function tagListReducer(preState = initState, action) {
  const {type, data} = action;
  switch(type) {
    case ADD_TAG:
      return [...preState, data];
    case DELETE_TAG:
      return  preState.filter((item) => {
                return  item.title !== data;
              });
    default:
      return preState;
  }
}