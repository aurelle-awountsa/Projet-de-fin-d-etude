import buildMakeQuestion from './question'
import buildMakeReview from './reviews'
import buildMakeUser from './user'
import buildMakeBooking from './booking'
import buildMakeLog from './logs'
import requiredParam from '../helpers/required-parameter'
import isValidEmail from '../helpers/validate-email'
import {passwordFactory} from '../security'

const makeQuestion = buildMakeQuestion(requiredParam);
const makeReview = buildMakeReview(requiredParam);
const makeBooking = buildMakeBooking(requiredParam);
const makeUser = buildMakeUser(isValidEmail, passwordFactory.hashPassword, requiredParam);
const makeLog = buildMakeLog(requiredParam);

const entities = Object.freeze({
    makeQuestion, makeUser, makeBooking
});

export default entities
export {makeQuestion, makeUser, makeReview, makeBooking, makeLog}

