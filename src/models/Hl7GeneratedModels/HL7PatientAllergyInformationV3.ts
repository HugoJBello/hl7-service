
// Generated typescript code of HL7v 2.3 AL1  (Patient Allergy Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientAllergyInformationV3Document = mongoose.Document & HL7PatientAllergyInformationV3I

const HL7PatientAllergyInformationV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDAL1: String,
  allergyType: String,
  allergyCodeMnemonicDescription: String,
  allergySeverity: String,
  allergyReaction: String,
  identificationDate: String,
  
  }, { timestamps: true });
  
export interface HL7PatientAllergyInformationV3I extends Segment{
  setIDAL1: string
  allergyType: string
  allergyCodeMnemonicDescription: string
  allergySeverity: string
  allergyReaction: string
  identificationDate: string
  
  }
  export const HL7PatientAllergyInformationV3 = mongoose.model<HL7PatientAllergyInformationV3Document> ("HL7PatientAllergyInformationV3", HL7PatientAllergyInformationV3Schema);

