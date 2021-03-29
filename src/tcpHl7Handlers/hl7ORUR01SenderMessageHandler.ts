import { SchemaCompleteIndex } from "../models/Schema";

import Segment from "../models/Hl7GeneratedModels/Segment";
import { Hl7Segment, Hl7Version } from "../models/Segment";
import { encodeSegmentUsingSchema } from "../managers/hl7Composer";
import { ADTA31MessageI } from "../models/ADTA31Message";
import { OMGO19MessageI } from "../models/OMG019Message";
import { composeGenericMessageHandler } from "./hl7GenericSenderMessageHandler";
import { ORUR01MessageI } from "../models/ORUR01Message";

export type SegmentExtended = any & Segment;

export const composeORUR01MessageHandler = (orur01MessageI: ORUR01MessageI): string => {
  const MSH = orur01MessageI.messageHeader;
  const PID = orur01MessageI.patientIdentification;
  const PV1 = orur01MessageI.patientVisit;
  const ORC = orur01MessageI.commonOrder;
  const OBR = orur01MessageI.observationRequest;
  const OBX = orur01MessageI.observationResult;


  const segments = [MSH, PID, PV1, ORC, OBR, OBX].filter(item => !!item);;
  return composeGenericMessageHandler(segments);
};

