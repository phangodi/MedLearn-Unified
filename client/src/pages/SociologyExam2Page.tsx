import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { DashboardReturnMarker } from '@/components/layout/DashboardReturnMarker';
import { Exam2Home } from '@/components/sociology/Exam2Home';
import { exam2Data } from '@/data/sociology/exam2Data';

export function SociologyExam2Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Auto-collapse sidebar on exam pages (desktop only)
  useEffect(() => {
    setSidebarCollapsed(true);
    localStorage.setItem('sidebarCollapsed', 'true');
  }, []);

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
        <Exam2Home
          examNumber={exam2Data.examNumber}
          examTitle={exam2Data.examTitle}
          examDescription={exam2Data.examDescription}
          chapters={exam2Data.chapters}
          chapterContent={exam2Data.chapterContent}
          basePath="/sociology/exam2"
        />
      </main>
    </div>
  );
}
