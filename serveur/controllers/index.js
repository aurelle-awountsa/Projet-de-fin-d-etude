import userControllerFactory from './userController'
import reviewControllerFactory from './reviewController'
import questionControllerFactory from './questionController'
import bookingControllerFactory from './bookingController'
import logControllerFactory from './logsController'

const userController = userControllerFactory();
const reviewController = reviewControllerFactory();
const questionController = questionControllerFactory();
const bookingController = bookingControllerFactory();
const logController = logControllerFactory();


const controllers = Object.freeze({
    userController, reviewController, questionController, logController, bookingController
});

export default controllers
export {userController, reviewController, questionController, logController, bookingController}
