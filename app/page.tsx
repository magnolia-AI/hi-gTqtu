'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Zap, Star, Clock, ArrowUpRight } from "lucide-react"

export default function Home() {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title: "Success!",
      description: "Your action has been completed successfully.",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section with gradient background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-32 pb-24">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.8),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-[800px] mx-auto text-center">
            <Badge className="mb-4" variant="outline">✨ Modern Web Experience</Badge>
            <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-4">
              Build Beautiful Web Apps
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
              Create stunning, responsive web applications with our modern UI components and intuitive design system.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-8 gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-8" onClick={showToast}>
                See Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Tabs */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Powerful Features
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Everything you need to build modern web applications, all in one place.
          </p>
        </div>
        
        <Tabs defaultValue="design" className="max-w-[1000px] mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="design">Design System</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          <TabsContent value="design" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" /> Consistent UI
                  </CardTitle>
                  <CardDescription>
                    Maintain visual consistency across your entire application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our design system ensures that all elements of your application follow the same visual language, creating a cohesive user experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" /> Rapid Development
                  </CardTitle>
                  <CardDescription>
                    Build faster with pre-designed components
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Speed up your development process with our library of ready-to-use components that can be easily customized to fit your needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="components" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" /> Premium Components
                  </CardTitle>
                  <CardDescription>
                    High-quality UI elements for every need
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    From simple buttons to complex data tables, our component library has everything you need to build beautiful interfaces.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ArrowUpRight className="h-5 w-5 text-primary" /> Extensible
                  </CardTitle>
                  <CardDescription>
                    Easily extend and customize components
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All components are designed to be easily extended and customized to match your specific requirements and brand guidelines.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="performance" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" /> Optimized Loading
                  </CardTitle>
                  <CardDescription>
                    Fast loading times for better user experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our components are optimized for performance, ensuring your application loads quickly and runs smoothly on all devices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" /> Responsive Design
                  </CardTitle>
                  <CardDescription>
                    Perfect experience on any device
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All components are fully responsive, providing an optimal viewing experience across a wide range of devices and screen sizes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Hear from developers who have built amazing applications with our tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="italic text-muted-foreground leading-relaxed mb-6">
                  "This framework has completely transformed how I build web applications. The components are beautiful and the API is intuitive."
                </p>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Frontend Developer</div>
              </CardContent>
            </Card>
            
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="italic text-muted-foreground leading-relaxed mb-6">
                  "I've tried many UI libraries, but this one stands out for its attention to detail and exceptional documentation. Highly recommended!"
                </p>
                <div className="font-semibold">Michael Chen</div>
                <div className="text-sm text-muted-foreground">Product Designer</div>
              </CardContent>
            </Card>
            
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="italic text-muted-foreground leading-relaxed mb-6">
                  "The speed at which I can now prototype and build production-ready applications is incredible. This has become my go-to framework."
                </p>
                <div className="font-semibold">Alex Rodriguez</div>
                <div className="text-sm text-muted-foreground">Full Stack Developer</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-24">
        <Card className="max-w-[900px] mx-auto overflow-hidden border-primary/20">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of developers building amazing web applications with our modern UI framework.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="gap-2">
                  Start Building <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline">
                  View Documentation
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/80 to-primary p-10 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
                <p className="mb-6 opacity-90">Get support, share ideas, and collaborate with other developers</p>
                <Button variant="secondary" className="w-full">
                  Join Discord
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
