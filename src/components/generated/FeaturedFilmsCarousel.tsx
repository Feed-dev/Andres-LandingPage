"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Play, ExternalLink, Calendar, Film } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
export interface FeaturedFilmsCarouselProps {
  mpid?: string;
}

// Mock data for featured films
const featuredFilms = [{
  id: 1,
  title: "Crossing Borders",
  year: 2023,
  format: "Documentary",
  logline: "A intimate portrait of Chilean immigrants adapting to life in Belgium, exploring themes of identity and belonging.",
  highlights: ["Al-Jazeera Witness", "Brussels Film Festival Winner", "IDFA Selection"],
  poster: "https://images.unsplash.com/photo-1489599735734-79b4212bea40?w=400&h=600&fit=crop",
  trailerUrl: "https://youtube.com/watch?v=example1",
  mpid: "9240e88e-2efc-4a69-a243-ddc4e23b49bb"
}, {
  id: 2,
  title: "Voices from the South",
  year: 2022,
  format: "Documentary Series",
  logline: "A three-part series examining Latin American cultural preservation in European diaspora communities.",
  highlights: ["Kinolatino Audience Choice", "VAF Supported", "International Distribution"],
  poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
  trailerUrl: "https://youtube.com/watch?v=example2",
  mpid: "263c2e89-92e1-440a-a2db-84bdde915317"
}, {
  id: 3,
  title: "The Memory Keeper",
  year: 2021,
  format: "Short Documentary",
  logline: "An elderly Chilean exile in Brussels preserves his homeland's stories through traditional crafts and oral history.",
  highlights: ["IDFA Special Mention", "Festival Circuit", "Critical Acclaim"],
  poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
  trailerUrl: "https://youtube.com/watch?v=example3",
  mpid: "4db91ca1-fceb-48cf-a1b4-74390e5438ee"
}, {
  id: 4,
  title: "Between Two Worlds",
  year: 2020,
  format: "Feature Documentary",
  logline: "Second-generation Latin Americans in Belgium navigate dual cultural identities in contemporary Europe.",
  highlights: ["Latin Film Festival Best Director", "Off World Production", "Streaming Release"],
  poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
  trailerUrl: "https://youtube.com/watch?v=example4",
  mpid: "2349fffe-109f-447b-bd95-cf70426abcf5"
}, {
  id: 5,
  title: "Songs of Exile",
  year: 2019,
  format: "Musical Documentary",
  logline: "Musicians from Chile, Argentina, and Colombia find new voices while preserving their musical heritage in Belgium.",
  highlights: ["Music Film Festival", "Soundtrack Release", "Cultural Impact Award"],
  poster: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop",
  trailerUrl: "https://youtube.com/watch?v=example5",
  mpid: "38e02dc9-f156-47bf-a886-cbfe82420706"
}, {
  id: 6,
  title: "New Horizons",
  year: 2018,
  format: "Documentary",
  logline: "Young Latin American entrepreneurs building bridges between their heritage and European opportunities.",
  highlights: ["Business Film Award", "Educational Distribution", "Impact Campaign"],
  poster: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=600&fit=crop",
  trailerUrl: "https://youtube.com/watch?v=example6",
  mpid: "e6809a78-e8de-4d39-b9b3-f67c927cdfb5"
}] as any[];
export default function FeaturedFilmsCarousel({}: FeaturedFilmsCarouselProps) {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);
  React.useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  const handleImageError = (filmId: number) => {
    setImageErrors(prev => ({
      ...prev,
      [filmId]: true
    }));
  };
  const handlePlayTrailer = (trailerUrl: string, title: string) => {
    console.log(`Playing trailer for ${title}: ${trailerUrl}`);
    // In a real app, this would open a video modal or navigate to the trailer
  };
  const handleExternalLink = (trailerUrl: string) => {
    window.open(trailerUrl, '_blank', 'noopener,noreferrer');
  };
  if (isLoading) {
    return <div className="w-full" data-magicpath-id="0" data-magicpath-path="FeaturedFilmsCarousel.tsx">
        <ScrollArea className="w-full whitespace-nowrap rounded-md border" data-magicpath-id="1" data-magicpath-path="FeaturedFilmsCarousel.tsx">
          <div className="flex w-max space-x-6 p-6" data-magicpath-id="2" data-magicpath-path="FeaturedFilmsCarousel.tsx">
            {Array.from({
            length: 4
          }).map((_, index) => <Card key={index} className="w-80 flex-shrink-0" data-magicpath-id="3" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                <CardHeader className="p-0" data-magicpath-id="4" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                  <Skeleton className="w-full h-48 rounded-t-lg" data-magicpath-id="5" data-magicpath-path="FeaturedFilmsCarousel.tsx" />
                </CardHeader>
                <CardContent className="p-6" data-magicpath-id="6" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                  <Skeleton className="h-6 w-3/4 mb-2" data-magicpath-id="7" data-magicpath-path="FeaturedFilmsCarousel.tsx" />
                  <Skeleton className="h-4 w-1/2 mb-4" data-magicpath-id="8" data-magicpath-path="FeaturedFilmsCarousel.tsx" />
                  <Skeleton className="h-16 w-full mb-4" data-magicpath-id="9" data-magicpath-path="FeaturedFilmsCarousel.tsx" />
                  <div className="flex gap-2 mb-4" data-magicpath-id="10" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                    <Skeleton className="h-6 w-20" data-magicpath-id="11" data-magicpath-path="FeaturedFilmsCarousel.tsx" />
                    <Skeleton className="h-6 w-24" data-magicpath-id="12" data-magicpath-path="FeaturedFilmsCarousel.tsx" />
                  </div>
                  <div className="flex gap-2" data-magicpath-id="13" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                    <Skeleton className="h-9 w-24" data-magicpath-id="14" data-magicpath-path="FeaturedFilmsCarousel.tsx" />
                    <Skeleton className="h-9 w-9" data-magicpath-id="15" data-magicpath-path="FeaturedFilmsCarousel.tsx" />
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </ScrollArea>
      </div>;
  }
  return <div className="w-full" data-magicpath-id="16" data-magicpath-path="FeaturedFilmsCarousel.tsx">
      <ScrollArea className="w-full whitespace-nowrap rounded-md border" data-magicpath-id="17" data-magicpath-path="FeaturedFilmsCarousel.tsx">
        <div className="flex w-max space-x-6 p-6" data-magicpath-id="18" data-magicpath-path="FeaturedFilmsCarousel.tsx">
          {featuredFilms.map((film, index) => <motion.div key={film.id} initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} data-magicpath-id="19" data-magicpath-path="FeaturedFilmsCarousel.tsx">
              <Card className="w-80 flex-shrink-0 hover:shadow-lg transition-all duration-300 group cursor-pointer" data-magicpath-id="20" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                <CardHeader className="p-0 relative overflow-hidden" data-magicpath-id="21" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                  {!imageErrors[film.id] ? <img src={film.poster} alt={`Movie poster for ${film.title}`} className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300" onError={() => handleImageError(film.id)} data-magicpath-uuid={(film as any)["mpid"] ?? "unsafe"} data-magicpath-field="poster:string" data-magicpath-id="22" data-magicpath-path="FeaturedFilmsCarousel.tsx" /> : <div className="w-full h-48 bg-muted flex items-center justify-center rounded-t-lg" data-magicpath-id="23" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                      <Film className="h-12 w-12 text-muted-foreground" data-magicpath-id="24" data-magicpath-path="FeaturedFilmsCarousel.tsx" />
                    </div>}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100" data-magicpath-id="25" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                    <Button size="sm" className="bg-white/90 text-black hover:bg-white" onClick={() => handlePlayTrailer(film.trailerUrl, film.title)} data-magicpath-id="26" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                      <Play className="h-4 w-4 mr-1" data-magicpath-id="27" data-magicpath-path="FeaturedFilmsCarousel.tsx" />
                      Play
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6" data-magicpath-id="28" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                  <div className="flex items-center justify-between mb-2" data-magicpath-id="29" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                    <CardTitle className="text-lg font-bold" data-magicpath-uuid={(film as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="30" data-magicpath-path="FeaturedFilmsCarousel.tsx">{film.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground" data-magicpath-id="31" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                      <Calendar className="h-3 w-3" data-magicpath-id="32" data-magicpath-path="FeaturedFilmsCarousel.tsx" />
                      <span data-magicpath-uuid={(film as any)["mpid"] ?? "unsafe"} data-magicpath-field="year:number" data-magicpath-id="33" data-magicpath-path="FeaturedFilmsCarousel.tsx">{film.year}</span>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="mb-4" data-magicpath-uuid={(film as any)["mpid"] ?? "unsafe"} data-magicpath-field="format:string" data-magicpath-id="34" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                    {film.format}
                  </Badge>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed" data-magicpath-uuid={(film as any)["mpid"] ?? "unsafe"} data-magicpath-field="logline:string" data-magicpath-id="35" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                    {film.logline}
                  </p>
                  
                  <div className="space-y-2 mb-4" data-magicpath-id="36" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide" data-magicpath-id="37" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                      Highlights
                    </h4>
                    <div className="flex flex-wrap gap-1" data-magicpath-id="38" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                      {film.highlights.slice(0, 2).map((highlight, idx) => <Badge key={idx} variant="outline" className="text-xs" data-magicpath-id="39" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                          {highlight}
                        </Badge>)}
                      {film.highlights.length > 2 && <TooltipProvider data-magicpath-id="40" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                          <Tooltip data-magicpath-id="41" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                            <TooltipTrigger asChild data-magicpath-id="42" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                              <Badge variant="outline" className="text-xs cursor-help" data-magicpath-id="43" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                                +{film.highlights.length - 2} more
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent data-magicpath-id="44" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                              <div className="space-y-1" data-magicpath-id="45" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                                {film.highlights.slice(2).map((highlight, idx) => <p key={idx} className="text-xs" data-magicpath-id="46" data-magicpath-path="FeaturedFilmsCarousel.tsx">{highlight}</p>)}
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>}
                    </div>
                  </div>
                  
                  <div className="flex gap-2" data-magicpath-id="47" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                    <Button size="sm" onClick={() => handlePlayTrailer(film.trailerUrl, film.title)} className="flex-1" data-magicpath-id="48" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                      <Play className="h-4 w-4 mr-1" data-magicpath-id="49" data-magicpath-path="FeaturedFilmsCarousel.tsx" />
                      Watch
                    </Button>
                    
                    <TooltipProvider data-magicpath-id="50" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                      <Tooltip data-magicpath-id="51" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                        <TooltipTrigger asChild data-magicpath-id="52" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                          <Button size="sm" variant="outline" onClick={() => handleExternalLink(film.trailerUrl)} aria-label={`Open ${film.title} in new tab`} data-magicpath-id="53" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                            <ExternalLink className="h-4 w-4" data-magicpath-id="54" data-magicpath-path="FeaturedFilmsCarousel.tsx" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent data-magicpath-id="55" data-magicpath-path="FeaturedFilmsCarousel.tsx">
                          <p data-magicpath-id="56" data-magicpath-path="FeaturedFilmsCarousel.tsx">Open in new tab</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </ScrollArea>
      
      {featuredFilms.length === 0 && <div className="text-center py-12" data-magicpath-id="57" data-magicpath-path="FeaturedFilmsCarousel.tsx">
          <Film className="h-12 w-12 mx-auto text-muted-foreground mb-4" data-magicpath-id="58" data-magicpath-path="FeaturedFilmsCarousel.tsx" />
          <p className="text-muted-foreground" data-magicpath-id="59" data-magicpath-path="FeaturedFilmsCarousel.tsx">No featured films available at the moment.</p>
        </div>}
    </div>;
}