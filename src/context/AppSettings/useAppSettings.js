import { useContext } from "react";
import { AppSettingsContext } from "./AppSettingsProvider";

export default function useAppSettings() {
  return useContext(AppSettingsContext);
}
