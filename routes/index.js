const { Router } = require('express');
const router = Router();

// router.get("/", (req, res, next) => {
//   res.render('index', {
//     items: ['item one', 'other', 'new item']
//   });
// });

// router.get("/", (req, res, next) => {
//   const timeStamp = new Date().toTimeString();
//   res.render('index', {
//     time: timeStamp
//   });
// });

// router.get("/", (req, res, next) => {
//   res.render('index');
// });

// router.get("/", (req, res, next) => {
//   res.send(`
//     <html>
//     <body>
//     <h1> Hello, World! </h1>
//     </body>
//     </html>  `);
// });

router.use("/weather", require('./weather'));

module.exports = router;
