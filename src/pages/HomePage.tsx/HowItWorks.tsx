import { FaMagic, FaCalendarCheck, FaChartLine } from "react-icons/fa";

const steps = [
  {
    title: "Create with AI",
    description: "Generate captions, ideas, and hashtags in your tone using our intelligent AI engine.",
    icon: <FaMagic className="text-indigo-500 text-5xl drop-shadow-lg" />,
  },
  {
    title: "Schedule Smartly",
    description: "Auto-schedule your content to go live at the perfect moment for each platform.",
    icon: <FaCalendarCheck className="text-indigo-500 text-5xl drop-shadow-lg" />,
  },
  {
    title: "Track & Grow",
    description: "Gain growth insights, monitor performance, and improve your strategy continuously.",
    icon: <FaChartLine className="text-indigo-500 text-5xl drop-shadow-lg" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-900 text-gray-200 py-20 px-6" id="how-it-works">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-indigo-400 mb-6 leading-tight tracking-tight">
          How <span className="text-indigo-500">Social Express</span> Works
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
          From content creation to smart automation, here’s your 3-step journey to a strong digital presence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 p-8 rounded-3xl shadow-md hover:shadow-indigo-500/50 hover:scale-[1.03] transition-all duration-300 group"
            >
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-200 mb-3 group-hover:text-indigo-500 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
