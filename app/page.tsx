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
      {/* Hero Section with cool gradient background */}
      <section id="about" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/10 to-background pt-32 pb-24">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.8),transparent)] pointer-events-none" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-[800px] mx-auto text-center">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20" variant="outline">✨ Cool Modern Experience</Badge>
            <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary mb-4">
              Build Beautiful Web Apps
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
              Create stunning, responsive web applications with our modern UI components and intuitive design system.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="px-8 gap-2 bg-primary hover:bg-primary/90">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-secondary text-secondary hover:bg-secondary/10" onClick={showToast}>
                See Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Tabs */}
      <section id="skills" className="container mx-auto px-4 py-24 relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Powerful Features
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Everything you need to build modern web applications, all in one place.
          </p>
        </div>
        
        <Tabs defaultValue="design" className="max-w-[1000px] mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-secondary/5">
            <TabsTrigger value="design" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Design System</TabsTrigger>
            <TabsTrigger value="components" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Components</TabsTrigger>
            <TabsTrigger value="performance" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Performance</TabsTrigger>
          </TabsList>
          <TabsContent value="design" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/10 bg-gradient-to-br from-background to-primary/5 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" /> Consistent UI
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
              <Card className="border-primary/10 bg-gradient-to-br from-background to-secondary/5 shadow-md">
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
              <Card className="border-primary/10 bg-gradient-to-br from-background to-primary/5 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-secondary" /> Premium Components
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
              <Card className="border-primary/10 bg-gradient-to-br from-background to-secondary/5 shadow-md">
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
              <Card className="border-primary/10 bg-gradient-to-br from-background to-primary/5 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-secondary" /> Optimized Loading
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
              <Card className="border-primary/10 bg-gradient-to-br from-background to-secondary/5 shadow-md">
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
      <section id="experience" className="bg-gradient-to-br from-primary/5 to-secondary/5 py-24 relative">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.5),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What Our Users Say
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Hear from developers who have built amazing applications with our tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            <Card className="bg-background/80 backdrop-blur-sm border-primary/10 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="italic text-muted-foreground leading-relaxed mb-6">
                  "This framework has completely transformed how I build web applications. The components are beautiful and the API is intuitive."
                </p>
                <div className="font-semibold text-primary">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Frontend Developer</div>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border-secondary/10 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="italic text-muted-foreground leading-relaxed mb-6">
                  "I've tried many UI libraries, but this one stands out for its attention to detail and exceptional documentation. Highly recommended!"
                </p>
                <div className="font-semibold text-secondary">Michael Chen</div>
                <div className="text-sm text-muted-foreground">Product Designer</div>
              </CardContent>
            </Card>
            
            <Card className="bg-background/80 backdrop-blur-sm border-primary/10 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="italic text-muted-foreground leading-relaxed mb-6">
                  "The speed at which I can now prototype and build production-ready applications is incredible. This has become my go-to framework."
                </p>
                <div className="font-semibold text-primary">Alex Rodriguez</div>
                <div className="text-sm text-muted-foreground">Full Stack Developer</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="projects" className="container mx-auto px-4 py-24 relative">
        <div className="absolute -bottom-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -top-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
        <Card className="max-w-[900px] mx-auto overflow-hidden border-none shadow-xl bg-gradient-to-br from-background via-background to-background/80">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of developers building amazing web applications with our modern UI framework.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="gap-2 bg-primary hover:bg-primary/90">
                  Start Building <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                  View Documentation
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-xl" />
              <div className="text-white text-center relative z-10">
                <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
                <p className="mb-6 opacity-90">Get support, share ideas, and collaborate with other developers</p>
                <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm">
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













