import { useEffect, useState } from "react";

export default function View3D() {
                const [SplineComp, setSplineComp] = useState<React.ComponentType<Record<string, unknown>> | null>(null);
    const [showSpline, setShowSpline] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 800) {
            // load spline lazily for larger screens
            import("@splinetool/react-spline").then((m) => {
                setSplineComp(m.default as unknown as React.ComponentType<Record<string, unknown>>);
                setShowSpline(true);
            });
        }
    }, []);

    const handleLoad = () => {
        if (!SplineComp) {
            import("@splinetool/react-spline").then((m) => {
                setSplineComp(m.default as unknown as React.ComponentType<Record<string, unknown>>);
                setShowSpline(true);
            });
        } else {
            setShowSpline(true);
        }
    };

    return (
        <main className="w-full h-screen overflow-hidden flex items-center justify-center bg-[--bg]">
                            {showSpline && SplineComp ? (
                                <SplineComp scene={"https://prod.spline.design/pS8iMn2PwYi8c1HF/scene.splinecode"} />
                            ) : (
                <div className="p-6 text-center">
                    <img src="/vite.svg" alt="Pré-visualização 3D" className="mx-auto mb-4 w-48 opacity-70" />
                      <p className="text-[var(--muted)] mb-4">Visualização 3D disponível em telas maiores.</p>
                      <button onClick={handleLoad} className="px-4 py-2 bg-[var(--brand)] text-white rounded-md">Carregar 3D</button>
                </div>
            )}
        </main>
    );
}
