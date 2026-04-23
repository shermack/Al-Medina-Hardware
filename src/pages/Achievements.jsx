import React from "react";
import { useInView } from "framer-motion";

const achievements = [
  {
    title: "Established in 2006",
    detail: "Grew from a small-scale hardware shop to a leading wholesale and retail enterprise.",
    icon: "⏳",
    value: 20,
    suffix: "+"
  },
  {
    title: "Leading Brand in Kilifi",
    detail: "Trusted by contractors, developers, and homeowners across the Coast region.",
    icon: "👥",
    value: 5000,
    suffix: "+"
  },
  {
    title: "Comprehensive Showroom and Go-Down",
    detail: "State-of-the-art showroom with a fully departmentalized warehouse.",
    icon: "🏗",
    value: 12,
    suffix: " Units"
  },
  {
    title: "Reliable Delivery System",
    detail: "Timely and accurate deliveries with a dedicated logistics team.",
    icon: "🚚",
    value: 98,
    suffix: "%"
  },
  {
    title: "Strong Supplier Partnerships",
    detail: "Sourcing quality local and imported products from reputable manufacturers.",
    icon: "📦",
    value: 85,
    suffix: "+"
  },
  {
    title: "Digitized Operations",
    detail: "Computerized systems for fast order processing and inventory control.",
    icon: "⚙️",
    value: 100,
    suffix: "%"
  }
];

const CountUp = ({ value, suffix }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;

    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame((timestamp) => {
      start = timestamp;
      requestAnimationFrame(step);
    });
  }, [isInView, value]);

  return (
    <span ref={ref} className="inline-block border-b-2 border-brand-orange pb-2 font-heading text-4xl font-bold text-brand-blue">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Achievements = () => {
  return (
    <div className="achievements-page pb-20 pt-12">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">Achievements</p>
          <h1 className="achievements-heading mt-4 text-3xl font-heading font-semibold text-white md:text-4xl">
            Milestones and Impact
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-base text-blue-100 md:text-lg">
            Over the years, we have built a reputation for reliability, quality, and innovation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {achievements.map((item) => (
            <div key={item.title} className="achievement-card rounded-3xl p-6">
              <div className="text-2xl" aria-hidden="true">{item.icon}</div>
              <div className="mt-4">
                <CountUp value={item.value} suffix={item.suffix} />
              </div>
              <h3 className="mt-4 text-lg font-heading font-semibold text-brand-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-slate">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
