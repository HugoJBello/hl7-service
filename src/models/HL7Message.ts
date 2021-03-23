import mongoose from "mongoose";

export type HL7MessageDocument = mongoose.Document & HL7MessageRawBody

const HL7MessageRawBodySchema = new mongoose.Schema({
  payload: String,
  id: String
}, { timestamps: true });

export interface HL7MessageRawBody {
  payload: string
}

export const HL7Message = mongoose.model<HL7MessageDocument>("HL7Message", HL7MessageRawBodySchema);