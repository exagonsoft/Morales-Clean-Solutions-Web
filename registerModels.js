// registerModels.js

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const modelsDir = path.join(__dirname, '/src/data/models/');

// Get all model files in the models directory
const modelFiles = fs.readdirSync(modelsDir).filter(file => file.endsWith('Schema.js'));

// Register each model
modelFiles.forEach(file => {
  const modelPath = path.join(modelsDir, file);
  require(modelPath);
});

// Connect to the database
mongoose.connect('mongodb+srv://exagonsoft:XH6Nuf08qF57Pg7H@msccluster.adammha.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(error => console.error('Database connection error:', error));
