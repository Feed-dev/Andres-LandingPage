"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Play, Download, Facebook, Linkedin, Youtube, Mail, Award, ExternalLink, ChevronRight, MapPin, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import FeaturedFilmsCarousel from "./FeaturedFilmsCarousel";
import VideoGrid from "./VideoGrid";
import ImageGallerySlider from "./ImageGallerySlider";
export interface CinebelgicanoHomepageProps {
  mpid?: string;
}

// Mock data for the homepage
const directorData = {
  name: "Andrés Lübbert",
  tagline: "Award-winning filmmaker bridging Latin American stories with global audiences",
  bio: "Andrés Lübbert is a Chilean-Belgian filmmaker whose work explores themes of identity, migration, and cultural intersection. His documentaries have been featured at international film festivals and broadcast on major networks including Al-Jazeera Witness.",
  fullBio: "Andrés Lübbert is a Chilean-Belgian filmmaker whose work explores themes of identity, migration, and cultural intersection. His documentaries have been featured at international film festivals and broadcast on major networks including Al-Jazeera Witness. Born in Chile and based in Belgium, Lübbert brings a unique perspective to his storytelling, often focusing on the experiences of Latin American communities in Europe. His films have received critical acclaim for their intimate portrayal of personal stories within larger social contexts. As co-organizer of the Kinolatino festival, he continues to champion Latin American cinema and foster cultural exchange through film.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face",
  quickFacts: ["Chilean-Belgian filmmaker", "Al-Jazeera Witness contributor", "Kinolatino festival co-organizer", "Award-winning documentarian"]
};
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
  mpid: "c9caa775-f085-410e-8f89-6aa7d5865d5e"
}, {
  title: "Kinolatino Festival 2024",
  description: "Co-organizing the annual celebration of Latin American cinema",
  status: "Ongoing",
  mpid: "0a852879-6974-4c8c-bb81-d934895be5e4"
}] as any[];
const awards = [{
  name: "Best Documentary",
  festival: "Brussels Film Festival",
  year: "2023",
  mpid: "dcd3155c-4732-423b-b4de-1d312acefeed"
}, {
  name: "Audience Choice",
  festival: "Kinolatino",
  year: "2022",
  mpid: "06702f91-e311-4a43-b1ba-56c049ebf624"
}, {
  name: "Special Mention",
  festival: "IDFA",
  year: "2021",
  mpid: "89cb4fbc-a887-41cb-adbe-588702451480"
}, {
  name: "Best Director",
  festival: "Latin Film Festival",
  year: "2020",
  mpid: "99e7adfd-f70c-45aa-9c5b-df967f963e28"
}] as any[];
const partners = [{
  name: "Off World",
  logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
  mpid: "f9e14869-7458-4689-9fcf-fee8d940cfe3"
}, {
  name: "VAF",
  logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
  mpid: "0d2124fb-f56f-4a8e-b2d0-f3d464ee67d5"
}, {
  name: "Al-Jazeera Witness",
  logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
  mpid: "e3f2c71d-4aec-4a3e-bbca-d41235c8109a"
}] as any[];
export default function CinebelgicanoHomepage({}: CinebelgicanoHomepageProps) {
  const [bioModalOpen, setBioModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const handleDownloadPressKit = () => {
    // In a real app, this would trigger a PDF download
    console.log("Downloading press kit...");
  };
  const handleWatchTrailer = () => {
    // In a real app, this would open a video modal or navigate to trailer
    console.log("Opening trailer...");
  };
  return <div className="min-h-screen bg-background" data-magicpath-id="0" data-magicpath-path="CinebelgicanoHomepage.tsx">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" data-magicpath-id="1" data-magicpath-path="CinebelgicanoHomepage.tsx">
        <div className="absolute inset-0 z-0" data-magicpath-id="2" data-magicpath-path="CinebelgicanoHomepage.tsx">
          {!imageError ? <img src="https://storage.googleapis.com/storage.magicpath.ai/user/282430617021460480/assets/a961d822-628f-4f59-b2f6-f8a5f09393af.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=api-storage%40magicpath.iam.gserviceaccount.com%2F20250628%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250628T080522Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=6852b9e3ebb2586a4988e5d15e728ff5c96c4202ba82263f306df26691739c672bc3daecb74e2cf97e668db4a76488492dea00edb019f90bb37e955dbc9f58669026b909bb39a268bea40e3528a3dee1e878176663c12f403fe73a6ee456ac6d28c3cef2dfdce34ef1513b94ed88821b44b3e0913605bc346765fbb2178fb69d5b8019ff0916382b2325e85c16ad54e87c497ba993d1e1be7e9ad5f47ca1fc0acbfc522cce52ad160192ead57cec09180fbeb15d9371ced5f4b24d35718b9b2ac491c70ed6777e7a564daf877c319a591c40894145f72705ac245563a263fc9ebd2b89d86de25c050aacc0e2829cdc72d7b3cf9b23d1d9747cded4685953fa86" alt={`Portrait of ${directorData.name}`} className="w-full h-full object-cover" onError={() => setImageError(true)} data-magicpath-id="3" data-magicpath-path="CinebelgicanoHomepage.tsx" /> : <div className="w-full h-full bg-muted flex items-center justify-center" data-magicpath-id="4" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <Skeleton className="w-full h-full" data-magicpath-id="5" data-magicpath-path="CinebelgicanoHomepage.tsx" />
            </div>}
          <div className="absolute inset-0 bg-black/40" data-magicpath-id="6" data-magicpath-path="CinebelgicanoHomepage.tsx" />
        </div>
        
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="relative z-10 text-center text-white max-w-4xl mx-auto px-4" data-magicpath-id="7" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-magicpath-id="8" data-magicpath-path="CinebelgicanoHomepage.tsx">{directorData.name}</h1>
          <p className="text-xl md:text-2xl mb-8 font-light" data-magicpath-id="9" data-magicpath-path="CinebelgicanoHomepage.tsx">{directorData.tagline}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm" data-magicpath-id="10" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {directorData.quickFacts.map((fact, index) => <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3" data-magicpath-id="11" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <span data-magicpath-id="12" data-magicpath-path="CinebelgicanoHomepage.tsx">{fact}</span>
              </div>)}
          </div>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleWatchTrailer} data-magicpath-id="13" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <Play className="mr-2 h-5 w-5" data-magicpath-id="14" data-magicpath-path="CinebelgicanoHomepage.tsx" />
            Watch Trailer
          </Button>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16" data-magicpath-id="15" data-magicpath-path="CinebelgicanoHomepage.tsx">
        {/* About Andrés Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center" data-magicpath-id="16" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div data-magicpath-id="17" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <h2 className="text-3xl font-bold mb-6" data-magicpath-id="18" data-magicpath-path="CinebelgicanoHomepage.tsx">About Andrés</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed" data-magicpath-id="19" data-magicpath-path="CinebelgicanoHomepage.tsx">{directorData.bio}</p>
            
            <div className="flex flex-col sm:flex-row gap-4" data-magicpath-id="20" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <Button onClick={handleDownloadPressKit} variant="outline" data-magicpath-id="21" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <Download className="mr-2 h-4 w-4" data-magicpath-id="22" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                Download Press Kit (PDF)
              </Button>
              
              <Dialog open={bioModalOpen} onOpenChange={setBioModalOpen} data-magicpath-id="23" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <DialogTrigger asChild data-magicpath-id="24" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Button variant="ghost" data-magicpath-id="25" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" data-magicpath-id="26" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl" data-magicpath-id="27" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <DialogHeader data-magicpath-id="28" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <DialogTitle data-magicpath-id="29" data-magicpath-path="CinebelgicanoHomepage.tsx">About {directorData.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4" data-magicpath-id="30" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Avatar className="w-24 h-24 mx-auto" data-magicpath-id="31" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <AvatarImage src={directorData.image} alt={directorData.name} data-magicpath-id="32" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                      <AvatarFallback data-magicpath-id="33" data-magicpath-path="CinebelgicanoHomepage.tsx">{directorData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <p className="text-muted-foreground leading-relaxed" data-magicpath-id="34" data-magicpath-path="CinebelgicanoHomepage.tsx">{directorData.fullBio}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className="relative" data-magicpath-id="35" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <Card className="p-6" data-magicpath-id="36" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <CardHeader data-magicpath-id="37" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <CardTitle className="flex items-center gap-2" data-magicpath-id="38" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Avatar className="w-12 h-12" data-magicpath-id="39" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <AvatarImage src={directorData.image} alt={directorData.name} data-magicpath-id="40" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    <AvatarFallback data-magicpath-id="41" data-magicpath-path="CinebelgicanoHomepage.tsx">{directorData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {directorData.name}
                </CardTitle>
              </CardHeader>
              <CardContent data-magicpath-id="42" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <div className="space-y-2" data-magicpath-id="43" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  {directorData.quickFacts.map((fact, index) => <Badge key={index} variant="secondary" className="mr-2 mb-2" data-magicpath-id="44" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      {fact}
                    </Badge>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cinebelgicano Productions Section */}
        <section className="text-center" data-magicpath-id="45" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <h2 className="text-3xl font-bold mb-6" data-magicpath-id="46" data-magicpath-path="CinebelgicanoHomepage.tsx">{productionCompany.name}</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="47" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {productionCompany.description}
          </p>
          
          <div className="flex justify-center gap-6" data-magicpath-id="48" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <TooltipProvider data-magicpath-id="49" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <Tooltip data-magicpath-id="50" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <TooltipTrigger asChild data-magicpath-id="51" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Button variant="outline" size="icon" asChild data-magicpath-id="52" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <a href={productionCompany.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <Facebook className="h-5 w-5" data-magicpath-id="53" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent data-magicpath-id="54" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <p data-magicpath-id="55" data-magicpath-path="CinebelgicanoHomepage.tsx">Follow on Facebook</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider data-magicpath-id="56" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <Tooltip data-magicpath-id="57" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <TooltipTrigger asChild data-magicpath-id="58" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Button variant="outline" size="icon" asChild data-magicpath-id="59" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <a href={productionCompany.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" data-magicpath-id="60" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent data-magicpath-id="61" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <p data-magicpath-id="62" data-magicpath-path="CinebelgicanoHomepage.tsx">Connect on LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider data-magicpath-id="63" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <Tooltip data-magicpath-id="64" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <TooltipTrigger asChild data-magicpath-id="65" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Button variant="outline" size="icon" asChild data-magicpath-id="66" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <a href={productionCompany.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <Youtube className="h-5 w-5" data-magicpath-id="67" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent data-magicpath-id="68" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <p data-magicpath-id="69" data-magicpath-path="CinebelgicanoHomepage.tsx">Watch on YouTube</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>

        {/* Featured Films Carousel */}
        <section data-magicpath-id="70" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <h2 className="text-3xl font-bold mb-8 text-center" data-magicpath-id="71" data-magicpath-path="CinebelgicanoHomepage.tsx">Featured Films</h2>
          <FeaturedFilmsCarousel data-magicpath-id="72" data-magicpath-path="CinebelgicanoHomepage.tsx" />
        </section>

        {/* Current Projects & Festival Work */}
        <section className="bg-muted/50 rounded-lg p-8" data-magicpath-id="73" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <h2 className="text-3xl font-bold mb-8 text-center" data-magicpath-id="74" data-magicpath-path="CinebelgicanoHomepage.tsx">Current Projects & Festival Work</h2>
          <div className="grid md:grid-cols-2 gap-6" data-magicpath-id="75" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {currentProjects.map((project, index) => <Card key={index} data-magicpath-id="76" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <CardHeader data-magicpath-id="77" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <CardTitle className="flex items-center justify-between" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="78" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    {project.title}
                    <Badge variant="outline" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="status:string" data-magicpath-id="79" data-magicpath-path="CinebelgicanoHomepage.tsx">{project.status}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent data-magicpath-id="80" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <p className="text-muted-foreground" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="81" data-magicpath-path="CinebelgicanoHomepage.tsx">{project.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Awards Ribbon */}
        <section data-magicpath-id="82" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <h2 className="text-3xl font-bold mb-8 text-center" data-magicpath-id="83" data-magicpath-path="CinebelgicanoHomepage.tsx">Awards & Recognition</h2>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border" data-magicpath-id="84" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <div className="flex w-max space-x-6 p-6" data-magicpath-id="85" data-magicpath-path="CinebelgicanoHomepage.tsx">
              {awards.map((award, index) => <TooltipProvider key={index} data-magicpath-id="86" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Tooltip data-magicpath-id="87" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <TooltipTrigger asChild data-magicpath-id="88" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <Card className="w-64 flex-shrink-0 cursor-pointer hover:shadow-md transition-shadow" data-magicpath-id="89" data-magicpath-path="CinebelgicanoHomepage.tsx">
                        <CardContent className="p-4 text-center" data-magicpath-id="90" data-magicpath-path="CinebelgicanoHomepage.tsx">
                          <Award className="h-8 w-8 mx-auto mb-2 text-primary" data-magicpath-id="91" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                          <h3 className="font-semibold" data-magicpath-uuid={(award as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="92" data-magicpath-path="CinebelgicanoHomepage.tsx">{award.name}</h3>
                          <p className="text-sm text-muted-foreground" data-magicpath-uuid={(award as any)["mpid"] ?? "unsafe"} data-magicpath-field="festival:string" data-magicpath-id="93" data-magicpath-path="CinebelgicanoHomepage.tsx">{award.festival}</p>
                          <p className="text-sm font-medium" data-magicpath-uuid={(award as any)["mpid"] ?? "unsafe"} data-magicpath-field="year:string" data-magicpath-id="94" data-magicpath-path="CinebelgicanoHomepage.tsx">{award.year}</p>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent data-magicpath-id="95" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <p data-magicpath-uuid={(award as any)["mpid"] ?? "unsafe"} data-magicpath-field="festival:string,name:string,year:string" data-magicpath-id="96" data-magicpath-path="CinebelgicanoHomepage.tsx">{award.name} - {award.festival} ({award.year})</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>)}
            </div>
          </ScrollArea>
        </section>

        {/* Video Grid */}
        <section data-magicpath-id="97" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <h2 className="text-3xl font-bold mb-8 text-center" data-magicpath-id="98" data-magicpath-path="CinebelgicanoHomepage.tsx">Video Gallery</h2>
          <VideoGrid data-magicpath-id="99" data-magicpath-path="CinebelgicanoHomepage.tsx" />
        </section>

        {/* Image Gallery Slider */}
        <section data-magicpath-id="100" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <h2 className="text-3xl font-bold mb-8 text-center" data-magicpath-id="101" data-magicpath-path="CinebelgicanoHomepage.tsx">Behind the Scenes</h2>
          <ImageGallerySlider data-magicpath-id="102" data-magicpath-path="CinebelgicanoHomepage.tsx" />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-muted/30 border-t" data-magicpath-id="103" data-magicpath-path="CinebelgicanoHomepage.tsx">
        <div className="max-w-7xl mx-auto px-4 py-12" data-magicpath-id="104" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div className="grid md:grid-cols-3 gap-8" data-magicpath-id="105" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {/* Contact Info */}
            <div data-magicpath-id="106" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <h3 className="font-semibold mb-4" data-magicpath-id="107" data-magicpath-path="CinebelgicanoHomepage.tsx">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground" data-magicpath-id="108" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <div className="flex items-center gap-2" data-magicpath-id="109" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Mail className="h-4 w-4" data-magicpath-id="110" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  <span data-magicpath-id="111" data-magicpath-path="CinebelgicanoHomepage.tsx">info@cinebelgicano.com</span>
                </div>
                <div className="flex items-center gap-2" data-magicpath-id="112" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Phone className="h-4 w-4" data-magicpath-id="113" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  <span data-magicpath-id="114" data-magicpath-path="CinebelgicanoHomepage.tsx">+32 2 123 4567</span>
                </div>
                <div className="flex items-center gap-2" data-magicpath-id="115" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <MapPin className="h-4 w-4" data-magicpath-id="116" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  <span data-magicpath-id="117" data-magicpath-path="CinebelgicanoHomepage.tsx">Brussels, Belgium</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div data-magicpath-id="118" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <h3 className="font-semibold mb-4" data-magicpath-id="119" data-magicpath-path="CinebelgicanoHomepage.tsx">Follow Us</h3>
              <div className="flex gap-4" data-magicpath-id="120" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <Button variant="ghost" size="icon" asChild data-magicpath-id="121" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <a href={productionCompany.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-5 w-5" data-magicpath-id="122" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild data-magicpath-id="123" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <a href={productionCompany.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" data-magicpath-id="124" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild data-magicpath-id="125" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <a href={productionCompany.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Youtube className="h-5 w-5" data-magicpath-id="126" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Partner Logos */}
            <div data-magicpath-id="127" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <h3 className="font-semibold mb-4" data-magicpath-id="128" data-magicpath-path="CinebelgicanoHomepage.tsx">Partners</h3>
              <div className="flex flex-wrap gap-4" data-magicpath-id="129" data-magicpath-path="CinebelgicanoHomepage.tsx">
                {partners.map((partner, index) => <div key={index} className="flex items-center gap-2" data-magicpath-id="130" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <img src={partner.logo} alt={`${partner.name} logo`} className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" data-magicpath-uuid={(partner as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:string" data-magicpath-id="131" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  </div>)}
              </div>
            </div>
          </div>
          
          <Separator className="my-8" data-magicpath-id="132" data-magicpath-path="CinebelgicanoHomepage.tsx" />
          
          <div className="text-center text-sm text-muted-foreground" data-magicpath-id="133" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <p data-magicpath-id="134" data-magicpath-path="CinebelgicanoHomepage.tsx">&copy; 2024 {productionCompany.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
}