export const Hero = ({ image }) => {
    return (
        <div
            className="bg"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "300px"
            }}
        >
        </div>
    );
};