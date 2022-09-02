import {makeBooking} from '../domain'

export default function bookingServiceFactory({bookingRepository, userRepository}) {
    return Object.freeze({
        addBooking, listBookings, listTeacherAvailability, addUserBooking, addTeacherBooking
    });

    async function addBooking({id, ...changes} = {}) {

        if (!id) return {message: 'You must supply an id.'};

        if (!(id.toString().match(/^[0-9a-fA-F]{24}$/)))
            return {message: `${id} is not a valid ObjectId`};

        const existing = await bookingRepository.findById({id});

        if (!existing) return {message: "No valid entry found for provided id !"};

        if (existing.booking.length >= 1)
            return {message: "You have already an open booking !"};

        changes.owner = existing.username;

        const booking = makeBooking({...changes});

        existing.booking.push({
            owner: booking.getOwner(),
            start: booking.getStart(),
            end: booking.getEnd(),
            state: booking.getState(),
            created: booking.getCreatedOn(),
            updated: booking.getModifiedOn(),
        });

        return bookingRepository.save({
            id: id,
            new: true,
            booking: existing.booking
        })
    }

    async function listBookings({id}) {
        if (!id) return {message: 'You must supply an id.'};

        if (!(id.toString().match(/^[0-9a-fA-F]{24}$/)))
            return {message: `${id} is not a valid ObjectId`};


        const existing = await bookingRepository.findById({id});

        if (!existing) return {message: "No valid entry found for provided id !"};

        if (existing.role !== 'admin' && existing.role !== 'teacher')
            return {error: 'Forbidden'};

        return bookingRepository.findAll();
    }

    async function listTeacherAvailability() {

        const bookings = await bookingRepository.findAll();

        const data = [];
        bookings
            .forEach(b => b.booking
                .filter(u => u.owner === 'teacher')
                .forEach(teacher => data.push(teacher)));

        return [...data]
    }

    async function addUserBooking({id, ...changes} = {}) {

        const booking = await addBooking({id, ...changes});

        const users = await userRepository.findAll();

        const teacher = users.find(u => u.role === 'teacher');

        teacher.booking.splice(changes.bookingIndex, 1);

        await bookingRepository.save({
            id: teacher._id,
            new: true,
            booking: teacher.booking
        });

        return booking;
    }

    async function addTeacherBooking({id, ...changes} = {}) {

        const existing = await bookingRepository.findById({id});

        if (!existing) return {message: "No valid entry found for provided id !"};

        changes.owner = existing.username;

        const booking = makeBooking({...changes});

        existing.booking.push({
            owner: booking.getOwner(),
            start: booking.getStart(),
            end: booking.getEnd(),
            state: booking.getState(),
            created: booking.getCreatedOn(),
            updated: booking.getModifiedOn(),
        });

        return bookingRepository.save({
            id: id,
            new: true,
            booking: existing.booking
        })
    }

}
