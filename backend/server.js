const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// Request logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Helper to safely read files
const safeReadFile = (filePath, res) => {
    // Resolve absolute path to ensure we are looking in the right place relative to backend directory
    const absolutePath = path.resolve(__dirname, filePath);

    fs.readFile(absolutePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file ${absolutePath}:`, err);
            return res.status(404).json({ error: 'Data not found' });
        }
        try {
            res.json(JSON.parse(data));
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            res.status(500).json({ error: 'Invalid JSON data' });
        }
    });
};

// Route to get list of states
app.get('/api/states', (req, res) => {
    safeReadFile('../state-list.json', res);
});

// Route to get India GeoJSON
app.get('/api/map/india', (req, res) => {
    safeReadFile('../geojson/india.geojson', res);
});

const stateData = require('./state-data');

// Route to get specific state details
app.get('/api/state-details/:slug', (req, res) => {
    const { slug } = req.params;
    const data = stateData[slug];
    if (data) {
        res.json(data);
    } else {
        // Fallback or 404
        res.status(404).json({
            capital: "N/A",
            population: "N/A",
            description: "No details available for this region.",
            funFact: "N/A"
        });
    }
});

// Route to get specific state GeoJSON
app.get('/api/map/state/:slug', (req, res) => {
    const { slug } = req.params;
    // Sanitize slug to prevent directory traversal
    const sanitizedSlug = slug.replace(/[^a-z0-9-]/gi, '');
    const filePath = `../geojson/states/${sanitizedSlug}.geojson`;
    safeReadFile(filePath, res);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
