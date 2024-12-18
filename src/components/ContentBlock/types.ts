import { TFunction } from "react-i18next";

export interface ContentBlockProps {
  imageUrl: string;  // Changed from icon to imageUrl to represent image URL
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    imageUrl: string;  // Changed from icon to imageUrl for each section
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}



