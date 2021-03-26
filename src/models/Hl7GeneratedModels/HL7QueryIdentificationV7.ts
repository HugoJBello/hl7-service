
// Generated typescript code of HL7v 2.7 QID  (Query Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryIdentificationV7Document = mongoose.Document & HL7QueryIdentificationV7I

const HL7QueryIdentificationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  queryTag: String,
  messageQueryName: String,
  
  }, { timestamps: true });
  
export interface HL7QueryIdentificationV7I extends Segment{
  queryTag: string
  messageQueryName: string
  
  }
  export const HL7QueryIdentificationV7 = mongoose.model<HL7QueryIdentificationV7Document> ("HL7QueryIdentificationV7", HL7QueryIdentificationV7Schema);

