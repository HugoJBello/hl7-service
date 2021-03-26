
// Generated typescript code of HL7v 2.2 PV2  (Patient Visit - Additional Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientVisitAdditionalInformationV2Document = mongoose.Document & HL7PatientVisitAdditionalInformationV2I

const HL7PatientVisitAdditionalInformationV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  priorPendingLocation: String,
  accommodationCode: String,
  admitReason: String,
  transferReason: String,
  patientValuables: Array(String),
  patientValuablesLocation: String,
  visitUserCode: String,
  expectedAdmitDate: String,
  expectedDischargeDate: String,
  
  }, { timestamps: true });
  
export interface HL7PatientVisitAdditionalInformationV2I extends Segment{
  priorPendingLocation: string
  accommodationCode: string
  admitReason: string
  transferReason: string
  patientValuables: string[]
  patientValuablesLocation: string
  visitUserCode: string
  expectedAdmitDate: string
  expectedDischargeDate: string
  
  }
  export const HL7PatientVisitAdditionalInformationV2 = mongoose.model<HL7PatientVisitAdditionalInformationV2Document> ("HL7PatientVisitAdditionalInformationV2", HL7PatientVisitAdditionalInformationV2Schema);

