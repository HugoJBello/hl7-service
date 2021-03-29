import { SchemaCompleteIndex } from "../models/Schema";

import Segment from "../models/Hl7GeneratedModels/Segment";
import { Hl7Segment, Hl7Version } from "../models/Segment";
import { encodeSegmentUsingSchema } from "../managers/hl7Composer";
import { OMGO19MessageI } from "../models/OMG019Message";
import { composeGenericMessageHandler } from "./hl7GenericSenderMessageHandler";
import { ADTA31MessageI } from "../models/ADTA31Message";
import { ADTA40MessageI } from "../models/ADTA40Message";

export const composeADTA40MessageHandler = (omg019: ADTA40MessageI): string => {
  const MSH = omg019.messageHeader;
  const EVN = omg019.eventType;
  const PID = omg019.patientIdentification;
  const MRG = omg019.mergePatientInformation;
  const segments = [MSH, EVN, PID, MRG].filter(item => !!item);
  return composeGenericMessageHandler(segments);
};
