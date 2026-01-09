/**
 * Type definitions for Testimonials section
 */

export interface Feedback {
  id: number;
  name: string;
  role: string;
  text: string;
  color: string;
  x: string;
  y: string;
  initials: string;
}

export interface ViewerData {
  color: string;
  initial: string;
  delay: number;
}
