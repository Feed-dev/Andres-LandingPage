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
export interface ImageGallerySliderProps {}

// Mock data for image gallery
const galleryImages = [{
  id: 1,
  src: "https://storage.googleapis.com/storage.magicpath.ai/user/282430617021460480/assets/57aafccd-43a4-4da9-95f8-450b600c3f55.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=api-storage%40magicpath.iam.gserviceaccount.com%2F20250628%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250628T112257Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=0f0ef3adb98d10bfcb7ffe878c5cd3f2f8bef9258574ea08a7412604a688721bb8e4c306c4c6091436ee406b1169b8ec294a593103109c120c38c938f4f93a594fa44a0b13c07d1b519bde7ae4c84888258786cf728cb0f29422de5496d11e42aec086c9620e29980e3e46e7c460b538b8ca950dfad9a97c6e5fe293ffa4d9c9001e464ca7f2ab4dd8062cab10c1d6b9c4be2405a44c4b31c11c80715567bcab6bfe5b3dba7ccec96c1805089838aa0e0c1edc8adff0ff1115cb1902da2c3f2e1b75096924c5279b9df4f20815cde9e7e6b095ea0340ee1100c55ea8a43244ce0475370cb89ff5603497a58e4a67d000498bf543f921c3bfa20b561c1974cfba",
  alt: "Director Andrés Lübbert on set during filming",
  caption: "Andrés Lübbert directing on location in Brussels",
  category: "Director Portrait"
}, {
  id: 2,
  src: "https://images.unsplash.com/photo-1489599735734-79b4212bea40?w=600&h=400&fit=crop",
  alt: "Key art from Crossing Borders documentary",
  caption: "Official poster for 'Crossing Borders' (2023)",
  category: "Film Key Art"
}, {
  id: 3,
  src: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600&h=400&fit=crop",
  alt: "Festival screening at Brussels Film Festival",
  caption: "World premiere at Brussels Film Festival",
  category: "Festival Still"
}, {
  id: 4,
  src: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=400&fit=crop",
  alt: "Behind the scenes crew setting up equipment",
  caption: "Camera crew preparing for interview sequence",
  category: "On-Set Photo"
}, {
  id: 5,
  src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
  alt: "Musicians performing in Songs of Exile documentary",
  caption: "Recording session for 'Songs of Exile' soundtrack",
  category: "Film Still"
}, {
  id: 6,
  src: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&h=400&fit=crop",
  alt: "Award ceremony at IDFA festival",
  caption: "Receiving Special Mention at IDFA 2021",
  category: "Festival Still"
}, {
  id: 7,
  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&sat=-100",
  alt: "Black and white portrait of Andrés Lübbert",
  caption: "Studio portrait for press materials",
  category: "Director Portrait"
}, {
  id: 8,
  src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
  alt: "Film equipment and crew during production",
  caption: "Production team setting up for documentary interview",
  category: "On-Set Photo"
}, {
  id: 9,
  src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop",
  alt: "Kinolatino festival venue with audience",
  caption: "Packed screening at Kinolatino Festival 2023",
  category: "Festival Still"
}, {
  id: 10,
  src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
  alt: "Film poster display at international festival",
  caption: "International festival showcase display",
  category: "Film Key Art"
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
    return <div className="text-center py-12">
        <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <p className="text-muted-foreground">No images available at the moment.</p>
      </div>;
  }
  return <div className="w-full">
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-6 p-6">
          {galleryImages.map((image, index) => <motion.div key={image.id} initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.05
        }}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="w-80 flex-shrink-0 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <div className="relative aspect-[3/2] bg-muted">
                        {loadingStates[image.id] && <div className="absolute inset-0 flex items-center justify-center">
                            <Skeleton className="w-full h-full" />
                          </div>}
                        
                        {errorStates[image.id] ? <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
                            <AlertTriangle className="h-8 w-8 text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground">Failed to load image</p>
                            {/* Show a fallback missing image visually for accessibility */}
                            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/282430617021460480/assets/a526b1e2-a73a-4738-86c4-3602476f87d8.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=api-storage%40magicpath.iam.gserviceaccount.com%2F20250628%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250628T115227Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=1452441b222a306babd2859c34cd5535581b89dd999a56a9442d7ed8d7eec035e1e3e0b19938003cb4678ef55a559413aa5cf64478a2bf8a95787b98e9e7c442849719099d44679b21dda367c58c6d595ca3feef96a893490aa7c98be9d320697bced98188f7730276a08a1e47e5a17843c390737da44a158634f2cf437c1e14132163b09d602bce8c109f7281f3f44dcfaabbec4dc1137825e706dcdcda9373ed2f7e7a938a0042119c5c775780dded916f4ae8930653b9f288d42bb1e768dd36094950c0978c58be0111adb3074aa2683511a78ab0657891941ae871cc8de1061dad25485fcfd83ccaf8652338065fc905785e0bf0a2539d36c123dad32720" alt="Missing image placeholder" className="w-24 h-24 object-contain mt-2 opacity-60" style={{
                        marginTop: "0px",
                        width: "318px",
                        maxWidth: "318px",
                        height: "auto",
                        minHeight: "min-content"
                      }} />
                          </div> : <>
                            <picture>
                              <source srcSet={image.src} media="(min-width: 768px)" />
                              <img src={image.src} alt={image.alt} className={cn("w-full h-full object-cover group-hover:scale-105 transition-transform duration-300", loadingStates[image.id] ? "opacity-0" : "opacity-100")} onLoad={() => handleImageLoad(image.id)} onError={() => handleImageError(image.id)} />
                            </picture>
                            {/* Overlay with category */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            {/* Category badge */}
                            <div className="absolute top-3 left-3">
                              <span className={cn("inline-flex items-center px-2 py-1 rounded-full text-xs font-medium", getCategoryColor(image.category))}>
                                <Camera className="h-3 w-3 mr-1" />
                                {image.category}
                              </span>
                              <style>{`
                                [data-magicpath-id='20'] {
                                  height: 212px !important;
                                  min-height: 212px !important;
                                  max-height: 212px !important;
                                }
                              `}</style>
                            </div>
                            {/* Caption overlay on hover */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-white text-sm font-medium">
                                {image.caption}
                              </p>
                            </div>
                          </>}
                      </div>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="max-w-xs">
                      <p className="font-medium">{image.category}</p>
                      <p className="text-sm text-muted-foreground">{image.caption}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>)}
        </div>
      </ScrollArea>
      
      {/* Loading state for initial render */}
      {Object.values(loadingStates).every(loading => loading) && <div className="w-full mt-4">
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-6 p-6">
              {Array.from({
            length: 4
          }).map((_, index) => <Card key={index} className="w-80 flex-shrink-0 overflow-hidden">
                  <Skeleton className="w-full aspect-[3/2]" />
                </Card>)}
            </div>
          </ScrollArea>
        </div>}
    </div>;
}