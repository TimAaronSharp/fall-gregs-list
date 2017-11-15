function ComputerController() {
    var computerService = new ComputerService()

    var computersElem = document.getElementById('computers-list')
    var computersFormElem = document.getElementById('add-computers-form')
    var computersFieldElem = document.getElementById('field-area')
    var showButton = document.getElementById('show-computer-button')
    
    function getComputers(){
        computerService.getComputers(drawComputers)
    }

    var computersFormTemplate = ''
    function drawComputers(computers) {
        debugger
        var computerTemplate = ''
        for (var i = 0; i < computers.length; i++) {
            var computer = computers[i];
            computerTemplate += `
              <div class="col-md-3">
                  <div class="panel panel-info">
                      <div class="panel-heading">
                          <h3>${computer.title}</h3>
                          <h6>${computer.location}</h6>
                          <i class="fa fa-trash" onclick="app.controllers.computersCtrl.removeComputer('${computer._id}')"></i>
                      </div>
                      <div class="panel-body text-center">
                          <img src="${computer.img}" class="img-responsive">
                          <h4>${computer.ram} GB ram - ${computer.videoCard} video card</h4>
                      </div>
                      <div class="panel-footer">
                          <h5>$ ${computer.price}</h5>
                      </div>
                  </div>
              </div>
              `
        }
        computersElem.innerHTML = computerTemplate
    }

    this.drawComputersField = function drawComputersField() {

        computersFormTemplate = `
      <div class="col-sm-6 col-sm-offset-3" id="add-computer-form">
      <form class="form" onsubmit="app.controllers.computersCtrl.addComputer(event), app.controllers.computersCtrl.showAddComputerForm()">
          <div class="form-group">
              <label for="title">Title:</label>
              <input type="text" name="title" class="form-control" placeholder="Title" required>
          </div>
          <div class="form-group">
              <label for="cpu">CPU:</label>
              <input type="text" name="cpu" class="form-control" placeholder="CPU">
          </div>
          <div class="form-group">
              <label for="ram">Ram:</label>
              <input type="text" name="ram" class="form-control" placeholder="Ram">
          </div>
          <div class="form-group">
              <label for="videoCard">Video Card:</label>
              <input type="text" name="videoCard" class="form-control" placeholder="Video Card">
          </div>
          <div class="form-group">
              <label for="soundCard">Sound Card:</label>
              <input type="text" name="soundCard" class="form-control" placeholder="Sound Card">
          </div>
          <div class="form-group">
              <label for="powerSupply">Power Supply:</label>
              <input type="text" name="powerSupply" class="form-control" placeholder="Power Supply">
          </div>
          <div class="form-group">
              <label for="motherboard">Motherboard:</label>
              <input type="text" name="motherboard" class="form-control" placeholder="Motherboard">
          </div>
          <div class="form-group">
              <label for="usbPorts">USB Ports:</label>
              <input type="text" name="usbPorts" class="form-control" placeholder="USB Ports">
          </div>
          <div class="form-group">
              <label for="hdmiPorts">HDMI Ports:</label>
              <input type="text" name="hdmiPorts" class="form-control" placeholder="HDMI Ports">
          </div>
          <div class="form-group">
              <label for="caseSize">Case Size:</label>
              <input type="text" name="caseSize" class="form-control" placeholder="Case Size">
          </div>
          <div class="form-group">
              <label for="location">Location:</label>
              <input type="text" name="location" class="form-control" placeholder="Location" required>
          </div>
          <div class="form-group">
              <label for="contact">Contact:</label>
              <input type="text" name="contact" class="form-control" placeholder="Contact" required>
          </div>
          <div class="form-group">
              <label for="img">Image:</label>
              <input type="text" name="img" class="form-control" placeholder="Image">
          </div>
          <div class="form-group">
              <label for="price">Price:</label>
              <input type="text" name="price" class="form-control" placeholder="Price" required>
          </div>
          <div class="form-group">
              <button class="btn btn-success" type="submit">Add Computer</button>
          </div>
      </form>
  </div>`
        computersFieldElem.innerHTML = computersFormTemplate
        computersFormTemplate = ''
    }

    this.addComputer = function addComputer(e) {
        e.preventDefault()
        var form = e.target
        computerService.addComputer(form, getComputers)
        computersFieldElem.innerHTML = computersFormTemplate
    }

    this.removeComputer = function removeComputer(index){
        debugger
        computerService.removeComputer(index, getComputers)
    }

    var computerFormstate = false

    this.showAddComputerForm = function showAddComputerForm() {
        if (computerFormstate) {
            showButton.innerText = 'Add Computer Listing'
            showButton.className = 'btn btn-info'
            //propertiesFormElem.classList.add('hidden')
            computerFormstate = false
            computersFieldElem.innerHTML = computersFormTemplate
        } else {
            showButton.innerText = 'Cancel'
            showButton.className = 'btn btn-danger'
            // propertiesFormElem.classList.remove('hidden')
            computerFormstate = true
        }
    }
    getComputers()
}

// var compElem = document.getElementById('computers-list')
// var compFieldElem = document.getElementById('field-area')
// var compFormElem = document.getElementById('add-comp-form')



// function drawComps() {
//     var comps = compService.getComps()
//     var compTemplate = ''
//     for (var i = 0; i < comps.length; i++) {
//         var comp = comps[i];
//         compTemplate += `
//         <div class="col-md-3"
//             <div class="panel panel-info">
//                 <div class="panel-heading">
//                     <h3>${comp.title}</h3>
//                     <h5>${comp.location}</h3>
//                 </div>
//                 <div class="panel-body text-center">
//                     <img src="${comp.img}" class="img-responsive">
//                     <h4>${comp.cpu} - ${comp.videoCard}</h4>
//                 </div>
//                 <div class="panel-footer">
//                     <h5>${comp.price}</h5>
//                 </div>
//             </div>
//         </div>           
//         `
//     }
//     compElem.innerHTML = compTemplate
// }
// drawComps()