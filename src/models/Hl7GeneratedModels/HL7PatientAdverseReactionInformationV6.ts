
// Generated typescript code of HL7v 2.6 IAM  (Patient Adverse Reaction Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientAdverseReactionInformationV6Document = mongoose.Document & HL7PatientAdverseReactionInformationV6I

const HL7PatientAdverseReactionInformationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDIAM: String,
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
  
  }, { timestamps: true });
  
export interface HL7PatientAdverseReactionInformationV6I extends Segment{
  setIDIAM: string
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
  
  }
  export const HL7PatientAdverseReactionInformationV6 = mongoose.model<HL7PatientAdverseReactionInformationV6Document> ("HL7PatientAdverseReactionInformationV6", HL7PatientAdverseReactionInformationV6Schema);

