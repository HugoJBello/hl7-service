import mongoose from "mongoose";
import { HL7MessageHeaderV5I } from "./Hl7GeneratedModels/HL7MessageHeaderV5";
import { HL7EventTypeV5I } from "./Hl7GeneratedModels/HL7EventTypeV5";
import { HL7PatientIdentificationV6I } from "./Hl7GeneratedModels/HL7PatientIdentificationV6";
import { HL7PatientAdditionalDemographicV5I } from "./Hl7GeneratedModels/HL7PatientAdditionalDemographicV5";
import { HL7RoleV5I } from "./Hl7GeneratedModels/HL7RoleV5";
import { HL7PatientVisitAdditionalInformationV5I } from "./Hl7GeneratedModels/HL7PatientVisitAdditionalInformationV5";
import { HL7GuarantorV5I } from "./Hl7GeneratedModels/HL7GuarantorV5";
import { HL7Message } from "./HL7Message";

export type ADTA31MessageDocument = mongoose.Document & ADTA31MessageI;


const ADTA31MessageRawBodySchema = new mongoose.Schema({
  textPayload: String,
  segmentCodes: String,
  id: String,
  hl7Version: String,

  messageHeader: Object,
  eventType: Object,
  patientIdentification: Object,
  patientAdditionalDemographic: Object,
  role: Object,
  patientVisit: Object,
  guarator: Object,
}, { timestamps: true });

export interface ADTA31MessageI extends HL7Message {
  messageHeader: HL7MessageHeaderV5I
  eventType: HL7EventTypeV5I
  patientIdentification: HL7PatientIdentificationV6I
  patientAdditionalDemographic: HL7PatientAdditionalDemographicV5I
  role: HL7RoleV5I
  patientVisit: HL7PatientVisitAdditionalInformationV5I
  guarator: HL7GuarantorV5I
}

export const ADTA31Message = mongoose.model<ADTA31MessageDocument>("ADTA31Message", ADTA31MessageRawBodySchema);