import {TQueryValidator} from "@/lib/validators/query-validator";

export default interface ProductReelProps {
  title: string;
  subtitle?: string;
  href?: string;
  query: TQueryValidator;
}
