import { Download, FileText, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import resumeImage from "../../../Resume/resume.png";
import resumePdf from "../../../Resume/resume.pdf";

export function Resume() {
  return (
    <div className="w-full py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl mb-6">Resume</h1>
          <div className="h-1 w-20 bg-primary rounded mb-6"></div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Download my complete resume or view the summary below.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-10 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl mb-2">Ngan Huong Nguyen - Resume.pdf</h2>
                  <p className="text-base text-muted-foreground">Last updated: March 2026</p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-dark"
              >
                <a href={resumePdf} download="Ngan-Huong-Nguyen-Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </Card>

          {/* Resume Preview Image */}
          <Card className="p-0 overflow-hidden">
            <img 
              src={resumeImage} 
              alt="Resume Preview" 
              className="w-full h-auto"
            />
          </Card>

          {/* Contact Information */}
          <Card className="p-10">
            <h2 className="text-3xl mb-8">Contact Information</h2>
            <div className="space-y-6">
              <a
                href="mailto:nganhuong.nguyenn@gmail.com"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <span className="text-base">nganhuong.nguyenn@gmail.com</span>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/nganhuongnguyenn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                  <span className="text-base">linkedin.com/in/nganhuongnguyenn</span>
                </div>
              </a>
              <a
                href="https://x.com/nganhuonggg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Twitter className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">X (Twitter)</p>
                  <span className="text-base">@nganhuonggg</span>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
