import mongoose from "mongoose";
import { HL7MessageHeaderV5I } from "./Hl7GeneratedModels/HL7MessageHeaderV5";
import { HL7PatientIdentificationV6I } from "./Hl7GeneratedModels/HL7PatientIdentificationV6";
import { HL7Message } from "./HL7Message";
import { HL7PatientVisitV5I } from "./Hl7GeneratedModels/HL7PatientVisitV5";
import { HL7CommonOrderV5I } from "./Hl7GeneratedModels/HL7CommonOrderV5";
import { HL7ObservationRequestV5I } from "./Hl7GeneratedModels/HL7ObservationRequestV5";
import { HL7ObservationResultV5I } from "./Hl7GeneratedModels/HL7ObservationResultV5";

export type ORUR01MessageDocument = mongoose.Document & ORUR01MessageI;


const ORUR01MessageSchema = new mongoose.Schema({
  textPayload: String,
  segmentCodes: String,
  id: String,
  hl7Version: String,

  messageHeader: Object,
  patientIdentification: Object,
  patientVisit: Object,
  commonOrder: Object,
  observationRequest: Object,
  observationResult: Object,
}, { timestamps: true });

export interface ORUR01MessageI extends HL7Message {
  messageHeader: HL7MessageHeaderV5I
  patientIdentification: HL7PatientIdentificationV6I
  patientVisit: HL7PatientVisitV5I
  commonOrder: HL7CommonOrderV5I
  observationRequest: HL7ObservationRequestV5I
  observationResult: HL7ObservationResultV5I
}

export const ORUR01Message = mongoose.model<ORUR01MessageDocument>("ORUR01Message", ORUR01MessageSchema);
