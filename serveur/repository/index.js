import makeQuestionRepository from './questionRepository'
import makeUserRepository from './userRepository'
import makeTokenRepository from './tokenRepository'
import makeReviewRepository from './reviewRepository'
import makeBookingRepository from './bookingRepository'
import makeLogRepository from './logRepository'
import Question from '../models/questions'
import {User} from '../models/users'
import {Token} from '../models/users'
import Logs from '../models/logs'

const questionRepository = makeQuestionRepository({Question});
const userRepository = makeUserRepository({User});
const reviewRepository = makeReviewRepository({User});
const bookingRepository = makeBookingRepository({User});
const tokenRepository = makeTokenRepository({Token});
const logsRepository = makeLogRepository({Logs});

const repositories = Object.freeze({
    questionRepository, userRepository, bookingRepository, reviewRepository, logsRepository, tokenRepository
});

export default repositories
export {questionRepository, userRepository, bookingRepository, reviewRepository, logsRepository, tokenRepository}

