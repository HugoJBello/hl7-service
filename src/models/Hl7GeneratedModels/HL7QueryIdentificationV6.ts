
// Generated typescript code of HL7v 2.6 QID  (Query Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryIdentificationV6Document = mongoose.Document & HL7QueryIdentificationV6I

const HL7QueryIdentificationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  queryTag: String,
  messageQueryName: String,
  
  }, { timestamps: true });
  
export interface HL7QueryIdentificationV6I extends Segment{
  queryTag: string
  messageQueryName: string
  
  }
  export const HL7QueryIdentificationV6 = mongoose.model<HL7QueryIdentificationV6Document> ("HL7QueryIdentificationV6", HL7QueryIdentificationV6Schema);

