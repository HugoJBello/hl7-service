import { SchemaCompleteIndex } from "../models/Schema";

import Segment from "../models/Hl7GeneratedModels/Segment";
import { Hl7Segment, Hl7Version } from "../models/Segment";
import { encodeSegmentUsingSchema } from "../managers/hl7Composer";
import { ADTA31MessageI } from "../models/ADTA31Message";
import { OMGO19MessageI } from "../models/OMG019Message";
import { composeGenericMessageHandler } from "./hl7GenericSenderMessageHandler";

export type SegmentExtended = any & Segment;

export const composeOMG019MessageHandler = (omg019: OMGO19MessageI): string => {
  const MSH = omg019.messageHeader;
  const PID = omg019.patientIdentification;
  const PV1 = omg019.patientVisit;
  const ORC = omg019.commonOrder;
  const TQ1 = omg019.timmingQuantity;
  const OBR = omg019.observationRequest;

  const segments = [MSH, PID, PV1, ORC, TQ1, OBR].filter(item => !!item);
  return composeGenericMessageHandler(segments);
};

