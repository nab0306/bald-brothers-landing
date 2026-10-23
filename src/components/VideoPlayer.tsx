import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { Language, VideoChapter } from '../types';
import { videoChapters } from '../data/content';

interface VideoPlayerProps {
  language: Language;
  videoRef?: React.RefObject<HTMLVideoElement | null>;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ language, videoRef: externalVideoRef }) => {
  const isEn = language === 'en';
  const chapters = videoChapters[language];

  const localVideoRef = useRef<HTMLVideoElement>(null);
  const videoRef = externalVideoRef || localVideoRef;

  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  const handleJumpToChapter = (chapter: VideoChapter, index: number) => {
    setActiveChapterIndex(index);
    if (videoRef.current) {
      videoRef.current.currentTime = chapter.timestamp;
      videoRef.current.play().catch(() => {
        // Handle playback permissions gracefully if triggered before interaction
      });
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    for (let i = chapters.length - 1; i >= 0; i--) {
      if (current >= chapters[i].timestamp) {
        setActiveChapterIndex(i);
        break;
      }
    }
  };

  return (
    <section id="video-offer" className="py-16 md:py-24 bg-[#140d09] border-y border-[#d09e59]/20 relative">
      <div className="max-w-[1200px] mx-auto px-0 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 px-4 sm:px-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#332115] border border-[#d09e59]/30 text-[#d09e59] text-xs font-semibold uppercase tracking-wider mb-3">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isEn ? 'Direct Video Proposal' : 'Пряме відео-звернення'}</span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#f7f3ea] mb-3">
            {isEn ? 'Watch the Full Proposal in 2 Minutes' : 'Перегляньте повну пропозицію за 2 хвилини'}
          </h2>

          <p className="text-sm sm:text-base text-[#e8dcc4]/80 font-['Inter']">
            {isEn
              ? 'Embedded directly on the page — no external redirects, no ads. Jump to any slide or topic using the chapters below.'
              : 'Вбудоване безпосередньо на лендінгу — без переходу на YouTube чи реклами. Обирайте потрібний розділ за допомогою таймкодів.'}
          </p>
        </div>

        {/* Video Player Container (Native HTML5 <video> - 16:9 responsive, fullscreen allowed) */}
        <div className="relative aspect-video w-full rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-[#d09e59]/30 sm:border-2 sm:border-[#d09e59]/40 shadow-xl sm:shadow-2xl shadow-black/80">
          <video
            ref={videoRef}
            src="https://nab0306.github.io/bald-brothers-video/Bald_Brothers_web.mp4"
            controls
            playsInline
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-contain bg-black"
          >
            <source src="https://nab0306.github.io/bald-brothers-video/Bald_Brothers_web.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Interactive Chapters Grid */}
        <div className="mt-8 px-4 sm:px-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#d09e59] font-['Oswald']">
              {isEn ? 'Interactive Video Chapters & Slides' : 'Інтерактивні розділи та слайди відео'}
            </h3>
            <span className="text-xs text-[#e8dcc4]/60">
              {isEn ? 'Click any card to jump immediately' : 'Натисніть на тему, щоб перейти'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {chapters.map((chapter, index) => {
              const isActive = activeChapterIndex === index;
              return (
                <button
                  key={chapter.id}
                  onClick={() => handleJumpToChapter(chapter, index)}
                  className={`text-left p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#332115] border-[#d09e59] shadow-md shadow-[#d09e59]/20 ring-1 ring-[#d09e59]'
                      : 'bg-[#211710]/80 border-[#d09e59]/20 hover:border-[#d09e59]/60 hover:bg-[#26180f]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[11px] font-mono font-bold text-[#d09e59]">
                      {chapter.timeFormatted}
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                      isActive ? 'bg-[#d09e59] text-[#140d09]' : 'bg-[#332115] text-[#e8dcc4]/70'
                    }`}>
                      {chapter.badge}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-[#f7f3ea] line-clamp-1 mb-0.5">
                    {chapter.title}
                  </h4>
                  <p className="text-[11px] text-[#e8dcc4]/70 line-clamp-2 leading-tight">
                    {chapter.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
