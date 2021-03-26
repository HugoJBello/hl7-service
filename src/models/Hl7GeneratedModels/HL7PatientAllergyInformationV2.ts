
// Generated typescript code of HL7v 2.2 AL1  (Patient Allergy Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientAllergyInformationV2Document = mongoose.Document & HL7PatientAllergyInformationV2I

const HL7PatientAllergyInformationV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdAllergy: String,
  allergyType: String,
  allergyCodeMnemonicDescription: String,
  allergySeverity: String,
  allergyReaction: String,
  identificationDate: String,
  
  }, { timestamps: true });
  
export interface HL7PatientAllergyInformationV2I extends Segment{
  setIdAllergy: string
  allergyType: string
  allergyCodeMnemonicDescription: string
  allergySeverity: string
  allergyReaction: string
  identificationDate: string
  
  }
  export const HL7PatientAllergyInformationV2 = mongoose.model<HL7PatientAllergyInformationV2Document> ("HL7PatientAllergyInformationV2", HL7PatientAllergyInformationV2Schema);

