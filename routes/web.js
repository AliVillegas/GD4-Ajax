const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const tasksController = require('../controllers/TasksController');

router.get('/', homepageController.index);

router.post('/tasks', tasksController.store);
router.post('/tasksUpdate', tasksController.markAsDone);
router.post('/tasksDelete', tasksController.deleteTask);


module.exports = router;