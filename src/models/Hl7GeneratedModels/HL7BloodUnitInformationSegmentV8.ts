
// Generated typescript code of HL7v 2.8 BUI  (Blood Unit information Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodUnitInformationSegmentV8Document = mongoose.Document & HL7BloodUnitInformationSegmentV8I

const HL7BloodUnitInformationSegmentV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDBUI: String,
  bloodUnitIdentifier: String,
  bloodUnitType: String,
  bloodUnitWeight: Number,
  weightUnits: String,
  bloodUnitVolume: Number,
  volumeUnits: String,
  containerCatalogNumber: String,
  containerLotNumber: String,
  containerManufacturer: String,
  transportTemperature: String,
  transportTemperatureUnits: Array(String),
  
  }, { timestamps: true });
  
export interface HL7BloodUnitInformationSegmentV8I extends Segment{
  setIDBUI: string
  bloodUnitIdentifier: string
  bloodUnitType: string
  bloodUnitWeight: number
  weightUnits: string
  bloodUnitVolume: number
  volumeUnits: string
  containerCatalogNumber: string
  containerLotNumber: string
  containerManufacturer: string
  transportTemperature: string
  transportTemperatureUnits: string[]
  
  }
  export const HL7BloodUnitInformationSegmentV8 = mongoose.model<HL7BloodUnitInformationSegmentV8Document> ("HL7BloodUnitInformationSegmentV8", HL7BloodUnitInformationSegmentV8Schema);

