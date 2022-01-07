const posts = [
  { _id: 1, title: "Post 1", desc: "This is Post One" },
  { _id: 2, title: "Post 2", desc: "This is Post Two" },
  { _id: 3, title: "Post 3", desc: "This is Post Three" },
  { _id: 4, title: "Post 4", desc: "This is Post Four" },
];

const getPosts = () => {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(post);
    });
  }, 500);
};

const createPost = (post) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      posts.push(post);
      const err = false;
      if (!err) {
        res();
      } else {
        rej({ error: "Something went wrong!!" });
      }
    }, 2000);
  });
};

createPost({ _id: 5, title: "Post 5", desc: "This is Post Five" })
  .then(getPosts)
  .catch((err) => console.log(err));

// const createPost = (post) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       const err = false;
//       if (!err) {
//         resolve();
//       } else {
//         reject("Error: Something went wrong");
//       }
//     }, 200);
//   });
// };

// createPost({ _id: 5, title: "Post 5", desc: "This is Post Five" })
//   .then(getPosts)
//   .catch((err) => console.log(err));
