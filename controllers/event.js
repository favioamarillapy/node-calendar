const { sendSuccess, sendError } = require('../utils/Response');
const Event = require('../models/Event');


const get = async (req, res) => {

    const events = await Event.find({}).populate('user', 'name email');

    return sendSuccess(res, 'Event list obtain successful', events);
};

const find = async (req, res) => {
    const id = req.params.id;

    const event = await Event.findById(id);

    return sendSuccess(res, 'Event obtain successful', event);
};

const create = async (req, res) => {

    try {

        const event = new Event(req.body);
        event.user = req.id;

        const persist = await event.save();

        return sendSuccess(res, 'Event registered successfull', persist);

    } catch (error) {
        console.log(error);
        return sendError(res, 'Event registered unsuccessfull', error);
    }
};

const update = async (req, res) => {

    try {
        const id = req.params.id;
        const user = req.id;

        const event = await Event.findById(id);
        if (!event) {
            return sendError(res, 'Event not exist', error);
        }

        if (event.user.toString() !== user) {
            return sendError(res, 'You cannot edit events for other users', error);
        }

        const update = req.body;
        update.user = user;
        const persist = await Event.findByIdAndUpdate(id, update, { new: true });

        return sendSuccess(res, 'Event updated successfull', persist);

    } catch (error) {
        console.log(error);
        return sendError(res, 'Event updated unsuccessfull', error);
    }
};

const remove = async (req, res) => {

    try {
        const id = req.params.id;
        const user = req.id;

        const event = await Event.findById(id);
        if (!event) {
            return sendError(res, 'Event not exist', error);
        }

        if (event.user.toString() !== user) {
            return sendError(res, 'You cannot delete events for other users', error);
        }

        const update = req.body;
        update.user = user;
        const persist = await Event.findByIdAndDelete(id, update);

        return sendSuccess(res, 'Event deleted successfull', null);

    } catch (error) {
        console.log(error);
        return sendError(res, 'Event deleted unsuccessfull', error);
    }
};


module.exports = { get, find, create, update, remove };