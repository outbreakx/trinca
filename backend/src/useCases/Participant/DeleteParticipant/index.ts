import { MongoDbParticipantRepository } from "@repositories/implementations/MongoDb/MongoDbParticipantRepository";

import { DeleteParticipantController } from "./DeleteParticipantController";
import { DeleteParticipantUseCase } from "./DeleteParticipantUseCase";


const mongoDbParticipantRepository = new MongoDbParticipantRepository();

const deleteParticipantUseCase = new DeleteParticipantUseCase(mongoDbParticipantRepository);
const deleteParticipantController = new DeleteParticipantController(deleteParticipantUseCase);

export { deleteParticipantUseCase, deleteParticipantController };
