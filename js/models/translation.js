class Translation {
  constructor(description, priority, category) {

    this.description = description;
    this.priority = priority;
    this.category = category
    this.id = Translation.all.length
    Translation.all.push(this)
  }


}

Translation.all = []
