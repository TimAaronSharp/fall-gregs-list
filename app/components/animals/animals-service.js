function AnimalsService() {
    var animals = [{
        id: 'ksaldjflkasdjflasdkj',
        species: 'cat',
        breed: 'Maine Coon',
        color: 'brown',
        age: '2',
        trained: false,
        houseTrained: true,
        title: 'Your New Animal',
        location: 'Boise',
        contact: 'animalseller@greg.com',
        img: '//placehold.it/200x200',
        price: 200,
        personality: 'energetic'
    }]
    var id = 0
    function Animal(config) {
        this.id = id++
        this.species = config.species.value
        this.breed = config.breed.value
        this.color = config.color.value
        this.age = config.age.value
        this.trained = config.trained.value
        this.houseTrained = config.houseTrained.value
        this.title = config.title.value
        this.location = config.location.value
        this.contact = config.contact.value
        this.img = config.img.value
        this.price = config.price.value
        this.personality = config.personality.value

    }
    this.getAnimals = function getAnimals() {
        return animals
    }

    this.getAnimal = function getAnimal(id) {
        for (var i = 0; i < animals.length; i++) {
            var animal = animals[i];
            if (id == animal.id) {
                return animal
            }
        }
    }
    this.addAnimal = function addAnimal(form){
        var newAnimal = new Animal(form)
        animals.unshift(newAnimal)
    }
}
