const Task = require('../models/models');

module.exports = {
    tasks: (req, res) => {
        Task.find({}, (err, tasks) => {
            if (err) {
                console.log("Returned error", err);
                // respond with JSON
                res.json({ message: "Error", error: err })
            }
            else {
                // respond with JSON
                res.json({ message: "Success", data: tasks })
            }
        });
    },

    task_by_id: (req, res) => {
        Task.findOne({ _id: req.params.id }, (err, task) => {
            if (err) {
                console.log("Returned error", err);
                // respond with JSON
                res.json({ message: "Error", error: err })
            }
            else {
                // respond with JSON
                res.json({ message: "Success", data: task })
            }
        });
    },

    post: (req, res) => {
        Task.create(req.body, (err, tasks) => {
            if (err) {
                console.log("Returned error", err);
                // respond with JSON
                res.json({ message: "Error", error: err })
            }
            else {
                // respond with JSON
                res.json({ message: "Success", data: tasks })
            }
        });
    },

    put: (req, res) => {
        Task.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, task) => {
            if (err) {
                console.log("Returned error", err);
                // respond with JSON
                res.json({ message: "Error", error: err })
            }
            else {
                // respond with JSON
                res.json({ message: "Success", data: task })
            }
        });
    },

    delete: (req, res) => {
        Task.remove({ _id: req.params.id }, (err) => {
            if (err) {
                console.log("Returned error", err);
                // respond with JSON
                res.json({ message: "Error", error: err })
            }
            else {
                // respond with JSON
                res.json({ message: "Deleted Success" })
            }
        });
    }
}