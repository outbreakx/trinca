import { MongoDbParticipantRepository } from "@repositories/implementations/MongoDb/MongoDbParticipantRepository";

import { ListParticipantController } from "./ListParticipantController";
import { ListParticipantUseCase } from "./ListParticipantUseCase";


const mongoDbParticipantRepository = new MongoDbParticipantRepository();

const listParticipantUseCase = new ListParticipantUseCase(mongoDbParticipantRepository);
const listParticipantController = new ListParticipantController(listParticipantUseCase);

export { listParticipantUseCase, listParticipantController };
