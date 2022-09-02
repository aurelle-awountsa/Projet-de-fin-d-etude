export default function buildMakeBooking(requiredParameter) {
    return ({
                owner = requiredParameter('The owner'),
                start = requiredParameter('The start field'),
                end = requiredParameter('The end field'),
                state = 'OPEN',
                createdOn = new Date(),
                modifiedOn = new Date()
            } = {}) => {

        if (typeof owner !== 'string') throw new TypeError('The owner must be a string.');

        const stateEnum = Object.freeze({
            OPEN: "OPEN",
            CANCELLED: "CANCELLED",
            FINISHED: "FINISHED",
            DELETED: "DELETED"
        });

        if (state !== stateEnum.OPEN && state !== stateEnum.CANCELLED && state !== stateEnum.FINISHED && state !== stateEnum.DELETED) {
            throw new RangeError('These are the types are allowed : open, cancelled, finished, deleted');
        }
        return Object.freeze({
            getOwner: () => owner,
            getStart: () => start,
            getEnd: () => end,
            getState: () => state,
            getCreatedOn: () => createdOn,
            getModifiedOn: () => modifiedOn
        });
    }
}
