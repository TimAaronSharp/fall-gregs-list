function ComputerController() {
    var compService = new ComputerService()

    var compElem = document.getElementById('computers-list')
    var compFieldElem = document.getElementById('field-area')
    var compFormElem = document.getElementById('add-comp-form')



    function drawComps() {
        var comps = compService.getComps()
        var compTemplate = ''
        for (var i = 0; i < comps.length; i++) {
            var comp = comps[i];
            compTemplate += `
            <div class="col-md-3"
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h3>${comp.title}</h3>
                        <h5>${comp.location}</h3>
                    </div>
                    <div class="panel-body text-center">
                        <img src="${comp.img}" class="img-responsive">
                        <h4>${comp.cpu} - ${comp.videoCard}</h4>
                    </div>
                    <div class="panel-footer">
                        <h5>${comp.price}</h5>
                    </div>
                </div>
            </div>           
            `
        }
        compElem.innerHTML = compTemplate
    }
    drawComps()
}