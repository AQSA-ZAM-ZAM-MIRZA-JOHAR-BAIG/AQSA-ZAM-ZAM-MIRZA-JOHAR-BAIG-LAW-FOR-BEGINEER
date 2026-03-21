"use client";

import { MessageSquare } from "lucide-react";

export function Comments() {
  return (
    <div className="mt-16 pt-8 border-t border-dashed">
      <div className="flex items-center gap-2 mb-8">
        <MessageSquare className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Questions & Discussions</h2>
      </div>
      
      <div className="rounded-xl border bg-card p-10 flex flex-col items-center justify-center text-center shadow-sm">
        <div className="bg-primary/5 p-4 rounded-full mb-4">
          <MessageSquare className="w-8 h-8 text-primary/60" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Join the conversation</h3>
        <p className="text-muted-foreground mb-6 max-w-sm">
          Have a question about this topic? Ask our community or leave a comment below.
        </p>
        
        <div className="p-4 bg-muted/50 rounded-lg border text-sm max-w-md w-full">
          <p className="font-medium text-foreground mb-1 italic">
            "Wait, so an FIR can only be filed for serious crimes?"
          </p>
          <p className="text-xs text-muted-foreground">— Sample Question</p>
        </div>
        
        <div className="mt-8 pt-6 border-t w-full text-xs text-muted-foreground">
          Giscus/Disqus integration ready for production deployment.
        </div>
      </div>
    </div>
  );
}
