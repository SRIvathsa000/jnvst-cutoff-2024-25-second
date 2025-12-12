import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Menu,
  X,
  Award,
  User,
  Users,
  BarChart2,
} from "lucide-react";

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Updated Data Structure based on User's New Data (Dec 2025)
const JNV_DATA = {
  BAGALKOT: {
    stats: {
      topper: 96.25,
      highest_boy: 96.25,
      highest_girl: 95.0,
      highest_sc: 92.5,
      highest_st: 95.0,
      highest_obc: 95.0,
    },
    urban_quota: [
      { category: "UR", boy: 96.25, girl: 95.0 },
      { category: "OBC", boy: 95.0, girl: 95.0 },
      { category: "SC", boy: 92.5, girl: 0 },
      { category: "ST", boy: 95.0, girl: 0 },
    ],
    rural_quota: [
      { category: "UR", boy: 93.75, girl: 93.75 },
      { category: "OBC", boy: 90.0, girl: 90.0 },
      { category: "SC", boy: 86.25, girl: 87.5 },
      { category: "ST", boy: 87.5, girl: 87.5 },
    ],
  },
  "BANGALORE RURAL": {
    stats: {
      topper: 90.0,
      highest_boy: 90.0,
      highest_girl: 90.0,
      highest_sc: 88.75,
      highest_st: 81.25,
      highest_obc: 88.75,
    },
    urban_quota: [
      { category: "UR", boy: 90.0, girl: 90.0 },
      { category: "OBC", boy: 87.5, girl: 88.75 },
      { category: "SC", boy: 83.75, girl: 88.75 },
      { category: "ST", boy: 0, girl: 81.25 },
    ],
    rural_quota: [
      { category: "UR", boy: 87.5, girl: 83.75 },
      { category: "OBC", boy: 82.5, girl: 82.5 },
      { category: "SC", boy: 75.0, girl: 80.0 },
      { category: "ST", boy: 80.0, girl: 77.5 },
    ],
  },
  "BANGALORE URBAN": {
    stats: {
      topper: 92.5,
      highest_boy: 92.5,
      highest_girl: 91.25,
      highest_sc: 90.0,
      highest_st: 86.25,
      highest_obc: 90.0,
    },
    urban_quota: [
      { category: "UR", boy: 92.5, girl: 91.25 },
      { category: "OBC", boy: 90.0, girl: 90.0 },
      { category: "SC", boy: 87.5, girl: 90.0 },
      { category: "ST", boy: 0, girl: 86.25 },
    ],
    rural_quota: [
      { category: "UR", boy: 90.0, girl: 88.75 },
      { category: "OBC", boy: 85.0, girl: 83.75 },
      { category: "SC", boy: 76.25, girl: 0 },
      { category: "ST", boy: 82.5, girl: 82.5 },
    ],
  },
  BELAGAVI: {
    stats: {
      topper: 96.25,
      highest_boy: 96.25,
      highest_girl: 96.25,
      highest_sc: 93.75,
      highest_st: 91.25,
      highest_obc: 95.0,
    },
    urban_quota: [
      { category: "UR", boy: 96.25, girl: 96.25 },
      { category: "OBC", boy: 95.0, girl: 95.0 },
      { category: "SC", boy: 93.75, girl: 92.5 },
      { category: "ST", boy: 0, girl: 91.25 },
    ],
    rural_quota: [
      { category: "UR", boy: 95.0, girl: 96.25 },
      { category: "OBC", boy: 91.25, girl: 90.0 },
      { category: "SC", boy: 86.25, girl: 86.25 },
      { category: "ST", boy: 88.75, girl: 91.25 },
    ],
  },
  BELLARY: {
    stats: {
      topper: 95.0,
      highest_boy: 95.0,
      highest_girl: 95.0,
      highest_sc: 91.25,
      highest_st: 93.75,
      highest_obc: 93.75,
    },
    urban_quota: [
      { category: "UR", boy: 95.0, girl: 95.0 },
      { category: "OBC", boy: 93.75, girl: 93.75 },
      { category: "SC", boy: 91.25, girl: 91.25 },
      { category: "ST", boy: 92.5, girl: 93.75 },
    ],
    rural_quota: [
      { category: "UR", boy: 93.75, girl: 91.25 },
      { category: "OBC", boy: 88.75, girl: 88.75 },
      { category: "SC", boy: 87.5, girl: 87.5 },
      { category: "ST", boy: 87.5, girl: 87.5 },
    ],
  },
  BIDAR: {
    stats: {
      topper: 95.0,
      highest_boy: 95.0,
      highest_girl: 95.0,
      highest_sc: 92.5,
      highest_st: 93.75,
      highest_obc: 92.5,
    },
    urban_quota: [
      { category: "UR", boy: 0, girl: 95.0 },
      { category: "OBC", boy: 92.5, girl: 0 },
      { category: "SC", boy: 90.0, girl: 92.5 },
      { category: "ST", boy: 93.75, girl: 93.75 },
    ],
    rural_quota: [
      { category: "UR", boy: 91.25, girl: 91.25 },
      { category: "OBC", boy: 82.5, girl: 83.75 },
      { category: "SC", boy: 82.5, girl: 85.0 },
      { category: "ST", boy: 87.5, girl: 86.25 },
    ],
  },
  BIJAPUR: {
    stats: {
      topper: 96.25,
      highest_boy: 96.25,
      highest_girl: 93.75,
      highest_sc: 91.25,
      highest_st: 95.0,
      highest_obc: 95.0,
    },
    urban_quota: [
      { category: "UR", boy: 96.25, girl: 93.75 },
      { category: "OBC", boy: 95.0, girl: 93.75 },
      { category: "SC", boy: 91.25, girl: 0 },
      { category: "ST", boy: 95.0, girl: 0 },
    ],
    rural_quota: [
      { category: "UR", boy: 95.0, girl: 92.5 },
      { category: "OBC", boy: 90.0, girl: 90.0 },
      { category: "SC", boy: 86.25, girl: 87.5 },
      { category: "ST", boy: 88.75, girl: 90.0 },
    ],
  },
  CHAMARAJNAGAR: {
    stats: {
      topper: 91.25,
      highest_boy: 91.25,
      highest_girl: 83.75,
      highest_sc: 85.0,
      highest_st: 81.25,
      highest_obc: 85.0,
    },
    urban_quota: [
      { category: "UR", boy: 91.25, girl: 83.75 },
      { category: "OBC", boy: 85.0, girl: 0 },
      { category: "SC", boy: 85.0, girl: 85.0 },
      { category: "ST", boy: 0, girl: 81.25 },
    ],
    rural_quota: [
      { category: "UR", boy: 83.75, girl: 82.5 },
      { category: "OBC", boy: 70.0, girl: 70.0 },
      { category: "SC", boy: 73.75, girl: 73.75 },
      { category: "ST", boy: 70.0, girl: 68.75 },
    ],
  },
  CHIKKABALLAPURA: {
    stats: {
      topper: 88.75,
      highest_boy: 88.75,
      highest_girl: 88.75,
      highest_sc: 82.5,
      highest_st: 85.0,
      highest_obc: 86.25,
    },
    urban_quota: [
      { category: "UR", boy: 88.75, girl: 88.75 },
      { category: "OBC", boy: 86.25, girl: 83.75 },
      { category: "SC", boy: 78.75, girl: 82.5 },
      { category: "ST", boy: 83.75, girl: 85.0 },
    ],
    rural_quota: [
      { category: "UR", boy: 83.75, girl: 83.75 },
      { category: "OBC", boy: 78.75, girl: 78.75 },
      { category: "SC", boy: 72.5, girl: 72.5 },
      { category: "ST", boy: 70.0, girl: 70.0 },
    ],
  },
  CHIKMAGALUR: {
    stats: {
      topper: 95.0,
      highest_boy: 95.0,
      highest_girl: 95.0,
      highest_sc: 87.5,
      highest_st: 88.75,
      highest_obc: 93.75,
    },
    urban_quota: [
      { category: "UR", boy: 95.0, girl: 95.0 },
      { category: "OBC", boy: 91.25, girl: 93.75 },
      { category: "SC", boy: 87.5, girl: 87.5 },
      { category: "ST", boy: 88.75, girl: 0 },
    ],
    rural_quota: [
      { category: "UR", boy: 91.25, girl: 90.0 },
      { category: "OBC", boy: 83.75, girl: 85.0 },
      { category: "SC", boy: 78.75, girl: 78.75 },
      { category: "ST", boy: 77.5, girl: 76.25 },
    ],
  },
  CHITRADURGA: {
    stats: {
      topper: 96.25,
      highest_boy: 96.25,
      highest_girl: 95.0,
      highest_sc: 90.0,
      highest_st: 90.0,
      highest_obc: 95.0,
    },
    urban_quota: [
      { category: "UR", boy: 96.25, girl: 95.0 },
      { category: "OBC", boy: 93.75, girl: 95.0 },
      { category: "SC", boy: 90.0, girl: 88.75 },
      { category: "ST", boy: 88.75, girl: 90.0 },
    ],
    rural_quota: [
      { category: "UR", boy: 92.5, girl: 91.25 },
      { category: "OBC", boy: 86.25, girl: 86.25 },
      { category: "SC", boy: 82.5, girl: 82.5 },
      { category: "ST", boy: 83.75, girl: 83.75 },
    ],
  },
  "DAKSHINA KANNADA": {
    stats: {
      topper: 87.5,
      highest_boy: 87.5,
      highest_girl: 87.5,
      highest_sc: 81.25,
      highest_st: 82.5,
      highest_obc: 85.0,
    },
    urban_quota: [
      { category: "UR", boy: 87.5, girl: 87.5 },
      { category: "OBC", boy: 85.0, girl: 85.0 },
      { category: "SC", boy: 78.75, girl: 81.25 },
      { category: "ST", boy: 82.5, girl: 0 },
    ],
    rural_quota: [
      { category: "UR", boy: 85.0, girl: 78.75 },
      { category: "OBC", boy: 77.5, girl: 77.5 },
      { category: "SC", boy: 63.75, girl: 63.75 },
      { category: "ST", boy: 73.75, girl: 72.5 },
    ],
  },
  DAVANGERE: {
    stats: {
      topper: 97.5,
      highest_boy: 97.5,
      highest_girl: 93.75,
      highest_sc: 90.0,
      highest_st: 92.5,
      highest_obc: 93.75,
    },
    urban_quota: [
      { category: "UR", boy: 97.5, girl: 93.75 },
      { category: "OBC", boy: 93.75, girl: 91.25 },
      { category: "SC", boy: 87.5, girl: 90.0 },
      { category: "ST", boy: 92.5, girl: 92.5 },
    ],
    rural_quota: [
      { category: "UR", boy: 92.5, girl: 93.75 },
      { category: "OBC", boy: 86.25, girl: 86.25 },
      { category: "SC", boy: 83.75, girl: 83.75 },
      { category: "ST", boy: 87.5, girl: 87.5 },
    ],
  },
  DHARWAD: {
    stats: {
      topper: 95.0,
      highest_boy: 95.0,
      highest_girl: 93.75,
      highest_sc: 86.25,
      highest_st: 90.0,
      highest_obc: 92.5,
    },
    urban_quota: [
      { category: "UR", boy: 95.0, girl: 93.75 },
      { category: "OBC", boy: 92.5, girl: 92.5 },
      { category: "SC", boy: 86.25, girl: 0 },
      { category: "ST", boy: 90.0, girl: 0 },
    ],
    rural_quota: [
      { category: "UR", boy: 91.25, girl: 91.25 },
      { category: "OBC", boy: 87.5, girl: 86.25 },
      { category: "SC", boy: 82.5, girl: 78.75 },
      { category: "ST", boy: 80.0, girl: 86.25 },
    ],
  },
  GADAG: {
    stats: {
      topper: 95.0,
      highest_boy: 95.0,
      highest_girl: 95.0,
      highest_sc: 92.5,
      highest_st: 93.75,
      highest_obc: 93.75,
    },
    urban_quota: [
      { category: "UR", boy: 95.0, girl: 95.0 },
      { category: "OBC", boy: 93.75, girl: 93.75 },
      { category: "SC", boy: 92.5, girl: 0 },
      { category: "ST", boy: 93.75, girl: 0 },
    ],
    rural_quota: [
      { category: "UR", boy: 91.25, girl: 92.5 },
      { category: "OBC", boy: 88.75, girl: 88.75 },
      { category: "SC", boy: 87.5, girl: 87.5 },
      { category: "ST", boy: 87.5, girl: 86.25 },
    ],
  },
  HASSAN: {
    stats: {
      topper: 93.75,
      highest_boy: 93.75,
      highest_girl: 93.75,
      highest_sc: 90.0,
      highest_st: 87.5,
      highest_obc: 91.25,
    },
    urban_quota: [
      { category: "UR", boy: 93.75, girl: 93.75 },
      { category: "OBC", boy: 91.25, girl: 91.25 },
      { category: "SC", boy: 90.0, girl: 90.0 },
      { category: "ST", boy: 0, girl: 87.5 },
    ],
    rural_quota: [
      { category: "UR", boy: 92.5, girl: 91.25 },
      { category: "OBC", boy: 83.75, girl: 83.75 },
      { category: "SC", boy: 77.5, girl: 77.5 },
      { category: "ST", boy: 77.5, girl: 76.25 },
    ],
  },
  HAVERI: {
    stats: {
      topper: 95.0,
      highest_boy: 95.0,
      highest_girl: 97.5,
      highest_sc: 92.5,
      highest_st: 93.75,
      highest_obc: 93.75,
    },
    urban_quota: [
      { category: "UR", boy: 95.0, girl: 97.5 },
      { category: "OBC", boy: 93.75, girl: 93.75 },
      { category: "SC", boy: 92.5, girl: 0 },
      { category: "ST", boy: 0, girl: 93.75 },
    ],
    rural_quota: [
      { category: "UR", boy: 92.5, girl: 93.75 },
      { category: "OBC", boy: 88.75, girl: 88.75 },
      { category: "SC", boy: 85.0, girl: 85.0 },
      { category: "ST", boy: 87.5, girl: 91.25 },
    ],
  },
  "KALABURAGI-I": {
    stats: {
      topper: 95.0,
      highest_boy: 95.0,
      highest_girl: 96.25,
      highest_sc: 90.0,
      highest_st: 88.75,
      highest_obc: 93.75,
    },
    urban_quota: [
      { category: "UR", boy: 95.0, girl: 96.25 },
      { category: "OBC", boy: 93.75, girl: 90.0 },
      { category: "SC", boy: 88.75, girl: 90.0 },
      { category: "ST", boy: 88.75, girl: 0 },
    ],
    rural_quota: [
      { category: "UR", boy: 90.0, girl: 90.0 },
      { category: "OBC", boy: 87.5, girl: 87.5 },
      { category: "SC", boy: 82.5, girl: 82.5 },
      { category: "ST", boy: 81.25, girl: 81.25 },
    ],
  },
  "KALABURAGI-II": {
    stats: {
      topper: 96.25,
      highest_boy: 96.25,
      highest_girl: 87.5,
      highest_sc: 90.0,
      highest_st: 88.75,
      highest_obc: 95.0,
    },
    urban_quota: [
      { category: "UR", boy: 96.25, girl: 87.5 },
      { category: "OBC", boy: 95.0, girl: 90.0 },
      { category: "SC", boy: 87.5, girl: 90.0 },
      { category: "ST", boy: 88.75, girl: 0 },
    ],
    rural_quota: [
      { category: "UR", boy: 91.25, girl: 86.25 },
      { category: "OBC", boy: 82.5, girl: 82.5 },
      { category: "SC", boy: 81.25, girl: 80.0 },
      { category: "ST", boy: 71.25, girl: 0 },
    ],
  },
  KODAGU: {
    stats: {
      topper: 87.5,
      highest_boy: 87.5,
      highest_girl: 86.25,
      highest_sc: 85.0,
      highest_st: 86.25,
      highest_obc: 85.0,
    },
    urban_quota: [
      { category: "UR", boy: 87.5, girl: 86.25 },
      { category: "OBC", boy: 0, girl: 85.0 },
      { category: "SC", boy: 85.0, girl: 85.0 },
      { category: "ST", boy: 0, girl: 86.25 },
    ],
    rural_quota: [
      { category: "UR", boy: 83.75, girl: 83.75 },
      { category: "OBC", boy: 78.75, girl: 78.75 },
      { category: "SC", boy: 76.25, girl: 76.25 },
      { category: "ST", boy: 76.25, girl: 76.25 },
    ],
  },
  KOLAR: {
    stats: {
      topper: 88.75,
      highest_boy: 88.75,
      highest_girl: 88.75,
      highest_sc: 81.25,
      highest_st: 81.25,
      highest_obc: 87.5,
    },
    urban_quota: [
      { category: "UR", boy: 88.75, girl: 88.75 },
      { category: "OBC", boy: 87.5, girl: 87.5 },
      { category: "SC", boy: 81.25, girl: 81.25 },
      { category: "ST", boy: 81.25, girl: 0 },
    ],
    rural_quota: [
      { category: "UR", boy: 83.75, girl: 85.0 },
      { category: "OBC", boy: 80.0, girl: 80.0 },
      { category: "SC", boy: 73.75, girl: 72.5 },
      { category: "ST", boy: 73.75, girl: 76.25 },
    ],
  },
  KOPPAL: {
    stats: {
      topper: 96.25,
      highest_boy: 96.25,
      highest_girl: 96.25,
      highest_sc: 93.75,
      highest_st: 90.0,
      highest_obc: 96.25,
    },
    urban_quota: [
      { category: "UR", boy: 96.25, girl: 96.25 },
      { category: "OBC", boy: 95.0, girl: 96.25 },
      { category: "SC", boy: 90.0, girl: 93.75 },
      { category: "ST", boy: 90.0, girl: 90.0 },
    ],
    rural_quota: [
      { category: "UR", boy: 95.0, girl: 93.75 },
      { category: "OBC", boy: 90.0, girl: 90.0 },
      { category: "SC", boy: 86.25, girl: 87.5 },
      { category: "ST", boy: 86.25, girl: 88.75 },
    ],
  },
  MANDYA: {
    stats: {
      topper: 93.75,
      highest_boy: 93.75,
      highest_girl: 93.75,
      highest_sc: 92.5,
      highest_st: 91.25,
      highest_obc: 91.25,
    },
    urban_quota: [
      { category: "UR", boy: 93.75, girl: 93.75 },
      { category: "OBC", boy: 91.25, girl: 91.25 },
      { category: "SC", boy: 92.5, girl: 92.5 },
      { category: "ST", boy: 91.25, girl: 0 },
    ],
    rural_quota: [
      { category: "UR", boy: 91.25, girl: 91.25 },
      { category: "OBC", boy: 87.5, girl: 87.5 },
      { category: "SC", boy: 82.5, girl: 86.25 },
      { category: "ST", boy: 85.0, girl: 82.5 },
    ],
  },
  MYSURU: {
    stats: {
      topper: 95.0,
      highest_boy: 95.0,
      highest_girl: 91.25,
      highest_sc: 90.0,
      highest_st: 91.25,
      highest_obc: 93.75,
    },
    urban_quota: [
      { category: "UR", boy: 95.0, girl: 91.25 },
      { category: "OBC", boy: 93.75, girl: 91.25 },
      { category: "SC", boy: 90.0, girl: 90.0 },
      { category: "ST", boy: 88.75, girl: 91.25 },
    ],
    rural_quota: [
      { category: "UR", boy: 92.5, girl: 88.75 },
      { category: "OBC", boy: 88.75, girl: 87.5 },
      { category: "SC", boy: 77.5, girl: 77.5 },
      { category: "ST", boy: 83.75, girl: 81.25 },
    ],
  },
  RAICHUR: {
    stats: {
      topper: 98.75,
      highest_boy: 98.75,
      highest_girl: 97.5,
      highest_sc: 93.75,
      highest_st: 92.5,
      highest_obc: 97.5,
    },
    urban_quota: [
      { category: "UR", boy: 98.75, girl: 95.0 },
      { category: "OBC", boy: 95.0, girl: 97.5 },
      { category: "SC", boy: 93.75, girl: 93.75 },
      { category: "ST", boy: 91.25, girl: 92.5 },
    ],
    rural_quota: [
      { category: "UR", boy: 96.25, girl: 93.75 },
      { category: "OBC", boy: 90.0, girl: 90.0 },
      { category: "SC", boy: 90.0, girl: 88.75 },
      { category: "ST", boy: 87.5, girl: 87.5 },
    ],
  },
  RAMNAGARA: {
    stats: {
      topper: 87.5,
      highest_boy: 87.5,
      highest_girl: 86.25,
      highest_sc: 82.5,
      highest_st: 78.75,
      highest_obc: 86.25,
    },
    urban_quota: [
      { category: "UR", boy: 87.5, girl: 86.25 },
      { category: "OBC", boy: 86.25, girl: 86.25 },
      { category: "SC", boy: 82.5, girl: 81.25 },
      { category: "ST", boy: 78.75, girl: 0 },
    ],
    rural_quota: [
      { category: "UR", boy: 83.75, girl: 82.5 },
      { category: "OBC", boy: 78.75, girl: 77.5 },
      { category: "SC", boy: 68.75, girl: 71.25 },
      { category: "ST", boy: 0, girl: 51.25 },
    ],
  },
  SHIMOGA: {
    stats: {
      topper: 92.5,
      highest_boy: 92.5,
      highest_girl: 91.25,
      highest_sc: 88.75,
      highest_st: 90.0,
      highest_obc: 91.25,
    },
    urban_quota: [
      { category: "UR", boy: 92.5, girl: 91.25 },
      { category: "OBC", boy: 90.0, girl: 91.25 },
      { category: "SC", boy: 88.75, girl: 88.75 },
      { category: "ST", boy: 0, girl: 90.0 },
    ],
    rural_quota: [
      { category: "UR", boy: 88.75, girl: 88.75 },
      { category: "OBC", boy: 85.0, girl: 85.0 },
      { category: "SC", boy: 82.5, girl: 82.5 },
      { category: "ST", boy: 78.75, girl: 80.0 },
    ],
  },
  TUMKUR: {
    stats: {
      topper: 95.0,
      highest_boy: 95.0,
      highest_girl: 91.25,
      highest_sc: 86.25,
      highest_st: 82.5,
      highest_obc: 91.25,
    },
    urban_quota: [
      { category: "UR", boy: 95.0, girl: 91.25 },
      { category: "OBC", boy: 91.25, girl: 91.25 },
      { category: "SC", boy: 86.25, girl: 86.25 },
      { category: "ST", boy: 82.5, girl: 0 },
    ],
    rural_quota: [
      { category: "UR", boy: 91.25, girl: 90.0 },
      { category: "OBC", boy: 83.75, girl: 85.0 },
      { category: "SC", boy: 77.5, girl: 81.25 },
      { category: "ST", boy: 80.0, girl: 78.75 },
    ],
  },
  UDUPI: {
    stats: {
      topper: 83.75,
      highest_boy: 83.75,
      highest_girl: 83.75,
      highest_sc: 81.25,
      highest_st: 80.0,
      highest_obc: 82.5,
    },
    urban_quota: [
      { category: "UR", boy: 83.75, girl: 83.75 },
      { category: "OBC", boy: 80.0, girl: 82.5 },
      { category: "SC", boy: 81.25, girl: 75.0 },
      { category: "ST", boy: 0, girl: 80.0 },
    ],
    rural_quota: [
      { category: "UR", boy: 78.75, girl: 76.25 },
      { category: "OBC", boy: 72.5, girl: 71.25 },
      { category: "SC", boy: 56.25, girl: 48.75 },
      { category: "ST", boy: 70.0, girl: 70.0 },
    ],
  },
  "UTTARA KANNADA": {
    stats: {
      topper: 92.5,
      highest_boy: 92.5,
      highest_girl: 91.25,
      highest_sc: 87.5,
      highest_st: 88.75,
      highest_obc: 87.5,
    },
    urban_quota: [
      { category: "UR", boy: 92.5, girl: 91.25 },
      { category: "OBC", boy: 87.5, girl: 85.0 },
      { category: "SC", boy: 87.5, girl: 0 },
      { category: "ST", boy: 0, girl: 88.75 },
    ],
    rural_quota: [
      { category: "UR", boy: 87.5, girl: 88.75 },
      { category: "OBC", boy: 78.75, girl: 78.75 },
      { category: "SC", boy: 77.5, girl: 77.5 },
      { category: "ST", boy: 80.0, girl: 77.5 },
    ],
  },
  YADGIRI: {
    stats: {
      topper: 96.25,
      highest_boy: 96.25,
      highest_girl: 95.0,
      highest_sc: 88.75,
      highest_st: 91.25,
      highest_obc: 92.5,
    },
    urban_quota: [
      { category: "UR", boy: 96.25, girl: 95.0 },
      { category: "OBC", boy: 92.5, girl: 92.5 },
      { category: "SC", boy: 88.75, girl: 88.75 },
      { category: "ST", boy: 91.25, girl: 0 },
    ],
    rural_quota: [
      { category: "UR", boy: 90.0, girl: 91.25 },
      { category: "OBC", boy: 88.75, girl: 88.75 },
      { category: "SC", boy: 85.0, girl: 85.0 },
      { category: "ST", boy: 85.0, girl: 90.0 },
    ],
  },
};

const CATEGORY_NAMES = {
  UR: "General / Unreserved (UR)",
  OBC: "Other Backward Class (OBC)",
  SC: "Scheduled Caste (SC)",
  ST: "Scheduled Tribe (ST)",
};

const StatCard = ({ title, value, subtext, icon: Icon, colorClass }) => (
  <div
    className={`p-4 rounded-xl shadow-md border-l-4 ${colorClass} bg-white flex items-center space-x-4 transform transition hover:scale-105 duration-200`}
  >
    <div
      className={`p-3 rounded-full bg-opacity-20 ${colorClass.replace(
        "border-",
        "bg-"
      )}`}
    >
      <Icon className={`w-6 h-6 ${colorClass.replace("border-", "text-")}`} />
    </div>
    <div>
      <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
        {title}
      </p>
      <div className="flex items-baseline space-x-1">
        <h3 className="text-2xl font-bold text-gray-800">
          {value > 0 ? value : "N/A"}
        </h3>
        <span className="text-xs text-gray-400">marks</span>
      </div>
      {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
    </div>
  </div>
);

const BarGraph = ({ value, label, color, maxVal = 100 }) => {
  const widthPercentage = Math.min((value / maxVal) * 100, 100);

  return (
    <div className="flex items-center space-x-3 mb-2">
      <div className="w-24 text-xs font-semibold text-gray-600 text-right shrink-0">
        {label}
      </div>
      <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden relative shadow-inner">
        <div
          className={`h-full ${color} flex items-center justify-end px-2 transition-all duration-1000 ease-out`}
          style={{ width: `${value > 0 ? widthPercentage : 0}%` }}
        >
          <span className="text-xs font-bold text-white drop-shadow-md">
            {value > 0 ? value : ""}
          </span>
        </div>
      </div>
      <div className="w-10 text-sm font-bold text-gray-700 shrink-0 text-right">
        {value > 0 ? value : "-"}
      </div>
    </div>
  );
};

export default function App() {
  const [selectedDistrict, setSelectedDistrict] = useState("BANGALORE RURAL");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const districts = Object.keys(JNV_DATA).sort();
  const currentData = JNV_DATA[selectedDistrict] || JNV_DATA[districts[0]];

  const handleDistrictChange = (d) => {
    setSelectedDistrict(d);
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-indigo-700 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <span className="font-bold text-lg">JNVST 2024-25 Dashboard</span>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 focus:outline-none"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-indigo-900 text-white transform transition-transform duration-300 ease-in-out shadow-2xl
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:block
      `}
      >
        <div className="p-6 border-b border-indigo-800 bg-indigo-950">
          <h1 className="text-2xl font-extrabold tracking-tight">
            Karnataka JNVST
          </h1>
          <p className="text-indigo-300 text-sm mt-1">Cutoff Marks 2024-25</p>
        </div>
        <nav className="p-4 overflow-y-auto h-[calc(100vh-100px)] custom-scrollbar">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-3 px-2">
            Select District
          </p>
          <ul className="space-y-1">
            {districts.map((district) => (
              <li key={district}>
                <button
                  onClick={() => handleDistrictChange(district)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-between ${
                    selectedDistrict === district
                      ? "bg-indigo-600 text-white shadow-lg ring-1 ring-indigo-400"
                      : "hover:bg-indigo-800 text-indigo-100 hover:text-white"
                  }`}
                >
                  {district}
                  {selectedDistrict === district && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto h-screen bg-gray-50/50">
        {/* Header Section */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30 opacity-95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div>
              <h2 className="text-3xl font-black text-gray-800">
                {selectedDistrict}
              </h2>
              <p className="text-gray-500 text-sm mt-1 flex items-center">
                <MapPin size={14} className="mr-1" /> Karnataka District Report
              </p>
            </div>

            {/* Logo and Institute Name Section */}
            <div className="flex items-center space-x-4">
              {/* Logo Placeholder - User can replace src */}
              <img
                src="/logo.png"
                alt="Easy Peasy Classes Logo"
                className="h-16 w-16 rounded-full object-cover border-2 border-indigo-100 shadow-sm hidden sm:block"
              />

              <div className="text-right flex flex-col items-center sm:items-end">
                <h1 className="text-3xl font-extrabold text-indigo-800 leading-tight">
                  Easy Peasy Classes
                </h1>
                <h2 className="text-sm font-bold text-indigo-600 mb-1 tracking-wide uppercase">
                  Navodaya Online Coaching
                </h2>
                <div className="text-xs text-gray-500 font-medium">
                  Davanagere, Karnataka
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          {/* Top Stats Grid */}
          <section>
            <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
              <Award className="mr-2 text-yellow-500" /> Key Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <StatCard
                title="District Topper"
                value={currentData.stats.topper}
                subtext="Highest Score (Open UR)"
                icon={Award}
                colorClass="border-yellow-500 text-yellow-600"
              />
              <StatCard
                title="Highest Boy"
                value={currentData.stats.highest_boy}
                icon={User}
                colorClass="border-blue-500 text-blue-600"
              />
              <StatCard
                title="Highest Girl"
                value={currentData.stats.highest_girl}
                icon={User}
                colorClass="border-pink-500 text-pink-600"
              />
              <StatCard
                title="Highest SC"
                value={currentData.stats.highest_sc}
                icon={Users}
                colorClass="border-purple-500 text-purple-600"
              />
              <StatCard
                title="Highest ST"
                value={currentData.stats.highest_st}
                icon={Users}
                colorClass="border-green-500 text-green-600"
              />
              <StatCard
                title="Highest OBC"
                value={currentData.stats.highest_obc}
                icon={Users}
                colorClass="border-orange-500 text-orange-600"
              />
            </div>
          </section>

          {/* Infographics Section - Reorganized by Quota */}
          <section>
            <h3 className="text-xl font-bold text-gray-700 mb-6 flex items-center">
              <BarChart2 className="mr-2 text-indigo-600" /> Category-wise
              Cutoff Analysis
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Rural Quota Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-emerald-600 px-6 py-4 flex justify-between items-center text-white">
                  <span className="font-bold text-lg uppercase tracking-wider">
                    Rural Quota
                  </span>
                  <Users className="text-emerald-200" size={20} />
                </div>
                <div className="p-6 space-y-8">
                  {currentData.rural_quota.map((catData, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-100 last:border-0 pb-6 last:pb-0"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-sm font-bold text-gray-500 uppercase flex items-center">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                          {CATEGORY_NAMES[catData.category]}
                        </h4>
                        <span className="text-xs font-semibold px-2 py-1 bg-emerald-50 text-emerald-600 rounded">
                          2024-25
                        </span>
                      </div>
                      <div className="pl-4">
                        <BarGraph
                          label="Boy"
                          value={catData.boy}
                          color="bg-blue-400"
                        />
                        <BarGraph
                          label="Girl"
                          value={catData.girl}
                          color="bg-pink-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Urban Quota Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center text-white">
                  <span className="font-bold text-lg uppercase tracking-wider">
                    Urban Quota
                  </span>
                  <MapPin className="text-indigo-200" size={20} />
                </div>
                <div className="p-6 space-y-8">
                  {currentData.urban_quota.map((catData, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-100 last:border-0 pb-6 last:pb-0"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-sm font-bold text-gray-500 uppercase flex items-center">
                          <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                          {CATEGORY_NAMES[catData.category]}
                        </h4>
                        <span className="text-xs font-semibold px-2 py-1 bg-indigo-50 text-indigo-600 rounded">
                          2024-25
                        </span>
                      </div>
                      <div className="pl-4">
                        <BarGraph
                          label="Boy"
                          value={catData.boy}
                          color="bg-blue-500"
                        />
                        <BarGraph
                          label="Girl"
                          value={catData.girl}
                          color="bg-pink-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact / Footer Section */}
          <footer className="bg-indigo-900 text-indigo-100 rounded-3xl overflow-hidden shadow-2xl mt-12 mb-8 relative">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-800 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-600 rounded-full opacity-30 blur-3xl"></div>

            <div className="relative p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Easy Peasy Classes
                </h4>
                <p className="font-medium text-indigo-300 mb-4">
                  Online Navodaya Classes
                </p>

                <div className="space-y-2 text-sm text-indigo-200">
                  <div className="flex items-center justify-center md:justify-start">
                    <MapPin size={16} className="mr-2 text-indigo-400" />
                    <span>
                      Kukkuwada, Davanagere Taluku, Davanagere District,
                      Karnataka. 577525
                    </span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Phone size={16} className="mr-2 text-indigo-400" />
                    <span>+91 99455 53898, +91 86605 13066</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <a
                  href="https://chat.whatsapp.com/GOXxuaaMC8X6xaUhLABUpf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 active:scale-95"
                >
                  <WhatsAppIcon className="w-6 h-6 mr-2" />
                  Join WhatsApp Community
                </a>
                <p className="text-xs text-indigo-400">
                  Get latest updates & study materials
                </p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
