
// Generated typescript code of HL7v 2.5 IAM  (Patient Adverse Reaction Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientAdverseReactionInformationV5Document = mongoose.Document & HL7PatientAdverseReactionInformationV5I

const HL7PatientAdverseReactionInformationV5Schema = new mongoose.Schema({
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
  
export interface HL7PatientAdverseReactionInformationV5I extends Segment{
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
  export const HL7PatientAdverseReactionInformationV5 = mongoose.model<HL7PatientAdverseReactionInformationV5Document> ("HL7PatientAdverseReactionInformationV5", HL7PatientAdverseReactionInformationV5Schema);

