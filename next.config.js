// const { join } = require('path');
// // const recursiveCopy = require('recursive-copy');
// const withPlugins = require("next-compose-plugins");
// // const withSass = require('@zeit/next-sass');

// // const { getPosts } = require('./get-posts'); // This is a list of entries

// module.exports = withPlugins(
//   [
//     // withSass
//   ],
//   {
//     exportPathMap: async function(
//       defaultPathMap,
//       { dev, dir, outDir, distDir, buildId }
//     ) {

//       if (dev) {
//         return defaultPathMap;
//       }
//       const pathMap = {
//         '/': { page: '/' },
//         '/a': { page: '/a'},
//         '/b': { page: '/b'},
//         '/posts': { page: '/posts' },
//       };
//       // now get the dynamic stuff:
//     //   const articles = await getPosts();
//     //   articles.map(post => {
//     //     pathMap[`/posts/post/${post.link}`] = {
//     //page: '/posts/post', query: { title: post.link } };
//     //   });
//       // This will copy robots.txt from your project root into the out directory
//       // await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'));
//     //   await recursiveCopy(join(dir, 'public/'), outDir, {overwrite: true, dot:true});
//       return pathMap;
//     },
//     // target: 'serverless',
//   }
// );
// // module.exports = {
// //     exportTrailingSlash: true
// // }
