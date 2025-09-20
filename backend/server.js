const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dailyWorkRoutes = require('./routes/dailyWorkRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/dailywork', dailyWorkRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
