
// Generated typescript code of HL7v 2.5 ISD  (Interaction Status Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7InteractionStatusDetailV5Document = mongoose.Document & HL7InteractionStatusDetailV5I

const HL7InteractionStatusDetailV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  referenceInteractionNumberUniqueIdentifier: Number,
  interactionTypeIdentifier: String,
  interactionActiveState: String,
  
  }, { timestamps: true });
  
export interface HL7InteractionStatusDetailV5I extends Segment{
  referenceInteractionNumberUniqueIdentifier: number
  interactionTypeIdentifier: string
  interactionActiveState: string
  
  }
  export const HL7InteractionStatusDetailV5 = mongoose.model<HL7InteractionStatusDetailV5Document> ("HL7InteractionStatusDetailV5", HL7InteractionStatusDetailV5Schema);

