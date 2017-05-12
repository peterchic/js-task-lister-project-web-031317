$(document).ready(function(){
  $.ajax({
      url: "http://localhost:3000/api/v1/categories",
      success: function(categoryData){
        categoryData.map(function(category){
        return $("#select_category").append(`<option value=${category.id}>${category.title}</option>`)
      })
    }})

    $("#selected_language").append(
        `<option value=modified_sp>Spanish</option>
        <option value=modified_ro>Romanian</option>
        <option value=modified_por>Portuguese</option>
        <option value=modified_fr>French</option>
        <option value=modified_it>Italian</option>`
    )

    switchCat()

  })

  function switchCat(){
    // debugger
    $("#select_category").change(function(){
        $("select").not(this).val(this.value);
      if ( $("#select_category").val() == 1){
      $("#selected_original").html(`<option value=Hello>Hello</option>
      <option value=Howareyou?>How are you?</option>
      <option value=Thankyou>Thank you</option>
      <option value=Nicetomeetyou!>Nice to meet you!</option>
      <option value=Goodbye>Goodbye</option>`)
    }
      if ($("#select_category").val() == 2){
        $("select").not(this).val(this.value);
      $("#selected_original").html(`<option value=Whereisthenearestrestaurant?>Where is the nearest restaurant?</option>
      <option value=Areyouhungry?>Are you hungry?</option>
      <option value=Wanttogetadrink?>Want to get a drink?</option>`)
    }
      if ($("#select_category").val() == 3){
        $("select").not(this).val(this.value);
        $("#selected_original").html(`<option value=Whereisthebathroom?>Where is the bathroom?</option>
        <option value=Whereisthelibrary?>Where is the library?</option>
        <option value=Whereisthehostpital?>Where is the hostpital?</option>`)
       }
     })
    }

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

        $.ajax({
          url: `http://localhost:3000/api/v1/categories/${$category}`,
          success: function(data){
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
            $("#categories").append(`<li>${display}</li>`)
          }
          })
        })
