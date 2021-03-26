
// Generated typescript code of HL7v 2.4 QID  (Query Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryIdentificationV4Document = mongoose.Document & HL7QueryIdentificationV4I

const HL7QueryIdentificationV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  queryTag: String,
  messageQueryName: String,
  
  }, { timestamps: true });
  
export interface HL7QueryIdentificationV4I extends Segment{
  queryTag: string
  messageQueryName: string
  
  }
  export const HL7QueryIdentificationV4 = mongoose.model<HL7QueryIdentificationV4Document> ("HL7QueryIdentificationV4", HL7QueryIdentificationV4Schema);

