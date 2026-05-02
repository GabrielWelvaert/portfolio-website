export const Hero = ({ image }) => {
    
    return (
        <div
            className="bg-cover bg-center bg-no-repeat h-[150px] md:h-[300px]"
            style={{ backgroundImage: `url(${image})` }}
        />
    );
};