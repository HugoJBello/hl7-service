
// Generated typescript code of HL7v 2.4 AL1  (Patient allergy information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientAllergyInformationV4Document = mongoose.Document & HL7PatientAllergyInformationV4I

const HL7PatientAllergyInformationV4Schema = new mongoose.Schema({
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
  
export interface HL7PatientAllergyInformationV4I extends Segment{
  setIDAL1: string
  allergenTypeCode: string
  allergenCodeMnemonicDescription: string
  allergySeverityCode: string
  allergyReactionCode: string[]
  identificationDate: string
  
  }
  export const HL7PatientAllergyInformationV4 = mongoose.model<HL7PatientAllergyInformationV4Document> ("HL7PatientAllergyInformationV4", HL7PatientAllergyInformationV4Schema);

