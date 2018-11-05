const initState = {
  posts: [
    {
      id: "1",
      title: "vamos a la playa",
      body:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis a labore perferendis modi pariatur totam, quia velit sint rerum dolores adipisci vitae maxime vel tempore! Laudantium dicta maxime magnam?"
    },
    {
      id: "2",
      title: "me gusta escribir codigo",
      body:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis a labore perferendis modi pariatur totam, quia velit sint rerum dolores adipisci vitae maxime vel tempore! Laudantium dicta maxime magnam?"
    },
    {
      id: "3",
      title: "codigo abierto es lo mejor",
      body:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis a labore perferendis modi pariatur totam, quia velit sint rerum dolores adipisci vitae maxime vel tempore! Laudantium dicta maxime magnam?"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
