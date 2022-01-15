const state = {
    dogs: [
        { name: "lucky", breed: "poodle", age: 1 },
        { name: "pochy", breed: "dalmatian", age: 2 },
        { name: "blackie", breed: "poodle", age: 4 }
    ]
}

export default {
    poodles: (state) => {
        return state.dogs.filter(dog => dog.breed === "poodle")
    },

    poodlesByAge: (state, getters) => (age) => {
        return getters.poodles.filter(dog => dog.age === age)
    }
}
