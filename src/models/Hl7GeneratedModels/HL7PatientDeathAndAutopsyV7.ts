
// Generated typescript code of HL7v 2.7 PDA  (Patient Death And Autopsy)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientDeathAndAutopsyV7Document = mongoose.Document & HL7PatientDeathAndAutopsyV7I

const HL7PatientDeathAndAutopsyV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  deathCauseCode: Array(String),
  deathLocation: String,
  deathCertifiedIndicator: String,
  deathCertificateSignedDateTime: String,
  deathCertifiedBy: String,
  autopsyIndicator: String,
  autopsyStartAndEndDateTime: String,
  autopsyPerformedBy: String,
  coronerIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7PatientDeathAndAutopsyV7I extends Segment{
  deathCauseCode: string[]
  deathLocation: string
  deathCertifiedIndicator: string
  deathCertificateSignedDateTime: string
  deathCertifiedBy: string
  autopsyIndicator: string
  autopsyStartAndEndDateTime: string
  autopsyPerformedBy: string
  coronerIndicator: string
  
  }
  export const HL7PatientDeathAndAutopsyV7 = mongoose.model<HL7PatientDeathAndAutopsyV7Document> ("HL7PatientDeathAndAutopsyV7", HL7PatientDeathAndAutopsyV7Schema);

