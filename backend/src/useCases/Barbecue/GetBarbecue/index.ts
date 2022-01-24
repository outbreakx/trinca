import { MongoDbBarbecueRepository } from "@repositories/implementations/MongoDb/MongoDbBarbecueRepository";

import { GetBarbecueController } from "./GetBarbecueController";
import { GetBarbecueUseCase } from "./GetBarbecueUseCase";


const mongoDbBarbecueRepository = new MongoDbBarbecueRepository();

const getBarbecueUseCase = new GetBarbecueUseCase(mongoDbBarbecueRepository);
const getBarbecueController = new GetBarbecueController(getBarbecueUseCase);

export { getBarbecueUseCase, getBarbecueController };
