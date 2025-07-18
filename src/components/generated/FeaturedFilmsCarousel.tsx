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
export interface FeaturedFilmsCarouselProps {}

// Mock data for featured films
const featuredFilms = [{
  id: 1,
  title: "Dying For Life",
  year: 2023,
  format: "Documentary",
  logline: "A intimate portrait of Chilean immigrants adapting to life in Belgium, exploring themes of identity and belonging.",
  highlights: ["Al-Jazeera Witness", "Brussels Film Festival Winner", "IDFA Selection"],
  poster: "https://storage.googleapis.com/storage.magicpath.ai/user/282430617021460480/assets/da07a80c-f63d-478a-8678-4682ebba02e4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=api-storage%40magicpath.iam.gserviceaccount.com%2F20250628%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250628T114741Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=2b326751fe126c79e89f61da72c3c4d6fd7107d380a6cbc30165ea51e8744f51b43b6a2398f5eb8232622f935f1fbd6feb5c06dbc787a0e156160915ec033c5db82d13070735b01cd4ee45640e2d7a966378a628fbf89b52e445e033c416bb5c38427b3764b40a640a49b6cc3d546a154324dc923b6e72d64af3c85ca7453760cea176421300510eb280c7a77ad9d999075e1f466ad73428a3428b51104a312e1b249c40e99e250b89e3ffcb3c3b90d9b1f5edaa340c60c5a2397844c0403c9232ec9cc5669a0fcce1cfdf6dedadf8ad0e03c4c1e70349d81d9d6e728173777a161a4833fcd8dc933928136bd74deb090dc6c754021087485d1df66a04be57b9",
  trailerUrl: "https://youtube.com/watch?v=example1"
}, {
  id: 2,
  title: "El Color Del Camaleon",
  year: 2022,
  format: "Documentary Series",
  logline: "A three-part series examining Latin American cultural preservation in European diaspora communities.",
  highlights: ["Kinolatino Audience Choice", "VAF Supported", "International Distribution"],
  poster: "https://storage.googleapis.com/storage.magicpath.ai/user/282430617021460480/assets/4343f03b-3444-47dc-8245-140baea8acf4.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=api-storage%40magicpath.iam.gserviceaccount.com%2F20250628%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250628T114904Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=9dbe1ad920249384cb1ec7e37ad5f378cdd4726bd9b169de83ea2e21e3b1aa4386f5fbb3f69dea2cefdf245765ceba8a2784efccb405409c79c03676bf84d82d222b6ccfa0128794da0dfbc1df18722dbe1254355da4be3de8084a34e4542f707cf4a6d5267b859a99a8779c03464723460d497be98e2a34d8842c42690c7fde6361a69f5516b0e12695df1f5292de9bbdfd3fbc96fe21547f1e4e429f4a95a3531cd175f4ac69b12310794b5c3843d91d691758a04bf8cb4579756741df8bce71d544d9f0df624d3ee4156e8eb4da0e0246f418aefced039cf1ce4b35c04d3dc82a9af489bbd88193ead63ad493e387757ee6475e02dc62a4cce6d2a2c2ca8f",
  trailerUrl: "https://youtube.com/watch?v=example2"
}, {
  id: 3,
  title: "The Pride Liar",
  year: 2021,
  format: "Short Documentary",
  logline: "An elderly Chilean exile in Brussels preserves his homeland's stories through traditional crafts and oral history.",
  highlights: ["IDFA Special Mention", "Festival Circuit", "Critical Acclaim"],
  poster: "https://storage.googleapis.com/storage.magicpath.ai/user/282430617021460480/assets/b6da4a1b-89cf-4127-abab-46af7501f8b7.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=api-storage%40magicpath.iam.gserviceaccount.com%2F20250628%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250628T113851Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=aa3fd3d6fb772501e918983fb5632b18888075ada5f77cb92dc6080039414c942caf09d6b91b8366ed16d5d70da908331a53510b4dea9fdaeaedb0db5e368591b478b58a45114ab9a7a441c713201b62a895cd47331a1f1bcdecbe3ce7a5846224ae68240d2130e5246764ad49b2786fdeeb2a23fb7fc2da85665a31358ad6c0214fc43745fbf4c8a50ca43aa5dc9d684fee235c1427b0efb6df773014c7bcdf6a86658c5896c8f3e748a3bf0c32a3317a2c3ad7b579c4ae0debadf8c20a1503310e7e2eca5ef4aeb29ea1bc358fc6687759f879dd1a349cb73c24c8153ab9bbd704ed683d333c970443dc7de59f11fadbe089e2fc12b121a9e0d626d9fbf28a",
  trailerUrl: "https://youtube.com/watch?v=example3"
}, {
  id: 4,
  title: "Between Two Worlds",
  year: 2020,
  format: "Feature Documentary",
  logline: "Second-generation Latin Americans in Belgium navigate dual cultural identities in contemporary Europe.",
  highlights: ["Latin Film Festival Best Director", "Off World Production", "Streaming Release"],
  poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
  trailerUrl: "https://youtube.com/watch?v=example4"
}, {
  id: 5,
  title: "Songs of Exile",
  year: 2019,
  format: "Musical Documentary",
  logline: "Musicians from Chile, Argentina, and Colombia find new voices while preserving their musical heritage in Belgium.",
  highlights: ["Music Film Festival", "Soundtrack Release", "Cultural Impact Award"],
  poster: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop",
  trailerUrl: "https://youtube.com/watch?v=example5"
}, {
  id: 6,
  title: "New Horizons",
  year: 2018,
  format: "Documentary",
  logline: "Young Latin American entrepreneurs building bridges between their heritage and European opportunities.",
  highlights: ["Business Film Award", "Educational Distribution", "Impact Campaign"],
  poster: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=600&fit=crop",
  trailerUrl: "https://youtube.com/watch?v=example6"
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
    return <div className="w-full">
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-6 p-6">
            {Array.from({
            length: 4
          }).map((_, index) => <Card key={index} className="w-80 flex-shrink-0">
                <CardHeader className="p-0">
                  <Skeleton className="w-full h-48 rounded-t-lg" />
                </CardHeader>
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-16 w-full mb-4" />
                  <div className="flex gap-2 mb-4">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                  <div className="flex gap-2">
                    <Skeleton className="h-9 w-24" />
                    <Skeleton className="h-9 w-9" />
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </ScrollArea>
      </div>;
  }
  return <div className="w-full">
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-6 p-6">
          {featuredFilms.map((film, index) => <motion.div key={film.id} initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <Card className="w-80 flex-shrink-0 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardHeader className="p-0 relative overflow-hidden">
                  {!imageErrors[film.id] ? <img src={film.poster} alt={`Movie poster for ${film.title}`} className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300" onError={() => handleImageError(film.id)} /> : <div className="w-full h-48 bg-muted flex items-center justify-center rounded-t-lg">
                      <Film className="h-12 w-12 text-muted-foreground" />
                    </div>}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button size="sm" className="bg-white/90 text-black hover:bg-white" onClick={() => handlePlayTrailer(film.trailerUrl, film.title)}>
                      <Play className="h-4 w-4 mr-1" />
                      Play
                    </Button>
                    {/* Added image as per user request */}
                    <img src={film.poster} alt={`Movie poster for ${film.title}`} className="w-24 h-36 object-cover rounded-lg ml-4 shadow-lg border-2 border-white/80" style={{
                  maxWidth: '96px',
                  maxHeight: '144px'
                }} />
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-bold">{film.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{film.year}</span>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="mb-4">
                    {film.format}
                  </Badge>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {film.logline}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Highlights
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {film.highlights.slice(0, 2).map((highlight, idx) => <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>)}
                      {film.highlights.length > 2 && <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Badge variant="outline" className="text-xs cursor-help">
                                +{film.highlights.length - 2} more
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div className="space-y-1">
                                {film.highlights.slice(2).map((highlight, idx) => <p key={idx} className="text-xs">{highlight}</p>)}
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handlePlayTrailer(film.trailerUrl, film.title)} className="flex-1">
                      <Play className="h-4 w-4 mr-1" />
                      Watch
                    </Button>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button size="sm" variant="outline" onClick={() => handleExternalLink(film.trailerUrl)} aria-label={`Open ${film.title} in new tab`}>
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Open in new tab</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </ScrollArea>
      
      {featuredFilms.length === 0 && <div className="text-center py-12">
          <Film className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No featured films available at the moment.</p>
        </div>}
    </div>;
}