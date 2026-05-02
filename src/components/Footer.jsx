export const Footer = () => {

    const lastDeployed = import.meta.env.VITE_BUILD_TIME;

    return (
        <div className="h-full bg-blue-50">
            Last deployed: {lastDeployed}
        </div>
    );
}