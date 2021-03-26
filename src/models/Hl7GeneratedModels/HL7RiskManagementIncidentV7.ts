
// Generated typescript code of HL7v 2.7 RMI  (Risk Management Incident)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RiskManagementIncidentV7Document = mongoose.Document & HL7RiskManagementIncidentV7I

const HL7RiskManagementIncidentV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  riskManagementIncidentCode: String,
  dateTimeIncident: String,
  incidentTypeCode: String,
  
  }, { timestamps: true });
  
export interface HL7RiskManagementIncidentV7I extends Segment{
  riskManagementIncidentCode: string
  dateTimeIncident: string
  incidentTypeCode: string
  
  }
  export const HL7RiskManagementIncidentV7 = mongoose.model<HL7RiskManagementIncidentV7Document> ("HL7RiskManagementIncidentV7", HL7RiskManagementIncidentV7Schema);

