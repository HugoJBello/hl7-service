
// Generated typescript code of HL7v 2.4 IAM  (Patient adverse reaction information - unique iden)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientAdverseReactionInformationUniqueIdenV4Document = mongoose.Document & HL7PatientAdverseReactionInformationUniqueIdenV4I

const HL7PatientAdverseReactionInformationUniqueIdenV4Schema = new mongoose.Schema({
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
  reportedDateTime: Date,
  reportedBy: String,
  relationshipToPatientCode: String,
  alertDeviceCode: String,
  allergyClinicalStatusCode: String,
  statusedByPerson: String,
  statusedByOrganization: String,
  statusedAtDateTime: Date,
  
  }, { timestamps: true });
  
export interface HL7PatientAdverseReactionInformationUniqueIdenV4I extends Segment{
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
  reportedDateTime: Date
  reportedBy: string
  relationshipToPatientCode: string
  alertDeviceCode: string
  allergyClinicalStatusCode: string
  statusedByPerson: string
  statusedByOrganization: string
  statusedAtDateTime: Date
  
  }
  export const HL7PatientAdverseReactionInformationUniqueIdenV4 = mongoose.model<HL7PatientAdverseReactionInformationUniqueIdenV4Document> ("HL7PatientAdverseReactionInformationUniqueIdenV4", HL7PatientAdverseReactionInformationUniqueIdenV4Schema);

