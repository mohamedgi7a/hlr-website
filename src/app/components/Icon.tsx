import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Factory,
  FileCheck2,
  GraduationCap,
  Handshake,
  Headphones,
  HeartPulse,
  Hotel,
  Landmark,
  Laptop2,
  MessageSquareText,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  UsersRound,
  Eye
} from "lucide-react";
import type { IconName } from "@/data/content";

const icons = {
  search: Search,
  file: FileCheck2,
  users: UsersRound,
  settings: Settings2,
  chart: BarChart3,
  shield: ShieldCheck,
  target: Target,
  handshake: Handshake,
  headphones: Headphones,
  sparkles: Sparkles,
  building: Building2,
  factory: Factory,
  health: HeartPulse,
  education: GraduationCap,
  finance: Landmark,
  tech: Laptop2,
  hospitality: Hotel,
  store: Store,
  eye: Eye,
  message: MessageSquareText,
  briefcase: BriefcaseBusiness
};

export function Icon({ name, size = 24, className }: { name: IconName; size?: number; className?: string }) {
  const Component = icons[name];
  return <Component aria-hidden="true" size={size} strokeWidth={1.7} className={className} />;
}
