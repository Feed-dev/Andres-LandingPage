"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Image as ImageIcon, AlertTriangle, Camera } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
export interface ImageGallerySliderProps {
  mpid?: string;
}

// Mock data for image gallery
const galleryImages = [{
  id: 1,
  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  alt: "Director Andrés Lübbert on set during filming",
  caption: "Andrés Lübbert directing on location in Brussels",
  category: "Director Portrait",
  mpid: "ac4962ad-cab6-41f2-b8ee-b85ec95cf6a8"
}, {
  id: 2,
  src: "https://images.unsplash.com/photo-1489599735734-79b4212bea40?w=600&h=400&fit=crop",
  alt: "Key art from Crossing Borders documentary",
  caption: "Official poster for 'Crossing Borders' (2023)",
  category: "Film Key Art",
  mpid: "68ebc0d0-315b-4911-8241-2771d4493571"
}, {
  id: 3,
  src: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600&h=400&fit=crop",
  alt: "Festival screening at Brussels Film Festival",
  caption: "World premiere at Brussels Film Festival",
  category: "Festival Still",
  mpid: "bd71f184-9641-41e1-afb9-1f32187658da"
}, {
  id: 4,
  src: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=400&fit=crop",
  alt: "Behind the scenes crew setting up equipment",
  caption: "Camera crew preparing for interview sequence",
  category: "On-Set Photo",
  mpid: "fe16a33c-7fa2-4a55-914c-c4bf59ca0615"
}, {
  id: 5,
  src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
  alt: "Musicians performing in Songs of Exile documentary",
  caption: "Recording session for 'Songs of Exile' soundtrack",
  category: "Film Still",
  mpid: "3d70ea5c-99cf-4ea9-92c8-3487faf865f8"
}, {
  id: 6,
  src: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&h=400&fit=crop",
  alt: "Award ceremony at IDFA festival",
  caption: "Receiving Special Mention at IDFA 2021",
  category: "Festival Still",
  mpid: "285ee270-b51c-4f0f-b62b-5e5bee3f9d37"
}, {
  id: 7,
  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&sat=-100",
  alt: "Black and white portrait of Andrés Lübbert",
  caption: "Studio portrait for press materials",
  category: "Director Portrait",
  mpid: "aa0e3a05-a0a2-46b7-8ea4-64bd5809073f"
}, {
  id: 8,
  src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
  alt: "Film equipment and crew during production",
  caption: "Production team setting up for documentary interview",
  category: "On-Set Photo",
  mpid: "ec3eeed4-16f2-4fdf-ba87-9eca3f459b62"
}, {
  id: 9,
  src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop",
  alt: "Kinolatino festival venue with audience",
  caption: "Packed screening at Kinolatino Festival 2023",
  category: "Festival Still",
  mpid: "1f31638b-aee2-46b9-a158-62b9b8b0a069"
}, {
  id: 10,
  src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
  alt: "Film poster display at international festival",
  caption: "International festival showcase display",
  category: "Film Key Art",
  mpid: "781d54e5-1106-43b1-99b9-6be93ec2bbd2"
}] as any[];
export default function ImageGallerySlider({}: ImageGallerySliderProps) {
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>(galleryImages.reduce((acc, image) => ({
    ...acc,
    [image.id]: true
  }), {}));
  const [errorStates, setErrorStates] = useState<Record<number, boolean>>({});
  const handleImageLoad = (imageId: number) => {
    setLoadingStates(prev => ({
      ...prev,
      [imageId]: false
    }));
  };
  const handleImageError = (imageId: number) => {
    setLoadingStates(prev => ({
      ...prev,
      [imageId]: false
    }));
    setErrorStates(prev => ({
      ...prev,
      [imageId]: true
    }));
  };
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'director portrait':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'film key art':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'festival still':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'on-set photo':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'film still':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };
  if (galleryImages.length === 0) {
    return <div className="text-center py-12" data-magicpath-id="0" data-magicpath-path="ImageGallerySlider.tsx">
        <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" data-magicpath-id="1" data-magicpath-path="ImageGallerySlider.tsx" />
        <p className="text-muted-foreground" data-magicpath-id="2" data-magicpath-path="ImageGallerySlider.tsx">No images available at the moment.</p>
      </div>;
  }
  return <div className="w-full" data-magicpath-id="3" data-magicpath-path="ImageGallerySlider.tsx">
      <ScrollArea className="w-full whitespace-nowrap rounded-md border" data-magicpath-id="4" data-magicpath-path="ImageGallerySlider.tsx">
        <div className="flex w-max space-x-6 p-6" data-magicpath-id="5" data-magicpath-path="ImageGallerySlider.tsx">
          {galleryImages.map((image, index) => <motion.div key={image.id} initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.05
        }} data-magicpath-id="6" data-magicpath-path="ImageGallerySlider.tsx">
              <TooltipProvider data-magicpath-id="7" data-magicpath-path="ImageGallerySlider.tsx">
                <Tooltip data-magicpath-id="8" data-magicpath-path="ImageGallerySlider.tsx">
                  <TooltipTrigger asChild data-magicpath-id="9" data-magicpath-path="ImageGallerySlider.tsx">
                    <Card className="w-80 flex-shrink-0 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer" data-magicpath-id="10" data-magicpath-path="ImageGallerySlider.tsx">
                      <div className="relative aspect-[3/2] bg-muted" data-magicpath-id="11" data-magicpath-path="ImageGallerySlider.tsx">
                        {loadingStates[image.id] && <div className="absolute inset-0 flex items-center justify-center" data-magicpath-id="12" data-magicpath-path="ImageGallerySlider.tsx">
                            <Skeleton className="w-full h-full" data-magicpath-id="13" data-magicpath-path="ImageGallerySlider.tsx" />
                          </div>}
                        
                        {errorStates[image.id] ? <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted" data-magicpath-id="14" data-magicpath-path="ImageGallerySlider.tsx">
                            <AlertTriangle className="h-8 w-8 text-muted-foreground mb-2" data-magicpath-id="15" data-magicpath-path="ImageGallerySlider.tsx" />
                            <p className="text-sm text-muted-foreground" data-magicpath-id="16" data-magicpath-path="ImageGallerySlider.tsx">Failed to load image</p>
                          </div> : <>
                            <img src={image.src} alt={image.alt} className={cn("w-full h-full object-cover group-hover:scale-105 transition-transform duration-300", loadingStates[image.id] ? "opacity-0" : "opacity-100")} onLoad={() => handleImageLoad(image.id)} onError={() => handleImageError(image.id)} data-magicpath-uuid={(image as any)["mpid"] ?? "unsafe"} data-magicpath-field="src:string" data-magicpath-id="17" data-magicpath-path="ImageGallerySlider.tsx" />
                            
                            {/* Overlay with category */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" data-magicpath-id="18" data-magicpath-path="ImageGallerySlider.tsx" />
                            
                            {/* Category badge */}
                            <div className="absolute top-3 left-3" data-magicpath-id="19" data-magicpath-path="ImageGallerySlider.tsx">
                              <span className={cn("inline-flex items-center px-2 py-1 rounded-full text-xs font-medium", getCategoryColor(image.category))} data-magicpath-uuid={(image as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:string" data-magicpath-id="20" data-magicpath-path="ImageGallerySlider.tsx">
                                <Camera className="h-3 w-3 mr-1" />
                                {image.category}
                              </span>
                            </div>
                            
                            {/* Caption overlay on hover */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-id="21" data-magicpath-path="ImageGallerySlider.tsx">
                              <p className="text-white text-sm font-medium" data-magicpath-uuid={(image as any)["mpid"] ?? "unsafe"} data-magicpath-field="caption:string" data-magicpath-id="22" data-magicpath-path="ImageGallerySlider.tsx">
                                {image.caption}
                              </p>
                            </div>
                          </>}
                      </div>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent data-magicpath-id="23" data-magicpath-path="ImageGallerySlider.tsx">
                    <div className="max-w-xs" data-magicpath-id="24" data-magicpath-path="ImageGallerySlider.tsx">
                      <p className="font-medium" data-magicpath-uuid={(image as any)["mpid"] ?? "unsafe"} data-magicpath-field="category:string" data-magicpath-id="25" data-magicpath-path="ImageGallerySlider.tsx">{image.category}</p>
                      <p className="text-sm text-muted-foreground" data-magicpath-uuid={(image as any)["mpid"] ?? "unsafe"} data-magicpath-field="caption:string" data-magicpath-id="26" data-magicpath-path="ImageGallerySlider.tsx">{image.caption}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>)}
        </div>
      </ScrollArea>
      
      {/* Loading state for initial render */}
      {Object.values(loadingStates).every(loading => loading) && <div className="w-full mt-4" data-magicpath-id="27" data-magicpath-path="ImageGallerySlider.tsx">
          <ScrollArea className="w-full whitespace-nowrap rounded-md border" data-magicpath-id="28" data-magicpath-path="ImageGallerySlider.tsx">
            <div className="flex w-max space-x-6 p-6" data-magicpath-id="29" data-magicpath-path="ImageGallerySlider.tsx">
              {Array.from({
            length: 4
          }).map((_, index) => <Card key={index} className="w-80 flex-shrink-0 overflow-hidden" data-magicpath-id="30" data-magicpath-path="ImageGallerySlider.tsx">
                  <Skeleton className="w-full aspect-[3/2]" data-magicpath-id="31" data-magicpath-path="ImageGallerySlider.tsx" />
                </Card>)}
            </div>
          </ScrollArea>
        </div>}
    </div>;
}