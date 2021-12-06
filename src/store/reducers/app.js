const TAGVIEW_SHOW = 'tagview_show';

const initState = {
  settingTagView: true
};


export default function AppReducer(preState = initState, action) {
  const { type } = action;
  switch(type) {
    case TAGVIEW_SHOW:
      return {
        ...preState,
        settingTagView: !preState.settingTagView
      };
    default:
      return preState;
  }
}