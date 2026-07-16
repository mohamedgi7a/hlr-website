import {
  BarChart3,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CircleDollarSign,
  Eye,
  Factory,
  FileCheck2,
  GraduationCap,
  Handshake,
  HardHat,
  Headphones,
  HeartPulse,
  Hotel,
  Landmark,
  Laptop2,
  MessageSquareText,
  ReceiptText,
  Scale,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  UsersRound
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconName } from "@/data/content";

const icons: Record<IconName, LucideIcon> = {
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
  briefcase: BriefcaseBusiness,
  badge: BadgeCheck,
  coins: CircleDollarSign,
  scale: Scale,
  calculator: Calculator,
  receipt: ReceiptText,
  hardhat: HardHat
};

export function Icon({
  name,
  size = 24,
  className
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const Component = icons[name];

  return (
    <Component
      aria-hidden="true"
      size={size}
      strokeWidth={1.7}
      className={className}
    />
  );
}
