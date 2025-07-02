"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Play, Download, Facebook, Linkedin, Youtube, Mail, Award, ExternalLink, ChevronRight, MapPin, Phone, Globe, Film, Camera, Circle, Star, Calendar, Send, User, Briefcase, Video, Users, CheckCircle, Quote, FileText, Clock, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FeaturedFilmsCarousel from "./FeaturedFilmsCarousel";
import VideoGrid from "./VideoGrid";
import ImageGallerySlider from "./ImageGallerySlider";
export interface CinebelgicanoHomepageProps {}

// Mock data for the homepage
const directorData = {
  name: "Andrés Lübbert",
  title: "Director & Producer",
  tagline: "Award-winning filmmaker bridging Latin American stories with global audiences",
  bio: "Andrés Lübbert is a Chilean-Belgian filmmaker whose work explores themes of identity, migration, and cultural intersection. His documentaries have been featured at international film festivals and broadcast on major networks including Al-Jazeera Witness.",
  fullBio: "Andrés Lübbert is a Chilean-Belgian filmmaker whose work explores themes of identity, migration, and cultural intersection. His documentaries have been featured at international film festivals and broadcast on major networks including Al-Jazeera Witness. Born in Chile and based in Belgium, Lübbert brings a unique perspective to his storytelling, often focusing on the experiences of Latin American communities in Europe. His films have received critical acclaim for their intimate portrayal of personal stories within larger social contexts. As co-organizer of the Kinolatino festival, he continues to champion Latin American cinema and foster cultural exchange through film.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face",
  credentials: ["15+ Years Experience", "Al-Jazeera Witness Contributor", "Kinolatino Festival Co-Organizer", "Award-Winning Documentarian", "International Distribution"],
  contact: {
    email: "andres@cinebelgicano.com",
    phone: "+32 2 123 4567",
    location: "Brussels, Belgium"
  }
};
const services = [{
  title: "Documentary Production",
  description: "Full-service documentary filmmaking from concept to distribution",
  features: ["Pre-production planning", "Location scouting", "Interview coordination", "Post-production"],
  icon: Video
}, {
  title: "Equipment & Crew",
  description: "Professional-grade equipment and experienced crew for hire",
  features: ["4K cameras", "Audio equipment", "Lighting packages", "Experienced operators"],
  icon: Camera
}, {
  title: "Co-Production",
  description: "International co-production partnerships and funding assistance",
  features: ["Funding applications", "International partnerships", "Distribution networks", "Festival strategy"],
  icon: Users
}, {
  title: "Consultation",
  description: "Creative and business consultation for film projects",
  features: ["Script development", "Production planning", "Distribution strategy", "Festival submissions"],
  icon: Briefcase
}] as any[];
const productionCompany = {
  name: "Cinebelgicano Productions",
  description: "Independent production company specializing in cross-cultural documentaries and narrative films that bridge Latin American stories with European perspectives.",
  social: {
    facebook: "https://facebook.com/cinebelgicano",
    linkedin: "https://linkedin.com/company/cinebelgicano",
    youtube: "https://youtube.com/@cinebelgicano"
  }
};
const currentProjects = [{
  title: "New Latin-American Documentary Project",
  description: "Currently in development - exploring contemporary migration stories",
  status: "In Development",
  timeline: "2024-2025",
  budget: "€150,000"
}, {
  title: "Kinolatino Festival 2024",
  description: "Co-organizing the annual celebration of Latin American cinema",
  status: "Ongoing",
  timeline: "Year-round",
  budget: "€75,000"
}] as any[];
const credentials = [{
  category: "Awards & Recognition",
  items: [{
    name: "Best Documentary",
    project: "Dying For Life",
    festival: "Brussels Film Festival",
    year: "2023",
    significance: "Major European festival recognition"
  }, {
    name: "Audience Choice",
    project: "El Color Del Camaleon",
    festival: "Kinolatino",
    year: "2022",
    significance: "Community impact and engagement"
  }, {
    name: "Special Mention",
    project: "The Pride Liar",
    festival: "IDFA",
    year: "2021",
    significance: "International documentary recognition"
  }]
}, {
  category: "Industry Partnerships",
  items: [{
    name: "Al-Jazeera Witness",
    type: "Broadcasting Partner",
    description: "Regular contributor for documentary content",
    duration: "2020-Present"
  }, {
    name: "VAF (Flanders Audiovisual Fund)",
    type: "Funding Partner",
    description: "Supported projects and development funding",
    duration: "2019-Present"
  }, {
    name: "Off World Productions",
    type: "Co-Production Partner",
    description: "International co-production collaborations",
    duration: "2018-Present"
  }]
}] as any[];
const testimonials = [{
  quote: "Andrés brings a unique perspective to documentary filmmaking that resonates with international audiences while maintaining authentic cultural narratives.",
  author: "Maria Rodriguez",
  title: "Festival Director, Kinolatino",
  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
}, {
  quote: "Working with Cinebelgicano Productions has been exceptional. Their attention to detail and cultural sensitivity makes them ideal partners for international projects.",
  author: "Jean-Pierre Dubois",
  title: "Producer, Off World Productions",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
}, {
  quote: "The quality and authenticity of Andrés' work consistently meets our editorial standards for international documentary programming.",
  author: "Sarah Ahmed",
  title: "Commissioning Editor, Al-Jazeera Witness",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
}] as any[];
const portfolioMaterials = [{
  title: "Complete Portfolio & Reel",
  description: "Comprehensive showcase of recent work and capabilities",
  format: "PDF + Video",
  size: "25MB"
}, {
  title: "Production Capabilities Deck",
  description: "Detailed overview of services, equipment, and crew",
  format: "PDF",
  size: "8MB"
}, {
  title: "Festival & Awards Documentation",
  description: "Complete list of selections, awards, and press coverage",
  format: "PDF",
  size: "12MB"
}] as any[];
export default function CinebelgicanoHomepage({}: CinebelgicanoHomepageProps) {
  const [bioModalOpen, setBioModalOpen] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
    timeline: ""
  });
  const handleDownloadMaterial = (material: any) => {
    console.log(`Downloading ${material.title}...`);
  };
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactFormData);
    // Reset form
    setContactFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
      timeline: ""
    });
  };
  const handleBookingCalendar = () => {
    console.log("Opening calendar booking...");
  };
  return <div className="min-h-screen bg-white text-gray-900 font-sans relative">
      {/* Fixed Professional Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/282430617021460480/assets/f7cee12c-5a27-430e-a3e8-a6bb4bda1568.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=api-storage%40magicpath.iam.gserviceaccount.com%2F20250628%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250628T174126Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=5d6ccd1c2d1282cb99f6605e0a7c0cba7dca95d2c9dc6f418751463668bf2383aed84f93c40584dca0b46ead5df9fd973ba0d2b6689a2a9da2be3f3ddc7c6aee27553764759fba781fb94e2091bf8ea1c45544a771244f1456152a7c3d23be9c4dc5440d5a78c400a372766d11d0449dd37b31d5215a75b36b75bb0f2608498052def4411601b22e538bfe8ded9b87f896dc0dda2b0eed4017da19a83f43f8b8c479e784a2f0e27e6934385b57e1f80482e202e32eaafcc2a61ca45747b7de5957802fe8eb3bee71868e6e43ecea59427f4325ada3d6ed85a61dd524e7efefcda64ff707c96342d87fc1c34cf9b7597d4b78207feecfc8ad525a04c9bbb2b378" alt="Cinebelgicano Productions logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-lg font-bold text-gray-900">{productionCompany.name}</h1>
              <p className="text-xs text-gray-600">Professional Film Production</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#portfolio" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Portfolio</a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Services</a>
            <a href="#credentials" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Credentials</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
            <Button size="sm" onClick={handleBookingCalendar}>
              <Calendar className="mr-2 h-4 w-4" />
              Book Meeting
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Split Screen */}
      <section className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Director Portrait */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="relative">
              <div className="relative">
                <img src="./portrait.jpg" alt={`Professional portrait of ${directorData.name}`} className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover aspect-[3/4]" />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm font-semibold text-gray-900">Award Winner</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Professional Credentials & Contact */}
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {directorData.name}
                </h1>
                <h2 className="text-xl text-gray-600 mb-4">{directorData.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {directorData.tagline}
                </p>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {directorData.credentials.map((credential, index) => <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-900">{credential}</span>
                  </div>)}
              </div>

              {/* Contact Information */}
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Professional Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-600" />
                    <a href={`mailto:${directorData.contact.email}`} className="text-blue-600 hover:underline">
                      {directorData.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gray-600" />
                    <a href={`tel:${directorData.contact.phone}`} className="text-blue-600 hover:underline">
                      {directorData.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-gray-600" />
                    <span className="text-gray-700">{directorData.contact.location}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1" onClick={handleBookingCalendar}>
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Download className="mr-2 h-5 w-5" />
                  Download Portfolio
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive film production services for documentaries, narratives, and commercial projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => <motion.div key={service.mpid} initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature: string, idx: number) => <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{feature}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <p className="text-lg text-gray-600">Award-winning documentaries and narrative films</p>
          </div>
          <FeaturedFilmsCarousel />
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Projects</h2>
            <p className="text-lg text-gray-600">Active developments and ongoing collaborations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => <Card key={project.mpid} className="border-2 border-gray-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{project.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Timeline:</span>
                      <p className="text-gray-600">{project.timeline}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Budget:</span>
                      <p className="text-gray-600">{project.budget}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Industry Recognition & Credentials */}
      <section id="credentials" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Recognition</h2>
            <p className="text-lg text-gray-600">Awards, partnerships, and professional achievements</p>
          </div>

          <div className="space-y-12">
            {credentials.map((category, categoryIndex) => <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{category.category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item: any, itemIndex: number) => <Card key={item.mpid} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Award className="h-6 w-6 text-yellow-600" />
                          <div>
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                            {item.project && <p className="text-sm text-gray-600">"{item.project}"</p>}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">
                            {item.festival || item.type}
                          </span>
                          <Badge variant="secondary">
                            {item.year || item.duration}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          {item.significance || item.description}
                        </p>
                      </CardContent>
                    </Card>)}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Endorsements</h2>
            <p className="text-lg text-gray-600">What industry professionals say about our work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <motion.div key={testimonial.mpid} initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-gray-400 mb-4" />
                    <blockquote className="text-gray-700 mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Downloadable Portfolio Materials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio Materials</h2>
            <p className="text-lg text-gray-600">Download comprehensive project documentation and capabilities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioMaterials.map((material, index) => <Card key={material.mpid} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{material.title}</CardTitle>
                  <p className="text-gray-600">{material.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Format: {material.format}</span>
                    <span>Size: {material.size}</span>
                  </div>
                  <Button className="w-full" onClick={() => handleDownloadMaterial(material)}>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Gallery</h2>
            <p className="text-lg text-gray-600">Trailers, behind-the-scenes, and project highlights</p>
          </div>
          <VideoGrid />
        </div>
      </section>

      {/* Professional Contact Form & Calendar Booking Footer */}
      <footer id="contact" className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>
              <p className="text-gray-300 mb-8">
                Ready to collaborate? Get in touch to discuss your project requirements and timeline.
              </p>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Name *</Label>
                    <Input id="name" value={contactFormData.name} onChange={e => setContactFormData({
                    ...contactFormData,
                    name: e.target.value
                  })} className="bg-gray-800 border-gray-700 text-white" required />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input id="email" type="email" value={contactFormData.email} onChange={e => setContactFormData({
                    ...contactFormData,
                    email: e.target.value
                  })} className="bg-gray-800 border-gray-700 text-white" required />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-white">Company/Organization</Label>
                    <Input id="company" value={contactFormData.company} onChange={e => setContactFormData({
                    ...contactFormData,
                    company: e.target.value
                  })} className="bg-gray-800 border-gray-700 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="projectType" className="text-white">Project Type</Label>
                    <Select value={contactFormData.projectType} onValueChange={value => setContactFormData({
                    ...contactFormData,
                    projectType: value
                  })}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="documentary">Documentary</SelectItem>
                        <SelectItem value="narrative">Narrative Film</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="co-production">Co-Production</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="timeline" className="text-white">Project Timeline</Label>
                  <Select value={contactFormData.timeline} onValueChange={value => setContactFormData({
                  ...contactFormData,
                  timeline: value
                })}>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                      <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                      <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                      <SelectItem value="long">Long-term (12+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Project Details *</Label>
                  <Textarea id="message" value={contactFormData.message} onChange={e => setContactFormData({
                  ...contactFormData,
                  message: e.target.value
                })} className="bg-gray-800 border-gray-700 text-white min-h-[120px]" placeholder="Tell us about your project, goals, and requirements..." required />
                </div>

                <Button type="submit" size="lg" className="w-full bg-white text-gray-900 hover:bg-gray-100">
                  <Send className="mr-2 h-5 w-5" />
                  Send Project Inquiry
                </Button>
              </form>
            </div>

            {/* Calendar Booking & Company Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Schedule a Meeting</h3>
                <p className="text-gray-300 mb-6">
                  Book a consultation to discuss your project in detail. Available for in-person meetings in Brussels or virtual calls worldwide.
                </p>
                
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">Professional Consultation</h4>
                    <p className="text-gray-300 mb-4">30-60 minute project discussion</p>
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleBookingCalendar}>
                      <Clock className="mr-2 h-5 w-5" />
                      Book Calendar Slot
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Company Information */}
              <div>
                <h4 className="text-xl font-bold mb-4">Company Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-semibold text-white">{productionCompany.name}</p>
                      <p className="text-gray-300">Independent Film Production</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-300">Brussels, Belgium</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <a href="mailto:info@cinebelgicano.com" className="text-blue-400 hover:underline">
                      info@cinebelgicano.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <a href="tel:+3221234567" className="text-blue-400 hover:underline">
                      +32 2 123 4567
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-6">
                  <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
                    <a href={productionCompany.social.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
                    <a href={productionCompany.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white">
                    <a href={productionCompany.social.youtube} target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 {productionCompany.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
}