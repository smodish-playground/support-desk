const express = require('express')
const { updateTicket } = require('../controllers/ticketControllers')
const { deleteTicket } = require('../controllers/ticketControllers')
const router = express.Router()

const { getTickets, createTicket, getTicket } = require('../controllers/ticketControllers')

const { protect } = require('../middleware/authMiddleware')

const noteRouter = require('./noteRoutes')
router.use('/:ticketId/notes', noteRouter)

router.route('/').get(protect, getTickets).post(protect, createTicket)

router.route('/:id').get(protect, getTicket).delete(protect, deleteTicket).put(protect, updateTicket)

module.exports = router
