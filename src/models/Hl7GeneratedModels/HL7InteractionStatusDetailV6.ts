
// Generated typescript code of HL7v 2.6 ISD  (Interaction Status Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InteractionStatusDetailV6Document = mongoose.Document & HL7InteractionStatusDetailV6I

const HL7InteractionStatusDetailV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  referenceInteractionNumber: Number,
  interactionTypeIdentifier: String,
  interactionActiveState: String,
  
  }, { timestamps: true });
  
export interface HL7InteractionStatusDetailV6I extends Segment{
  referenceInteractionNumber: number
  interactionTypeIdentifier: string
  interactionActiveState: string
  
  }
  export const HL7InteractionStatusDetailV6 = mongoose.model<HL7InteractionStatusDetailV6Document> ("HL7InteractionStatusDetailV6", HL7InteractionStatusDetailV6Schema);

