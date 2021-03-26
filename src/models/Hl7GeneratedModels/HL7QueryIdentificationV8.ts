
// Generated typescript code of HL7v 2.8 QID  (Query Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryIdentificationV8Document = mongoose.Document & HL7QueryIdentificationV8I

const HL7QueryIdentificationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  queryTag: String,
  messageQueryName: String,
  
  }, { timestamps: true });
  
export interface HL7QueryIdentificationV8I extends Segment{
  queryTag: string
  messageQueryName: string
  
  }
  export const HL7QueryIdentificationV8 = mongoose.model<HL7QueryIdentificationV8Document> ("HL7QueryIdentificationV8", HL7QueryIdentificationV8Schema);

