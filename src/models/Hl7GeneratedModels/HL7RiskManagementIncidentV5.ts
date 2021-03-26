
// Generated typescript code of HL7v 2.5 RMI  (Risk Management Incident)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RiskManagementIncidentV5Document = mongoose.Document & HL7RiskManagementIncidentV5I

const HL7RiskManagementIncidentV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  riskManagementIncidentCode: String,
  dateTimeIncident: Date,
  incidentTypeCode: String,
  
  }, { timestamps: true });
  
export interface HL7RiskManagementIncidentV5I extends Segment{
  riskManagementIncidentCode: string
  dateTimeIncident: Date
  incidentTypeCode: string
  
  }
  export const HL7RiskManagementIncidentV5 = mongoose.model<HL7RiskManagementIncidentV5Document> ("HL7RiskManagementIncidentV5", HL7RiskManagementIncidentV5Schema);

