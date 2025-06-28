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
export interface CinebelgicanoHomepageProps {
  mpid?: string;
}

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
  icon: Video,
  mpid: "bef9ed91-0465-487e-a4af-f80654974fd5"
}, {
  title: "Equipment & Crew",
  description: "Professional-grade equipment and experienced crew for hire",
  features: ["4K cameras", "Audio equipment", "Lighting packages", "Experienced operators"],
  icon: Camera,
  mpid: "3be33242-135c-4cef-b10c-f7094fda622f"
}, {
  title: "Co-Production",
  description: "International co-production partnerships and funding assistance",
  features: ["Funding applications", "International partnerships", "Distribution networks", "Festival strategy"],
  icon: Users,
  mpid: "a18b5e3c-a1c4-4af8-a3d0-3c119f2a88e5"
}, {
  title: "Consultation",
  description: "Creative and business consultation for film projects",
  features: ["Script development", "Production planning", "Distribution strategy", "Festival submissions"],
  icon: Briefcase,
  mpid: "67efec67-9847-408d-8c0f-3ba14a9ba948"
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
  budget: "€150,000",
  mpid: "23125be9-8b7c-4190-863e-a029a4b80205"
}, {
  title: "Kinolatino Festival 2024",
  description: "Co-organizing the annual celebration of Latin American cinema",
  status: "Ongoing",
  timeline: "Year-round",
  budget: "€75,000",
  mpid: "7afc34d4-838f-4ad6-90cf-edf4e589b9b9"
}] as any[];
const credentials = [{
  category: "Awards & Recognition",
  items: [{
    name: "Best Documentary",
    project: "Dying For Life",
    festival: "Brussels Film Festival",
    year: "2023",
    significance: "Major European festival recognition",
    mpid: "7c4fb06f-6c08-48cc-a05d-a1b782b170b3"
  }, {
    name: "Audience Choice",
    project: "El Color Del Camaleon",
    festival: "Kinolatino",
    year: "2022",
    significance: "Community impact and engagement",
    mpid: "56a324db-36b4-432e-8808-f8c56ae6d932"
  }, {
    name: "Special Mention",
    project: "The Pride Liar",
    festival: "IDFA",
    year: "2021",
    significance: "International documentary recognition",
    mpid: "214c09a6-7762-4f9b-a09e-5823784dd5cd"
  }],
  mpid: "90500229-e0b7-4151-82a4-ce1eaab04d87"
}, {
  category: "Industry Partnerships",
  items: [{
    name: "Al-Jazeera Witness",
    type: "Broadcasting Partner",
    description: "Regular contributor for documentary content",
    duration: "2020-Present",
    mpid: "d6bee28d-9617-4acd-bd1d-4fef5d6c5461"
  }, {
    name: "VAF (Flanders Audiovisual Fund)",
    type: "Funding Partner",
    description: "Supported projects and development funding",
    duration: "2019-Present",
    mpid: "14a1fdab-98bf-4aed-b1c6-237cff8f62ab"
  }, {
    name: "Off World Productions",
    type: "Co-Production Partner",
    description: "International co-production collaborations",
    duration: "2018-Present",
    mpid: "4408161f-a7a4-41e4-a2b7-6da1a412bff9"
  }],
  mpid: "40c6f2e6-12a0-4fd5-a6a8-b1edf6ff16ff"
}] as any[];
const testimonials = [{
  quote: "Andrés brings a unique perspective to documentary filmmaking that resonates with international audiences while maintaining authentic cultural narratives.",
  author: "Maria Rodriguez",
  title: "Festival Director, Kinolatino",
  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  mpid: "c1316954-9ebf-4373-bde1-a89c1be34dc7"
}, {
  quote: "Working with Cinebelgicano Productions has been exceptional. Their attention to detail and cultural sensitivity makes them ideal partners for international projects.",
  author: "Jean-Pierre Dubois",
  title: "Producer, Off World Productions",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  mpid: "9bd3f4b8-b9b3-41f4-98df-0d7fb2bacf60"
}, {
  quote: "The quality and authenticity of Andrés' work consistently meets our editorial standards for international documentary programming.",
  author: "Sarah Ahmed",
  title: "Commissioning Editor, Al-Jazeera Witness",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  mpid: "25427f82-9b6a-4613-81be-6228322aa8e0"
}] as any[];
const portfolioMaterials = [{
  title: "Complete Portfolio & Reel",
  description: "Comprehensive showcase of recent work and capabilities",
  format: "PDF + Video",
  size: "25MB",
  mpid: "9f12519b-949f-4554-b246-ae5d14592945"
}, {
  title: "Production Capabilities Deck",
  description: "Detailed overview of services, equipment, and crew",
  format: "PDF",
  size: "8MB",
  mpid: "89d903e9-815d-4551-90ed-3bc91e19af28"
}, {
  title: "Festival & Awards Documentation",
  description: "Complete list of selections, awards, and press coverage",
  format: "PDF",
  size: "12MB",
  mpid: "c397f91f-b055-47c3-b0b6-8f0847073fb6"
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
  return <div className="min-h-screen bg-white text-gray-900 font-sans relative" data-magicpath-id="0" data-magicpath-path="CinebelgicanoHomepage.tsx">
      {/* Fixed Professional Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm" data-magicpath-id="1" data-magicpath-path="CinebelgicanoHomepage.tsx">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between" data-magicpath-id="2" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div className="flex items-center gap-3" data-magicpath-id="3" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/282430617021460480/assets/f7cee12c-5a27-430e-a3e8-a6bb4bda1568.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=api-storage%40magicpath.iam.gserviceaccount.com%2F20250628%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250628T174126Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=5d6ccd1c2d1282cb99f6605e0a7c0cba7dca95d2c9dc6f418751463668bf2383aed84f93c40584dca0b46ead5df9fd973ba0d2b6689a2a9da2be3f3ddc7c6aee27553764759fba781fb94e2091bf8ea1c45544a771244f1456152a7c3d23be9c4dc5440d5a78c400a372766d11d0449dd37b31d5215a75b36b75bb0f2608498052def4411601b22e538bfe8ded9b87f896dc0dda2b0eed4017da19a83f43f8b8c479e784a2f0e27e6934385b57e1f80482e202e32eaafcc2a61ca45747b7de5957802fe8eb3bee71868e6e43ecea59427f4325ada3d6ed85a61dd524e7efefcda64ff707c96342d87fc1c34cf9b7597d4b78207feecfc8ad525a04c9bbb2b378" alt="Cinebelgicano Productions logo" className="w-10 h-10 object-contain" data-magicpath-id="4" data-magicpath-path="CinebelgicanoHomepage.tsx" />
            <div data-magicpath-id="5" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <h1 className="text-lg font-bold text-gray-900" data-magicpath-id="6" data-magicpath-path="CinebelgicanoHomepage.tsx">{productionCompany.name}</h1>
              <p className="text-xs text-gray-600" data-magicpath-id="7" data-magicpath-path="CinebelgicanoHomepage.tsx">Professional Film Production</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6" data-magicpath-id="8" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <a href="#portfolio" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Portfolio</a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Services</a>
            <a href="#credentials" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Credentials</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
            <Button size="sm" onClick={handleBookingCalendar} data-magicpath-id="9" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <Calendar className="mr-2 h-4 w-4" data-magicpath-id="10" data-magicpath-path="CinebelgicanoHomepage.tsx" />
              Book Meeting
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Split Screen */}
      <section className="pt-20 min-h-screen flex items-center" data-magicpath-id="11" data-magicpath-path="CinebelgicanoHomepage.tsx">
        <div className="max-w-7xl mx-auto px-4 py-16" data-magicpath-id="12" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div className="grid lg:grid-cols-2 gap-12 items-center" data-magicpath-id="13" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {/* Director Portrait */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="relative" data-magicpath-id="14" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <div className="relative" data-magicpath-id="15" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/282430617021460480/assets/53644478-cb75-4854-b180-b984cde5cf44.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=api-storage%40magicpath.iam.gserviceaccount.com%2F20250628%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250628T173932Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=5d9aa9af3e43425b61a0d354919e11f6be1f73287bee2672db6c826c0caf712f9e0c2e6633e2a9c33fcbe95e072bed68b462632eae81fb64cce61a7176eb3c2850524586a2d53964a1ba2eeecff74b2b1410412557b537fbd03c94a746a28b511f721ea520e2cf2323f9fe3e5e08347bd4b9d6342e4c8e1ad6b7f3eb7e031a18a5aad0e1e00cb3f34ccbdb881841158877d61578f58e19cb1ce324062eccecd140e1f9866fde5f25c1b7ab217c16e280908b74cb9f751257eef940f063906582d79196a091f9b065cceb5bd3b48d42c0aa00e720dc52cffd2adf97609f03ddeac14f6869e9c09487dea03cff3991db9bb89e179564acc61a46a24dd9f1d154bf" alt={`Professional portrait of ${directorData.name}`} className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover aspect-[3/4]" data-magicpath-id="16" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border" data-magicpath-id="17" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <div className="flex items-center gap-2" data-magicpath-id="18" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Award className="h-5 w-5 text-yellow-600" data-magicpath-id="19" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    <span className="text-sm font-semibold text-gray-900" data-magicpath-id="20" data-magicpath-path="CinebelgicanoHomepage.tsx">Award Winner</span>
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
          }} className="space-y-8" data-magicpath-id="21" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <div data-magicpath-id="22" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2" data-magicpath-id="23" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  {directorData.name}
                </h1>
                <h2 className="text-xl text-gray-600 mb-4" data-magicpath-id="24" data-magicpath-path="CinebelgicanoHomepage.tsx">{directorData.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6" data-magicpath-id="25" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  {directorData.tagline}
                </p>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-magicpath-id="26" data-magicpath-path="CinebelgicanoHomepage.tsx">
                {directorData.credentials.map((credential, index) => <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg" data-magicpath-id="27" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" data-magicpath-id="28" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    <span className="text-sm font-medium text-gray-900" data-magicpath-id="29" data-magicpath-path="CinebelgicanoHomepage.tsx">{credential}</span>
                  </div>)}
              </div>

              {/* Contact Information */}
              <Card className="border-2 border-gray-200" data-magicpath-id="30" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <CardHeader data-magicpath-id="31" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <CardTitle className="flex items-center gap-2" data-magicpath-id="32" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <User className="h-5 w-5" data-magicpath-id="33" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    Professional Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3" data-magicpath-id="34" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <div className="flex items-center gap-3" data-magicpath-id="35" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Mail className="h-4 w-4 text-gray-600" data-magicpath-id="36" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    <a href={`mailto:${directorData.contact.email}`} className="text-blue-600 hover:underline">
                      {directorData.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3" data-magicpath-id="37" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Phone className="h-4 w-4 text-gray-600" data-magicpath-id="38" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    <a href={`tel:${directorData.contact.phone}`} className="text-blue-600 hover:underline">
                      {directorData.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3" data-magicpath-id="39" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <MapPin className="h-4 w-4 text-gray-600" data-magicpath-id="40" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    <span className="text-gray-700" data-magicpath-id="41" data-magicpath-path="CinebelgicanoHomepage.tsx">{directorData.contact.location}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4" data-magicpath-id="42" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <Button size="lg" className="flex-1" onClick={handleBookingCalendar} data-magicpath-id="43" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Calendar className="mr-2 h-5 w-5" data-magicpath-id="44" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="flex-1" data-magicpath-id="45" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Download className="mr-2 h-5 w-5" data-magicpath-id="46" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  Download Portfolio
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50" data-magicpath-id="47" data-magicpath-path="CinebelgicanoHomepage.tsx">
        <div className="max-w-7xl mx-auto px-4" data-magicpath-id="48" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div className="text-center mb-16" data-magicpath-id="49" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-magicpath-id="50" data-magicpath-path="CinebelgicanoHomepage.tsx">Professional Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-magicpath-id="51" data-magicpath-path="CinebelgicanoHomepage.tsx">
              Comprehensive film production services for documentaries, narratives, and commercial projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-magicpath-id="52" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {services.map((service, index) => <motion.div key={service.mpid} initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} data-magicpath-id="53" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <Card className="h-full hover:shadow-lg transition-shadow" data-magicpath-id="54" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <CardHeader data-magicpath-id="55" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <div className="flex items-center gap-3 mb-3" data-magicpath-id="56" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <div className="p-2 bg-blue-100 rounded-lg" data-magicpath-id="57" data-magicpath-path="CinebelgicanoHomepage.tsx">
                        <service.icon className="h-6 w-6 text-blue-600" data-magicpath-id="58" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                      </div>
                      <CardTitle className="text-lg" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="59" data-magicpath-path="CinebelgicanoHomepage.tsx">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600" data-magicpath-uuid={(service as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="60" data-magicpath-path="CinebelgicanoHomepage.tsx">{service.description}</p>
                  </CardHeader>
                  <CardContent data-magicpath-id="61" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <ul className="space-y-2" data-magicpath-id="62" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      {service.features.map((feature: string, idx: number) => <li key={idx} className="flex items-center gap-2 text-sm" data-magicpath-id="63" data-magicpath-path="CinebelgicanoHomepage.tsx">
                          <CheckCircle className="h-4 w-4 text-green-600" data-magicpath-id="64" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                          <span data-magicpath-id="65" data-magicpath-path="CinebelgicanoHomepage.tsx">{feature}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20" data-magicpath-id="66" data-magicpath-path="CinebelgicanoHomepage.tsx">
        <div className="max-w-7xl mx-auto px-4" data-magicpath-id="67" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div className="text-center mb-16" data-magicpath-id="68" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-magicpath-id="69" data-magicpath-path="CinebelgicanoHomepage.tsx">Portfolio</h2>
            <p className="text-lg text-gray-600" data-magicpath-id="70" data-magicpath-path="CinebelgicanoHomepage.tsx">Award-winning documentaries and narrative films</p>
          </div>
          <FeaturedFilmsCarousel data-magicpath-id="71" data-magicpath-path="CinebelgicanoHomepage.tsx" />
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-gray-50" data-magicpath-id="72" data-magicpath-path="CinebelgicanoHomepage.tsx">
        <div className="max-w-7xl mx-auto px-4" data-magicpath-id="73" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div className="text-center mb-16" data-magicpath-id="74" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-magicpath-id="75" data-magicpath-path="CinebelgicanoHomepage.tsx">Current Projects</h2>
            <p className="text-lg text-gray-600" data-magicpath-id="76" data-magicpath-path="CinebelgicanoHomepage.tsx">Active developments and ongoing collaborations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8" data-magicpath-id="77" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {currentProjects.map((project, index) => <Card key={project.mpid} className="border-2 border-gray-200" data-magicpath-id="78" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <CardHeader data-magicpath-id="79" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <div className="flex items-center justify-between" data-magicpath-id="80" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <CardTitle className="text-xl" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="81" data-magicpath-path="CinebelgicanoHomepage.tsx">{project.title}</CardTitle>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="status:unknown" data-magicpath-id="82" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4" data-magicpath-id="83" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <p className="text-gray-600" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="84" data-magicpath-path="CinebelgicanoHomepage.tsx">{project.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm" data-magicpath-id="85" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <div data-magicpath-id="86" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <span className="font-medium text-gray-900" data-magicpath-id="87" data-magicpath-path="CinebelgicanoHomepage.tsx">Timeline:</span>
                      <p className="text-gray-600" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="timeline:unknown" data-magicpath-id="88" data-magicpath-path="CinebelgicanoHomepage.tsx">{project.timeline}</p>
                    </div>
                    <div data-magicpath-id="89" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <span className="font-medium text-gray-900" data-magicpath-id="90" data-magicpath-path="CinebelgicanoHomepage.tsx">Budget:</span>
                      <p className="text-gray-600" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="budget:unknown" data-magicpath-id="91" data-magicpath-path="CinebelgicanoHomepage.tsx">{project.budget}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Industry Recognition & Credentials */}
      <section id="credentials" className="py-20" data-magicpath-id="92" data-magicpath-path="CinebelgicanoHomepage.tsx">
        <div className="max-w-7xl mx-auto px-4" data-magicpath-id="93" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div className="text-center mb-16" data-magicpath-id="94" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-magicpath-id="95" data-magicpath-path="CinebelgicanoHomepage.tsx">Industry Recognition</h2>
            <p className="text-lg text-gray-600" data-magicpath-id="96" data-magicpath-path="CinebelgicanoHomepage.tsx">Awards, partnerships, and professional achievements</p>
          </div>

          <div className="space-y-12" data-magicpath-id="97" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {credentials.map((category, categoryIndex) => <div key={categoryIndex} data-magicpath-id="98" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <h3 className="text-2xl font-bold text-gray-900 mb-8" data-magicpath-uuid={(category as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:unknown" data-magicpath-id="99" data-magicpath-path="CinebelgicanoHomepage.tsx">{category.category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-magicpath-id="100" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  {category.items.map((item: any, itemIndex: number) => <Card key={item.mpid} className="hover:shadow-lg transition-shadow" data-magicpath-id="101" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <CardHeader data-magicpath-id="102" data-magicpath-path="CinebelgicanoHomepage.tsx">
                        <div className="flex items-center gap-3" data-magicpath-id="103" data-magicpath-path="CinebelgicanoHomepage.tsx">
                          <Award className="h-6 w-6 text-yellow-600" data-magicpath-id="104" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                          <div data-magicpath-id="105" data-magicpath-path="CinebelgicanoHomepage.tsx">
                            <CardTitle className="text-lg" data-magicpath-id="106" data-magicpath-path="CinebelgicanoHomepage.tsx">{item.name}</CardTitle>
                            {item.project && <p className="text-sm text-gray-600" data-magicpath-id="107" data-magicpath-path="CinebelgicanoHomepage.tsx">"{item.project}"</p>}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3" data-magicpath-id="108" data-magicpath-path="CinebelgicanoHomepage.tsx">
                        <div className="flex items-center justify-between" data-magicpath-id="109" data-magicpath-path="CinebelgicanoHomepage.tsx">
                          <span className="font-medium text-gray-900" data-magicpath-id="110" data-magicpath-path="CinebelgicanoHomepage.tsx">
                            {item.festival || item.type}
                          </span>
                          <Badge variant="secondary" data-magicpath-id="111" data-magicpath-path="CinebelgicanoHomepage.tsx">
                            {item.year || item.duration}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600" data-magicpath-id="112" data-magicpath-path="CinebelgicanoHomepage.tsx">
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
      <section className="py-20 bg-gray-50" data-magicpath-id="113" data-magicpath-path="CinebelgicanoHomepage.tsx">
        <div className="max-w-7xl mx-auto px-4" data-magicpath-id="114" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div className="text-center mb-16" data-magicpath-id="115" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-magicpath-id="116" data-magicpath-path="CinebelgicanoHomepage.tsx">Industry Endorsements</h2>
            <p className="text-lg text-gray-600" data-magicpath-id="117" data-magicpath-path="CinebelgicanoHomepage.tsx">What industry professionals say about our work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-magicpath-id="118" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {testimonials.map((testimonial, index) => <motion.div key={testimonial.mpid} initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} data-magicpath-id="119" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <Card className="h-full" data-magicpath-id="120" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <CardContent className="p-6" data-magicpath-id="121" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Quote className="h-8 w-8 text-gray-400 mb-4" data-magicpath-id="122" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    <blockquote className="text-gray-700 mb-6 italic" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="quote:unknown" data-magicpath-id="123" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3" data-magicpath-id="124" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <Avatar data-magicpath-id="125" data-magicpath-path="CinebelgicanoHomepage.tsx">
                        <AvatarImage src={testimonial.image} alt={testimonial.author} data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="126" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                        <AvatarFallback data-magicpath-id="127" data-magicpath-path="CinebelgicanoHomepage.tsx">{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div data-magicpath-id="128" data-magicpath-path="CinebelgicanoHomepage.tsx">
                        <p className="font-semibold text-gray-900" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="author:unknown" data-magicpath-id="129" data-magicpath-path="CinebelgicanoHomepage.tsx">{testimonial.author}</p>
                        <p className="text-sm text-gray-600" data-magicpath-uuid={(testimonial as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="130" data-magicpath-path="CinebelgicanoHomepage.tsx">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Downloadable Portfolio Materials */}
      <section className="py-20" data-magicpath-id="131" data-magicpath-path="CinebelgicanoHomepage.tsx">
        <div className="max-w-7xl mx-auto px-4" data-magicpath-id="132" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div className="text-center mb-16" data-magicpath-id="133" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-magicpath-id="134" data-magicpath-path="CinebelgicanoHomepage.tsx">Portfolio Materials</h2>
            <p className="text-lg text-gray-600" data-magicpath-id="135" data-magicpath-path="CinebelgicanoHomepage.tsx">Download comprehensive project documentation and capabilities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-magicpath-id="136" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {portfolioMaterials.map((material, index) => <Card key={material.mpid} className="text-center hover:shadow-lg transition-shadow" data-magicpath-id="137" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <CardHeader data-magicpath-id="138" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" data-magicpath-id="139" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  <CardTitle className="text-lg" data-magicpath-uuid={(material as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="140" data-magicpath-path="CinebelgicanoHomepage.tsx">{material.title}</CardTitle>
                  <p className="text-gray-600" data-magicpath-uuid={(material as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="141" data-magicpath-path="CinebelgicanoHomepage.tsx">{material.description}</p>
                </CardHeader>
                <CardContent className="space-y-4" data-magicpath-id="142" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <div className="flex justify-between text-sm text-gray-600" data-magicpath-id="143" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <span data-magicpath-uuid={(material as any)["mpid"] ?? "unsafe"} data-magicpath-field="format:unknown" data-magicpath-id="144" data-magicpath-path="CinebelgicanoHomepage.tsx">Format: {material.format}</span>
                    <span data-magicpath-uuid={(material as any)["mpid"] ?? "unsafe"} data-magicpath-field="size:unknown" data-magicpath-id="145" data-magicpath-path="CinebelgicanoHomepage.tsx">Size: {material.size}</span>
                  </div>
                  <Button className="w-full" onClick={() => handleDownloadMaterial(material)} data-magicpath-id="146" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Download className="mr-2 h-4 w-4" data-magicpath-id="147" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    Download
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-gray-50" data-magicpath-id="148" data-magicpath-path="CinebelgicanoHomepage.tsx">
        <div className="max-w-7xl mx-auto px-4" data-magicpath-id="149" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div className="text-center mb-16" data-magicpath-id="150" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-magicpath-id="151" data-magicpath-path="CinebelgicanoHomepage.tsx">Video Gallery</h2>
            <p className="text-lg text-gray-600" data-magicpath-id="152" data-magicpath-path="CinebelgicanoHomepage.tsx">Trailers, behind-the-scenes, and project highlights</p>
          </div>
          <VideoGrid data-magicpath-id="153" data-magicpath-path="CinebelgicanoHomepage.tsx" />
        </div>
      </section>

      {/* Professional Contact Form & Calendar Booking Footer */}
      <footer id="contact" className="bg-gray-900 text-white" data-magicpath-id="154" data-magicpath-path="CinebelgicanoHomepage.tsx">
        <div className="max-w-7xl mx-auto px-4 py-16" data-magicpath-id="155" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div className="grid lg:grid-cols-2 gap-12" data-magicpath-id="156" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {/* Contact Form */}
            <div data-magicpath-id="157" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <h3 className="text-2xl font-bold mb-6" data-magicpath-id="158" data-magicpath-path="CinebelgicanoHomepage.tsx">Start Your Project</h3>
              <p className="text-gray-300 mb-8" data-magicpath-id="159" data-magicpath-path="CinebelgicanoHomepage.tsx">
                Ready to collaborate? Get in touch to discuss your project requirements and timeline.
              </p>
              
              <form onSubmit={handleContactSubmit} className="space-y-6" data-magicpath-id="160" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <div className="grid md:grid-cols-2 gap-4" data-magicpath-id="161" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <div data-magicpath-id="162" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Label htmlFor="name" className="text-white" data-magicpath-id="163" data-magicpath-path="CinebelgicanoHomepage.tsx">Name *</Label>
                    <Input id="name" value={contactFormData.name} onChange={e => setContactFormData({
                    ...contactFormData,
                    name: e.target.value
                  })} className="bg-gray-800 border-gray-700 text-white" required data-magicpath-id="164" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  </div>
                  <div data-magicpath-id="165" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Label htmlFor="email" className="text-white" data-magicpath-id="166" data-magicpath-path="CinebelgicanoHomepage.tsx">Email *</Label>
                    <Input id="email" type="email" value={contactFormData.email} onChange={e => setContactFormData({
                    ...contactFormData,
                    email: e.target.value
                  })} className="bg-gray-800 border-gray-700 text-white" required data-magicpath-id="167" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4" data-magicpath-id="168" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <div data-magicpath-id="169" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Label htmlFor="company" className="text-white" data-magicpath-id="170" data-magicpath-path="CinebelgicanoHomepage.tsx">Company/Organization</Label>
                    <Input id="company" value={contactFormData.company} onChange={e => setContactFormData({
                    ...contactFormData,
                    company: e.target.value
                  })} className="bg-gray-800 border-gray-700 text-white" data-magicpath-id="171" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  </div>
                  <div data-magicpath-id="172" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Label htmlFor="projectType" className="text-white" data-magicpath-id="173" data-magicpath-path="CinebelgicanoHomepage.tsx">Project Type</Label>
                    <Select value={contactFormData.projectType} onValueChange={value => setContactFormData({
                    ...contactFormData,
                    projectType: value
                  })}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white" data-magicpath-id="174" data-magicpath-path="CinebelgicanoHomepage.tsx">
                        <SelectValue placeholder="Select project type" data-magicpath-id="175" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                      </SelectTrigger>
                      <SelectContent data-magicpath-id="176" data-magicpath-path="CinebelgicanoHomepage.tsx">
                        <SelectItem value="documentary" data-magicpath-id="177" data-magicpath-path="CinebelgicanoHomepage.tsx">Documentary</SelectItem>
                        <SelectItem value="narrative" data-magicpath-id="178" data-magicpath-path="CinebelgicanoHomepage.tsx">Narrative Film</SelectItem>
                        <SelectItem value="commercial" data-magicpath-id="179" data-magicpath-path="CinebelgicanoHomepage.tsx">Commercial</SelectItem>
                        <SelectItem value="co-production" data-magicpath-id="180" data-magicpath-path="CinebelgicanoHomepage.tsx">Co-Production</SelectItem>
                        <SelectItem value="consultation" data-magicpath-id="181" data-magicpath-path="CinebelgicanoHomepage.tsx">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div data-magicpath-id="182" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Label htmlFor="timeline" className="text-white" data-magicpath-id="183" data-magicpath-path="CinebelgicanoHomepage.tsx">Project Timeline</Label>
                  <Select value={contactFormData.timeline} onValueChange={value => setContactFormData({
                  ...contactFormData,
                  timeline: value
                })}>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white" data-magicpath-id="184" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <SelectValue placeholder="Select timeline" data-magicpath-id="185" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    </SelectTrigger>
                    <SelectContent data-magicpath-id="186" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <SelectItem value="immediate" data-magicpath-id="187" data-magicpath-path="CinebelgicanoHomepage.tsx">Immediate (1-3 months)</SelectItem>
                      <SelectItem value="short" data-magicpath-id="188" data-magicpath-path="CinebelgicanoHomepage.tsx">Short-term (3-6 months)</SelectItem>
                      <SelectItem value="medium" data-magicpath-id="189" data-magicpath-path="CinebelgicanoHomepage.tsx">Medium-term (6-12 months)</SelectItem>
                      <SelectItem value="long" data-magicpath-id="190" data-magicpath-path="CinebelgicanoHomepage.tsx">Long-term (12+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div data-magicpath-id="191" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Label htmlFor="message" className="text-white" data-magicpath-id="192" data-magicpath-path="CinebelgicanoHomepage.tsx">Project Details *</Label>
                  <Textarea id="message" value={contactFormData.message} onChange={e => setContactFormData({
                  ...contactFormData,
                  message: e.target.value
                })} className="bg-gray-800 border-gray-700 text-white min-h-[120px]" placeholder="Tell us about your project, goals, and requirements..." required data-magicpath-id="193" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-white text-gray-900 hover:bg-gray-100" data-magicpath-id="194" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Send className="mr-2 h-5 w-5" data-magicpath-id="195" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  Send Project Inquiry
                </Button>
              </form>
            </div>

            {/* Calendar Booking & Company Info */}
            <div className="space-y-8" data-magicpath-id="196" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <div data-magicpath-id="197" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <h3 className="text-2xl font-bold mb-6" data-magicpath-id="198" data-magicpath-path="CinebelgicanoHomepage.tsx">Schedule a Meeting</h3>
                <p className="text-gray-300 mb-6" data-magicpath-id="199" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  Book a consultation to discuss your project in detail. Available for in-person meetings in Brussels or virtual calls worldwide.
                </p>
                
                <Card className="bg-gray-800 border-gray-700" data-magicpath-id="200" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <CardContent className="p-6 text-center" data-magicpath-id="201" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Calendar className="h-12 w-12 text-blue-400 mx-auto mb-4" data-magicpath-id="202" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    <h4 className="text-lg font-semibold text-white mb-2" data-magicpath-id="203" data-magicpath-path="CinebelgicanoHomepage.tsx">Professional Consultation</h4>
                    <p className="text-gray-300 mb-4" data-magicpath-id="204" data-magicpath-path="CinebelgicanoHomepage.tsx">30-60 minute project discussion</p>
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleBookingCalendar} data-magicpath-id="205" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <Clock className="mr-2 h-5 w-5" data-magicpath-id="206" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                      Book Calendar Slot
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Company Information */}
              <div data-magicpath-id="207" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <h4 className="text-xl font-bold mb-4" data-magicpath-id="208" data-magicpath-path="CinebelgicanoHomepage.tsx">Company Information</h4>
                <div className="space-y-4" data-magicpath-id="209" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <div className="flex items-center gap-3" data-magicpath-id="210" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Building className="h-5 w-5 text-gray-400" data-magicpath-id="211" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    <div data-magicpath-id="212" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <p className="font-semibold text-white" data-magicpath-id="213" data-magicpath-path="CinebelgicanoHomepage.tsx">{productionCompany.name}</p>
                      <p className="text-gray-300" data-magicpath-id="214" data-magicpath-path="CinebelgicanoHomepage.tsx">Independent Film Production</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3" data-magicpath-id="215" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <MapPin className="h-5 w-5 text-gray-400" data-magicpath-id="216" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    <span className="text-gray-300" data-magicpath-id="217" data-magicpath-path="CinebelgicanoHomepage.tsx">Brussels, Belgium</span>
                  </div>
                  
                  <div className="flex items-center gap-3" data-magicpath-id="218" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Mail className="h-5 w-5 text-gray-400" data-magicpath-id="219" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    <a href="mailto:info@cinebelgicano.com" className="text-blue-400 hover:underline">
                      info@cinebelgicano.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3" data-magicpath-id="220" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Phone className="h-5 w-5 text-gray-400" data-magicpath-id="221" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    <a href="tel:+3221234567" className="text-blue-400 hover:underline">
                      +32 2 123 4567
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-6" data-magicpath-id="222" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white" data-magicpath-id="223" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <a href={productionCompany.social.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5" data-magicpath-id="224" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white" data-magicpath-id="225" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <a href={productionCompany.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" data-magicpath-id="226" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white" data-magicpath-id="227" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <a href={productionCompany.social.youtube} target="_blank" rel="noopener noreferrer">
                      <Youtube className="h-5 w-5" data-magicpath-id="228" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" data-magicpath-id="229" data-magicpath-path="CinebelgicanoHomepage.tsx" />
          
          <div className="text-center text-gray-400" data-magicpath-id="230" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <p data-magicpath-id="231" data-magicpath-path="CinebelgicanoHomepage.tsx">&copy; 2024 {productionCompany.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
}