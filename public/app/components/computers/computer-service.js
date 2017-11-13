function ComputerService(){
    var computers = [{
        id:'adsfjghureh',
        title:'Your New Comptuer',
        cpu:'Intel 3.0ghz',
        videoCard:'Nvidia geForce 1080',
        soundCard:'system',
        powerSupply:'700 watt',
        motherboard:'ASUS',
        usbPorts:4,
        hdmiPorts:1,
        img:'//placehold.it/200x200',
        caseSize:'medium',
        price:1000          
    }]

    
    this.getComps = function getComps(){
        return JSON.parse(JSON.stringify(computers))
    }
}