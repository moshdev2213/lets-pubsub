const whiteList = [
    "http://localhost:5173",
    "http://localhost:32772",
    "https://pubsub-client-850033850526.us-central1.run.app"
  ];
  
  const corsOption = {
    origin: (origin, callback) => {
      if (whiteList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not Allowed By CORS"));
      }
    },
    optionalSuccessStatus: 200,
  };
  
  module.exports= corsOption;