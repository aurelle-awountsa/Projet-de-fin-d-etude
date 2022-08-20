import userServiceFactory from './userService'
import reviewServiceFactory from './reviewService'
import questionServiceFactory from './questionService'
import bookingServiceFactory from './bookingService'
import logServiceFactory from './logService'

import {
    userRepository, tokenRepository, reviewRepository,
    questionRepository, logsRepository, bookingRepository
} from '../repository'

const userService = userServiceFactory({userRepository, tokenRepository});
const reviewService = reviewServiceFactory({reviewRepository});
const bookingService = bookingServiceFactory({bookingRepository, userRepository});
const questionService = questionServiceFactory({questionRepository});
const logService = logServiceFactory({logsRepository});

const services = Object.freeze({
    userService, reviewService, questionService, logService, bookingService
});

export default services
export {userService, reviewService, questionService, logService, bookingService}
