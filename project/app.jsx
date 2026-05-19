/* global React, ReactDOM */
/* global DocBar, Hero, Services, Principles, Certifications, Process, Partners, Locations, CTA, Footer */
/* global TweaksPanel, useTweaks, TweakSection, TweakColor */

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F4B324"
}/*EDITMODE-END*/;

const ACCENT_MAP = {
  "#F4B324": "amber",
  "#2A6FDB": "azure",
  "#4FA67D": "moss",
  "#c84a26": "rust",
};

function App() {
  const [t, setTweak] = useTweaks(DEFAULTS);

  React.useEffect(() => {
    document.body.setAttribute("data-accent", ACCENT_MAP[t.accent] || "amber");
  }, [t.accent]);

  return (
    <>
      <DocBar />
      <Hero />
      <Services />
      <Principles />
      <Certifications />
      <Process />
      <Partners />
      <Locations />
      <CTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent color">
          <TweakColor
            label="Highlight"
            value={t.accent}
            onChange={(v) => setTweak("accent", v)}
            options={["#F4B324", "#2A6FDB", "#4FA67D", "#c84a26"]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
