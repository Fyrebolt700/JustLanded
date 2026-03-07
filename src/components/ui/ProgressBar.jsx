export default function ProgressBar({ completed, total }) {
    const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
    return (
        <div className="my-4">
            <p className="text-sm text-gray-500 mb-1">{completed} / {total} tasks completed ({pct}%)</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                    className="bg-red-700 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${pct}%` }}
                />
            </div>
        </div>
    );
}