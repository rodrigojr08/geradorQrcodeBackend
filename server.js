const express = require('express');
const cors = require('cors');
const QRCode = require('qrcode');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/qrcode', async (req, res) => {
  try {
    const data = req.body;

    const jsonString = JSON.stringify(data);
    const qrImageBase64 = await QRCode.toDataURL(jsonString);

    res.json({
      success: true,
      qrImageBase64
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

app.listen(3000, () => {
  console.log('🚀 Backend rodando em http://localhost:3000');
});