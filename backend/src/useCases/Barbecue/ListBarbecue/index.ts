import { MongoDbBarbecueRepository } from "@repositories/implementations/MongoDb/MongoDbBarbecueRepository";

import { ListBarbecueController } from "./ListBarbecueController";
import { ListBarbecueUseCase } from "./ListBarbecueUseCase";


const mongoDbBarbecueRepository = new MongoDbBarbecueRepository();

const listBarbecueUseCase = new ListBarbecueUseCase(mongoDbBarbecueRepository);
const listBarbecueController = new ListBarbecueController(listBarbecueUseCase);

export { listBarbecueUseCase, listBarbecueController };
