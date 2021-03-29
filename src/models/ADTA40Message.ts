import mongoose from "mongoose";
import { HL7MessageHeaderV5I } from "./Hl7GeneratedModels/HL7MessageHeaderV5";
import { HL7EventTypeV5I } from "./Hl7GeneratedModels/HL7EventTypeV5";
import { HL7PatientIdentificationV6I } from "./Hl7GeneratedModels/HL7PatientIdentificationV6";
import { HL7Message } from "./HL7Message";
import { HL7MergePatientInformationV5I } from "./Hl7GeneratedModels/HL7MergePatientInformationV5";

export type ADTA40MessageDocument = mongoose.Document & ADTA40MessageI;


const ADTA40MessageRawBodySchema = new mongoose.Schema({
  textPayload: String,
  segmentCodes: String,
  id: String,
  hl7Version: String,

  messageHeader: Object,
  eventType: Object,
  patientIdentification: Object,
  mergePatientInformation: Object,
}, { timestamps: true });

export interface ADTA40MessageI extends HL7Message {
  messageHeader: HL7MessageHeaderV5I
  eventType: HL7EventTypeV5I
  patientIdentification: HL7PatientIdentificationV6I
  mergePatientInformation: HL7MergePatientInformationV5I
}

export const ADTA40Message = mongoose.model<ADTA40MessageDocument>("ADTA40Message", ADTA40MessageRawBodySchema);
