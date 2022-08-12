const setupServer = require('./server.js')
const app = setupServer();
const PORT = process.env.PORT || 4000;

(async() => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening @ port ${PORT}`);
    });
  } catch(err) {
    console.error(`App failed to start ${err}`);
  }
})();