"use client";
import { Mail } from "lucide-react";
import React from "react";
import { config } from "@/data/config";
import { Button } from "./ui/button";

const ContactForm = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${config.email}?subject=Portfolio Contact&body=Hi Ayaan,%0D%0A%0D%0A`;
  };

  return (
    <div className="min-w-7xl mx-auto sm:mt-4 space-y-6">
      <div className="text-center space-y-4">
        <p className="text-lg text-muted-foreground">
          Let&apos;s connect! Feel free to reach out via email.
        </p>
        
        <div className="bg-secondary/50 border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            <a 
              href={`mailto:${config.email}`}
              className="text-lg font-medium text-primary hover:underline"
            >
              {config.email}
            </a>
          </div>
          
          <Button
            onClick={handleEmailClick}
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-12 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          >
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              Send Email
            </div>
            <BottomGradient />
          </Button>
        </div>

        <div className="pt-4">
          <p className="text-sm text-muted-foreground">
            You can also find me on:
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href={config.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Twitter/X
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-brand to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent orange-400 to-transparent" />
    </>
  );
};
