function AnimalsController() {
    var animalsService = new AnimalsService()

    // Buttons
    // Add New ANIMAL
    // Delete ANIMAL
    // Report Flag
    // View More
    // Filter / Search
    var animalsElem = document.getElementById('animals-list')
    var animalsFormElem = document.getElementById('add-animals-form')
    var animalsFieldElem = document.getElementById('field-area')
    var showButton = document.getElementById('show-animal-button')
    
    var animalsFormTemplate = ''
    function getAnimals() {
        animalsService.getAnimals(drawAnimals)
    }

    function drawAnimals(animals) {
        var animalTemplate = ''
        for (var i = 0; i < animals.length; i++) {
            var animal = animals[i];
            animalTemplate += `
              <div class="col-md-3">
                  <div class="panel panel-info">
                      <div class="panel-heading">
                          <h3>${animal.title}</h3>
                          <h6>${animal.location}</h6>
                          <i class="fa fa-trash" onclick="app.controllers.animalsCtrl.removeAnimal(${i})"></i>
                      </div>
                      <div class="panel-body text-center">
                          <img src="${animal.img}" class="img-responsive">
                          <h4>${animal.age} year old - ${animal.breed}</h4>
                      </div>
                      <div class="panel-footer">
                          <h5>$ ${animal.price}</h5>
                      </div>
                  </div>
              </div>
              `
        }
        animalsElem.innerHTML = animalTemplate
    }

    this.drawAnimalsField = function drawAnimalsField() {
        debugger
        animalsFormTemplate = `
      <div class="col-sm-6 col-sm-offset-3" id="add-animal-form">
      <form class="form" onsubmit="app.controllers.animalsCtrl.addAnimal(event), app.controllers.animalsCtrl.showAddAnimalForm()">
          <div class="form-group">
              <label for="title">Title:</label>
              <input type="text" name="title" class="form-control" placeholder="Title" required>
          </div>
          <div class="form-group">
              <label for="species">Species:</label>
              <input type="text" name="species" class="form-control" placeholder="Species">
          </div>
          <div class="form-group">
              <label for="breed">Breed:</label>
              <input type="text" name="breed" class="form-control" placeholder="Breed">
          </div>
          <div class="form-group">
              <label for="color">Color:</label>
              <input type="text" name="color" class="form-control" placeholder="Color">
          </div>
          <div class="form-group">
              <label for="age">Age:</label>
              <input type="text" name="age" class="form-control" placeholder="Age">
          </div>
          <div class="form-group">
              <label for="trained">Trained:</label>
              <input type="text" name="trained" class="form-control" placeholder="Trained">
          </div>
          <div class="form-group">
              <label for="houseTrained">House Trained:</label>
              <input type="text" name="housetrained" class="form-control" placeholder="House Trained" required>
          </div>
          <div class="form-group">
              <label for="location">Location:</label>
              <input type="text" name="location" class="form-control" placeholder="Location">
          </div>
          <div class="form-group">
              <label for="contact">Contact:</label>
              <input type="text" name="contact" class="form-control" placeholder="Contact" required>
          </div>
          <div class="form-group">
              <label for="img">Img:</label>
              <input type="text" name="img" class="form-control" placeholder="Img">
          </div>
          <div class="form-group">
              <label for="price">Price:</label>
              <input type="text" name="price" class="form-control" placeholder="Price" required>
          </div>
          <div class="form-group">
              <label for="personality">Personality:</label>
              <input type="text" name="personality" class="form-control" placeholder="Personality">
          </div>
          <div class="form-group">
              <button class="btn btn-success" type="submit">Add Animal</button>
          </div>
      </form>
  </div>`
        animalsFieldElem.innerHTML = animalsFormTemplate
        animalsFormTemplate = ''
    }

    this.addAnimal = function addAnimal(e) {
        e.preventDefault()
        var form = e.target
        animalsService.addAnimal(form, getAnimals)
        // animalsFormElem.classList.toggle('hidden', true)
        animalsFieldElem.innerHTML = animalsFormTemplate
    }
    this.removeAnimal = function removeAnimal(index){
        animalsService.removeAnimal(index, getAnimals)
    }
    var animalFormstate = false

    this.showAddAnimalForm = function showAddAnimalForm() {
        if (animalFormstate) {
            showButton.innerText = 'Add Animal Listing'
            showButton.className = 'btn btn-info'
            //animalsFormElem.classList.add('hidden')
            animalFormstate = false
            animalsFieldElem.innerHTML = animalsFormTemplate
        } else {
            showButton.innerText = 'Cancel'
            showButton.className = 'btn btn-danger'
            // animalsFormElem.classList.remove('hidden')
            animalFormstate = true
        }
    }
    getAnimals()
}