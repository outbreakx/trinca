import { MongoDbParticipantRepository } from "@repositories/implementations/MongoDb/MongoDbParticipantRepository";

import { CreateParticipantController } from "./CreateParticipantController";
import { CreateParticipantUseCase } from "./CreateParticipantUseCase";


const mongoDbParticipantRepository = new MongoDbParticipantRepository();

const createParticipantUseCase = new CreateParticipantUseCase(mongoDbParticipantRepository);
const createParticipantController = new CreateParticipantController(createParticipantUseCase);

export { createParticipantUseCase, createParticipantController };
