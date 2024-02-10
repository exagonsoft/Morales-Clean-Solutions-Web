// registerModels.js

import { readdirSync } from 'fs';
import { join } from 'path';
import { connect } from 'mongoose';
import { connectToDB } from '@/config/dabconnection';

const modelsDir = join(__dirname, '/src/data/models/');

// Get all model files in the models directory
const modelFiles = readdirSync(modelsDir).filter(file => file.endsWith('Schema.js'));

// Register each model
modelFiles.forEach(file => {
  const modelPath = join(modelsDir, file);
  require(modelPath);
});

// Connect to the database
connectToDB()
  .then(() => console.log('Connected to database'))
  .catch(error => console.error('Database connection error:', error));
