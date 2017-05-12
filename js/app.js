$(document).ready(function(){
  $.ajax({
    url: "http://localhost:3000/api/v1/categories",
    success: function(categoryData){
       categoryData.map(function(category){
        // return $("#select_category").append(`<option value=${category.id}>${category.title}</option>`)
        // debugger
         $("#select_category").append(`<option value=2 >${category.title}</option>`)
      })
      // categoryData.map(function(category){
      //   console.log(category)
      //   debugger
      //   return $("#selected_original").append(`<option value=${category.translations.id}>${category.translations.original}</option>`)
      // })
      // categoryData.translations.map(function(english){
      //     var a = []
      //     a.push(english.original.sort().filter(function(item, pos, ary){
      //       return !pos || item != ary[pos - 1]})
      //     )
      //     return a
      // })
      // debugger
      $("#selected_language").append(
        `<option value=modified_sp>Spanish</option>
        <option value=modified_ro>Romanian</option>
        <option value=modified_por>Portuguese</option>
        <option value=modified_fr>French</option>
        <option value=modified_it>Italian</option>`
      )
// make if conditional that if the value number of the category is selected, then append appropriate selected_original phrase dropdown

      // var food =
      //   `<option value=Whereisthenearestrestaurant?>Where is the nearest restaurant?</option>
      //   <option value=Areyouhungry?>Are you hungry?</option>
      //   <option value=Wanttogetadrink?>Want to get a drink?</option>`
      //
      // var greetings =
      //   `<option value=Hello>Hello</option>
      //    <option value=Howareyou?>How are you?</option>
      //    <option value=Thankyou>Thank you</option>
      //    <option value=Nicetomeetyou!>Nice to meet you!</option>
      //    <option value=Goodbye>Goodbye</option>`
      //
      //  var location =
      //   `<option value=Whereisthebathroom?>Where is the bathroom?</option>
      //    <option value=Whereisthelibrary?>Where is the library?</option>
      //    <option value=Whereisthehostpital?>Where is the hostpital?</option>
      //    `
       if ( $("#select_category").val() == 1){
         $("#selected_original").append(`<option value=Hello>Hello</option>
          <option value=Howareyou?>How are you?</option>
          <option value=Thankyou>Thank you</option>
          <option value=Nicetomeetyou!>Nice to meet you!</option>
          <option value=Goodbye>Goodbye</option>`)
       }

       if ($("#select_category").val() == 2){
         debugger
         $("#selected_original").append(`<option value=Whereisthenearestrestaurant?>Where is the nearest restaurant?</option>
         <option value=Areyouhungry?>Are you hungry?</option>
         <option value=Wanttogetadrink?>Want to get a drink?</option>`)
       }
       if ($("#select_category").val() == 3){
         $("#selected_original").append(`<option value=Whereisthebathroom?>Where is the bathroom?</option>
          <option value=Whereisthelibrary?>Where is the library?</option>
          <option value=Whereisthehostpital?>Where is the hostpital?</option>
          `)
       }

    }
  })

  // $("#add_category").submit(function(event){
  //   event.preventDefault()
  //   var $title = $("#category_title").val()
  //   categoryTitle = new Category($title)
  //   Category.render()
  //   // debugger
  //   // $("#select_category").append(`<option value=${categoryTitle.title}>${categoryTitle.title}</option>`)
  //   $("#select_category").val(categoryTitle.title)
  //   $("#categories").append(`<div id=${categoryTitle.title}><button id="destroy-category">x</button><h2> ${categoryTitle.title}</h2></div>`)
  //   $("#categories").on('click', '#destroy-category', function() {
  //       $(this).parent("div").remove()
  //   })
  //   $.ajax({
  //     method: "POST",
  //     url: "http://localhost:3000/api/v1/categories",
  //     data: {title: $title},
  //     // success: function(data){
  //     //   console.log(data)
  //     // }
  //  })
  //   var form = document.getElementById("add_category");
  //   form.reset();
  // });

      $("#add_translation").on("submit", function(event){
        event.preventDefault()
        var $category = $("#select_category").val()
        var $greeting  = $("#selected_original").val()
        var $selected_language = $("#selected_language").val()
        var $original = $("#original").val()
        // var $original1 = $("#selected_original").val()
        var $original2 = $("#selected_original").val()
        var $original3 = $("#selected_original").val()
        var $original4 = $("#selected_original").val()
        var $original5 = $("#selected_original").val()
        // console.log($selected_language)
        // var greet
        // var finalCategory = Category.all.find(function(category) {
        //   debugger
        //   return category.title = $category
        //   console.log(category.title)
        // })

        $.ajax({
          url: `http://localhost:3000/api/v1/categories/${$category}`,
          // data: {
          //   original: $original,
          //   selected_language: $selected_language,
          //   selected_category: $category
          // },
          success: function(data){

            // debugger
            // console.log("from success=============", data);
            // console.log("from original=============", $original);
            var display = data.translations.map(function(greet){
                // debugger
               if ( $selected_language == "modified_sp" && greet.original.replace(/\s+/g,'') == $greeting){
                 return greet.modified_sp
               } else if ( $selected_language == "modified_ro" && greet.original.replace(/\s+/g,'') == $greeting) {
                //  console.log("romanian");
                 return greet.modified_ro
               } else if ( $selected_language == "modified_por" && greet.original.replace(/\s+/g,'') == $greeting) {
                //  console.log("Portuguese");
                 return greet.modified_por
               } else if ( $selected_language == "modified_fr" && greet.original.replace(/\s+/g,'') == $greeting) {
                //  console.log("French");
                 return greet.modified_fr
               } else if ( $selected_language == "modified_it" && greet.original.replace(/\s+/g,'') == $greeting) {
                //  console.log("Italian");
                 return greet.modified_it
               }
              }).filter(function(word){
                // console.log("filter word:", word);
                return word != undefined
              })
              // console.log("display: ", display)
            $("#categories").append(`<li>${display}</li>`)




            // var lang = data.translations.map(function(trans){
            //   if ($original1 == "Hello"){
            //     // console.log(trans.modified_sp)
            //     return trans.modified_sp
            //   } else if ($original2 == "How are you?"){
            //     return trans.modified_ro
            //   }
            // })
          }

          })
            // var newTranslation = new Translation($original, $selected_language, finalCategory)
        })

        // $(`#${finalCategory.title}`).append(`<h3>Description: ${$original} Priority: <strong> ${$modified_sp}</strong></h3>`)
        // // var resetPri = document.getElementById("translation_priority");
        // // form.reset();
        // var formA = document.getElementById("add_translation");
        // formA.reset();
      })

//data from ajax request on endpoint url
// data.translations.map(function(greet){
// if (greet.modified_sp){
// return greet.modified_sp
// }
// }).filter(function(word){
// return word != undefined
// })
