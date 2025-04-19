import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import CustomSchedulePosting from "@/components/CustomPostScheduling";

const dummyGoals = [
    {
        title: "3 Posts per Week",
        description:
            "You prefer tech content. Posting 3 times a week keeps your audience engaged and maintains visibility in algorithmic feeds."
    },
    {
        title: "2 Posts Every Weekend",
        description:
            "Your content fits working professionals. Posting on weekends ensures better reach during their downtime."
    },
    {
        title: "1 Reel + 1 Story Daily",
        description:
            "For creators pushing daily updates, this plan maximizes exposure through short, impactful content every day."
    },
    {
        title: "Alternate Day Educational Posts",
        description:
            "You share educational content. Posting on alternate days helps build anticipation while avoiding fatigue."
    }
];

export default function SchedulerPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 px-6 py-16 space-y-16">
            {/* Description */}
            <section className="max-w-3xl mx-auto text-center space-y-6">
                <h1 className="text-5xl font-extrabold text-blue-400 drop-shadow-sm">
                    📅 Smart AI Scheduler
                </h1>
                <p className="text-xl text-gray-300">
                    Automate your content flow with intelligent AI-powered suggestions tailored to your style. Say goodbye to inconsistency and hello to strategy.
                </p>
            </section>

            {/* AI Post Goal Suggestions */}
            <section className="max-w-6xl mx-auto space-y-10">
                <div className="flex items-center gap-3 text-2xl font-bold text-white">
                    <Sparkles className="text-yellow-400 animate-pulse" />
                    Handpicked by AI — Just for You
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dummyGoals.map((goal, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer p-6 space-y-4"
                        >
                            <div className="text-xl font-semibold text-blue-300 group-hover:text-blue-400 transition">
                                {goal.title}
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {goal.description}
                            </p>
                            <div className="bg-green-800 text-green-300 w-fit text-xs px-2 py-1 rounded">
                                🌟 AI Suggested
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg font-medium px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105">
                        Set My Goal 🚀
                    </Button>
                </div>
            </section>
            <CustomSchedulePosting/>
        </div>
    );
}
