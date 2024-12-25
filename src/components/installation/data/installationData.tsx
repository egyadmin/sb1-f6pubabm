import { InstallationSection } from '../types';
import { getFireAlarmSection } from './sections/fireAlarm';
import { getAccessControlSection } from './sections/accessControl';
import { getCCTVSection } from './sections/cctv';
import { getNetworkSection } from './sections/network';
import { getInfrastructureSection } from './sections/infrastructure';
import { getDuctileIronSection } from './sections/ductileIron';
import { getTelecomSection } from './sections/telecom';
import { getSecuritySection } from './sections/security';
import { getTestingSection } from './sections/testing';

export const getInstallationData = (language: 'en' | 'ar'): Record<string, InstallationSection> => ({
  fireAlarm: getFireAlarmSection(language),
  accessControl: getAccessControlSection(language),
  cctv: getCCTVSection(language),
  network: getNetworkSection(language),
  infrastructure: getInfrastructureSection(language),
  ductileIron: getDuctileIronSection(language),
  telecom: getTelecomSection(language),
  security: getSecuritySection(language),
  testing: getTestingSection(language)
});