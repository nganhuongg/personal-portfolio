import { Outlet, NavLink, useLocation, useNavigate } from "react-router";
import { Github } from "lucide-react";

// The home page is a single scrollable page. These items link to sections within it.
// On other pages, clicking them navigates home first, then scrolls to the section.
// Resume is first because it appears first on the page (right after the hero).
const sectionNavItems = [
  { label: "About", anchor: "about" },
  { label: "Resume", anchor: "resume" },
  { label: "Projects", anchor: "projects" },
  { label: "Experience", anchor: "experience" },
  { label: "Skills", anchor: "skills" },
  { label: "Achievements", anchor: "achievements" },
];

// A nav link that scrolls to a section ID on the home page.
// If the user is on a different page, it navigates to "/" first, then scrolls.
function SectionNavLink({
  anchor,
  label,
  isHome,
}: {
  anchor: string;
  label: string;
  isHome: boolean;
}) {
  const navigate = useNavigate();

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    if (isHome) {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home, then wait one frame for the page to render before scrolling
      navigate("/");
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }

  const className = isHome
    ? "text-white/80 hover:text-white transition-colors cursor-pointer"
    : "text-foreground hover:text-primary transition-colors cursor-pointer";

  return (
    <a href={`#${anchor}`} onClick={handleClick} className={className}>
      {label}
    </a>
  );
}

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
                {/* Section-scroll links for the single-page home */}
                {sectionNavItems.map((item) => (
                  <SectionNavLink
                    key={item.anchor}
                    anchor={item.anchor}
                    label={item.label}
                    isHome={isHome}
                  />
                ))}

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
