function PropertiesController() {
    var propertiesService = new PropertiesService()

    // Buttons
    // Add New PROPERTIES
    // Delete PROPERTIES
    // Report Flag
    // View More
    // Filter / Search
    var propertiesElem = document.getElementById('properties-list')
    var propertiesFormElem = document.getElementById('add-properties-form')
    var propertiesFieldElem = document.getElementById('field-area')
    var showButton = document.getElementById('show-property-button')
    
    function getProperties(){
        propertiesService.getProperties(drawProperties)
    }

    var propertiesFormTemplate = ''
    function drawProperties() {
        // WHERE ARE ALL THE PROPERTIES?

        var propertyTemplate = ''
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            propertyTemplate += `
              <div class="col-md-3">
                  <div class="panel panel-info">
                      <div class="panel-heading">
                          <h3>${property.title}</h3>
                          <h6>${property.location}</h6>
                          <i class="fa fa-trash" onclick="app.controllers.propertiesCtrl.removeProperty(${i})"></i>
                      </div>
                      <div class="panel-body text-center">
                          <img src="${property.img}" class="img-responsive">
                          <h4>${property.age} year old - ${property.breed}</h4>
                      </div>
                      <div class="panel-footer">
                          <h5>$ ${property.price}</h5>
                      </div>
                  </div>
              </div>
              `
        }
        propertiesElem.innerHTML = propertyTemplate
    }

    this.drawPropertiesField = function drawPropertiesField() {

        propertiesFormTemplate = `
      <div class="col-sm-6 col-sm-offset-3" id="add-property-form">
      <form class="form" onsubmit="app.controllers.propertiesCtrl.addProperty(event), app.controllers.propertiesCtrl.showAddPropertyForm()">
          <div class="form-group">
              <label for="title">Title:</label>
              <input type="text" name="title" class="form-control" placeholder="Title" required>
          </div>
          <div class="form-group">
              <label for="squareFeet">Square Feet:</label>
              <input type="text" name="squareFeet" class="form-control" placeholder="Square Feet">
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
              <label for="yearBuilt">Year Built:</label>
              <input type="text" name="yearBuilt" class="form-control" placeholder="Year Built">
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
              <button class="btn btn-success" type="submit">Add Property</button>
          </div>
      </form>
  </div>`
        propertiesFieldElem.innerHTML = propertiesFormTemplate
        propertiesFormTemplate = ''
    }

    this.addProperty = function addProperty(event) {
        debugger
        event.preventDefault()
        var form = event.target
        propertiesService.addProperty(form, getProperties)
        // propertiesFormElem.classList.toggle('hidden', true)
        propertiesFieldElem.innerHTML = propertiesFormTemplate
    }
    this.removeProperty = function removeProperty(index){
        propertiesService.removeProperty(index, getProperties)
    }
    var propertyFormstate = false

    this.showAddPropertyForm = function showAddPropertyForm() {
        if (propertyFormstate) {
            showButton.innerText = 'Add Property Listing'
            showButton.className = 'btn btn-info'
            //propertiesFormElem.classList.add('hidden')
            propertyFormstate = false
            propertiesFieldElem.innerHTML = propertiesFormTemplate
        } else {
            showButton.innerText = 'Cancel'
            showButton.className = 'btn btn-danger'
            // propertiesFormElem.classList.remove('hidden')
            propertyFormstate = true
        }
    }
    getProperties()
}