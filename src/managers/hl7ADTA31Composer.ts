import { SchemaCompleteIndex } from "../models/Schema";

import Segment from "../models/Hl7GeneratedModels/Segment";
import { Hl7Segment, Hl7Version } from "../models/Segment";
import { encodeSegmentUsingSchema } from "./hl7Encoder";
import { OMGO19MessageI } from "../models/OMG019Message";
import { composeGenericMessage } from "./hl7GenericComposer";
import { ADTA31MessageI } from "../models/ADTA31Message";

export const composeADTA31 = (omg019: ADTA31MessageI): string => {
  const MSH = omg019.messageHeader;
  const EVN = omg019.eventType;
  const PID = omg019.patientIdentification;
  const PD1 = omg019.patientAdditionalDemographic;
  const ROL = omg019.role;
  const PV1 = omg019.patientVisit;
  const GT1 = omg019.guarator;

  const segments = [MSH, EVN, PID, PD1, ROL, PV1, GT1].filter(item => !!item);
  return composeGenericMessage(segments);
};
