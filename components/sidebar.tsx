"use client"

import * as React from "react"
import { createContext, useContext, useState } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"

const SidebarContext = createContext<{
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  isOpen: true,
  setIsOpen: () => {},
})

export function SidebarProvider({
  children,
  defaultIsOpen = true,
}: {
  children: React.ReactNode
  defaultIsOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="grid lg:grid-cols-[auto_1fr]">{children}</div>
    </SidebarContext.Provider>
  )
}

const sidebarVariants = cva(
  "relative flex h-screen flex-col border-r bg-background transition-all duration-300 ease-in-out",
  {
    variants: {
      isOpen: {
        true: "w-[280px]",
        false: "w-[80px]",
      },
    },
    defaultVariants: {
      isOpen: true,
    },
  },
)

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {}

export function Sidebar({ className, ...props }: SidebarProps) {
  const { isOpen } = useContext(SidebarContext)

  return <div className={cn(sidebarVariants({ isOpen }), className)} {...props} />
}

export function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex h-14 items-center border-b px-4", className)} {...props} />
}

export function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex-1 overflow-auto py-2", className)} {...props} />
}

export function SidebarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pb-4", className)} {...props} />
}

export function SidebarGroupLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen } = useContext(SidebarContext)

  if (!isOpen) {
    return null
  }

  return (
    <div
      className={cn("px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground", className)}
      {...props}
    />
  )
}

export function SidebarGroupContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props} />
}

export function SidebarMenu({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn("grid gap-1 px-2", className)} {...props} />
}

export function SidebarMenuItem({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) {
  return <li className={cn("", className)} {...props} />
}

export interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  asChild?: boolean
}

export function SidebarMenuButton({ className, isActive, asChild, ...props }: SidebarMenuButtonProps) {
  const { isOpen } = useContext(SidebarContext)

  const Comp = asChild ? React.Fragment : "button"
  const childProps = asChild
    ? {}
    : {
        className: cn(
          "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted/50",
          isActive && "bg-muted font-medium",
          !isOpen && "justify-center",
          className,
        ),
        ...props,
      }

  return <Comp {...childProps} />
}

export function SidebarRail({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen, setIsOpen } = useContext(SidebarContext)

  return (
    <div
      className={cn(
        "absolute right-0 top-14 -mr-3 flex h-6 w-6 translate-x-1/2 items-center justify-center rounded-full border bg-background",
        className,
      )}
      {...props}
    >
      <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ChevronLeft className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    </div>
  )
}

export function SidebarTrigger({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setIsOpen } = useContext(SidebarContext)

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("lg:hidden", className)}
      onClick={() => setIsOpen(true)}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

export function SidebarInset({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex h-screen flex-col", className)} {...props} />
}
