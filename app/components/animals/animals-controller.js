function AnimalsCtrl() {
var animalsService = new AnimalsService()

var animalsElem = document.getElementById('autos-list')
var autosFormElem = document.getElementById('add-auto-form')
var showButton = document.getElementById('show-car-button')

function drawAutos() {
    // WHERE ARE ALL THE ANIMALS?
    var animals = animalsService.getAnimals()
    var template = ''
    for (var i = 0; i < animals.length; i++) {
      var animal = animals[i];
      template += `
            <div class="col-md-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h3>${auto.title}</h3>
                        <h6>${auto.location}</h6>
                    </div>
                    <div class="panel-body text-center">
                        <img src="${auto.img}" class="img-responsive">
                        <h4>${auto.year} - ${auto.make} ${auto.model}</h4>
                    </div>
                    <div class="panel-footer">
                        <h5>$ ${auto.price}</h5>
                    </div>
                </div>
            </div>
            `
    }
    animalsElem.innerHTML = template
  }
}