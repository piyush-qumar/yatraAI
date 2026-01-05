exports.healthCheck = (req, res) => {
  res.status(200).json({ status: 'OK', service: "YatraAI Backend", message: 'API is healthy' , timestamp: new Date(), });
};