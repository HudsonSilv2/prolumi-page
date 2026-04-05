import { useEffect, useState } from 'react';
import { Loader, Box } from 'lucide-react';

export default function View3D() {
  const [SplineComp, setSplineComp] = useState<React.ComponentType<Record<string, unknown>> | null>(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const canLoad3D = typeof window !== 'undefined' && window.innerWidth > 800;

  useEffect(() => {
    if (canLoad3D) {
      setLoading(true);
      import('@splinetool/react-spline').then((m) => {
        setSplineComp(m.default as unknown as React.ComponentType<Record<string, unknown>>);
        setShow(true);
        setLoading(false);
      });
    }
  }, [canLoad3D]);

  const handleLoad = () => {
    if (SplineComp) {
      setShow(true);
      return;
    }
    setLoading(true);
    import('@splinetool/react-spline').then((m) => {
      setSplineComp(m.default as unknown as React.ComponentType<Record<string, unknown>>);
      setShow(true);
      setLoading(false);
    });
  };

  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[var(--primary-dark)] via-[#064e3b] to-[var(--primary-dark)] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      {show && SplineComp ? (
        <SplineComp scene="https://prod.spline.design/pS8iMn2PwYi8c1HF/scene.splinecode" />
      ) : (
        <div className="relative z-10 text-center p-10 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl max-w-sm border border-white/20">
          {loading ? (
            <div className="flex flex-col items-center gap-4">
              <Loader size={40} className="animate-spin text-[var(--primary-light)]" />
              <p className="text-white/80">Carregando visualizao 3D...</p>
            </div>
          ) : (
            <>
              <Box size={48} className="mx-auto text-[var(--primary-light)] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Visualizao 3D</h3>
              <p className="text-white/70 mb-6 text-sm leading-relaxed">
                {!canLoad3D
                  ? 'Disponvel apenas em telas maiores para melhor experincia.'
                  : 'Explore nossa cena interativa em 3D diretamente no navegador.'}
              </p>
              <button onClick={handleLoad} className="btn-primary w-full">
                Explorar em 3D
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}
