const app = require('./app');
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb+srv://navyasrireddy:123abc@cluster0.ouq5o.mongodb.net/decalthon_scores";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);

    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });