import { useState } from "react";
import { project } from "./mockProject.js";

function Hero({ name, tagline, problem }) {
  return (
    <section className="hero">
      <p className="eyebrow">React / API / PR</p>
      <h1>{name}</h1>
      <p className="tagline">{tagline}</p>
      <p className="problem">{problem}</p>
    </section>
  );
}

function FeatureList({ features, activeIndex, onSelect }) {
  return (
    <section className="section">
      <p className="eyebrow">Features</p>
      <h2>用数组渲染功能列表</h2>
      <div className="featureGrid">
        {features.map((feature, index) => (
          <button
            className={index === activeIndex ? "feature active" : "feature"}
            key={feature.title}
            onClick={() => onSelect(index)}
            type="button"
          >
            <span>0{index + 1}</span>
            <strong>{feature.title}</strong>
          </button>
        ))}
      </div>
    </section>
  );
}

function DemoPanel({ feature }) {
  return (
    <section className="demoPanel">
      <div>
        <p className="eyebrow">State demo</p>
        <h2>{feature.title}</h2>
        <p>{feature.description}</p>
      </div>
      <code>GET /api/v1/project-demo</code>
    </section>
  );
}

function TeamSection({ team }) {
  return (
    <section className="section">
      <p className="eyebrow">Team</p>
      <h2>团队协作分工</h2>
      <div className="teamGrid">
        {team.map((member) => (
          <article key={member.role}>
            <h3>{member.role}</h3>
            <p>{member.task}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = project.features[activeIndex];

  return (
    <main className="app">
      <Hero
        name={project.name}
        tagline={project.tagline}
        problem={project.problem}
      />
      <FeatureList
        features={project.features}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
      <DemoPanel feature={activeFeature} />
      <TeamSection team={project.team} />
    </main>
  );
}
