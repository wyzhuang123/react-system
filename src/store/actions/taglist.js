const createAddTagAction = data => ({type: 'add_tag', data});
const createDeleteTagAction = data => ({type: 'delete_tag', playload: {data}});

export {
  createAddTagAction,
  createDeleteTagAction
}