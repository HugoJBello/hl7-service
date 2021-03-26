
// Generated typescript code of HL7v 2.8 IAM  (Patient Adverse Reaction Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientAdverseReactionInformationV8Document = mongoose.Document & HL7PatientAdverseReactionInformationV8I

const HL7PatientAdverseReactionInformationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdIam: String,
  allergenTypeCode: String,
  allergenCodeMnemonicDescription: String,
  allergySeverityCode: String,
  allergyReactionCode: Array(String),
  allergyActionCode: String,
  allergyUniqueIdentifier: String,
  actionReason: String,
  sensitivityToCausativeAgentCode: String,
  allergenGroupCodeMnemonicDescription: String,
  onsetDate: String,
  onsetDateText: String,
  reportedDateTime: String,
  reportedBy: String,
  relationshipToPatientCode: String,
  alertDeviceCode: String,
  allergyClinicalStatusCode: String,
  statusedByPerson: String,
  statusedByOrganization: String,
  statusedAtDateTime: String,
  inactivatedByPerson: String,
  inactivatedDateTime: String,
  initiallyRecordedByPerson: String,
  initiallyRecordedDateTime: String,
  modifiedByPerson: String,
  modifiedDateTime: String,
  clinicianIdentifiedCode: String,
  initiallyRecordedByOrganization: String,
  modifiedByOrganization: String,
  inactivatedByOrganization: String,
  
  }, { timestamps: true });
  
export interface HL7PatientAdverseReactionInformationV8I extends Segment{
  setIdIam: string
  allergenTypeCode: string
  allergenCodeMnemonicDescription: string
  allergySeverityCode: string
  allergyReactionCode: string[]
  allergyActionCode: string
  allergyUniqueIdentifier: string
  actionReason: string
  sensitivityToCausativeAgentCode: string
  allergenGroupCodeMnemonicDescription: string
  onsetDate: string
  onsetDateText: string
  reportedDateTime: string
  reportedBy: string
  relationshipToPatientCode: string
  alertDeviceCode: string
  allergyClinicalStatusCode: string
  statusedByPerson: string
  statusedByOrganization: string
  statusedAtDateTime: string
  inactivatedByPerson: string
  inactivatedDateTime: string
  initiallyRecordedByPerson: string
  initiallyRecordedDateTime: string
  modifiedByPerson: string
  modifiedDateTime: string
  clinicianIdentifiedCode: string
  initiallyRecordedByOrganization: string
  modifiedByOrganization: string
  inactivatedByOrganization: string
  
  }
  export const HL7PatientAdverseReactionInformationV8 = mongoose.model<HL7PatientAdverseReactionInformationV8Document> ("HL7PatientAdverseReactionInformationV8", HL7PatientAdverseReactionInformationV8Schema);

