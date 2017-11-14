function AnimalsService() {
    var animals = []
    var baseUrl = 'http://localhost:5000/api/animals'
    // {
    //     id: 'ksaldjflkasdjflasdkj',
    //     species: 'cat',
    //     breed: 'Maine Coon',
    //     color: 'brown',
    //     age: '2',
    //     trained: false,
    //     houseTrained: true,
    //     title: 'Your New Animal',
    //     location: 'Boise',
    //     contact: 'animalseller@greg.com',
    //     img: '//placehold.it/200x200',
    //     price: 200,
    //     personality: 'energetic'
    // }
    function logError(err) {
        console.error(err)
    }
    var id = 0
    function Animal(config) {
        this.id = id++
        this.species = config.species.value
        this.breed = config.breed.value
        this.color = config.color.value
        this.age = config.age.value
        this.trained = config.trained.value
        this.houseTrained = config.housetrained.value
        this.title = config.title.value
        this.location = config.location.value
        this.contact = config.contact.value
        this.img = config.img.value
        this.price = config.price.value
        this.personality = config.personality.value

    }
    this.getAnimals = function getAnimals(drawAnimalsCb) {
        if (!drawAnimalsCb || typeof drawAnimalsCb != 'function') { return console.error('Did not pass a cb or cb is not a function') }
        $.get(baseUrl)
            .then(res => {
                animals = res
                drawAnimalsCb(res)
            })
            .fail(logError)
    }

    this.getAnimal = function getAnimal(id) {
        for (var i = 0; i < animals.length; i++) {
            var animal = animals[i];
            if (id == animal.id) {
                return animal
            }
        }
    }
    this.addAnimal = function addAnimal(form, getAnimalsCb) {
        debugger
        if (!form || !getAnimalsCb || typeof getAnimalsCb != 'function') { return console.error('Unable to add Animal', 'bad parameters', form, getAnimalsCb) }
        var newAnimal = new Animal(form)
        $.post(baseUrl, newAnimal)
            .then(getAnimalsCb)
            .fail(logError)
    }
    this.removeAnimal = function removeAnimal(index, getAnimalsCb) {
        $.ajax({
            url: baseUrl + '/' + index,
            method: 'DELETE'
        })
            .then(getAnimalsCb)
            .fail(logError)
    }
}
