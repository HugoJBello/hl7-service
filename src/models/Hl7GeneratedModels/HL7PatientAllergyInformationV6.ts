
// Generated typescript code of HL7v 2.6 AL1  (Patient Allergy Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientAllergyInformationV6Document = mongoose.Document & HL7PatientAllergyInformationV6I

const HL7PatientAllergyInformationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDAL1: String,
  allergenTypeCode: String,
  allergenCodeMnemonicDescription: String,
  allergySeverityCode: String,
  allergyReactionCode: Array(String),
  identificationDate: String,
  
  }, { timestamps: true });
  
export interface HL7PatientAllergyInformationV6I extends Segment{
  setIDAL1: string
  allergenTypeCode: string
  allergenCodeMnemonicDescription: string
  allergySeverityCode: string
  allergyReactionCode: string[]
  identificationDate: string
  
  }
  export const HL7PatientAllergyInformationV6 = mongoose.model<HL7PatientAllergyInformationV6Document> ("HL7PatientAllergyInformationV6", HL7PatientAllergyInformationV6Schema);

