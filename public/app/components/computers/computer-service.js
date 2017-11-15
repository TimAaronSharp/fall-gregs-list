function ComputerService(){
    
    var baseUrl = 'http://localhost:5000/api/computers'
   
    var computers = []

    function logError(err){
        console.error(err)
    }

    function Computer(config){

        this.title = config.title.value,
        this.cpu = config.cpu.value,
        this.ram = config.ram.value,
        this.videoCard = config.videoCard.value,
        this.soundCard = config.soundCard.value,
        this.powerSupply = config.powerSupply.value,
        this.motherboard = config.motherboard.value,
        this.usbPorts = config.usbPorts.value,
        this.hdmiPorts = config.hdmiPorts.value,
        this.caseSize = config.caseSize.value,
        this.location = config.location.value,
        this.contact = config.contact.value,
        this.img = config.img.value,
        this.price = config.price.value
        
    }

    this.getComputers = function getComputers(drawComputersCb){
        debugger
        if(!drawComputersCb || typeof drawComputersCb != 'function'){
            return console.error('Did not pass a cb or cb is not a function')
        }
        $.get(baseUrl)
        .then ( res =>{
            computers = res
            drawComputersCb(res)
        })
        .fail(logError) 
    }
    
    this.getComputer = function getComputer(id){
        for (var i = 0; i < computers.length; i++) {
            var computer = computers[i];
            if(id == computer.id){
                return computer
            }
        }
    }

    this.addComputer = function addComputer(form, getComputersCb){
        var newComputer = new Computer(form)
        if(!form || !getComputersCb || typeof getComputersCb != 'function'){ 
            return console.error('Unable to add Computer', 'bad parameters', form, getComputerCb) 
        }
        $.post(baseUrl, newComputer)
        .then(getComputersCb)
        .fail(logError)
    }

    this.removeComputer = function removeComputer(index, getComputersCb){
        $.ajax({
            url: baseUrl + '/' + index,
            method: 'DELETE'
        })
        .then(getComputersCb)
        .fail(logError)
    }
}
    