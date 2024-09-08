import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, ShieldCheck } from "lucide-react";
import styled from "styled-components";
import { Image } from "antd";

const sections = [
  {
    id: "auth",
    icon: "👤",
    title: "Auth",
    content: {
      title: "Store, query and manage data",
      description:
        "Scalable and robust database backed by your favorite technologies.",
      features: [
        "Never paused",
        "Fast in-memory caching",
        "Advanced permission models",
        "Custom data validation",
        "Relationships support",
      ],
      image: "/api/placeholder/400/300",
    },
  },
  {
    id: "databases",
    icon: "🗄️",
    title: "Databases",
    content: {
      title: "Store, query and manage data",
      description:
        "Scalable and robust database backed by your favorite technologies.",
      features: [
        "Never paused",
        "Fast in-memory caching",
        "Advanced permission models",
        "Custom data validation",
        "Relationships support",
      ],
      image: "https://i.ibb.co/S5s65PG/dogfood-1.jpg",
    },
  },
  {
    id: "storage",
    icon: "💾",
    title: "Storage",
    content: {
      title: "Customize and extend your backend",
      description:
        "Deploy and scale serverless functions in secure, isolated runtimes.",
      features: [
        "Automatic deployment from GitHub",
        "Trigger using GitHub, CLI, Event Listeners or HTTP requests",
        "Support for 30+ runtimes in 13 languages",
        "Custom domain support",
      ],
      image: "/api/placeholder/400/300",
      code: `const userId = req.headers['user-id'];

if (req.path === '/subscribe') {
const session = await stripe.checkout(userId);
return res.redirect(session.url, 303);
}

if (req.path === '/webhook') {
await appwrite.addSubscriberLabel(userId);
}

return res.json({ success: true });`,
    },
  },
  {
    id: "functions",
    icon: "⚙️",
    title: "Functions",
    content: {
      title: "Customize and extend your backend",
      description:
        "Deploy and scale serverless functions in secure, isolated runtimes.",
      features: [
        "Automatic deployment from GitHub",
        "Trigger using GitHub, CLI, Event Listeners or HTTP requests",
        "Support for 30+ runtimes in 13 languages",
        "Custom domain support",
      ],
      image: "/api/placeholder/400/300",
      code: `const userId = req.headers['user-id'];

if (req.path === '/subscribe') {
  const session = await stripe.checkout(userId);
  return res.redirect(session.url, 303);
}

if (req.path === '/webhook') {
  await appwrite.addSubscriberLabel(userId);
}

return res.json({ success: true });`,
    },
  },
  {
    id: "messaging",
    icon: "💬",
    title: "Messaging",
    content: {
      title: "Store, query and manage data",
      description:
        "Scalable and robust database backed by your favorite technologies.",
      features: [
        "Never paused",
        "Fast in-memory caching",
        "Advanced permission models",
        "Custom data validation",
        "Relationships support",
      ],
      image: "/api/placeholder/400/300",
    },
  },
  {
    id: "realtime",
    icon: "🔄",
    title: "Realtime",
    content: {
      title: "Store, query and manage data",
      description:
        "Scalable and robust database backed by your favorite technologies.",
      features: [
        "Never paused",
        "Fast in-memory caching",
        "Advanced permission models",
        "Custom data validation",
        "Relationships support",
      ],
      image: "/api/placeholder/400/300",
    },
  },
];

const MobileAppSection: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>("functions");
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let closestSection: string | null = null;
      let minDistance = Infinity;

      Object.entries(sectionRefs.current).forEach(([id, ref]) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          const distance = Math.abs(
            offsetTop + offsetHeight / 2 - scrollPosition
          );
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });

      if (closestSection && closestSection !== openSection) {
        setOpenSection(closestSection);
      }

      // Calculate the scroll position relative to the specific section
      if (openSection && sectionRefs.current[openSection]) {
        const section = sectionRefs.current[openSection];
        const sectionTop = section?.offsetTop || 0;
        const sectionHeight = section?.offsetHeight || 1;
        const position = ((scrollPosition - sectionTop) / sectionHeight) * 100;
        setScrollPosition(Math.min(Math.max(position, 0), 100));
      }
    };

    const throttledScroll = throttle(handleScroll, 70); // Throttle to reduce scroll event frequency
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [openSection]);

  return (
    <Container>
      <ScrollbarWrapper>
        <CustomScrollbar
          style={{ top: `${scrollPosition}%`, bottom: `${scrollPosition}%` }}
        />
      </ScrollbarWrapper>
      <ContentWrapper>
        <div className="max-w-4xl mx-auto">
          {sections.map((section) => (
            <Section
              key={section.id}
              ref={(el) => {sectionRefs.current[section.id] = el}}
              isOpen={openSection === section.id}
            >
              <SectionButton
                onClick={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
                isOpen={openSection === section.id}
              >
                <span className="mr-4 text-2xl">{section.icon}</span>
                <span className="text-xl font-semibold">{section.title}</span>
                {openSection === section.id ? (
                  <ChevronDown className="ml-auto" />
                ) : (
                  <ChevronRight className="ml-auto" />
                )}
              </SectionButton>
              {openSection === section.id && section.content && (
                <SectionContent>
                  <div className="flex">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-4">
                        {section.content.title}
                      </h3>
                      <p className="text-gray-400 mb-6">
                        {section.content.description}
                      </p>
                      <ul className="space-y-3">
                        {section.content.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <ShieldCheck
                              className="mr-2 text-green-500"
                              size={16}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {section.content.image && (
                      <div className="flex-1 ml-6">
                        <Image
                          src={section.content.image}
                          alt={`${section.title} illustration`}
                          className="rounded-lg"
                          preview={false}
                        />
                      </div>
                    )}
                  </div>
                  {section.content.code && (
                    <CodeBlock>
                      <pre className="text-sm text-gray-300 overflow-x-auto">
                        <code>{section.content.code}</code>
                      </pre>
                    </CodeBlock>
                  )}
                </SectionContent>
              )}
            </Section>
          ))}
        </div>
      </ContentWrapper>
    </Container>
  );
};

// Utility: Throttle function to limit the frequency of the scroll event handler
function throttle(func: Function, limit: number) {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;

  return function (...args: any[]) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Styled Components

const Container = styled.div`
  display: flex;
  background-color: #1f1f1f;
  color: white;
  min-height: 100vh;
  padding: 24px; // Add padding to create space between scrollbar and content
`;

const ScrollbarWrapper = styled.div`
  width: 16px;
  position: relative;
  margin-right: 30px; // Add margin to create gap between scrollbar and content
`;

const CustomScrollbar = styled.div`
  width: 8px;
  height: 20px; // Increased height for better visibility
  background-color: #ff416c;
  border-radius: 4px;
  position: absolute;
  left: 50%;
  transform: translateX(-90%);
  overflow: hidden;
  /* transition: top bottom 0.8s ease; */
  transition: max-height 0.8s ease-in-out, top 0.8s ease-in-out,
    bottom 0.8s ease-in-out;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  padding-left: 20px; // Add padding for better spacing
  overflow-y: auto;
`;

const Section = styled.div<{ isOpen: boolean }>`
  margin-bottom: 16px;
`;

const SectionButton = styled.button<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 16px;
  background-color: ${({ isOpen }) => (isOpen ? "#2e2e2e" : "transparent")};
  border-radius: 8px;
  transition: background-color 0.2s;
  &:hover {
    background-color: #3e3e3e;
  }
`;

const SectionContent = styled.div`
  margin-top: 16px;
  padding: 16px;
  background-color: #2e2e2e;
  border-radius: 8px;
  margin-left: 48px;
`;

const CodeBlock = styled.div`
  margin-top: 24px;
  background-color: #1f1f1f;
  padding: 16px;
  border-radius: 8px;
`;

export default MobileAppSection;
