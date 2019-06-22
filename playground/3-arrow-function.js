const tasks = {
    tasks: [{
        item: 'Groccery shopping',
        complete: true
    }, {
        item: 'Finish node course',
        complete: false
    }, {
        item: 'eat dinner',
        complete: true
    }, {
        item: 'talk to kate',
        complete: false
    }],

    get_tasks () {
        return this.tasks.filter((task) => task.complete === false)
    }    
    
}

console.log(tasks.get_tasks())