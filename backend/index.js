const express=require("express");
const app = express();
const cors = require('cors');
app.get('/api', (req, res) => {
    const data = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
    res.send(data);
  });

  const https = require('https');
  https.globalAgent.options.rejectUnauthorized = false;
  https.get('https://example.com', (res) => {
    // handle response
  });






app.use(cors({ origin: 'http://localhost:3000' }));
app.listen(8000,()=>{
    console.log('server is running on port 8000');
})