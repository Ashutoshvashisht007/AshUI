import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Categories } from '../../../utils/data';

const getStatusColor = (status: string) => {
  switch (status) {
    case 'success':
      return 'text-emerald-600 bg-emerald-50';
    case 'warning':
      return 'text-amber-600 bg-amber-50';
    case 'error':
      return 'text-red-600 bg-red-50';
    default:
      return 'text-slate-600 bg-slate-50';
  }
};

const LayoutDepthGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const leaveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const categories = Categories;

  const handleHoverStart = (id: string) => {
    if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
    setHoveredCard(id);
  };

  const handleHoverEnd = () => {
    leaveTimeout.current = setTimeout(() => {
      setHoveredCard(null);
    }, 10);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Service Dashboard
          </h1>
          <p className="text-slate-600">Hover to drill down into details</p>
        </div>

        <div className="grid grid-cols-2 gap-6 relative">
          {categories.map((category) => {
            const Icon = category.icon;
            const isHovered = hoveredCard === category.id;

            return (
              <motion.div
                key={category.id}
                layout
                layoutId={category.id}
                onHoverStart={() => handleHoverStart(category.id)}
                onHoverEnd={handleHoverEnd}
                className="relative"
                style={{ zIndex: isHovered ? 50 : 10 }}
                transition={{
                  layout: {
                    duration: 0.3,
                    ease: 'easeOut',
                  },
                }}
              >
                <motion.div
                  className="bg-white rounded-2xl p-6 cursor-pointer border border-slate-200 shadow-sm overflow-hidden"
                  animate={{
                    scale: isHovered ? 1.05 : 1,
                    y: isHovered ? -10 : 0,
                    rotateX: isHovered ? 5 : 0,
                    rotateY: isHovered ? -5 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow: isHovered
                      ? '0 20px 60px -12px rgba(0,0,0,0.25)'
                      : '0 1px 3px rgba(0,0,0,0.1)',
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-5`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-3 rounded-xl bg-linear-to-br ${category.color}`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-sm">
                      Hover for metrics
                    </p>
                  </div>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                      layout
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mt-6 grid grid-cols-2 gap-3 relative z-20"
                      >
                        {category.details.map((detail, idx) => {
                          const DetailIcon = detail.icon;
                          return (
                            <motion.div
                              key={detail.label}
                              initial={{ opacity: 0, scale: 0.85 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.85 }}
                              transition={{
                                delay: idx * 0.05,
                                duration: 0.3,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              className="bg-slate-50 rounded-lg p-3 border border-slate-200"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <DetailIcon className="w-3.5 h-3.5 text-slate-400" />
                                <span className="text-xs text-slate-500 font-medium">
                                  {detail.label}
                                </span>
                              </div>
                              <div
                                className={`inline-block px-2 py-0.5 rounded-md text-sm font-semibold ${getStatusColor(
                                  detail.status
                                )}`}
                              >
                                {detail.value}
                              </div>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {hoveredCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-900/5 backdrop-blur-sm pointer-events-none"
              style={{ zIndex: 1 }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LayoutDepthGrid;