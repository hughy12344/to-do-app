import { CircleCheck, CircleX, ClipboardList } from "lucide-react"
import type { Task } from "../hooks/useTasks"


interface MetricCardProps {
  title: string;
  value: number;
  percentage?: number;
  colour: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isLoading: boolean
  showPercentage: boolean
}

interface MetricsProps {
    tasks: Task[]
    isLoading: boolean
}

const MetricCard = ({ title, value, percentage, colour, Icon, isLoading, showPercentage }: MetricCardProps) => {
  return (
    <div className={`${colour} rounded-lg text-white p-6 flex items-center gap-4 shadow-lg hover:scale-105 transition-transform duration-200`}>
      <div className="p-4 bg-white/20 rounded-full">
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        {isLoading ? (
            <div className='flex justify-center mt-2'>
                <div className='w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin' />
            </div>
            ) : (
            <>
                <div className="flex items-baseline gap-4 mt-2">
                    <p className="text-2xl font-bold">{value}</p>
                    {showPercentage && percentage !== undefined && (
                        <p className="text-sm text-white/80">{percentage}%</p>
                    )}
                </div>
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

const Metrics = ({ tasks, isLoading }: MetricsProps) => {

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === 'Completed').length;
    const incompletedTasks = totalTasks - completedTasks;

    const percentageCompletedTasks = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;
    const percentageIncompletedTasks = totalTasks ? Math.round((incompletedTasks / totalTasks) * 100) : 0;

    return (
    <div className="space-y-4 p-6">
        <h1 className="text-3xl font-bold mb-4">Metrics</h1>
        <MetricCard
            title="Total number of tasks"
            value={totalTasks}
            colour="bg-emerald-400"
            Icon={ClipboardList}
            isLoading={isLoading}
            showPercentage={false}
        />
        <MetricCard
            title="Number of complete tasks"
            value={completedTasks}
            percentage={percentageCompletedTasks}
            colour="bg-violet-400"
            Icon={CircleCheck}
            isLoading={isLoading}
            showPercentage={true}
        />
        <MetricCard
            title="Number of incomplete tasks"
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