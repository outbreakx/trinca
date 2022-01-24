import { MongoDbParticipantRepository } from "@repositories/implementations/MongoDb/MongoDbParticipantRepository";

import { UpdateParticipantController } from "./UpdateParticipantController";
import { UpdateParticipantUseCase } from "./UpdateParticipantUseCase";


const mongoDbParticipantRepository = new MongoDbParticipantRepository();

const updateParticipantUseCase = new UpdateParticipantUseCase(mongoDbParticipantRepository);
const updateParticipantController = new UpdateParticipantController(updateParticipantUseCase);

export { updateParticipantUseCase, updateParticipantController };