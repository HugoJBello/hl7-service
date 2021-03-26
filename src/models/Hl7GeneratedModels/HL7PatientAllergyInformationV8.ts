
// Generated typescript code of HL7v 2.8 AL1  (Patient Allergy Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientAllergyInformationV8Document = mongoose.Document & HL7PatientAllergyInformationV8I

const HL7PatientAllergyInformationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdAl1: String,
  allergenTypeCode: String,
  allergenCodeMnemonicDescription: String,
  allergySeverityCode: String,
  allergyReactionCode: Array(String),
  identificationDate: String,
  
  }, { timestamps: true });
  
export interface HL7PatientAllergyInformationV8I extends Segment{
  setIdAl1: string
  allergenTypeCode: string
  allergenCodeMnemonicDescription: string
  allergySeverityCode: string
  allergyReactionCode: string[]
  identificationDate: string
  
  }
  export const HL7PatientAllergyInformationV8 = mongoose.model<HL7PatientAllergyInformationV8Document> ("HL7PatientAllergyInformationV8", HL7PatientAllergyInformationV8Schema);

