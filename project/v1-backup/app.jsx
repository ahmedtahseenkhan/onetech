/* global React, ReactDOM */
/* global Nav, Hero, Services, Pillars, Certifications, Process, Partners, Locations, CTA, Footer */
/* global TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakColor */

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#FFB020",
  "heroStyle": "editorial"
}/*EDITMODE-END*/;

const PALETTE_FOR = {
  "#FFB020": "amber",
  "#4D7CFF": "electric",
  "#EE5A3A": "mono",
  "#58C89A": "emerald",
};

function App() {
  const [t, setTweak] = useTweaks(DEFAULTS);
  const palette = PALETTE_FOR[t.accent] || "amber";

  React.useEffect(() => {
    document.body.setAttribute("data-palette", palette);
    document.body.setAttribute("data-hero-style", t.heroStyle);
  }, [palette, t.heroStyle]);

  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Pillars />
      <Certifications />
      <Process />
      <Partners />
      <Locations />
      <CTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette">
          <TweakColor
            label="Accent"
            value={t.accent}
            onChange={(v) => setTweak("accent", v)}
            options={["#FFB020", "#4D7CFF", "#EE5A3A", "#58C89A"]}
          />
        </TweakSection>

        <TweakSection label="Hero treatment">
          <TweakRadio
            label="Headline"
            value={t.heroStyle}
            onChange={(v) => setTweak("heroStyle", v)}
            options={[
              { value: "editorial", label: "Editorial" },
              { value: "technical", label: "Technical" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
