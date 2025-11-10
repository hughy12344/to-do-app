import { CircleCheck, CircleX, ClipboardList } from "lucide-react"
import type { Task } from "../hooks/useTasks"

// Props for individual metric cards
interface MetricCardProps {
  title: string;
  value: number;
  percentage?: number;
  colour: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isLoading: boolean
  showPercentage: boolean
}

// Props for metrics component
interface MetricsProps {
    tasks: Task[]
    isLoading: boolean
}

// Displays a single metric card (e.g., total tasks, completed tasks)
const MetricCard = ({ title, value, percentage, colour, Icon, isLoading, showPercentage }: MetricCardProps) => {
  return (
    <div className={`${colour} rounded-lg text-white p-6 flex items-center gap-4 shadow-lg hover:scale-105 transition-transform duration-200`}>
        {/* Icon container */}
        <div className="p-4 bg-white/20 rounded-full">
            <Icon className="w-8 h-8" />
        </div>

        {/* Metric details */}
        <div>
            <h3 className="text-sm font-medium">{title}</h3>
            {isLoading ? (
                // Loading spinner
                <div className='flex justify-center mt-2'>
                    <div className='w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin' />
                </div>
                ) : (
                <>  
                    {/* Metric value and optional percentage */}
                    <div className="flex items-baseline gap-4 mt-2">
                        <p className="text-2xl font-bold">{value}</p>
                        {showPercentage && percentage !== undefined && (
                            <p className="text-sm text-white/80">{percentage}%</p>
                        )}
                    </div>
                    {/* Progress bar (only shown if percentage is enabled) */}
                    {showPercentage && percentage !== undefined && (
                        <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                            <div
                                className="bg-white rounded-full h-2"
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                    )}
                </>
            )}
        </div>
    </div>
  );
};

// Displays overall task metrics using MetricCard components
const Metrics = ({ tasks, isLoading }: MetricsProps) => {

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === 'Complete').length;
    const incompletedTasks = totalTasks - completedTasks;

    const percentageCompletedTasks = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;
    const percentageIncompletedTasks = totalTasks ? Math.round((incompletedTasks / totalTasks) * 100) : 0;

    return (
    <div className="space-y-4 p-6">
        <h1 className="text-3xl font-bold mb-4">Metrics</h1>

        {/* Total tasks metric */}
        <MetricCard
            title="Total number of tasks"
            value={totalTasks}
            colour="bg-violet-400"
            Icon={ClipboardList}
            isLoading={isLoading}
            showPercentage={false}
        />

        {/* Completed tasks metric */}
        <MetricCard
            title="Completed tasks"
            value={completedTasks}
            percentage={percentageCompletedTasks}
            colour="bg-emerald-400"
            Icon={CircleCheck}
            isLoading={isLoading}
            showPercentage={true}
        />

        {/* Incompleted tasks metric */}
        <MetricCard
            title="Incompleted tasks"
            value={incompletedTasks}
            percentage={percentageIncompletedTasks}
            colour="bg-red-400"
            Icon={CircleX}
            isLoading={isLoading}
            showPercentage={true}
        />
    </div>
    )
}

export default Metrics