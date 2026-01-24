import { cn } from "@/lib/utils"

interface AnimatedIconProps {
    name: "automation" | "web" | "app" | "data"
    className?: string
}

export function AnimatedIcon({ name, className }: AnimatedIconProps) {
    switch (name) {
        case "automation":
            return (
                <div className={cn("relative w-24 h-24", className)}>
                    <svg viewBox="0 0 100 100" className="w-full h-full text-secondary fill-none stroke-current stroke-2">
                        <circle cx="50" cy="50" r="30" className="animate-[spin_10s_linear_infinite]" strokeDasharray="4 4" />
                        <path d="M50 20 L50 80 M20 50 L80 50" className="animate-pulse-slow" />
                        <circle cx="50" cy="50" r="15" className="fill-secondary/20 animate-pulse" />
                        <rect x="35" y="35" width="30" height="30" rx="5" className="animate-float" />
                    </svg>
                </div>
            )
        case "web":
            return (
                <div className={cn("relative w-24 h-24", className)}>
                    <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-none stroke-current stroke-2">
                        <rect x="10" y="20" width="80" height="60" rx="5" className="stroke-2" />
                        <path d="M10 35 L90 35" />
                        <circle cx="20" cy="28" r="2" className="fill-current" />
                        <circle cx="28" cy="28" r="2" className="fill-current" />
                        <circle cx="36" cy="28" r="2" className="fill-current" />
                        <rect x="25" y="50" width="30" height="4" className="fill-primary/50 animate-pulse" />
                        <rect x="25" y="60" width="50" height="4" className="fill-primary/30 animate-pulse delay-100" />
                        <rect x="25" y="70" width="40" height="4" className="fill-primary/30 animate-pulse delay-200" />
                    </svg>
                </div>
            )
        case "app":
            return (
                <div className={cn("relative w-24 h-24", className)}>
                    <svg viewBox="0 0 100 100" className="w-full h-full text-accent fill-none stroke-current stroke-2">
                        <rect x="30" y="10" width="40" height="80" rx="5" className="animate-float" />
                        <circle cx="50" cy="82" r="3" className="fill-current" />
                        <path d="M35 20 L65 20" />
                        <rect x="38" y="30" width="24" height="40" rx="2" className="fill-accent/10" />
                        <circle cx="65" cy="15" r="5" className="fill-accent/20 animate-bounce" />
                    </svg>
                </div>
            )
        default:
            return null
    }
}
