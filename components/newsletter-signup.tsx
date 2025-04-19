"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./button"
import { Input } from "./input"
import { CheckCircle2 } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1000)
  }

  return (
    <div className="max-w-md mx-auto">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
          <h3 className="text-xl font-medium text-white">Thanks for subscribing!</h3>
          <p className="text-gray-400">You'll be the first to know about game updates, exclusive offers, and more.</p>
          <Button variant="link" className="text-white" onClick={() => setIsSubmitted(false)}>
            Subscribe another email
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
          <p className="text-xs text-gray-400 text-center">
            By subscribing, you agree to receive marketing emails about our products and services. You can unsubscribe
            at any time.
          </p>
        </form>
      )}
    </div>
  )
}
