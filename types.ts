// Fix: Import React to use React.ReactNode type.
import React from 'react';

export interface Project {
  title: string;
  description: string;
  videoUrl: string | null;
  thumbnailUrl?: string;
  tags: string[];
  icon: React.ReactNode;
}
