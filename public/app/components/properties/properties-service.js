function PropertiesService() {
    var properties = [{
        id: 'asdjfhjaklh',
        squareFeet: 1000,
        color: 'pink',
        age: 50,
        yearBuilt: 1967,
        title: 'Your New Property',
        location: 'Boise',
        contact: 'propertyseller@greg.com',
        img: '//placehold.it/200x200',
        price: 200,
    }]
    var id = 0
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
    this.getProperties = function getProperties() {
        return JSON.parse(JSON.stringify(properties))
    }

    this.getProperty = function getProperty(id) {
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            if (id == property.id) {
                return JSON.parse(JSON.stringify(property))
            }
        }
    }
    this.addProperty = function addProperty(form){
        var newProperty = new Property(form)
        properties.unshift(newProperty)
    }
}
