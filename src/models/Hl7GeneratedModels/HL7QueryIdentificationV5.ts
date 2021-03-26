
// Generated typescript code of HL7v 2.5 QID  (Query Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryIdentificationV5Document = mongoose.Document & HL7QueryIdentificationV5I

const HL7QueryIdentificationV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  queryTag: String,
  messageQueryName: String,
  
  }, { timestamps: true });
  
export interface HL7QueryIdentificationV5I extends Segment{
  queryTag: string
  messageQueryName: string
  
  }
  export const HL7QueryIdentificationV5 = mongoose.model<HL7QueryIdentificationV5Document> ("HL7QueryIdentificationV5", HL7QueryIdentificationV5Schema);

