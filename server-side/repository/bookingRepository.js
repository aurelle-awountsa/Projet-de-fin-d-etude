export default function makeBookingRepository({User}) {
    return Object.freeze({
        findById, save, findAll, findByUsername
    });

    async function findById({id: _id}) {
        return await User.findById({_id})
            .select("_id email username role booking")
            .exec();
    }

    async function findByUsername({username: username}) {
        return await User.findOne({username})
            .select("_id username email booking")
            .exec();
    }

    async function findAll() {

        return await User.find()
            .select("booking -_id")
            .exec();
    }

    async function save({id: _id, new: bool, ...userInfo}) {
        return await User.findByIdAndUpdate({_id}, {...userInfo}, {new: bool}).exec();
    }

}

