import { Button } from "@/components/ui/button"
import { IconButton } from "@/components/ui/icon-button"
import { SocialButton } from "@/components/ui/social-button"
import { LinkButton } from "@/components/ui/link-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ButtonsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Button Components</h1>
          <p className="text-gray-600">Complete button system with all variants, sizes, and states</p>
        </div>

        {/* Regular Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Regular Buttons</CardTitle>
            <CardDescription>Standard button variants with different sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Sizes */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="sm">Small Button</Button>
                <Button size="default">Default Button</Button>
                <Button size="lg">Large Button</Button>
              </div>
            </div>

            {/* Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Variants</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="tertiary">Tertiary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-lg font-semibold mb-4">States</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button>Default</Button>
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Icon Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Icon Buttons</CardTitle>
            <CardDescription>Buttons with only icons in different sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <IconButton size="xs">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </IconButton>
                <IconButton size="sm">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </IconButton>
                <IconButton size="md">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </IconButton>
                <IconButton size="lg">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </IconButton>
                <IconButton size="xl">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-8">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </IconButton>
                <IconButton size="xxl">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-10">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </IconButton>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Icon Button Variants</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <IconButton variant="default" size="md">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </IconButton>
                <IconButton variant="secondary" size="md">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </IconButton>
                <IconButton variant="outline" size="md">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </IconButton>
                <IconButton variant="ghost" size="md">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </IconButton>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Social Buttons</CardTitle>
            <CardDescription>OAuth and social media login buttons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Providers</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <SocialButton provider="google" icon={
                  <svg className="size-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                }>
                  Continue with Google
                </SocialButton>

                <SocialButton provider="linkedin" icon={
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                }>
                  Continue with LinkedIn
                </SocialButton>

                <SocialButton provider="apple" icon={
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                }>
                  Continue with Apple
                </SocialButton>

                <SocialButton provider="facebook" icon={
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                }>
                  Continue with Facebook
                </SocialButton>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Link Buttons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Link Buttons</CardTitle>
            <CardDescription>Text-based buttons that look like links</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Link Button Variants</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <LinkButton variant="interactive">Interactive Link</LinkButton>
                <LinkButton variant="black">Black Link</LinkButton>
                <LinkButton variant="gray">Gray Link</LinkButton>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Link Button Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <LinkButton variant="interactive" size="sm">Small Link</LinkButton>
                <LinkButton variant="interactive" size="default">Default Link</LinkButton>
                <LinkButton variant="interactive" size="lg">Large Link</LinkButton>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
            <CardDescription>Real-world examples of button combinations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Form Actions</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
                <Button variant="destructive">Delete</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Loading States</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button loading>Processing...</Button>
                <Button variant="outline" loading>
                  Loading...
                </Button>
                <Button variant="secondary" loading>
                  Please wait...
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Social Login</h3>
              <div className="space-y-3">
                <SocialButton provider="google" size="lg" icon={
                  <svg className="size-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                }>
                  Sign in with Google
                </SocialButton>

                <SocialButton provider="linkedin" size="lg" icon={
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                }>
                  Continue with LinkedIn
                </SocialButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
