
// Generated typescript code of HL7v 2.8 PDA  (Patient Death And Autopsy)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientDeathAndAutopsyV8Document = mongoose.Document & HL7PatientDeathAndAutopsyV8I

const HL7PatientDeathAndAutopsyV8Schema = new mongoose.Schema({
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
  
export interface HL7PatientDeathAndAutopsyV8I extends Segment{
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
  export const HL7PatientDeathAndAutopsyV8 = mongoose.model<HL7PatientDeathAndAutopsyV8Document> ("HL7PatientDeathAndAutopsyV8", HL7PatientDeathAndAutopsyV8Schema);

