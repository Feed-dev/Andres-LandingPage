"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Play, Youtube, AlertTriangle, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
export interface VideoGridProps {
  mpid?: string;
}

// Mock data for video gallery
const videos = [{
  id: 1,
  title: "Crossing Borders - Official Trailer",
  youtubeId: "dQw4w9WgXcQ",
  // Using a real YouTube ID for demo
  viewNotes: "Winner of Brussels Film Festival 2023",
  category: "Trailer",
  duration: "2:34",
  mpid: "88dadf0d-cde1-4503-9dba-81d009afeca7"
}, {
  id: 2,
  title: "Voices from the South - Episode 1 Teaser",
  youtubeId: "9bZkp7q19f0",
  // Using a real YouTube ID for demo
  viewNotes: "Part of acclaimed documentary series",
  category: "Teaser",
  duration: "1:45",
  mpid: "ac9441be-02b7-40d8-a9fc-539a668e6c85"
}, {
  id: 3,
  title: "The Memory Keeper - Behind the Scenes",
  youtubeId: "jNQXAC9IVRw",
  // Using a real YouTube ID for demo
  viewNotes: "IDFA Special Mention recipient",
  category: "Behind the Scenes",
  duration: "3:12",
  mpid: "648a2ba4-0cc1-4288-8191-bab580c6b60e"
}, {
  id: 4,
  title: "Between Two Worlds - Director's Commentary",
  youtubeId: "y6120QOlsfU",
  // Using a real YouTube ID for demo
  viewNotes: "Insights into the filmmaking process",
  category: "Commentary",
  duration: "4:28",
  mpid: "f1f6a3cc-c2aa-47bc-9e5f-01affbcdde46"
}, {
  id: 5,
  title: "Songs of Exile - Music Video",
  youtubeId: "kJQP7kiw5Fk",
  // Using a real YouTube ID for demo
  viewNotes: "Featured soundtrack from the documentary",
  category: "Music Video",
  duration: "3:45",
  mpid: "633fc6eb-e6f8-450f-bbfc-ebd57f87ba8d"
}, {
  id: 6,
  title: "Kinolatino Festival 2023 Highlights",
  youtubeId: "fJ9rUzIMcZQ",
  // Using a real YouTube ID for demo
  viewNotes: "Annual celebration of Latin American cinema",
  category: "Festival",
  duration: "5:20",
  mpid: "e9f7e3f1-efbc-4620-88a3-ec73773535a5"
}] as any[];
export default function VideoGrid({}: VideoGridProps) {
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>(videos.reduce((acc, video) => ({
    ...acc,
    [video.id]: true
  }), {}));
  const [errorStates, setErrorStates] = useState<Record<number, boolean>>({});
  const handleVideoLoad = (videoId: number) => {
    setLoadingStates(prev => ({
      ...prev,
      [videoId]: false
    }));
  };
  const handleVideoError = (videoId: number) => {
    setLoadingStates(prev => ({
      ...prev,
      [videoId]: false
    }));
    setErrorStates(prev => ({
      ...prev,
      [videoId]: true
    }));
  };
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'trailer':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'teaser':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'behind the scenes':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'commentary':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'music video':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'festival':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };
  if (videos.length === 0) {
    return <div className="text-center py-12" data-magicpath-id="0" data-magicpath-path="VideoGrid.tsx">
        <Youtube className="h-12 w-12 mx-auto text-muted-foreground mb-4" data-magicpath-id="1" data-magicpath-path="VideoGrid.tsx" />
        <p className="text-muted-foreground" data-magicpath-id="2" data-magicpath-path="VideoGrid.tsx">No videos available at the moment.</p>
      </div>;
  }
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-magicpath-id="3" data-magicpath-path="VideoGrid.tsx">
      {videos.map((video, index) => <motion.div key={video.id} initial={{
      opacity: 0,
      y: 50
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: index * 0.1
    }} data-magicpath-id="4" data-magicpath-path="VideoGrid.tsx">
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group" data-magicpath-id="5" data-magicpath-path="VideoGrid.tsx">
            <CardHeader className="p-0 relative" data-magicpath-id="6" data-magicpath-path="VideoGrid.tsx">
              <div className="relative aspect-video bg-muted" data-magicpath-id="7" data-magicpath-path="VideoGrid.tsx">
                {loadingStates[video.id] && <div className="absolute inset-0 flex items-center justify-center" data-magicpath-id="8" data-magicpath-path="VideoGrid.tsx">
                    <Skeleton className="w-full h-full" data-magicpath-id="9" data-magicpath-path="VideoGrid.tsx" />
                  </div>}
                
                {errorStates[video.id] ? <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted" data-magicpath-id="10" data-magicpath-path="VideoGrid.tsx">
                    <AlertTriangle className="h-8 w-8 text-muted-foreground mb-2" data-magicpath-id="11" data-magicpath-path="VideoGrid.tsx" />
                    <p className="text-sm text-muted-foreground" data-magicpath-id="12" data-magicpath-path="VideoGrid.tsx">Failed to load video</p>
                  </div> : <iframe src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`} title={video.title} aria-label={`Video: ${video.title}`} className={cn("w-full h-full border-0", loadingStates[video.id] ? "opacity-0" : "opacity-100")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen onLoad={() => handleVideoLoad(video.id)} onError={() => handleVideoError(video.id)} data-magicpath-id="13" data-magicpath-path="VideoGrid.tsx" />}
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3" data-magicpath-id="14" data-magicpath-path="VideoGrid.tsx">
                  <Badge className={cn("text-xs font-medium", getCategoryColor(video.category))} data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:unknown" data-magicpath-id="15" data-magicpath-path="VideoGrid.tsx">
                    {video.category}
                  </Badge>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-3 right-3" data-magicpath-id="16" data-magicpath-path="VideoGrid.tsx">
                  <Badge variant="secondary" className="text-xs bg-black/70 text-white border-0" data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-field="duration:unknown" data-magicpath-id="17" data-magicpath-path="VideoGrid.tsx">
                    {video.duration}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-6" data-magicpath-id="18" data-magicpath-path="VideoGrid.tsx">
              <CardTitle className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors" data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="19" data-magicpath-path="VideoGrid.tsx">
                {video.title}
              </CardTitle>
              
              <div className="flex items-start gap-2 text-sm text-muted-foreground" data-magicpath-id="20" data-magicpath-path="VideoGrid.tsx">
                <Eye className="h-4 w-4 mt-0.5 flex-shrink-0" data-magicpath-id="21" data-magicpath-path="VideoGrid.tsx" />
                <p className="leading-relaxed" data-magicpath-uuid={(video as any)["mpid"] ?? "unsafe"} data-magicpath-field="viewNotes:unknown" data-magicpath-id="22" data-magicpath-path="VideoGrid.tsx">{video.viewNotes}</p>
              </div>
              
              <div className="mt-4 flex items-center justify-between" data-magicpath-id="23" data-magicpath-path="VideoGrid.tsx">
                <TooltipProvider data-magicpath-id="24" data-magicpath-path="VideoGrid.tsx">
                  <Tooltip data-magicpath-id="25" data-magicpath-path="VideoGrid.tsx">
                    <TooltipTrigger asChild data-magicpath-id="26" data-magicpath-path="VideoGrid.tsx">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground" data-magicpath-id="27" data-magicpath-path="VideoGrid.tsx">
                        <Youtube className="h-3 w-3" data-magicpath-id="28" data-magicpath-path="VideoGrid.tsx" />
                        <span data-magicpath-id="29" data-magicpath-path="VideoGrid.tsx">YouTube</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent data-magicpath-id="30" data-magicpath-path="VideoGrid.tsx">
                      <p data-magicpath-id="31" data-magicpath-path="VideoGrid.tsx">Watch on YouTube</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <div className="flex items-center gap-1 text-xs text-muted-foreground" data-magicpath-id="32" data-magicpath-path="VideoGrid.tsx">
                  <Play className="h-3 w-3" data-magicpath-id="33" data-magicpath-path="VideoGrid.tsx" />
                  <span data-magicpath-id="34" data-magicpath-path="VideoGrid.tsx">Click to play</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>)}
    </div>;
}