import { OMGO19MessageI } from "../models/OMG019Message";
import { composeGenericMessage } from "./hl7GenericComposer";

export const composeOMG019 = (omg019: OMGO19MessageI): string => {
  const MSH = omg019.messageHeader;
  const PID = omg019.patientIdentification;
  const PV1 = omg019.patientVisit;
  const ORC = omg019.commonOrder;
  const TQ1 = omg019.timmingQuantity;
  const OBR = omg019.observationRequest;

  const segments = [MSH, PID, PV1, ORC, TQ1, OBR].filter(item => !!item);
  return composeGenericMessage(segments);
};

