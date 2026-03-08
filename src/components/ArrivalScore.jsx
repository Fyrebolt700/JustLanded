import { calculateArrivalScore, getScoreLabel, getTopRecommendations } from "../utils/arrivalScore";

function CircularGauge({ score }) {
    const radius = 130;
    const stroke = 14;
    const normalizedRadius = radius - stroke / 2;
    const circumference = Math.PI * normalizedRadius;
    const progress = circumference - (score / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <svg width="320" height="190" viewBox="0 0 320 190">
                <path
                    d={`M ${stroke} ${radius + 10} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${320 - stroke} ${radius + 10}`}
                    fill="none"
                    stroke="#e8e4d9"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                />
                <path
                    d={`M ${stroke} ${radius + 10} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${320 - stroke} ${radius + 10}`}
                    fill="none"
                    stroke="#A50E06"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={score === 0 ? circumference + 1 : progress}
                    style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                />
                <text
                    x="160"
                    y="148"
                    textAnchor="middle"
                    style={{ fontFamily: 'Jost, sans-serif', fontSize: '72px', fontWeight: '300', fill: '#1a1a1a' }}
                >
                    {score}
                </text>
                <text
                    x="160"
                    y="178"
                    textAnchor="middle"
                    style={{ fontFamily: 'Jost, sans-serif', fontSize: '13px', fontWeight: '300', fill: '#9ca3af', letterSpacing: '0.1em' }}
                >
                    OUT OF 100
                </text>
            </svg>
            <p style={{ color: getScoreLabel(score).color }} className="text-base font-light tracking-widest uppercase text-center mt-1">
                {getScoreLabel(score).label}
            </p>
        </div>
    );
}

export default function ArrivalScore({ tasks }) {
    const score = calculateArrivalScore(tasks);
    const recommendations = getTopRecommendations(tasks);

    return (
        <div
            style={{ border: '1px solid #e8e4d9', backgroundColor: '#FAF9F2' }}
            className="rounded-3xl px-8 py-6 flex flex-col items-center gap-6 w-full"
        >
            {/* Title */}
            <div className="flex flex-col items-center gap-1">
                <h2 style={{ color: '#1a1a1a' }} className="text-3xl font-light tracking-wide">
                    Arrival Score
                </h2>
                <p style={{ color: '#9ca3af' }} className="text-base font-light tracking-wide">
                    Based on your settlement progress
                </p>
            </div>

            {/* Gauge */}
            <CircularGauge score={score} />

            {/* Divider */}
            <div style={{ backgroundColor: '#e8e4d9' }} className="w-full h-px" />

            {/* Recommendations */}
            <div className="flex flex-col gap-4 w-full">
                <p style={{ color: '#6b6b6b' }} className="text-xs font-light tracking-widest uppercase">
                    Complete these to improve your score
                </p>
                {recommendations.length === 0 ? (
                    <p style={{ color: '#4a7c59' }} className="text-base font-light">
                        🎉 All top tasks completed!
                    </p>
                ) : (
                    recommendations.map(task => (
                        <div
                            key={task.id}
                            style={{ border: '1px solid #e8e4d9' }}
                            className="flex justify-between items-center px-6 py-5 rounded-2xl"
                        >
                            <span style={{ color: '#1a1a1a' }} className="text-base font-light">
                                {task.title}
                            </span>
                            <span style={{ color: '#A50E06' }} className="text-base font-light tracking-wide ml-4 flex-shrink-0">
                                +{task.points} pts
                            </span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}