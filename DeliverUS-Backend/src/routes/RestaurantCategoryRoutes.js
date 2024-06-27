import RestaurantCategoryController from '../controllers/RestaurantCategoryController.js'
import { isLoggedIn, hasRole } from '../middlewares/AuthMiddleware.js'

const loadFileRoutes = function (app) {
  app.route('/restaurantCategories')
    .get(RestaurantCategoryController.index)
    .post(
      isLoggedIn,
      hasRole('owner'),
      RestaurantCategoryController.createCategory)
}
export default loadFileRoutes
