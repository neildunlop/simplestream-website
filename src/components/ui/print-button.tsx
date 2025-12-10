'use client';

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PrintButton() {
  return (
    <Button
      onClick={() => window.print()}
      className="print:hidden"
    >
      <Download className="h-4 w-4 mr-2" />
      Print / Save as PDF
    </Button>
  );
}
