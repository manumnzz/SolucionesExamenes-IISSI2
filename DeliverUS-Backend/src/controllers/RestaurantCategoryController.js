import { RestaurantCategory } from '../models/models.js'
const index = async function (req, res) {
  try {
    const restaurantCategories = await RestaurantCategory.findAll()
    res.json(restaurantCategories)
  } catch (err) {
    res.status(500).send(err)
  }
}

const createCategory = async function (req, res) {
  const newRestaurantCategory = RestaurantCategory.build(req.body)
  const restaurantCategories = RestaurantCategory.findAll()
  try {
    if ((await restaurantCategories).includes(newRestaurantCategory)) {
      res.status(400).send('Category already exists')
    } else {
      const restaurantCategory = await newRestaurantCategory.save()
      res.json(restaurantCategory)
    }
  } catch (err) {
    res.status(500).send(err)
  }
}

const RestaurantCategoryController = {
  index,
  createCategory
}
export default RestaurantCategoryController
