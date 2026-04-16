export default function AboutPage() {
  const values = [
    {
      icon: '💀',
      title: 'Community First',
      description: 'Built by gamers, for gamers. Every drop is shaped by the community that wears it, plays with it, and lives by it.',
    },
    {
      icon: '💎',
      title: 'Premium Always',
      description: 'We refuse to compromise on quality. Every stitch, every pixel, every keystroke meets our obsessive standards.',
    },
    {
      icon: '⚡',
      title: 'Limited Always',
      description: 'No reprints. No restocks. When it drops, it drops once. Own a piece of history or miss it forever.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-20">
          <p className="text-skull-neon-pink text-xs uppercase tracking-[0.35em] mb-3">Our story</p>
          <h1 className="font-display text-7xl gradient-skull mb-6">THE ALTAR</h1>

          <div className="max-w-2xl mx-auto bg-skull-dark rounded-2xl border border-skull-border card-glow p-8">
            <p className="text-skull-text text-lg leading-relaxed">
              We didn&apos;t build a store. We built an altar.{' '}
              <span className="text-skull-neon-pink font-semibold">SkullDrop</span> was born from
              late-night sessions, neon screens, and a love for the dead. Every product is a
              offering — to the culture, to the craft, to the grind.
            </p>
            <p className="text-skull-muted text-base leading-relaxed mt-4">
              Wear it. Play it. Own it.
            </p>
          </div>
        </div>

        {/* Value Cards */}
        <section className="mb-20">
          <h2 className="font-display text-4xl glow-purple text-skull-neon-purple text-center mb-10">
            WHAT WE STAND FOR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-skull-dark rounded-2xl border border-skull-border card-glow p-8 text-center hover:border-skull-neon-purple/50 transition-colors duration-200"
              >
                <div className="text-5xl mb-4">{val.icon}</div>
                <h3 className="font-display text-2xl text-skull-text mb-3">{val.title}</h3>
                <p className="text-skull-muted text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founders Note */}
        <section className="bg-skull-dark rounded-2xl border border-skull-border card-glow p-8 md:p-12">
          <h2 className="font-display text-3xl gradient-skull mb-8 text-center">FOUNDERS NOTE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-full bg-skull-card border-2 border-skull-neon-purple/40 flex items-center justify-center text-4xl mb-4">
                💀
              </div>
              <p className="font-display text-xl text-skull-text">The SkullDrop Crew</p>
              <p className="text-skull-muted text-sm">Est. 2024 — Born at 3AM</p>
            </div>
            <div>
              <blockquote className="text-skull-text text-base leading-relaxed italic border-l-2 border-skull-neon-pink pl-6">
                &quot;We started this because we were tired of gaming gear that looked like it was
                designed in a corporate boardroom. We wanted something that felt like us — dark,
                artistic, alive. Something that honored the dead and celebrated the grind. That&apos;s
                SkullDrop. That will always be SkullDrop.&quot;
              </blockquote>
              <p className="text-skull-neon-pink text-sm font-semibold mt-4 pl-6">
                — The Founders
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
