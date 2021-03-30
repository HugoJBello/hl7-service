import { composeGenericMessage } from "./hl7GenericComposer";
import { ORUR01MessageI } from "../models/ORUR01Message";


export const composeORUR01 = (orur01MessageI: ORUR01MessageI): string => {
  const MSH = orur01MessageI.messageHeader;
  const PID = orur01MessageI.patientIdentification;
  const PV1 = orur01MessageI.patientVisit;
  const ORC = orur01MessageI.commonOrder;
  const OBR = orur01MessageI.observationRequest;
  const OBX = orur01MessageI.observationResult;


  const segments = [MSH, PID, PV1, ORC, OBR, OBX].filter(item => !!item);;
  return composeGenericMessage(segments);
};

