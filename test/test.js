const { assert, expect } = require('chai');
const { describe, it } = require('mocha');
const TaskManager = require('../assets/js/taskManager').TaskManager;

describe('Task manager methods', () => {
    
    describe('addTask', () => {
        it('should accept tasks as parameters and push them into newTask object', () => {
            // Set up
            const task = new TaskManager();

            // Exercise 
            task.addTask('Go outside', 'Go outside and play', 'Lulu', '12/25/12', 'To-do');
        
            // Verify
            assert.ok(task.tasks.length == 1);
        });

    });

    describe('deleteTask', () => {
        it('should delete tasks from the task manager', () => {
            // Set up
            const task = new TaskManager();

            // Exercise
            task.addTask('Go outside', 'Go outside and play', 'Lulu', '12/25/12', 'To-do');
            task.deleteTask(0);

            // Verify
            assert.ok(task.tasks.length === 0);
        });

    });

    describe('.getTaskById', () => {
        it('returns the task from the TaskManager.tasks array that corresponds to the index given', () => {
            // Setup
            const _taskManager = new TaskManager;
            _taskManager.addTask('taskValue', 'description', 'assignee', 'dueDate');
            const expectedResult = {name: 'taskValue', description: 'description', dueDate: 'dueDate', assignedTo: 'assignee', status: 'TODO', id: 0};

            // Exercise
            const result = _taskManager.getTaskById(0);

            // Verify
            assert.deepEqual(result, expectedResult);
        })
    })
});