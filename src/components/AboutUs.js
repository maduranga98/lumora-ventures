import React, { useEffect } from "react";
import {
  Lightbulb,
  CheckCircle,
  Building,
  Sparkle,
  ArrowRight,
} from "lucide-react";
import Img2 from "../assets/img2.png";

const AboutUs = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          element.classList.add("animate-in");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  const features = [
    {
      icon: Lightbulb,
      title: "Strategic Planning",
      description: "Developing comprehensive roadmaps for business success",
    },
    {
      icon: CheckCircle,
      title: "Performance Analysis",
      description: "Data-driven insights to optimize your operations",
    },
    {
      icon: Building,
      title: "Business Growth",
      description: "Scaling strategies for sustainable development",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#F8FAFF] overflow-hidden animate-fade-in">
      {/* Background elements with subtle animations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-[#F0F4FF] animate-pulse-slower" />
        <div
          className="absolute inset-0 opacity-15 animate-pulse-slow"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #09122C 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-0 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-[#09122C]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-72 h-72 lg:w-96 lg:h-96 bg-[#ECAF41]/20 rounded-full blur-3xl animate-float delay-200" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-start min-h-screen py-16 sm:py-20 md:py-24 lg:py-32">
          {/* Header with fade and slide animation */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24 animate-on-scroll animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#09122C] mb-6 text-gradient-animate">
              About Us
            </h2>
            <p className="text-lg sm:text-xl text-[#09122C]/90 max-w-2xl mx-auto animate-blur-in delay-200">
              Empowering businesses with innovative solutions and strategic
              growth
            </p>
          </div>

          {/* Main content grid with staggered animations */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28 w-full">
            {/* Left column */}
            <div className="space-y-8 animate-on-scroll">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border-2 border-white/80">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#09122C] mb-6">
                  Who We Are
                </h3>
                <div className="space-y-6 text-[#09122C]/90">
                  <p className="text-base sm:text-lg animate-fade-in stagger-1">
                    At Lumora Ventures, we are passionate about empowering
                    businesses to unlock their full potential in the digital
                    age. Founded with a vision to deliver innovative solutions,
                    we specialize in software development, digital marketing,
                    and research-driven strategies that drive measurable
                    success.
                  </p>
                  <p className="text-base sm:text-lg animate-fade-in stagger-2">
                    Our mission is simple: to provide businesses with the tools,
                    technologies, and strategies they need to streamline
                    operations, enhance customer engagement, and achieve
                    sustainable growth.
                  </p>
                </div>
              </div>

              <div className="bg-[#09122C] rounded-xl p-8 sm:p-10 shadow-lg hover-lift border-2 border-[#09122C]/90">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-[#ECAF41]">
                  Ready to Transform Your Business?
                </h3>
                <p className="mb-8 text-white/90 text-base sm:text-lg">
                  Let's collaborate to bring your vision to life with our
                  innovative solutions.
                </p>
                <button
                  className="button-animated group flex items-center px-6 py-3 bg-[#ECAF41] text-[#09122C] rounded-lg font-semibold 
                                 hover:bg-[#F5C15D] transition-all duration-200 shadow-md hover:shadow-lg border-2 border-[#ECAF41]"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right column with scale animation */}
            <div className="relative group animate-on-scroll animate-scale-in">
              <div className="absolute inset-0 bg-[#09122C]/10 rounded-xl blur-2xl animate-pulse-slow" />
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative hover-scale border-2 border-white/80">
                <img
                  src={Img2}
                  alt="Our Business Process"
                  className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Features grid with staggered fade-in */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 w-full animate-on-scroll">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg 
                         hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in border-2 border-white/80"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className="bg-[#F0F4FF] rounded-lg p-4 mb-6 
                              group-hover:scale-105 transition-transform"
                >
                  <feature.icon className="h-6 w-6 text-[#ECAF41] animate-bounce-subtle" />
                </div>
                <h3 className="text-lg font-semibold text-[#09122C] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#09122C]/90">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Footer with glow animation */}
          <div className="mt-20 sm:mt-24 text-center animate-on-scroll animate-fade-in stagger-3">
            <div
              className="inline-flex items-center space-x-3 text-sm text-[#09122C] bg-white/95 
                          backdrop-blur-sm px-6 py-3 rounded-full shadow-md hover-lift animate-glow border-2 border-white/80"
            >
              <Sparkle className="h-4 w-4 text-[#ECAF41] animate-spin-slow" />
              <span>Transforming ideas into impactful solutions</span>
              <Sparkle className="h-4 w-4 text-[#ECAF41] animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
