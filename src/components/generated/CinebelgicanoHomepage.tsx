"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Play, Download, Facebook, Linkedin, Youtube, Mail, Award, ExternalLink, ChevronRight, MapPin, Phone, Globe, Film, Camera, Circle } from "lucide-react";
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
  mpid: "3b27b1a1-f5d4-4ff8-a426-481bb9e9daed"
}, {
  title: "Kinolatino Festival 2024",
  description: "Co-organizing the annual celebration of Latin American cinema",
  status: "Ongoing",
  mpid: "19396ba2-d99a-461e-b5cd-800bd928f511"
}] as any[];
const awards = [{
  name: "Best Documentary",
  festival: "Brussels Film Festival",
  year: "2023",
  mpid: "cf614b0e-2604-4caa-abf4-f8162f251012"
}, {
  name: "Audience Choice",
  festival: "Kinolatino",
  year: "2022",
  mpid: "0a283f02-2b4d-49a1-8cc2-d954242565c7"
}, {
  name: "Special Mention",
  festival: "IDFA",
  year: "2021",
  mpid: "43f8d172-1da4-4106-8016-d9d1085ef0ee"
}, {
  name: "Best Director",
  festival: "Latin Film Festival",
  year: "2020",
  mpid: "3bf7b2eb-8dec-4a13-b8ae-ade566732143"
}] as any[];
const partners = [{
  name: "Off World",
  logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
  mpid: "57de6e66-b918-4ba8-b365-540d37f5ae7d"
}, {
  name: "VAF",
  logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
  mpid: "177f8369-2c4b-4c0d-bb1e-d1caf28b2b88"
}, {
  name: "Al-Jazeera Witness",
  logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
  mpid: "ff4dc789-7dde-4623-ac0f-bf01a8cb93f3"
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

  // Cinebelgicano logo URL (using the provided logo)
  const logoUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDAwIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iODAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIi8+CjxyZWN0IHg9IjcwIiB5PSI3MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjZmZmIi8+CjxyZWN0IHg9Ijg1IiB5PSI4NSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMDAwIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMTAiIGZpbGw9IiNmZmYiLz4KPHRleHQgeD0iMTAwIiB5PSIxNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNJTkVCRUxHSUNBTk88L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTg1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBST0RVQ1RJT05TPC90ZXh0Pgo8L3N2Zz4K";
  return <div className="min-h-screen bg-black text-white font-sans relative" data-magicpath-id="0" data-magicpath-path="CinebelgicanoHomepage.tsx">
      {/* Fixed Logo Header */}
      <header className="fixed top-4 left-4 z-50 bg-black/80 backdrop-blur-sm rounded-xl p-3 shadow-2xl hover:shadow-white/10 transition-all duration-300" data-magicpath-id="1" data-magicpath-path="CinebelgicanoHomepage.tsx">
        <a href="/" aria-label="Cinebelgicano Productions Home">
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/282430617021460480/assets/98b10cb1-37f4-4cee-85be-d7485cb3dd15.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=api-storage%40magicpath.iam.gserviceaccount.com%2F20250628%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250628T111340Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=52753d14d62024bdd05995c875eef053be36693d8bd0e6656e07e151546bc85f048123145dfe9548e729be3b50a74083a432c258a9f9f859b0c6027e8d435632ab9d0d00143b46805cf5f8bd55aee883c3db2ca1a66767452681e7227b0ee40f8cdbefdb4628dfa6de71411b2338ce5e6a5c30fa5307c3e1e297c82d417ce564e4f7ad48282960f0daf040ec832d7eeaa04fbb478f7813f17071413b4eab95f629c3218a2bb180dc39f45bdd0a3354645076635eb4d6e6dbe50c4e923c6236a1848ccf8366f2ff8ecf89089cf2a415831b7899841de6a986238d3bb4f86c293a7a0f6a4cb7ba6a528b226b6b8aafcdd6ca2e4b56f9d2d12a5acca6583df9f752" alt="Cinebelgicano Productions logo" className="w-12 h-12 object-contain" style={{
          width: "200px",
          maxWidth: "200px",
          height: "200px"
        }} data-magicpath-id="2" data-magicpath-path="CinebelgicanoHomepage.tsx" />
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" data-magicpath-id="3" data-magicpath-path="CinebelgicanoHomepage.tsx">
        {/* Stylized Background Pattern */}
        <div className="absolute inset-0 z-0" aria-hidden="true" data-magicpath-id="4" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div className="absolute inset-0 bg-black" data-magicpath-id="5" data-magicpath-path="CinebelgicanoHomepage.tsx" />
          {/* Geometric patterns inspired by logo */}
          <div className="absolute inset-0 opacity-10" data-magicpath-id="6" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-white rounded-full" data-magicpath-id="7" data-magicpath-path="CinebelgicanoHomepage.tsx" />
            <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-white" data-magicpath-id="8" data-magicpath-path="CinebelgicanoHomepage.tsx" />
            <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white rounded-full" data-magicpath-id="9" data-magicpath-path="CinebelgicanoHomepage.tsx" />
            <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border-2 border-white rotate-45" data-magicpath-id="10" data-magicpath-path="CinebelgicanoHomepage.tsx" />
          </div>
          {/* Film reel pattern */}
          <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-radial-gradient(circle at 20% 40%, white 0 2px, transparent 2px 40px),
                             repeating-radial-gradient(circle at 80% 60%, white 0 2px, transparent 2px 40px)`
        }} data-magicpath-id="11" data-magicpath-path="CinebelgicanoHomepage.tsx" />
        </div>
        
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="relative z-10 text-center max-w-4xl mx-auto px-4" data-magicpath-id="12" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase" style={{
          fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
        }} data-magicpath-id="13" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {directorData.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light" style={{
          fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
        }} data-magicpath-id="14" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {directorData.tagline}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm" data-magicpath-id="15" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {directorData.quickFacts.map((fact, index) => <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20" data-magicpath-id="16" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <span className="font-semibold" data-magicpath-id="17" data-magicpath-path="CinebelgicanoHomepage.tsx">{fact}</span>
              </div>)}
          </div>
          
          <Button size="lg" className="bg-white text-black font-bold uppercase tracking-widest px-8 py-3 rounded-lg shadow-lg hover:bg-black hover:text-white border-2 border-white transition-all duration-300" onClick={handleWatchTrailer} style={{
          fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
        }} data-magicpath-id="18" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <Play className="mr-2 h-5 w-5" data-magicpath-id="19" data-magicpath-path="CinebelgicanoHomepage.tsx" />
            Watch Trailer
          </Button>
        </motion.div>
      </section>

      {/* Film Strip Separator */}
      <div className="w-full h-8 bg-gradient-to-r from-transparent via-white to-transparent opacity-10" style={{
      backgroundImage: 'repeating-linear-gradient(90deg, white 0 4px, transparent 4px 24px)'
    }} aria-hidden="true" data-magicpath-id="20" data-magicpath-path="CinebelgicanoHomepage.tsx" />

      <main className="max-w-7xl mx-auto px-4 py-16 space-y-16" data-magicpath-id="21" data-magicpath-path="CinebelgicanoHomepage.tsx">
        {/* About Andrés Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center" data-magicpath-id="22" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div data-magicpath-id="23" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-wide" style={{
            fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
          }} data-magicpath-id="24" data-magicpath-path="CinebelgicanoHomepage.tsx">About Andrés</h2>
            <p className="text-gray-300 mb-6 leading-relaxed" data-magicpath-id="25" data-magicpath-path="CinebelgicanoHomepage.tsx">{directorData.bio}</p>
            
            <div className="flex flex-col sm:flex-row gap-4" data-magicpath-id="26" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <Button onClick={handleDownloadPressKit} variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-wide" data-magicpath-id="27" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <Download className="mr-2 h-4 w-4" data-magicpath-id="28" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                Download Press Kit (PDF)
              </Button>
              
              <Dialog open={bioModalOpen} onOpenChange={setBioModalOpen} data-magicpath-id="29" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <DialogTrigger asChild data-magicpath-id="30" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Button variant="ghost" className="text-white hover:bg-white/10 font-bold uppercase tracking-wide" data-magicpath-id="31" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" data-magicpath-id="32" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl bg-black border-white text-white" data-magicpath-id="33" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <DialogHeader data-magicpath-id="34" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <DialogTitle className="font-black uppercase" style={{
                    fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
                  }} data-magicpath-id="35" data-magicpath-path="CinebelgicanoHomepage.tsx">About {directorData.name}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4" data-magicpath-id="36" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <Avatar className="w-24 h-24 mx-auto border-2 border-white" data-magicpath-id="37" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <AvatarImage src={directorData.image} alt={directorData.name} data-magicpath-id="38" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                      <AvatarFallback className="bg-white text-black font-bold" data-magicpath-id="39" data-magicpath-path="CinebelgicanoHomepage.tsx">{directorData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <p className="text-gray-300 leading-relaxed" data-magicpath-id="40" data-magicpath-path="CinebelgicanoHomepage.tsx">{directorData.fullBio}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className="relative" data-magicpath-id="41" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <Card className="p-6 bg-gray-900 border-white/20" data-magicpath-id="42" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <CardHeader data-magicpath-id="43" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <CardTitle className="flex items-center gap-2 text-white font-black uppercase" style={{
                fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
              }} data-magicpath-id="44" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Avatar className="w-12 h-12 border-2 border-white" data-magicpath-id="45" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <AvatarImage src={directorData.image} alt={directorData.name} data-magicpath-id="46" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    <AvatarFallback className="bg-white text-black font-bold" data-magicpath-id="47" data-magicpath-path="CinebelgicanoHomepage.tsx">{directorData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {directorData.name}
                </CardTitle>
              </CardHeader>
              <CardContent data-magicpath-id="48" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <div className="space-y-2" data-magicpath-id="49" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  {directorData.quickFacts.map((fact, index) => <Badge key={index} variant="secondary" className="mr-2 mb-2 bg-white text-black font-semibold" data-magicpath-id="50" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      {fact}
                    </Badge>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Camera Gear Separator */}
        <div className="flex justify-center items-center py-8" aria-hidden="true" data-magicpath-id="51" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <Camera className="h-8 w-8 text-white/20 mx-4" />
          <div className="w-32 h-px bg-white/20" data-magicpath-id="52" data-magicpath-path="CinebelgicanoHomepage.tsx" />
          <Film className="h-8 w-8 text-white/20 mx-4" data-magicpath-id="53" data-magicpath-path="CinebelgicanoHomepage.tsx" />
          <div className="w-32 h-px bg-white/20" data-magicpath-id="54" data-magicpath-path="CinebelgicanoHomepage.tsx" />
          <Circle className="h-8 w-8 text-white/20 mx-4" />
        </div>

        {/* Cinebelgicano Productions Section */}
        <section className="text-center" data-magicpath-id="55" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <h2 className="text-3xl font-black mb-6 uppercase tracking-wide" style={{
          fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
        }} data-magicpath-id="56" data-magicpath-path="CinebelgicanoHomepage.tsx">{productionCompany.name}</h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="57" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {productionCompany.description}
          </p>
          
          <div className="flex justify-center gap-6" data-magicpath-id="58" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <TooltipProvider data-magicpath-id="59" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <Tooltip data-magicpath-id="60" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <TooltipTrigger asChild data-magicpath-id="61" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Button variant="outline" size="icon" asChild className="border-white text-white hover:bg-white hover:text-black" data-magicpath-id="62" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <a href={productionCompany.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <Facebook className="h-5 w-5" data-magicpath-id="63" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-white text-black" data-magicpath-id="64" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <p data-magicpath-id="65" data-magicpath-path="CinebelgicanoHomepage.tsx">Follow on Facebook</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider data-magicpath-id="66" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <Tooltip data-magicpath-id="67" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <TooltipTrigger asChild data-magicpath-id="68" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Button variant="outline" size="icon" asChild className="border-white text-white hover:bg-white hover:text-black" data-magicpath-id="69" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <a href={productionCompany.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" data-magicpath-id="70" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-white text-black" data-magicpath-id="71" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <p data-magicpath-id="72" data-magicpath-path="CinebelgicanoHomepage.tsx">Connect on LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider data-magicpath-id="73" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <Tooltip data-magicpath-id="74" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <TooltipTrigger asChild data-magicpath-id="75" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Button variant="outline" size="icon" asChild className="border-white text-white hover:bg-white hover:text-black" data-magicpath-id="76" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <a href={productionCompany.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <Youtube className="h-5 w-5" data-magicpath-id="77" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-white text-black" data-magicpath-id="78" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <p data-magicpath-id="79" data-magicpath-path="CinebelgicanoHomepage.tsx">Watch on YouTube</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>

        {/* Featured Films Carousel */}
        <section data-magicpath-id="80" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <h2 className="text-3xl font-black mb-8 text-center uppercase tracking-wide" style={{
          fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
        }} data-magicpath-id="81" data-magicpath-path="CinebelgicanoHomepage.tsx">Featured Films</h2>
          <FeaturedFilmsCarousel data-magicpath-id="82" data-magicpath-path="CinebelgicanoHomepage.tsx" />
        </section>

        {/* Current Projects & Festival Work */}
        <section className="bg-gray-900/50 rounded-lg p-8 border border-white/10" data-magicpath-id="83" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <h2 className="text-3xl font-black mb-8 text-center uppercase tracking-wide" style={{
          fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
        }} data-magicpath-id="84" data-magicpath-path="CinebelgicanoHomepage.tsx">Current Projects & Festival Work</h2>
          <div className="grid md:grid-cols-2 gap-6" data-magicpath-id="85" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {currentProjects.map((project, index) => <Card key={index} className="bg-black border-white/20" data-magicpath-id="86" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <CardHeader data-magicpath-id="87" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <CardTitle className="flex items-center justify-between text-white font-black uppercase" style={{
                fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
              }} data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="88" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    {project.title}
                    <Badge variant="outline" className="border-white text-white" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="status:unknown" data-magicpath-id="89" data-magicpath-path="CinebelgicanoHomepage.tsx">{project.status}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent data-magicpath-id="90" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <p className="text-gray-300" data-magicpath-uuid={(project as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="91" data-magicpath-path="CinebelgicanoHomepage.tsx">{project.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Awards Ribbon */}
        <section data-magicpath-id="92" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <h2 className="text-3xl font-black mb-8 text-center uppercase tracking-wide" style={{
          fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
        }} data-magicpath-id="93" data-magicpath-path="CinebelgicanoHomepage.tsx">Awards & Recognition</h2>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border border-white/20" data-magicpath-id="94" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <div className="flex w-max space-x-6 p-6" data-magicpath-id="95" data-magicpath-path="CinebelgicanoHomepage.tsx">
              {awards.map((award, index) => <TooltipProvider key={index} data-magicpath-id="96" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Tooltip data-magicpath-id="97" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <TooltipTrigger asChild data-magicpath-id="98" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <Card className="w-64 flex-shrink-0 cursor-pointer hover:shadow-md transition-shadow bg-gray-900 border-white/20" data-magicpath-id="99" data-magicpath-path="CinebelgicanoHomepage.tsx">
                        <CardContent className="p-4 text-center" data-magicpath-id="100" data-magicpath-path="CinebelgicanoHomepage.tsx">
                          <Award className="h-8 w-8 mx-auto mb-2 text-white" data-magicpath-id="101" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                          <h3 className="font-black text-white uppercase" style={{
                        fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
                      }} data-magicpath-uuid={(award as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="102" data-magicpath-path="CinebelgicanoHomepage.tsx">{award.name}</h3>
                          <p className="text-sm text-gray-300" data-magicpath-uuid={(award as any)["mpid"] ?? "unsafe"} data-magicpath-field="festival:unknown" data-magicpath-id="103" data-magicpath-path="CinebelgicanoHomepage.tsx">{award.festival}</p>
                          <p className="text-sm font-bold text-white" data-magicpath-uuid={(award as any)["mpid"] ?? "unsafe"} data-magicpath-field="year:unknown" data-magicpath-id="104" data-magicpath-path="CinebelgicanoHomepage.tsx">{award.year}</p>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white text-black" data-magicpath-id="105" data-magicpath-path="CinebelgicanoHomepage.tsx">
                      <p data-magicpath-uuid={(award as any)["mpid"] ?? "unsafe"} data-magicpath-field="festival:unknown,name:unknown,year:unknown" data-magicpath-id="106" data-magicpath-path="CinebelgicanoHomepage.tsx">{award.name} - {award.festival} ({award.year})</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>)}
            </div>
          </ScrollArea>
        </section>

        {/* Video Grid */}
        <section data-magicpath-id="107" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <h2 className="text-3xl font-black mb-8 text-center uppercase tracking-wide" style={{
          fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
        }} data-magicpath-id="108" data-magicpath-path="CinebelgicanoHomepage.tsx">Video Gallery</h2>
          <VideoGrid data-magicpath-id="109" data-magicpath-path="CinebelgicanoHomepage.tsx" />
        </section>

        {/* Image Gallery Slider */}
        <section data-magicpath-id="110" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <h2 className="text-3xl font-black mb-8 text-center uppercase tracking-wide" style={{
          fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
        }} data-magicpath-id="111" data-magicpath-path="CinebelgicanoHomepage.tsx">Behind the Scenes</h2>
          <ImageGallerySlider data-magicpath-id="112" data-magicpath-path="CinebelgicanoHomepage.tsx" />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-white/20" data-magicpath-id="113" data-magicpath-path="CinebelgicanoHomepage.tsx">
        <div className="max-w-7xl mx-auto px-4 py-12" data-magicpath-id="114" data-magicpath-path="CinebelgicanoHomepage.tsx">
          <div className="grid md:grid-cols-4 gap-8" data-magicpath-id="115" data-magicpath-path="CinebelgicanoHomepage.tsx">
            {/* Logo and Company */}
            <div className="md:col-span-1" data-magicpath-id="116" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/282430617021460480/assets/d4f30712-cbda-493b-bff6-5d5d91de2705.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=api-storage%40magicpath.iam.gserviceaccount.com%2F20250628%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250628T111823Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=ab8f202d29a4b22e6920af155d86639e7bcdc13b1886d84065807478ccbcb1c2e62dcada404779b18ca3ceefc55877362911dd4f6ba2c46c79d85497992517e33938a74a71ec359ae6bbaf4d4aa916a24f28e7673cda608949367d544f65ea427e8eec048b48fdb5078ebcbdd0cb3108efce75563513325b37842a18f515d289a5e0d4a7540a48c52568a9dae142ada7079b593a8ea5390ba3dadbad9193cbc29dee4c4484e2c8d7fc5635e23e8524998fbe48bef8035af5e37edf1ef6b668b4bee8d0accbb0d9e4811ec0a22829647eadc27c264995d27cf3033aef384527bac156d1ae55078af08bb4b993b6d174089e37d2506cf609560e50ea14c423972a" alt="Cinebelgicano Productions logo" className="w-16 h-16 object-contain mb-4" data-magicpath-id="117" data-magicpath-path="CinebelgicanoHomepage.tsx" />
              <h3 className="font-black mb-2 uppercase text-white" style={{
              fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
            }} data-magicpath-id="118" data-magicpath-path="CinebelgicanoHomepage.tsx">{productionCompany.name}</h3>
              <p className="text-sm text-gray-300" data-magicpath-id="119" data-magicpath-path="CinebelgicanoHomepage.tsx">Independent film production</p>
            </div>

            {/* Contact Info */}
            <div data-magicpath-id="120" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <h3 className="font-black mb-4 uppercase text-white" style={{
              fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
            }} data-magicpath-id="121" data-magicpath-path="CinebelgicanoHomepage.tsx">Contact</h3>
              <div className="space-y-2 text-sm text-gray-300" data-magicpath-id="122" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <div className="flex items-center gap-2" data-magicpath-id="123" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Mail className="h-4 w-4" data-magicpath-id="124" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  <span data-magicpath-id="125" data-magicpath-path="CinebelgicanoHomepage.tsx">info@cinebelgicano.com</span>
                </div>
                <div className="flex items-center gap-2" data-magicpath-id="126" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <Phone className="h-4 w-4" data-magicpath-id="127" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  <span data-magicpath-id="128" data-magicpath-path="CinebelgicanoHomepage.tsx">+32 2 123 4567</span>
                </div>
                <div className="flex items-center gap-2" data-magicpath-id="129" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <MapPin className="h-4 w-4" data-magicpath-id="130" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  <span data-magicpath-id="131" data-magicpath-path="CinebelgicanoHomepage.tsx">Brussels, Belgium</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div data-magicpath-id="132" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <h3 className="font-black mb-4 uppercase text-white" style={{
              fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
            }} data-magicpath-id="133" data-magicpath-path="CinebelgicanoHomepage.tsx">Follow Us</h3>
              <div className="flex gap-4" data-magicpath-id="134" data-magicpath-path="CinebelgicanoHomepage.tsx">
                <Button variant="ghost" size="icon" asChild className="text-white hover:bg-white hover:text-black" data-magicpath-id="135" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <a href={productionCompany.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-5 w-5" data-magicpath-id="136" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="text-white hover:bg-white hover:text-black" data-magicpath-id="137" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <a href={productionCompany.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" data-magicpath-id="138" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="text-white hover:bg-white hover:text-black" data-magicpath-id="139" data-magicpath-path="CinebelgicanoHomepage.tsx">
                  <a href={productionCompany.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Youtube className="h-5 w-5" data-magicpath-id="140" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Partner Logos */}
            <div data-magicpath-id="141" data-magicpath-path="CinebelgicanoHomepage.tsx">
              <h3 className="font-black mb-4 uppercase text-white" style={{
              fontFamily: 'Inter, Roboto, Arial, Helvetica, sans-serif'
            }} data-magicpath-id="142" data-magicpath-path="CinebelgicanoHomepage.tsx">Partners</h3>
              <div className="flex flex-wrap gap-4" data-magicpath-id="143" data-magicpath-path="CinebelgicanoHomepage.tsx">
                {partners.map((partner, index) => <div key={index} className="flex items-center gap-2" data-magicpath-id="144" data-magicpath-path="CinebelgicanoHomepage.tsx">
                    <img src={partner.logo} alt={`${partner.name} logo`} className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity filter invert" data-magicpath-uuid={(partner as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="145" data-magicpath-path="CinebelgicanoHomepage.tsx" />
                  </div>)}
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-white/20" data-magicpath-id="146" data-magicpath-path="CinebelgicanoHomepage.tsx" />
          
          <div className="text-center text-sm text-gray-300" data-magicpath-id="147" data-magicpath-path="CinebelgicanoHomepage.tsx">
            <p data-magicpath-id="148" data-magicpath-path="CinebelgicanoHomepage.tsx">&copy; 2024 {productionCompany.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
}