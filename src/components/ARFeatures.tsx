
import { Layers, RotateCw, ZoomIn, Crosshair } from "lucide-react";

const ARFeatures = () => {
  const features = [
    {
      icon: <RotateCw className="h-5 w-5 text-ar-purple" />,
      title: "360° Rotation",
      description: "Rotate models freely to view from any angle"
    },
    {
      icon: <ZoomIn className="h-5 w-5 text-ar-purple" />,
      title: "Zoom & Pan",
      description: "Get closer to study specific details"
    },
    {
      icon: <Layers className="h-5 w-5 text-ar-purple" />,
      title: "Layer Toggle",
      description: "Show or hide different component layers"
    },
    {
      icon: <Crosshair className="h-5 w-5 text-ar-purple" />,
      title: "Interactive Points",
      description: "Click on highlighted areas for detailed information"
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="p-3 bg-card bg-opacity-60 backdrop-blur-sm rounded-lg shadow-sm flex items-start space-x-3 border border-ar-purple/20">
          <div className="rounded-full bg-ar-purple/10 p-2">
            {feature.icon}
          </div>
          <div>
            <h4 className="font-medium text-ar-purple">{feature.title}</h4>
            <p className="text-sm text-foreground/80">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ARFeatures;
