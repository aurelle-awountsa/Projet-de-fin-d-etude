import {bookingService} from "../services";

export default function bookingControllerFactory() {
    return Object.freeze({
        postBooking, getAllBookings, getTeacherAvailability, createTeacherBooking
    });

    async function postBooking(httpRequest) {


        try {
            const {...userInfo} = httpRequest.body;
            const {_id: id} = httpRequest.user;

            const updatedUser = await bookingService.addUserBooking({id, ...userInfo});

            if (updatedUser.message) {
                return {statusCode: 404, body: {...updatedUser,}}
            }

            return {
                statusCode: 201,
                body: {
                    message: "Booking created successfully !",
                    updatedUser: {
                        username: updatedUser.username,
                        email: updatedUser.email,
                        bookking: updatedUser.booking
                    }
                }
            }
        } catch (e) {
            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }

    }

    async function getAllBookings(httpRequest) {

        const {_id: id} = httpRequest.user;

        try {

            const bookings = await bookingService.listBookings({id});

            if (bookings.message) {
                return {
                    statusCode: 404,
                    body: {success: false, message: bookings.message}
                }
            }

            if (bookings.error) {
                return {
                    statusCode: 403,
                    body: {success: false, message: "You don't have enough permission to perform this action !"}
                }
            }

            if (bookings.length === 0) {

                return {
                    statusCode: 404,
                    body: {message: "No user found in the database !"}
                }
            }

            const reviewCount = bookings.filter(x => x.booking.length !== 0).length;

            if (reviewCount === 0) {

                return {
                    statusCode: 404,
                    body: {message: "This user seems to have no review(s) at the moment ."}
                }
            }

            const data = [];
            bookings.forEach(x => x.booking
                .forEach(y => data.push(y)));
            return {statusCode: 200, body: [...data]}
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }
    }

    async function getTeacherAvailability(httpRequest) {


        try {

            const bookings = await bookingService.listTeacherAvailability();

            if (bookings.length === 0) {

                return {
                    statusCode: 404,
                    body: {message: "No appointment from the teacher were found !"}
                }
            }

            return {statusCode: 200, body: bookings}
        } catch (e) {

            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }
    }

    async function createTeacherBooking(httpRequest) {



        try {
            const {...userInfo} = httpRequest.body;
            const {_id: id} = httpRequest.user;

            const updatedUser = await bookingService.addTeacherBooking({id, ...userInfo});

            if (updatedUser.message) {
                return {statusCode: 404, body: {...updatedUser,}}
            }

            return {
                statusCode: 201,
                body: {
                    message: "Booking created successfully !",
                    updatedUser: {
                        username: updatedUser.username,
                        email: updatedUser.email,
                        bookking: updatedUser.booking
                    }
                }
            }
        } catch (e) {
            console.log(e);
            return {statusCode: 400, body: {error: e.message}}
        }

    }
}
