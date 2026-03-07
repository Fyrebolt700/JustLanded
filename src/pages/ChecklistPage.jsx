import { useState, useEffect } from "react";
import { useUserData } from "../hooks/useUserData";
import { generateTasks } from "../data/checklistTasks";
import TaskCard from "../components/ui/TaskCard";
import ProgressBar from "../components/ui/ProgressBar";
import SectionHeader from "../components/ui/SectionHeader";

const CATEGORY_ORDER = ["Urgent", "First Week", "First Month", "First 6 Months"];

const CATEGORY_LABELS = {
    "Urgent": "🚨 Urgent — Day 1-2",
    "First Week": "📅 First Week",
    "First Month": "🗓️ First Month",
    "First 6 Months": "📆 First 6 Months",
};

export default function ChecklistPage() {
    // TEMP: hardcoded test data until auth + quiz are ready
    const userData = {
        province: "Ontario",
        purpose: "study",
        needs: ["doctor", "housing"],
        children: ["elementary"],
        needsDaycare: true,
        religion: "Hindu",
    };
    const loading = false;

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (userData) setTasks(generateTasks(userData));
    }, []);

    const toggle = (id) => setTasks(prev =>
        prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );

    const completed = tasks.filter(t => t.done).length;

    if (loading) return <p className="text-gray-500">Loading your checklist...</p>;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-1">Your Settlement Checklist</h1>
            <p className="text-gray-500 mb-4">Complete these tasks to get settled in Canada.</p>
            <ProgressBar completed={completed} total={tasks.length} />
            {tasks.length === 0 ? (
                <p className="text-gray-400 mt-8 text-center">No tasks yet — complete the onboarding quiz first!</p>
            ) : (
                CATEGORY_ORDER.map(cat => {
                    const categoryTasks = tasks.filter(t => t.category === cat);
                    if (categoryTasks.length === 0) return null;
                    return (
                        <div key={cat}>
                            <SectionHeader title={CATEGORY_LABELS[cat]} />
                            {categoryTasks.map(task => (
                                <TaskCard key={task.id} task={task} onToggle={toggle} />
                            ))}
                        </div>
                    );
                })
            )}
        </div>
    );
}