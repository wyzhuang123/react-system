const createAddTagAction = data => ({type: 'add_tag', data});
const createDeleteTagAction = data => ({type: 'delete_tag', data});

export {
  createAddTagAction,
  createDeleteTagAction
}