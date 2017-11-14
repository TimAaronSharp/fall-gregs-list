function PropertiesService() {
    var properties = []
    var id = 0
    var baseUrl = 'http://localhost:5000/api/properties'

    function Property(config) {
        this.id = id++
        this.squareFeet = config.squareFeet.value
        this.color = config.color.value
        this.age = config.age.value
        this.yearBuilt = config.yearBuilt.value
        this.title = config.title.value
        this.location = config.location.value
        this.contact = config.contact.value
        this.img = config.img.value
        this.price = config.price.value
    }

    function logError(err){
        console.error(err)
    }

    this.getProperties = function getProperties(drawPropertiesCb) {
        if(!getProperties || typeof getProperties != 'function'){
            return console.error('Did not pass a cb or cb is not a function')
        }
        $.get(baseUrl)
        .then(res =>{
            properties = res
            drawPropertiesCb(res)
        })
        .fail(logError)
    }

    this.getProperty = function getProperty(id) {
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            if (id == property.id) {
                return property
            }
        }
    }
    
    this.addProperty = function addProperty(form, getPropertiesCb){
        
        var newProperty = new Property(form)
        if(!form || !getPropertiesCb || typeof getPropertiesCb != 'function'){
            return console.error('Unable to add Property', 'bad parameters', form, getPropertiesCb) 
        }
        $.post(baseUrl, newProperty)
        .then(getPropertiesCb)
        .fail(logError)
        
    }
    this.removeProperty = function removeProperty(index, getPropertiesCb){
        // if(!index || !getPropertiesCb || typeof getPropertiesCb != 'function'){
        //     return console.error('Unable to remove Property', 'bad parameters', index, getPropertiesCb) 
        // }
        $.ajax({
            url: baseUrl + '/' + index,
            method: 'DELETE'
        })
        .then( getPropertiesCb)
        .fail(logError)
    }
}
