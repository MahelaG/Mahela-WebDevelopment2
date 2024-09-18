var dbcon = require("../database");
var connection = dbcon.getconnection();
connection.connect();
var express = require('express');
var router = express.Router();


// 1. Get all active fundraisers including the category
router.get('/fundraisers', (req, res) => {
    var query = `
        SELECT f.FUNDRAISER_ID, f.ORGANIZER, f.CAPTION, f.TARGET_FUNDING, f.CURRENT_FUNDING, f.CITY, f.ACTIVE, c.NAME AS CATEGORY
        FROM FUNDRAISER f
        JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
        WHERE f.ACTIVE = TRUE;
    `;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error retrieving fundraisers:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(results);
    });
});

// 2. Get all categories
router.get('/categories', (req, res) => {
    var query = 'SELECT * FROM CATEGORY;';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error retrieving categories:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(results);
    });
});

// 3. Search fundraisers based on category name
router.get('/search', (req, res) => {
    var { category } = req.query;
    var query = `
        SELECT f.FUNDRAISER_ID, f.ORGANIZER, f.CAPTION, f.TARGET_FUNDING, f.CURRENT_FUNDING, f.CITY, f.ACTIVE, c.NAME AS CATEGORY
        FROM FUNDRAISER f
        JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
        WHERE f.ACTIVE = TRUE`;
    
    var queryParams = [];
    
        // if (name) {
        //     query += ' AND f.CAPTION LIKE ?';
        //     queryParams.push(`%${name}%`);
        // }

    if (category) {
        query += ' AND c.NAME = ?';
        queryParams.push(category);
    }

    connection.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Error searching fundraisers:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(results);
    });
});

// 4. Get fundraiser details by ID
router.get('/fundraiser/:id', (req, res) => {
    var { id } = req.params;
    var query = `
        SELECT f.FUNDRAISER_ID, f.ORGANIZER, f.CAPTION, f.TARGET_FUNDING, f.CURRENT_FUNDING, f.CITY, f.ACTIVE, c.NAME AS CATEGORY
        FROM FUNDRAISER f
        JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
        WHERE f.FUNDRAISER_ID = ?;`;
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error retrieving fundraiser details:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Fundraiser not found');
            return;
        }
        res.send(results[0]);
    });
});

module.exports = router;