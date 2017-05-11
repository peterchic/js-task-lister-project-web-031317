class List {

  constructor(title) {
    this.title = title;
    this.tasks = [];
    this.id = List.all.length
    List.all.push(this)
    }
  }

  List.all = []


  // static all(){
  //   return $.ajax({
  //     url: "http://localhost:3000/api/v1/categories"
  //   })
  // }
