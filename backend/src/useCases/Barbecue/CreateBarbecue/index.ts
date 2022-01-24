import { MongoDbBarbecueRepository } from "@repositories/implementations/MongoDb/MongoDbBarbecueRepository";

import { CreateBarbecueController } from "./CreateBarbecueController";
import { CreateBarbecueUseCase } from "./CreateBarbecueUseCase";


const mongoDbBarbecueRepository = new MongoDbBarbecueRepository();

const createBarbecueUseCase = new CreateBarbecueUseCase(mongoDbBarbecueRepository);
const createBarbecueController = new CreateBarbecueController(createBarbecueUseCase);

export { createBarbecueUseCase, createBarbecueController };
