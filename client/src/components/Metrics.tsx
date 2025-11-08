import { CircleCheck, CircleX, ClipboardList } from "lucide-react"

interface MetricCardProps {
  title: string;
  value: number;
  colour: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const MetricCard = ({ title, value, colour, Icon }: MetricCardProps) => {
  return (
    <div className={`${colour} rounded-lg text-white p-6 flex items-center gap-4 shadow-lg hover:scale-105 transition-transform duration-200`}>
      <div className="p-4 bg-white/20 rounded-full">
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

const Metrics = () => {
    return (
    <div className="space-y-4 p-6">
        <h1 className="text-3xl font-bold mb-4">Metrics</h1>
        <MetricCard
            title="Total number of tasks"
            value={3}
            colour="bg-emerald-400"
            Icon={ClipboardList}
        />
        <MetricCard
            title="Total number of complete tasks"
            value={2}
            colour="bg-violet-400"
            Icon={CircleCheck}
        />
        <MetricCard
            title="Total number of incomplete tasks"
            value={1}
            colour="bg-red-400"
            Icon={CircleX}
        />
    </div>
    )
}

export default Metrics