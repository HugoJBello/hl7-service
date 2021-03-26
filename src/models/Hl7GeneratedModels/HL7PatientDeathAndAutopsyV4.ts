
// Generated typescript code of HL7v 2.4 PDA  (Patient death and autopsy)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientDeathAndAutopsyV4Document = mongoose.Document & HL7PatientDeathAndAutopsyV4I

const HL7PatientDeathAndAutopsyV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  deathCauseCode: Array(String),
  deathLocation: String,
  deathCertifiedIndicator: String,
  deathCertificateSignedDateTime: Date,
  deathCertifiedBy: String,
  autopsyIndicator: String,
  autopsyStartAndEndDateTime: String,
  autopsyPerformedBy: String,
  coronerIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7PatientDeathAndAutopsyV4I extends Segment{
  deathCauseCode: string[]
  deathLocation: string
  deathCertifiedIndicator: string
  deathCertificateSignedDateTime: Date
  deathCertifiedBy: string
  autopsyIndicator: string
  autopsyStartAndEndDateTime: string
  autopsyPerformedBy: string
  coronerIndicator: string
  
  }
  export const HL7PatientDeathAndAutopsyV4 = mongoose.model<HL7PatientDeathAndAutopsyV4Document> ("HL7PatientDeathAndAutopsyV4", HL7PatientDeathAndAutopsyV4Schema);

