import { MongoDbBarbecueRepository } from "@repositories/implementations/MongoDb/MongoDbBarbecueRepository";

import { DeleteBarbecueController } from "./DeleteBarbecueController";
import { DeleteBarbecueUseCase } from "./DeleteBarbecueUseCase";


const mongoDbBarbecueRepository = new MongoDbBarbecueRepository();

const deleteBarbecueUseCase = new DeleteBarbecueUseCase(mongoDbBarbecueRepository);
const deleteBarbecueController = new DeleteBarbecueController(deleteBarbecueUseCase);

export { deleteBarbecueUseCase, deleteBarbecueController };
