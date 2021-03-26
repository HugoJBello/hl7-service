
// Generated typescript code of HL7v 2.7 SID  (Substance Identifier)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SubstanceIdentifierV7Document = mongoose.Document & HL7SubstanceIdentifierV7I

const HL7SubstanceIdentifierV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  applicationMethodIdentifier: String,
  substanceLotNumber: String,
  substanceContainerIdentifier: String,
  substanceManufacturerIdentifier: String,
  
  }, { timestamps: true });
  
export interface HL7SubstanceIdentifierV7I extends Segment{
  applicationMethodIdentifier: string
  substanceLotNumber: string
  substanceContainerIdentifier: string
  substanceManufacturerIdentifier: string
  
  }
  export const HL7SubstanceIdentifierV7 = mongoose.model<HL7SubstanceIdentifierV7Document> ("HL7SubstanceIdentifierV7", HL7SubstanceIdentifierV7Schema);

