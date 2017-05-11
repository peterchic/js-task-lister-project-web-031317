class Task {
  constructor(description, priority, list) {

    this.description = description;
    this.priority = priority;
    this.list = list
    this.id = Task.all.length
    Task.all.push(this)
  }
}

Task.all = []
