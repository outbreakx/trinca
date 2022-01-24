import { createBarbecueController } from "@useCases/Barbecue/CreateBarbecue"
import { deleteBarbecueController } from "@useCases/Barbecue/DeleteBarbecue"
import { getBarbecueController } from "@useCases/Barbecue/GetBarbecue"
import { listBarbecueController } from "@useCases/Barbecue/ListBarbecue"



export default [
	{
		name: '/',
		type: 'post',
		handle: (request, response) => {
			return createBarbecueController.handle(request, response)
		}
	},
	{
		name: '/:id',
		type: 'get',
		handle: (request, response) => {
			return getBarbecueController.handle(request, response)
		}
	},
	{
		name: '/',
		type: 'get',
		handle: (request, response) => {
			return listBarbecueController.handle(request, response)
		}
	},
	{
		name: '/:id',
		type: 'delete',
		handle: (request, response) => {
			return deleteBarbecueController.handle(request, response)
		}
	},
]