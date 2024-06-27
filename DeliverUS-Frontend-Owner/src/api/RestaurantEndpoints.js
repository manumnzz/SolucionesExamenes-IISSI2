import { get, post, put, destroy, patch } from './helpers/ApiRequestsHelper'
function getAll () {
  return get('users/myrestaurants')
}

function getDetail (id) {
  return get(`restaurants/${id}`)
}

function getRestaurantCategories () {
  return get('restaurantCategories')
}

function createCategory (data) {
  return post('restaurantCategories', data)
}

function create (data) {
  return post('restaurants', data)
}

function update (id, data) {
  return put(`restaurants/${id}`, data)
}

function remove (id) {
  return destroy(`restaurants/${id}`)
}

function pinRestaurant (id) {
  return patch(`restaurants/${id}/pinned`)
}

function updateRestaurantSort (id) {
  return patch(`restaurants/${id}/sortedBy`)
}

export { getAll, getDetail, getRestaurantCategories, createCategory, create, update, remove, pinRestaurant, updateRestaurantSort }
