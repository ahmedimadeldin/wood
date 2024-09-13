import Image from "next/image";

const Separator = () => {
    return (
        <div className="w-full flex justify-center py-4 sm:py-6 md:py-8">
            <Image
                className="w-full max-w-[200px] sm:max-w-[270px] md:max-w-[340px]"
                width={340}
                height={40}
                src="/seperator.svg"
                alt="Separator"
            />
        </div>
    );
};

export default Separator;