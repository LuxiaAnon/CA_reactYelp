const apiKey = "8FR8qoH5QlPp1hboFh8VQRR4X0osaFY6IdSowaalgOERwA9HbtuJfOWR7Xor0UJr_ui2nJbckxubLo2sVNjeXddAUpAoUOr4p8z5sEW_-IFzORIBU8GTKCXOlLvwXnYx"
console.log(process.env.REACT_APP_TRUC)
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`
            }
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                console.log(jsonResponse.businesses)
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        name: business.name,
                        imageSrc: business.image_url,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
}

export default Yelp