import express from 'express';
const router = express.Router();
import passport from 'passport'

import makeCallback from '../helpers/express-callback'
import {bookingController} from '../controllers'

router.get("/bookings/all",
    passport.authenticate("jwt", {session: false}),
    makeCallback(bookingController.getAllBookings));

router.get("/teacher/bookings",
    passport.authenticate("jwt", {session: false}),
    makeCallback(bookingController.getTeacherAvailability));


router
    .post("/user/booking",
        passport.authenticate("jwt", {session: false}),
        makeCallback(bookingController.postBooking));

router
    .post("/teacher/booking",
        passport.authenticate("jwt", {session: false}),
        makeCallback(bookingController.createTeacherBooking));

export {router as bookingRoutes};
