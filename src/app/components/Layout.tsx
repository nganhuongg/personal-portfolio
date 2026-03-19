import { Outlet, NavLink, useLocation } from "react-router";
import { Github } from "lucide-react";

export function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen">
      <nav
        className={
          isHome
            ? "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/10 text-white backdrop-blur-md"
            : "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
        }
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <NavLink 
              to="/" 
              className={
                isHome
                  ? "font-medium text-white hover:text-white/80 transition-colors"
                  : "font-medium text-foreground hover:text-primary transition-colors"
              }
            >
              Ngan Huong Nguyen
            </NavLink>
            
            <div className="flex items-center gap-8">
              <div className="hidden md:flex items-center gap-6">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `transition-colors ${
                      isHome
                        ? isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                        : isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                    }`
                  }
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/experience"
                  className={({ isActive }) =>
                    `transition-colors ${
                      isHome
                        ? isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                        : isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                    }`
                  }
                >
                  Experience
                </NavLink>
                <NavLink
                  to="/achievements"
                  className={({ isActive }) =>
                    `transition-colors ${
                      isHome
                        ? isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                        : isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                    }`
                  }
                >
                  Achievements
                </NavLink>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    `transition-colors ${
                      isHome
                        ? isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                        : isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                    }`
                  }
                >
                  Skills
                </NavLink>
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    `transition-colors ${
                      isHome
                        ? isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                        : isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                    }`
                  }
                >
                  Resume
                </NavLink>
              </div>
              
              <a
                href="https://github.com/nganhuongg"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isHome
                    ? "text-white/85 hover:text-white transition-colors"
                    : "text-foreground hover:text-primary transition-colors"
                }
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <main className={isHome ? "" : "pt-16"}>
        <Outlet />
      </main>
    </div>
  );
}
