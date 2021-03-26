
// Generated typescript code of HL7v 2.7 ISD  (Interaction Status Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InteractionStatusDetailV7Document = mongoose.Document & HL7InteractionStatusDetailV7I

const HL7InteractionStatusDetailV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  referenceInteractionNumber: Number,
  interactionTypeIdentifier: String,
  interactionActiveState: String,
  
  }, { timestamps: true });
  
export interface HL7InteractionStatusDetailV7I extends Segment{
  referenceInteractionNumber: number
  interactionTypeIdentifier: string
  interactionActiveState: string
  
  }
  export const HL7InteractionStatusDetailV7 = mongoose.model<HL7InteractionStatusDetailV7Document> ("HL7InteractionStatusDetailV7", HL7InteractionStatusDetailV7Schema);

