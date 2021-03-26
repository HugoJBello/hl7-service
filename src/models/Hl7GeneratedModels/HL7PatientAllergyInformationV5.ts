
// Generated typescript code of HL7v 2.5 AL1  (Patient Allergy Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientAllergyInformationV5Document = mongoose.Document & HL7PatientAllergyInformationV5I

const HL7PatientAllergyInformationV5Schema = new mongoose.Schema({
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
  
export interface HL7PatientAllergyInformationV5I extends Segment{
  setIDAL1: string
  allergenTypeCode: string
  allergenCodeMnemonicDescription: string
  allergySeverityCode: string
  allergyReactionCode: string[]
  identificationDate: string
  
  }
  export const HL7PatientAllergyInformationV5 = mongoose.model<HL7PatientAllergyInformationV5Document> ("HL7PatientAllergyInformationV5", HL7PatientAllergyInformationV5Schema);

