import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomSchedulePosting() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [frequency, setFrequency] = useState<string>("Daily");
    const [timeSlot, setTimeSlot] = useState<string>("Morning");

    const handleSaveSchedule = () => {
        console.log("Schedule saved:", { startDate, endDate, frequency, timeSlot });
    };

    return (
        <div className="max-w-5xl mx-auto space-y-10 pt-10">
            {/* Title */}
            <section className="text-center">
                <h2 className="text-3xl font-bold text-blue-400">Custom Date Schedule Posting</h2>
                <p className="text-lg text-gray-400 mt-2">
                    Set your own schedule for posting with precise control over the dates, frequency, and time slots.
                </p>
            </section>

            {/* Date Picker and Options */}
            <section className="space-y-8">
                <div className="bg-gray-900 border border-gray-800 rounded-lg">
                    <div className="space-y-6 p-8">
                        {/* Date Range Picker */}
                        <div>
                            <h3 className="text-xl font-semibold text-blue-300">Select Post Schedule Dates</h3>
                            <div className="flex gap-4">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date: Date | null) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                    className="w-full p-3 rounded-lg bg-gray-800 text-gray-300"
                                    placeholderText="Start Date"
                                />
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date: Date | null) => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate || new Date()}
                                    className="w-full p-3 rounded-lg bg-gray-800 text-gray-300"
                                    placeholderText="End Date"
                                />
                            </div>
                        </div>

                        {/* Frequency Options */}
                        <div>
                            <h3 className="text-xl font-semibold text-blue-300">Select Post Frequency</h3>
                            <select
                                value={frequency}
                                onChange={(e) => setFrequency(e.target.value)}
                                className="w-full p-3 rounded-lg bg-gray-800 text-gray-300"
                            >
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Bi-Weekly">Bi-Weekly</option>
                                <option value="Monthly">Monthly</option>
                            </select>
                        </div>

                        {/* Time Slot Options */}
                        <div>
                            <h3 className="text-xl font-semibold text-blue-300">Select Time Slot</h3>
                            <select
                                value={timeSlot}
                                onChange={(e) => setTimeSlot(e.target.value)}
                                className="w-full p-3 rounded-lg bg-gray-800 text-gray-300"
                            >
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Evening">Evening</option>
                            </select>
                        </div>

                        {/* Save Button */}
                        <div className="text-center">
                            <Button
                                className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg font-medium px-8 py-3 rounded-full shadow-md transition-transform transform hover:scale-105"
                                onClick={handleSaveSchedule}
                            >
                                Save Schedule
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}