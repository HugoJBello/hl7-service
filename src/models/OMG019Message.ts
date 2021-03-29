import mongoose from "mongoose";
import { HL7MessageHeaderV5I } from "./Hl7GeneratedModels/HL7MessageHeaderV5";
import { HL7PatientIdentificationV6I } from "./Hl7GeneratedModels/HL7PatientIdentificationV6";
import { HL7Message } from "./HL7Message";
import { HL7PatientVisitV5I } from "./Hl7GeneratedModels/HL7PatientVisitV5";
import { HL7CommonOrderV5I } from "./Hl7GeneratedModels/HL7CommonOrderV5";
import { HL7TimingQuantityV5I } from "./Hl7GeneratedModels/HL7TimingQuantityV5";
import { HL7ObservationRequestV5I } from "./Hl7GeneratedModels/HL7ObservationRequestV5";

export type OMGO19MessageDocument = mongoose.Document & OMGO19MessageI;


const OMGO19MessageRawBodySchema = new mongoose.Schema({
  textPayload: String,
  segmentCodes: String,
  id: String,
  hl7Version: String,

  messageHeader: Object,
  patientIdentification: Object,
  patientVisit: Object,
  commonOrder: Object,
  timmingQuantity: Object,
  observationRequest: Object,
}, { timestamps: true });

export interface OMGO19MessageI extends HL7Message {
  messageHeader: HL7MessageHeaderV5I
  patientIdentification: HL7PatientIdentificationV6I
  patientVisit: HL7PatientVisitV5I
  commonOrder: HL7CommonOrderV5I
  timmingQuantity: HL7TimingQuantityV5I
  observationRequest: HL7ObservationRequestV5I
}

export const OMG019Message = mongoose.model<OMGO19MessageDocument>("OMG019Message", OMGO19MessageRawBodySchema);
