
// Generated typescript code of HL7v 2.5 PDA  (Patient Death and Autopsy)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientDeathAndAutopsyV5Document = mongoose.Document & HL7PatientDeathAndAutopsyV5I

const HL7PatientDeathAndAutopsyV5Schema = new mongoose.Schema({
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
  
export interface HL7PatientDeathAndAutopsyV5I extends Segment{
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
  export const HL7PatientDeathAndAutopsyV5 = mongoose.model<HL7PatientDeathAndAutopsyV5Document> ("HL7PatientDeathAndAutopsyV5", HL7PatientDeathAndAutopsyV5Schema);

