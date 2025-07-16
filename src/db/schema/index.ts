// Criação do barrel file, é um aquivo que exporta todos os aquivos desta pasta.

import { questions } from "./questions.ts";
import { rooms } from "./rooms.ts";

export const schema = {
    rooms,
    questions
}