const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('form');
});

app.post('/generate-docx', (req, res) => {
  
  res.render('document', {
    ...req.body,
    data_atual: new Date().toLocaleDateString('pt-BR')
  }, (err, html) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error generating document');
    }

    // Convert HTML to DOCX
    const HTMLtoDOCX = require('html-to-docx');
    
    HTMLtoDOCX(html, null, {
      table: { row: { cantSplit: true } },
      footer: true,
      header: true,
    }).then((buffer) => {
      // Send the document
      res.setHeader('Content-Disposition', 'attachment; filename=dados-reurb.docx');
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      res.send(buffer);
    }).catch((error) => {
      console.error(error);
      res.status(500).send('Error generating document');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});