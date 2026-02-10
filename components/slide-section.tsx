import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { forwardRef } from "react"

interface SlideSectionProps {
    id: string
    title: string
    description: string
    features: string[]
    icon: React.ReactNode
    variant: "primary" | "secondary" | "accent" | "default"
    reverse?: boolean
    cta?: { text: string; href: string }
}

export const SlideSection = forwardRef<HTMLElement, SlideSectionProps>(function SlideSection(
    {
        id,
        title,
        description,
        features,
        icon,
        variant = "default",
        reverse = false,
        cta
    },
    ref
) {

    const variants = {
        default: "bg-background text-foreground",
        primary: "bg-primary/5 text-foreground",
        secondary: "bg-secondary/5 text-foreground",
        accent: "bg-accent/5 text-foreground",
    }

    const iconColors = {
        default: "text-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
        accent: "text-accent",
    }

    return (
        <section
            ref={ref}
            id={id}
            className={cn(
                "h-screen flex items-center justify-center p-6 sm:p-12 relative overflow-hidden snap-start",
                variants[variant]
            )}
        >
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-20 left-20 w-64 h-64 bg-current rounded-full blur-2xl opacity-20 animate-pulse-slow" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-current rounded-full blur-2xl opacity-20 animate-pulse-slow delay-1000" />
            </div>

            <div className={cn(
                "max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10",
                reverse ? "lg:grid-flow-dense" : ""
            )}>
                <div className={cn(reverse ? "lg:col-start-2" : "lg:col-start-1")}>
                    <div className={cn("mb-6 flex items-center justify-center lg:justify-start", iconColors[variant])}>
                        {icon}
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                        {description}
                    </p>
                    <ul className="space-y-4 mb-8">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle2 className={cn("h-6 w-6 mr-3 shrink-0", iconColors[variant])} />
                                <span className="text-foreground/80 font-medium">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    {cta && (
                        <Button asChild size="lg" className={cn(
                            "rounded-full px-8 text-lg shadow-xl hover:scale-105 transition-transform",
                            variant === 'secondary' ? 'bg-secondary hover:bg-secondary/90' :
                                variant === 'accent' ? 'bg-accent hover:bg-accent/90 text-foreground' :
                                    'bg-primary hover:bg-primary/90'
                        )}>
                            <Link href={cta.href}>
                                {cta.text} <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    )}
                </div>

                <div className={cn(
                    "relative flex items-center justify-center p-8",
                    reverse ? "lg:col-start-1" : "lg:col-start-2"
                )}>
                    <div className="relative z-10 w-full aspect-square md:aspect-video lg:aspect-square flex items-center justify-center rounded-3xl bg-white/50 backdrop-blur-xl border border-white/20 shadow-2xl p-8 transform rotate-1 transition-transform hover:rotate-0">
                        <div className="scale-150 transform">
                            {icon}
                        </div>
                    </div>
                    {/* Decorative elements */}
                    <div className={cn("absolute -top-10 -right-10 w-20 h-20 rounded-full blur-xl opacity-40", iconColors[variant].replace('text-', 'bg-'))} />
                    <div className={cn("absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-xl opacity-40", iconColors[variant].replace('text-', 'bg-'))} />
                </div>
            </div>
        </section>
    )
})
