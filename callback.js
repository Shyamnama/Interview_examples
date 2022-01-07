const posts = [
  { _id: 1, title: "Post 1", desc: "This is Post One" },
  { _id: 2, title: "Post 2", desc: "This is Post Two" },
  { _id: 3, title: "Post 3", desc: "This is Post Three" },
  { _id: 4, title: "Post 4", desc: "This is Post Four" },
];

const getPost = () => {
  setTimeout(() => {
    posts.forEach((post) => {
      console.log(post);
    });
  }, 1000);
};

const createPost = (post, cb) => {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
};

createPost({ _id: 5, title: "Post 5", desc: "This is Post Five" }, getPost);
