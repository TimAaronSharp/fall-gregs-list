function AutosController() {
    var autosService = new AutosService()

    // Buttons
    // Add New Auto
    // Delete Auto
    // Report Flag
    // View More
    // Filter / Search
    var autosElem = document.getElementById('autos-list')
    var autosFormElem = document.getElementById('add-auto-form')
    var autosFieldElem = document.getElementById('field-area')
    var showButton = document.getElementById('show-car-button')

    var autosFormTemplate = ''

    function getAutos() {
        autosService.getAutos(drawAutos)
    }
    function drawAutos(autos) {
        var template = ''
        for (var i = 0; i < autos.length; i++) {
            var auto = autos[i];
            template += `
            <div class="col-md-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h3>${auto.title}</h3>
                        <h6>${auto.location}</h6>
                        <i class="fa fa-trash" onclick="app.controllers.autosCtrl.removeAuto(${i})"></i>
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
        autosElem.innerHTML = template
    }

    this.drawAutosField = function drawAutosField() {

        autosFormTemplate = `
    <div class="col-sm-6 col-sm-offset-3" id="add-auto-form">
    <form class="form" onsubmit="app.controllers.autosCtrl.addAuto(event), app.controllers.autosCtrl.showAddAutoForm()">
        <div class="form-group">
            <label for="title">Title:</label>
            <input type="text" name="title" class="form-control" placeholder="Title" required>
        </div>
        <div class="form-group">
            <label for="make">Make:</label>
            <input type="text" name="make" class="form-control" placeholder="Make">
        </div>
        <div class="form-group">
            <label for="model">model:</label>
            <input type="text" name="model" class="form-control" placeholder="model">
        </div>
        <div class="form-group">
            <label for="year">year:</label>
            <input type="text" name="year" class="form-control" placeholder="year">
        </div>
        <div class="form-group">
            <label for="mileage">mileage:</label>
            <input type="text" name="mileage" class="form-control" placeholder="mileage">
        </div>
        <div class="form-group">
            <label for="color">color:</label>
            <input type="text" name="color" class="form-control" placeholder="color">
        </div>
        <div class="form-group">
            <label for="price">price:</label>
            <input type="text" name="price" class="form-control" placeholder="price" required>
        </div>
        <div class="form-group">
            <label for="condition">condition:</label>
            <input type="text" name="condition" class="form-control" placeholder="condition">
        </div>
        <div class="form-group">
            <label for="description">description:</label>
            <input type="text" name="description" class="form-control" placeholder="description" required>
        </div>
        <div class="form-group">
            <label for="location">location:</label>
            <input type="text" name="location" class="form-control" placeholder="location">
        </div>
        <div class="form-group">
            <label for="contact">contact:</label>
            <input type="text" name="contact" class="form-control" placeholder="contact" required>
        </div>
        <div class="form-group">
            <label for="img">img:</label>
            <input type="text" name="img" class="form-control" placeholder="img">
        </div>
        <div class="form-group">
            <button class="btn btn-success" type="submit">Add Car</button>
        </div>
    </form>
</div>
`
        autosFieldElem.innerHTML = autosFormTemplate
        autosFormTemplate = ''
    }

    this.addAuto = function addAuto(e) {
        e.preventDefault()
        var form = e.target
        autosService.addAuto(form, getAutos)
        // autosFormElem.classList.toggle('hidden', true)
        autosFieldElem.innerHTML = autosFormTemplate
    }
    var formstate = false

    this.removeAuto = function removeAuto(index){
        autosService.removeAuto(index, getAutos)
    }
    this.showAddAutoForm = function showAddAutoForm() {
        if (formstate) {
            showButton.innerText = 'Add Car Listing'
            showButton.className = 'btn btn-info'
            //autosFormElem.classList.add('hidden')
            formstate = false
            autosFieldElem.innerHTML = autosFormTemplate
        } else {
            showButton.innerText = 'Cancel'
            showButton.className = 'btn btn-danger'
            // autosFormElem.classList.remove('hidden')
            formstate = true
        }
    }
    getAutos()
}