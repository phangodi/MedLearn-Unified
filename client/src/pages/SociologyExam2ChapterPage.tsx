import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Sidebar } from '@/components/layout/Sidebar';
import { DashboardReturnMarker } from '@/components/layout/DashboardReturnMarker';
import { Exam2ChapterPage } from '@/components/sociology/Exam2ChapterPage';
import { exam2Data } from '@/data/sociology/exam2Data';

export function SociologyExam2ChapterPage() {
  const { id } = useParams();
  const chapterNum = parseInt(id || '0');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Auto-collapse sidebar on exam pages (desktop only)
  useEffect(() => {
    setSidebarCollapsed(true);
    localStorage.setItem('sidebarCollapsed', 'true');
  }, []);

  const chapter = exam2Data.chapterContent[chapterNum];

  if (!chapter) {
    return <Navigate to="/sociology/exam2" replace />;
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop sidebar - hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
          isCollapsed={sidebarCollapsed}
          setIsCollapsed={setSidebarCollapsed}
        />
      </div>

      {/* Mobile-only dashboard return marker */}
      <div className="lg:hidden">
        <DashboardReturnMarker />
      </div>

      <main className="flex-1 overflow-auto">
        <Exam2ChapterPage
          chapter={chapter}
          totalChapters={exam2Data.chapters.length}
          examNumber={exam2Data.examNumber}
          basePath="/sociology/exam2"
          allChapters={exam2Data.chapterContent}
        />
      </main>
    </div>
  );
}
