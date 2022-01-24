import { createParticipantController } from "@useCases/Participant/CreateParticipant"
import { deleteParticipantController } from "@useCases/Participant/DeleteParticipant"
import { listParticipantController } from "@useCases/Participant/ListParticipant"
import { updateParticipantController } from "@useCases/Participant/UpdateParticipant"



export default [
	{
		name: '/',
		type: 'post',
		handle: (request, response) => {
			return createParticipantController.handle(request, response)
		}
	},
	{
		name: '/',
		type: 'get',
		handle: (request, response) => {
			return listParticipantController.handle(request, response)
		}
	},
	{
		name: '/:id',
		type: 'put',
		handle: (request, response) => {
			return updateParticipantController.handle(request, response)
		}
	},
	{
		name: '/:id',
		type: 'delete',
		handle: (request, response) => {
			return deleteParticipantController.handle(request, response)
		}
	},
]