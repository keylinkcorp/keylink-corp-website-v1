export function LandingFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Keylink Corp. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Disclaimer: We do not issue Commercial Registration (CR). CR is issued by Bahrain government authorities only.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            className="text-muted-foreground hover:text-foreground transition-colors"
            href="/privacy-policy"
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>
          <a
            className="text-muted-foreground hover:text-foreground transition-colors"
            href="/terms-of-service"
            target="_blank"
            rel="noreferrer"
          >
            Terms
          </a>
          <a
            className="text-muted-foreground hover:text-foreground transition-colors"
            href="/cookie-policy"
            target="_blank"
            rel="noreferrer"
          >
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
