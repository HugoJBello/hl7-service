import { SegmentExtended } from "../models/Hl7GeneratedModels/Segment";
import { ADTA31MessageI } from "../models/ADTA31Message";
import { Hl7Version } from "../models/Segment";
import { Hl7MessageType } from "../models/HL7Message";
import { ADTA40MessageI } from "../models/ADTA40Message";
import { OMGO19MessageI } from "../models/OMG019Message";
import { ORUR01MessageI } from "../models/ORUR01Message";
import { GenericMessageI } from "../models/GenericMessage";

export const composeAdtA31 = (decodedMessage: SegmentExtended[]): ADTA31MessageI => {
  const MSH = decodedMessage.find(item => item.hl7Segment === "MSH");
  const EVN = decodedMessage.find(item => item.hl7Segment === "EVN");
  const PID = decodedMessage.find(item => item.hl7Segment === "PID");
  const PD1 = decodedMessage.find(item => item.hl7Segment === "PD1");
  const ROL = decodedMessage.find(item => item.hl7Segment === "ROL");
  const PV1 = decodedMessage.find(item => item.hl7Segment === "PV1");
  const GT1 = decodedMessage.find(item => item.hl7Segment === "GT1");

  const message = {} as ADTA31MessageI;
  message.messageHeader = MSH;
  message.eventType = EVN;
  message.patientIdentification = PID;
  message.patientAdditionalDemographic = PD1;
  message.role = ROL;
  message.patientVisit = PV1;
  message.guarator = GT1;

  message.hl7Version = Hl7Version.v5;
  message.hl7MessageType = Hl7MessageType.ADT_A31;

  return message;
};


export const composeAdtA40 = (decodedMessage: SegmentExtended[]): ADTA40MessageI => {
  const MSH = decodedMessage.find(item => item.hl7Segment === "MSH");
  const EVN = decodedMessage.find(item => item.hl7Segment === "EVN");
  const PID = decodedMessage.find(item => item.hl7Segment === "PID");
  const MRG = decodedMessage.find(item => item.hl7Segment === "MRG");

  const message = {} as ADTA40MessageI;
  message.messageHeader = MSH;
  message.eventType = EVN;
  message.patientIdentification = PID;
  message.mergePatientInformation = MRG;

  message.hl7Version = Hl7Version.v5;
  message.hl7MessageType = Hl7MessageType.ADT_A40;

  return message;
};

export const composeOmgO19 = (decodedMessage: SegmentExtended[]): OMGO19MessageI => {
  const MSH = decodedMessage.find(item => item.hl7Segment === "MSH");
  const PID = decodedMessage.find(item => item.hl7Segment === "PID");
  const PV1 = decodedMessage.find(item => item.hl7Segment === "PV1");
  const ORC = decodedMessage.find(item => item.hl7Segment === "ORC");
  const TQ1 = decodedMessage.find(item => item.hl7Segment === "TQ1");
  const OBR = decodedMessage.find(item => item.hl7Segment === "OBR");

  const message = {} as OMGO19MessageI;
  message.messageHeader = MSH;
  message.patientIdentification = PID;
  message.patientVisit = PV1;
  message.commonOrder = ORC;
  message.timmingQuantity = TQ1;
  message.observationRequest = OBR;

  message.hl7Version = Hl7Version.v5;
  message.hl7MessageType = Hl7MessageType.OMG_019;

  return message;
};

export const composeORUR01 = (decodedMessage: SegmentExtended[]): ORUR01MessageI => {
  const MSH = decodedMessage.find(item => item.hl7Segment === "MSH");
  const PID = decodedMessage.find(item => item.hl7Segment === "PID");
  const PV1 = decodedMessage.find(item => item.hl7Segment === "PV1");
  const ORC = decodedMessage.find(item => item.hl7Segment === "ORC");
  const OBR = decodedMessage.find(item => item.hl7Segment === "OBR");
  const OBX = decodedMessage.find(item => item.hl7Segment === "OBX");

  const message = {} as ORUR01MessageI;
  message.messageHeader = MSH;
  message.patientIdentification = PID;
  message.patientVisit = PV1;
  message.commonOrder = ORC;
  message.observationRequest = OBR;
  message.observationResult = OBX;

  message.hl7Version = Hl7Version.v5;
  message.hl7MessageType = Hl7MessageType.ORU_R01;

  return message;
};

export const composeGenericUnknownMessage = (decodedMessage: SegmentExtended[]): GenericMessageI => {
  const MSH = decodedMessage.find(item => item.hl7Segment === "MSH");
  const message = {} as GenericMessageI;
  message.messageHeader = MSH;
  message.segments = decodedMessage;
  return message;
};
