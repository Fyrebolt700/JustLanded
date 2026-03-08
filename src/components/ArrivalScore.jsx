import { calculateArrivalScore, getScoreLabel, getTopRecommendations } from "../utils/arrivalScore";

function CircularGauge({ score }) {
    const radius = 80;
    const stroke = 10;
    const normalizedRadius = radius - stroke / 2;
    const circumference = Math.PI * normalizedRadius; // half circle
    const progress = circumference - (score / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <svg width="200" height="120" viewBox="0 0 200 120">
                {/* Background arc */}
                <path
                    d={`M ${stroke} ${radius + 10} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${200 - stroke} ${radius + 10}`}
                    fill="none"
                    stroke="#e8e4d9"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                />
                {/* Progress arc */}
                <path
                    d={`M ${stroke} ${radius + 10} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${200 - stroke} ${radius + 10}`}
                    fill="none"
                    stroke="#A50E06"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={progress}
                    style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                />
                {/* Score number */}
                <text
                    x="100"
                    y="95"
                    textAnchor="middle"
                    style={{ fontFamily: 'Jost, sans-serif', fontSize: '42px', fontWeight: '300', fill: '#1a1a1a' }}
                >
                    {score}
                </text>
                {/* /100 */}
                <text
                    x="100"
                    y="115"
                    textAnchor="middle"
                    style={{ fontFamily: 'Jost, sans-serif', fontSize: '12px', fontWeight: '300', fill: '#9ca3af', letterSpacing: '0.1em' }}
                >
                    OUT OF 100
                </text>
            </svg>
        </div>
    );
}

export default function ArrivalScore({ tasks }) {
    const score = calculateArrivalScore(tasks);
    const { label, color } = getScoreLabel(score);
    const recommendations = getTopRecommendations(tasks);

    return (
        <div
            style={{ border: '1px solid #e8e4d9', backgroundColor: '#FAF9F2' }}
            className="rounded-3xl px-10 py-8 flex flex-col gap-6"
        >
            {/* Header */}
            <div>
                <h2 style={{ color: '#1a1a1a' }} className="text-2xl font-light tracking-wide">
                    Arrival Score
                </h2>
                <p style={{ color: '#9ca3af' }} className="text-sm font-light tracking-wide mt-1">
                    Based on your settlement progress
                </p>
            </div>

            {/* Gauge + Label */}
            <div className="flex flex-col items-center gap-2">
                <CircularGauge score={score} />
                <p style={{ color: color }} className="text-lg font-light tracking-widest uppercase text-center">
                    {label}
                </p>
            </div>

            {/* Recommendations */}
            {recommendations.length > 0 && (
                <div className="flex flex-col gap-3">
                    <p style={{ color: '#6b6b6b' }} className="text-xs font-light tracking-widest uppercase">
                        Complete these to improve your score
                    </p>
                    {recommendations.map(task => (
                        <div
                            key={task.id}
                            style={{ border: '1px solid #e8e4d9' }}
                            className="flex justify-between items-center px-4 py-3 rounded-2xl"
                        >
                            <span style={{ color: '#1a1a1a' }} className="text-sm font-light">
                                {task.title}
                            </span>
                            <span style={{ color: '#A50E06' }} className="text-sm font-light tracking-wide">
                                +{task.points} pts
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}