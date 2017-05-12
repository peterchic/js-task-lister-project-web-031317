class Category {

  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.id = Category.all.length
    Category.all.push(this)
    }

    static render(){
      return Category.all.map(function(categoryItem){
        console.log(categoryItem.id)
        return $("#select_category").append(`<option value=${categoryItem.id}>${categoryItem.title}</option>`)
      }).join(" ")
    }
  }

  Category.all = []



  // static all(){
  //   return $.ajax({
  //     url: "http://localhost:3000/api/v1/categories"
  //   })
  // }
